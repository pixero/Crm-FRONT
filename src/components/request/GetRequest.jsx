import React from "react";
import Axios from "axios";
import {Redirect} from "react-router-dom";

export default class GetRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: localStorage.getItem('isAuth')
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        Axios.get('/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + token
                }
            }
        )
            .then(response => {
                localStorage.setItem( 'isAuth',response.data.check)
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        if(!this.state.check){
            return (
                <Redirect to="/authenticate"/>
            )
        }
        return (
            <div>

            </div>
        );
    }
}