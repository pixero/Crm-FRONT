import React from "react";
import Form from "./form/Form";
import AnthAndRegistrStyle from './AuthAndRegistr.module.sass'

export default class Authenticate extends React.Component{

    render() {
        return(
            <div className={AnthAndRegistrStyle.Authenticate}>

                    <Form/>
            </div>
        )
    }

}