import React from "react";
import FormStyle from './FormStyle.module.sass';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {
    creatorAuthPostRequest,
    creatorUpdateMessageText,
    creatorUpdateNameUser,
    creatorUpdatePasswordUser
} from "../../../redux/authorization/Action";


class Form extends React.Component {


    constructor(props) {
        super(props);
        this.inputName = React.createRef();
        this.inputPassword = React.createRef();
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
                               value={this.props.name}
                               onChange={ () => this.props.creatorUpdateNameUser(this.inputName.current.value)}
                               ref={this.inputName}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"
                               value={this.props.password}
                               onChange={ ()=> this.props.creatorUpdatePasswordUser(this.inputPassword.current.value)}
                               ref={this.inputPassword}/>
                    </div>
                    <hr/>
                    <p> {this.props.messageWrong} </p>
                    <button className="btn btn-primary" onClick={() => this.props.creatorAuthPostRequest()}> Авторизироваться </button>
                </div>
            </div>
        )
    }
}

const mapToProps = state=>{
    return state.auth
}

const authDispatch = {
    creatorUpdatePasswordUser,
    creatorUpdateNameUser,
    creatorUpdateMessageText,
    creatorAuthPostRequest
}

export default connect (mapToProps, authDispatch) (Form)