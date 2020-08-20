import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import {NavLink} from "react-router-dom";
import NavbarStyle from './Navigations.module.sass';


export default class Navigations extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            adminNav:'',
            isAdmin:false
        }
    }

    logout(){
        localStorage.removeItem('token');
        localStorage.removeItem('isAuth');
        localStorage.removeItem('role');
        window.location.reload();
    }
    componentDidMount() {
        if(    /ADMIN/.test(localStorage.getItem('role')) ){
            this.setState({adminNav:<NavLink exact to="/admin" type="button" className="btn btn-outline-light">Админ панель</NavLink>})
        }
    }

    render() {
        if(window.location.pathname === '/authenticate'){
            return null;
        }

        return (
            <Navbar bg="orange" variant="dark"  fixed="top" className={NavbarStyle.navigation}>
                <Navbar.Brand  className={NavbarStyle.logoNavContent}>
                    <NavLink to="/">
                    <img src="logo.png" alt=""  className={NavbarStyle.imgLogo} />
                    </NavLink>
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <div className="btn-group" role="group" aria-label="Basic example">
                        <NavLink exact to="/" type="button" className="btn btn-outline-light">Главная</NavLink>
                        <NavLink to="/guest" type="button" className="btn btn-outline-light" >  Просмотр гостей</NavLink>
                        <NavLink to="/newGuest" type="button" className="btn btn-outline-light">Добавить гостя</NavLink>
                        <NavLink to="/profile" type="button" className="btn btn-outline-light">Профиль</NavLink>
                        {this.state.adminNav}
                    </div>
                </Nav>
                <Form inline>
                    <button type="button" className="btn btn-primary" onClick={() => this.logout() }>Выйти из системы</button>
                </Form>
            </Navbar>
        )
    }
}