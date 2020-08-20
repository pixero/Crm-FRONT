import React from "react";
import Navigations from "../components/navbar/Navigations";
import {Route} from "react-router-dom";
import ViewGuest from "../components/viewGuest/ViewGuest";
import BasePageStyle from './BasePageStyle.module.sass'
import AdminPanel from "../components/adminPage/AdminPanel";




export default class BasePage extends React.Component {

    constructor(props) {
        super(props);
        this.state={
            adminPanel:[],
            isAdmin:false
        }
    }
    componentDidMount() {
        if(  /ADMIN/.test(localStorage.getItem('role'))  ){
            this.setState({adminPanel: <Route path="/admin" component={AdminPanel}/> })
        }
    }


    render() {

        return (
            <div className={BasePageStyle.basePage }>
                <div className={BasePageStyle.nav}>
                <Navigations />
                </div>
                <div className={BasePageStyle.content}>
                    <Route path="/guest" render={()=> <ViewGuest />}/>
                    {this.state.adminPanel}
                </div>

            </div>
        )
    }
}