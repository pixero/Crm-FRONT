import React from "react";
import Axios from "axios";

export default class ProfilePage extends React.Component{




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
            localStorage.setItem( 'picture',response.data.fileName)
        })
    }




    render() {
        return(
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p>{this.props.name}</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col">

                    </div>
                    <div className="col">

                    </div>
                    <div className="col">
                        <input  type="file"  onChange={this.onChangeHandler}  name="myImage" accept="image/*" />
                        <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload
                        </button>
                        <button type="button" className="btn btn-success btn-block" onClick={this.getImg}>Получить
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}