import React from "react";
import Axios from "axios";
import StyleProfilePage from "./StyleProfilePage.sass"

export default class ProfilePage extends React.Component {


    constructor(props) {
        super(props);

    }


    onChangeHandler = event => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    }

    onClickHandler = () => {
        const data = new FormData();
        data.append('file', this.state.selectedFile);

        Axios.post('/uploadFile', data, {
            headers: {
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            localStorage.setItem('picture', response.data.fileName)
        })
    }


    render() {
        return (
            <div className="container-fluid align-items-start h-75">
                <div className="row " >
                    <div className="col-2">
                        <img src={"/userImg/" + localStorage.getItem('picture')} alt=""/>
                    </div>
                    <div className="col">
                        <p>{this.props.name}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-2">
                        <input type="file" onChange={this.onChangeHandler} name="myImage" accept="image/*"/>
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}