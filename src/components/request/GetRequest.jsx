import React from "react";
import Axios from "axios";
import {Redirect} from "react-router-dom";

export default class GetRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: ''
        }
    }

    componentDidMount() {
        let token = localStorage.getItem('token')
        Axios.get('/', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorize': 'Bearer ' + token
                }
            }
        )
            .then(response => {
                this.setState({check: response.data.check})
            })
            .catch(error => {
                console.error(error)
            })
    }

    render() {
        if (this.state.check) {
            return (
                <Redirect to="/"/>
            )
        } else if(!this.state.check){
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