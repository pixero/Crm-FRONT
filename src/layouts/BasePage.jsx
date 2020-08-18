import React from "react";
import Navigations from "../components/navbar/Navigations";
import {Route} from "react-router-dom";
import ViewGuest from "../components/viewGuest/ViewGuest";
import BasePageStyle from './BasePageStyle.module.sass'

export default class BasePage extends React.Component {


    render() {

        return (
            <div className={BasePageStyle.basePage}>
                <div className={BasePageStyle.nav}>
                <Navigations />
                </div>
                <div className={BasePageStyle.content}>
                    <Route path="/guest" component={ViewGuest}/>
                </div>

            </div>
        )
    }
}