import React from "react";
import FormStyle from './FormStyle.module.sass';
import {Redirect} from "react-router-dom";
import Axios from "axios";


export default class Form extends React.Component {


    constructor(props) {
        super(props);

        this.inputName = React.createRef();
        this.inputPassword = React.createRef();

        this.state = {
            password:'',
            name:''
        }
    }

    send() {
            let arr = {
                'username': this.inputName.current.value,
                'password': this.inputPassword.current.value
            }
            arr = JSON.stringify(arr)
            Axios.post(window.location.pathname, arr, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then(response => {
                    if (response.data.token != null) {
                        localStorage.setItem('token', response.data.token)
                        localStorage.setItem('isAuth', true)
                        window.location.reload()
                    } else {
                        //  message in form
                        this.setState({message: 'Неверный логин или пароль'})
                    }
                })
                .catch(error => {
                    console.error(error)
                })
    }


    render() {

        let isAuth = localStorage.getItem('isAuth')

        if (isAuth) {
            return (
                <Redirect to="/"/>
            )
        }

        return (
            <div className={FormStyle.form}>
                <div className={FormStyle.mainForm}>
                    <h3>Авторизация</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Имя администратора</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               value={this.state.name}
                               onChange={()=>this.setState({name:this.inputName.current.value})}
                               ref={this.inputName}/>
                        {/*<small id="emailHelp" className="form-text text-muted">{this.state.message}</small>*/}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               value={this.state.password}
                               onChange={ ()=> this.setState({password:this.inputPassword.current.value})}
                               ref={this.inputPassword}/>
                    </div>
                    <hr/>
                    <p>{this.state.message}</p>
                    <button className="btn btn-primary" onClick={() => this.send()}> Авторизироваться </button>
                </div>
            </div>
        )
    }
}