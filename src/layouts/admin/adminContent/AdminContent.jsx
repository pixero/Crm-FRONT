import React from "react";
import AdminContentStyle from './AdminContent.module.sass';
import Axios from "axios";
import Table from "react-bootstrap/Table";
import {NavLink, Redirect} from "react-router-dom";
import UserInfo from "../userInfo/UserInfo";

export default class AdminContent extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            inputName : '',
            inputPassword : '',
            userArray:[],
            redirect:'',
            userInfo:''
        };
        this.inputPassword = React.createRef();
        this.inputName = React.createRef();
    }
    deleteUser(props){
        Axios.delete(window.location.pathname +'/'+ props,{ headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
        })
    }
    editUser(){
        Axios.get(window.location.pathname ,{ headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }}).then(response =>{
                this.setState({userInfo:<UserInfo props={response.data} />})
        })
    }
    getUserList(){

        Axios.get(window.location.pathname, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        })
            .then(response => {
                this.setState({
                    userArray: response.data.map((el, key) => (
                        <tr key={key}>
                            <td>{key+1}</td>
                            <td>{el.username}</td>
                            <td className={AdminContentStyle.delete}>
                                <button className="btn btn-danger adminButton"
                                        onClick={()=>{this.deleteUser(el.id)}}
                                >
                                    Удалить
                                </button>
                            </td>
                            <td className={AdminContentStyle.delete}>
                                <NavLink to={window.location.pathname + '/profile/' + el.id}  >
                                <button className="btn btn-primary adminButton"
                                        onClick={()=>{this.editUser()}}
                                >
                                    Редактировать
                                </button>
                                </NavLink>
                            </td>
                        </tr>
                    ))
                })
            })
            .catch(error => {
                if (/403/.test(error)) {
                    this.setState({redirect: <Redirect to="/"/>})
                }
            })
    }
    componentDidMount() {
        if (/admin/.test(window.location.pathname)) {
         this.getUserList();
        }
    }
    send() {

        let object = {
            'username': this.state.inputName,
            'password': this.state.inputPassword
        }
        object = JSON.stringify(object);
        Axios.post(window.location.pathname + '/registration', object, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('token')
                }
            }
        ).then(response => {
            this.setState({response: response.data.response})
            this.getUserList()
        })
            .catch(error => {
                console.error(error)
            })
    }

    render() {

            return (
                <div className={AdminContentStyle.contentAdmin}>
                    {this.state.redirect}

                    <div className={AdminContentStyle.form +  " btn btn-dark"} >
                        <label htmlFor="exampleInputEmail1">Имя </label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               ref={this.inputName} value={this.state.inputName}
                               onChange={() => this.setState({inputName: this.inputName.current.value})}
                        />
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               value={this.state.inputPassword}
                               onChange={() => this.setState({inputPassword: this.inputPassword.current.value})}
                               ref={this.inputPassword}/>
                        <br/>
                        <button className="btn btn-success adminButton"
                                onClick={() => this.send()}> Добавить
                        </button>
                    </div>

                    <div className={AdminContentStyle.table}>
                        <Table striped bordered hover size="sm" variant="dark">
                            <thead>
                            <tr>
                                <th>№</th>
                                <th>Имя</th>
                                <th> </th>
                                <th> </th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.userArray}
                            </tbody>
                        </Table>
                    </div>
                    <div className={AdminContentStyle.infoUser}>
                        {this.state.userInfo}
                    </div>
                </div>
            )

    }
}