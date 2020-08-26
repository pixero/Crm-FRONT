import ViewGuest from "./ViewGuest";
import React from "react";
import {connect} from "react-redux";
import {creatorGetGuestList} from "../../redux/guestPage/Action";


export class ViewGuestContainer extends React.Component{

    render() {
        return(
            <ViewGuest getGuest={this.props.creatorGetGuestList}
            />
        )
    }
}
const mapStateToProps= state =>{

    return state.guest

}

const mapDispatchToProps={
    creatorGetGuestList
}
export default connect (mapStateToProps,mapDispatchToProps)(ViewGuestContainer)