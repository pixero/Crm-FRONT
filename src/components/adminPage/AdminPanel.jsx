import React from "react";
import AdminPanelStyle from './AdminPanelStyle.module.sass';
import Axios from "axios";
import Table from "react-bootstrap/Table";

export default class AdminPanel extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            inputName : '',
            inputPassword : '',
            userArray:[]
        };
        this.inputPassword = React.createRef();
        this.inputName = React.createRef();
    }
    componentDidMount() {
        console.log(localStorage.getItem('token'))
        Axios.get(window.location.pathname,{ headers:{
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token')
        }} )
            .then(response =>{
                console.log(response.data)
                this.setState({userArray:response.data.map((el,key) => (
                        <tr>
                            <td>{key+1}</td>
                            <td>{el.username}</td>
                            <td>{el.roles}</td>
                        </tr>
                    ))
                })
            })
    }

    send(){

        let object = {
            'username': this.state.inputName,
            'password': this.state.inputPassword
        }
        object = JSON.stringify(object)
        Axios.post(window.location.pathname +'/registration', object, {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response => {
                this.setState({response: response.data.response})
            })
            .catch(error => {
                console.error(error)
            })
        window.location.reload()
    }

    render() {
        return(
            <div className={AdminPanelStyle.contentAdmin}>
                <div className={AdminPanelStyle.table}>
                <Table striped bordered hover size="sm"  variant="light" >
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Имя</th>
                        <th>Роль</th>
                    </tr>
                    </thead>
                    <tbody >
                        {this.state.userArray}
                    </tbody>
                    <br/><br/>
                    <tfoot>
                    <tr>
                        <td> </td>
                        <td>
                            <label htmlFor="exampleInputEmail1">Имя </label>
                            <input type="text" className="form-control" id="exampleInputEmail1"
                                   aria-describedby="emailHelp"
                                   ref={this.inputName} value={this.state.inputName}
                                   onChange={() => this.setState({inputName:this.inputName.current.value})}
                            />
                        </td>
                        <td>
                            <label htmlFor="exampleInputPassword1">Пароль</label>
                            <input type="password" className="form-control" id="exampleInputPassword1"
                                   value={this.state.inputPassword}
                                   onChange={()=> this.setState({ inputPassword:this.inputPassword.current.value})}
                                   ref={this.inputPassword}/>
                        </td>
                    </tr>
                    <tr>
                        <td> </td>
                        <td> </td>
                        <td><button className="btn btn-primary adminButton" onClick={() => this.send()}> Добавить </button></td>
                    </tr>
                    </tfoot>
                </Table>
                </div>
                {/*<div className={AdminPanelStyle.mainForm}>*/}
                {/*    <h3>Регистрация нового пользователя</h3>*/}
                {/*    <div className="form-group">*/}
                {/*        <label htmlFor="exampleInputEmail1">Имя </label>*/}
                {/*        <input type="text" className="form-control" id="exampleInputEmail1"*/}
                {/*               aria-describedby="emailHelp"*/}
                {/*               ref={this.inputName} value={this.state.inputName}*/}
                {/*               onChange={() => this.setState({inputName:this.inputName.current.value})}*/}
                {/*        />*/}
                {/*        /!*<small id="emailHelp" className="form-text text-muted">{this.state.message}</small>*!/*/}
                {/*    </div>*/}
                {/*    <div className="form-group">*/}
                {/*        <label htmlFor="exampleInputPassword1">Пароль</label>*/}
                {/*        <input type="password" className="form-control" id="exampleInputPassword1"*/}
                {/*               value={this.state.inputPassword}*/}
                {/*               onChange={()=> this.setState({ inputPassword:this.inputPassword.current.value})}*/}
                {/*               ref={this.inputPassword}/>*/}
                {/*    </div>*/}
                {/*    <hr/>*/}
                {/*    <p>{this.state.message}</p>*/}
                {/*    <button className="btn btn-primary" onClick={() => this.send()}> Зарегестрировать </button>*/}
                {/*</div>*/}
            </div>
        )
    }
}