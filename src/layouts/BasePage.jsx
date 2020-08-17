import React from "react";
import BasePageStyle from './BasePageStyle.module.css'

export default class BasePage extends React.Component {

    render() {
        return (
            <div className={BasePageStyle.content}>
                <p>Base page</p>
            </div>
        )
    }
}