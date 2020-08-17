import React from "react";
import BasePageStyle from './BasePageStyle.module.sass'
import Navigations from "../components/navbar/Navigations";

export default class BasePage extends React.Component {

    render() {
        return (
            <div className={BasePageStyle.content}>
                <div className="nav">
                <Navigations/>
                </div>
            </div>
        )
    }
}