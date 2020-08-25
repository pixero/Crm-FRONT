import React from "react";
import Auth from "./Auth";
import {
    creatorAuthPostRequest,
    creatorUpdateMessageText,
    creatorUpdateNameUser,
    creatorUpdatePasswordUser
} from "../../redux/authorization/Action";
import {connect} from "react-redux";

class AuthContainer extends React.Component{

    render() {
        return(
            <Auth updateName={this.props.creatorUpdateNameUser}
                  updatePassword={this.props.creatorUpdatePasswordUser}
                  authPostRequst={this.props.creatorAuthPostRequest}
                  password={this.props.password}
                  name={this.props.name}
            />
        )
    }
}

const mapStateToProps = state=>{
    return state.auth
}

const mapDispatchToProps = {
    creatorUpdatePasswordUser,
    creatorUpdateNameUser,
    creatorUpdateMessageText,
    creatorAuthPostRequest
}

export default connect (mapStateToProps, mapDispatchToProps) (AuthContainer)