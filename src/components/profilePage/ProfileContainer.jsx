import {connect} from "react-redux";
import ProfilePage from "./ProfilePage";
import React from "react";

class ProfileContainer extends React.Component{

    render() {
        return(
            <ProfilePage    name={localStorage.getItem('username')}
                            photoProfile = {localStorage.getItem('picture')}

            />

        )
    }
}

const mapStateToProps= state =>{

    return state.profile

}

const mapDispatchToProps={

}
export default connect (mapStateToProps,mapDispatchToProps)(ProfileContainer)