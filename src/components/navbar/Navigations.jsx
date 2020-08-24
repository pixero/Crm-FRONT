import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import {NavLink} from "react-router-dom";
import NavbarStyle from './Navigations.module.sass';
import Image from "react-bootstrap/Image";
import {getGuestList} from "../viewGuest/ViewGuest";


export default class Navigations extends React.Component {


    logout(){
       localStorage.clear();
        window.location.reload();
    }

    render() {
        if(window.location.pathname === '/authenticate' || /admin/.test(window.location.pathname)){
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
                        <NavLink to="/guest" type="button" className="btn btn-outline-light" onClick={() => getGuestList()}>  Просмотр гостей</NavLink>
                        <NavLink to="/profile" type="button" className="btn btn-outline-light">Профиль</NavLink>
                    </div>
                </Nav>
                <Form inline>
                    <Image src={"/userImg/"+ localStorage.getItem('picture')} className={NavbarStyle.imgProfile}  roundedCircle />
                    <button type="button" className="btn btn-primary" onClick={() => this.logout() }>Выйти из системы</button>
                </Form>
                {/*<Col xs={6} md={4}>*/}
                {/*    <Image src={"/userImg/"+ localStorage.getItem('picture')} roundedCircle className={NavbarStyle.imgProfile}  />*/}
                {/*</Col>*/}
            </Navbar>
        )
    }
}