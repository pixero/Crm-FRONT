import React from "react";
import Axios from "axios";

export default class userInfo extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            selectedFile: null
        }

    }

    onChangeHandler=event=>{
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        const data = new FormData();
        data.append('file', this.state.selectedFile);

        Axios.post('/uploadFile', data,{headers:{
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }}).then(response =>{
        })
    }
    // getImg = () =>{
    //     Axios.get('/return',{headers:{
    //             'Authorization': 'Bearer ' + localStorage.getItem('token')
    //         }}).then(response =>{
    //             console.log(response.data)
    //     })
    // }

    render() {
        return(
            <div>
                <h3> Имя: {this.props.props.username}</h3>
                <h3> Пароль: {this.props.props.password}</h3>
                <h3> Дата регистрации: {this.props.props.registrationDate }</h3>
                <input  type="file"  onChange={this.onChangeHandler}  name="myImage" accept="image/*" />
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload
                </button>
                <button type="button" className="btn btn-success btn-block" onClick={this.getImg}>Получить
                </button>
            </div>
        )
    }
}