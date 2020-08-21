import React from "react";
import  AdminPageStyle from './AdminPage.module.sass'
import AdminPanel from "./adminPanel/AdminPanel";
import AdminContent from "./adminContent/AdminContent";




export default class AdminPage extends React.Component {

    render() {

        return (
            <div className={AdminPageStyle.adminPage }>
                <div className={AdminPageStyle.nav}>
                    <AdminPanel/>
                </div>
                <div className={AdminPageStyle.content}>
                        <AdminContent/>

                </div>

            </div>
        )
    }
}