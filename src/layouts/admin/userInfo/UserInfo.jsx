import React from "react";

export default class userInfo extends React.Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div>
                <h3> Имя: {this.props.props.username}</h3>
                <h3> Пароль: {this.props.props.password}</h3>
                <h3> Дата регистрации: {this.props.props.registrationDate }</h3>
            </div>
        )
    }
}