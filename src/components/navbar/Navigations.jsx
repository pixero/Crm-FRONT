import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import {NavLink} from "react-router-dom";
import NavbarStyle from './Navigations.module.sass';


export default class Navigations extends React.Component {

    logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        window.location.reload();
    }

    render() {
        if(window.location.pathname === '/authenticate' || window.location.pathname === '/registration'){
            return null;
        }

        return (
            <Navbar bg="orange" variant="dark"  fixed="top" className={NavbarStyle.navigation}>
                <Navbar.Brand href="/"> </Navbar.Brand>
                <Nav className="mr-auto">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <NavLink exact to="/" type="button" className="btn btn-outline-light">Главная</NavLink>
                        <NavLink to="/guest" type="button" className="btn btn-outline-light"   >Просмотр гостей</NavLink>
                        <NavLink to="/newGuest" type="button" className="btn btn-outline-light">Добавить гостя</NavLink>
                        <NavLink to="/profile" type="button" className="btn btn-outline-light">Профиль</NavLink>
                    </div>
                </Nav>
                <Form inline>
                    <button type="button" className="btn btn-primary" onClick={() => this.logout() }>Выйти из системы</button>
                </Form>
            </Navbar>
        )
    }
}