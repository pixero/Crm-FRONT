import React from "react";
import AdminPanelStyle from './AdminPanelStyle.module.sass';
import Axios from "axios";

export default class AdminPanel extends React.Component{

    constructor(props) {
        super(props);
        this.state={
            inputName : '',
            inputPassword : ''
        };
        this.inputPassword = React.createRef();
        this.inputName = React.createRef();
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

    }

    render() {
        return(
            <div className={AdminPanelStyle.contentAdmin}>
                <div className={AdminPanelStyle.mainForm}>
                    <h3>Регистрация нового пользователя</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Имя </label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               ref={this.inputName} value={this.state.inputName}
                               onChange={() => this.setState({inputName:this.inputName.current.value})}
                        />
                        {/*<small id="emailHelp" className="form-text text-muted">{this.state.message}</small>*/}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               value={this.state.inputPassword}
                               onChange={()=> this.setState({ inputPassword:this.inputPassword.current.value})}
                               ref={this.inputPassword}/>
                    </div>
                    <hr/>
                    <p>{this.state.message}</p>
                    <button className="btn btn-primary" onClick={() => this.send()}> Зарегестрировать </button>
                </div>
            </div>
        )
    }
}