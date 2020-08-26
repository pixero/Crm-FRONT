import ViewGuest from "./ViewGuest";
import React from "react";
import {connect} from "react-redux";
import {creatorGetGuestList} from "../../redux/guestPage/Action";


class ViewGuestContainer extends React.Component{

    render() {
        return(
            <ViewGuest getGuest={this.props.creatorGetGuestList}
                       guestList={this.props.guestList}
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