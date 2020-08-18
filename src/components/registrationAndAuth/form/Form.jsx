import React from "react";
import FormStyle from './FormStyle.module.sass';
import {NavLink, Redirect} from "react-router-dom";
import Axios from "axios";
import Alert from "react-bootstrap/Alert";

export default class Form extends React.Component {


    constructor(props) {
        super(props);

        this.inputName = React.createRef();
        this.inputPassword = React.createRef();

        this.state = {
            name: '',
            buttonName: '',
            ref: '',
            refName: '',
            response:'',
            message:'Пользователь с таким именем существует'
        }
    }

    send() {
        if (window.location.pathname === '/authenticate') {
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
                    if(response.data.token != null){
                        localStorage.setItem('token',response.data.token)
                        window.location.reload()
                    }else{
                        console.log(response.data.token)
                        // add message in form
                    }
                })
                .catch(error => {
                    console.error(error)
                })
        }
        if (window.location.pathname === '/registration') {
            let object = {
                'username': this.inputName.current.value,
                'password': this.inputPassword.current.value
            }
            object = JSON.stringify(object)
            Axios.post(window.location.pathname, object, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            )
                .then(response => {
                    this.setState({response:response.data.response})
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }

    componentDidMount() {
        if (window.location.pathname === '/authenticate') {
            this.setState({
                name: 'Авторизация',
                buttonName: 'Войти',
                ref: '/registration',
                refName: 'Зарегистрироваться'
            })
        }
        if (window.location.pathname === '/registration') {
            this.setState({
                name: 'Регистрация',
                buttonName: 'Отправить',
                ref: '/authenticate',
                refName: 'Авторизироваться'
            })
        }
    }

    render() {
        let ifAuth = localStorage.getItem('isAuth')
        if(this.state.response){
            return (
                <Redirect to='/authenticate'/>
            )
        }else if(this.state.response===false){
         
        }

        if(ifAuth ){
            return(
            <Redirect to="/" />
            )
        }

        return (
            <div className={FormStyle.form}>
                <div className={FormStyle.mainForm}>
                    <h3>{this.state.name}</h3>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Имя администратора</label>
                        <input type="text" className="form-control" id="exampleInputEmail1"
                               aria-describedby="emailHelp"
                               ref={this.inputName}/>
                        {/*<small id="emailHelp" className="form-text text-muted">{this.state.message}</small>*/}
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               ref={this.inputPassword}/>
                    </div>
                    <NavLink to={this.state.ref}>
                        {this.state.refName}
                    </NavLink>
                    <br></br>
                    <button className="btn btn-primary" onClick={() => this.send()}>{this.state.buttonName}</button>
                </div>
            </div>
        )
    }
}