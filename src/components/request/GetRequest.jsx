import React from "react";
import Axios from "axios";
import {Redirect} from "react-router-dom";
import {
   creatorRequestRefreshToken
} from "../../redux/authorization/Action";
import {connect} from "react-redux";

 export class GetRequest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            check: localStorage.getItem('isAuth')
        }
    }

    componentDidMount() {

        Axios.get('/checkAuth', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
            }
        )
            .then(response => {
                localStorage.setItem( 'isAuth',response.data.check)
            })
            .catch(error => {
                this.props.creatorRequestRefreshToken();
            })
    }

    render() {

        if(!this.state.check){
            return (
                <Redirect to="/authenticate"/>
            )
        }
        return null;
    }
}

const mapToProps = state=>{
    return state.auth
}

const authDispatch = {
    creatorRequestRefreshToken
}

export default connect (mapToProps, authDispatch) (GetRequest)