import React from "react";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import AdminPanelStyle from './AdminPanelStyle.module.sass'

export default class AdminPanel extends React.Component{
    render() {
        return(
            <Navbar bg="orange" variant="dark"  fixed="top"  className={AdminPanelStyle.adminPanel}>
                <Nav className="mr-auto">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <NavLink exact to="/admin" type="button" className="btn btn-outline-light">Администраторы</NavLink>
                        <NavLink to="/admin/appendComment" type="button" className="btn btn-outline-light" > Написать замечания </NavLink>
                    </div>
                </Nav>
                <Form inline>
                    <button type="button" className="btn btn-light" onClick={() => this.logout() }>Выйти из системы</button>
                </Form>
            </Navbar>
        )
    }
}