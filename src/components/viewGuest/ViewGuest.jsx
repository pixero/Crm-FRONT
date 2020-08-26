import React from "react";
import ViewGuestStyle from './ViewGuest.module.sass';
import Table from "react-bootstrap/Table";
import Axios from "axios";
import {connect} from "react-redux";

export function getGuestList() {

    // Axios.get('/guest', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
    //     }
    // }).then(response => {
    //
    //     let arrayNew = response.data.map((el, key) => (
    //
    //         <tr key={key}>
    //             <td>{key + 1}</td>
    //             <td>{el.surname}</td>
    //             <td>{el.name}</td>
    //             <td>{el.patronymic}</td>
    //             <td>{el.dateOfBirth}</td>
    //             <td>{el.passportId}</td>
    //             <td>{el.passportSeries}</td>
    //             <td>{el.issued}</td>
    //             <td>{el.arrivalDate}</td>
    //             <td>{el.dateOfDeparture}</td>
    //         </tr>
    //     ))
    //     return arrayNew
    //
    // })
        // .catch(error =>{
        //     Axios.get('authenticate/updateTokens',{headers:{
        //             'Content-Type': 'application/json',
        //             'Authorization': 'Bearer '+localStorage.getItem('refreshToken')
        //         }})
        //         .then( response  =>{
        //             localStorage.setItem('accessToken',response.data.access_token);
        //             localStorage.setItem('refreshToken', response.data.refresh_token);
        //
        //
        //             Axios.get('/guest', {
        //                 headers: {
        //                     'Content-Type': 'application/json',
        //                     'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
        //                 }
        //             }).then(response=>{
        //                 console.clear()
        //                 console.log(response)
        //             })
        //         })
        // })
}

export default class ViewGuest  extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            guestList:[]

        }
    }


    render() {

        return (
            <div className={ViewGuestStyle.viewGuest}>
                <Table striped bordered hover size="sm"  variant="light">
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Фамилия</th>
                        <th>Имя</th>
                        <th>Отчество</th>
                        <th>Дата рождения</th>
                        <th>Серия паспорта</th>
                        <th>Номер паспорта</th>
                        <th>Кем выдан</th>
                        <th>Дата заезда</th>
                        <th>Дата выезда</th>
                    </tr>
                    </thead>
                    <tbody >
                    { this.props.guestList}
                    </tbody>
                    <tfoot>
                    <td> </td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    <td><input type="text"/></td>
                    </tfoot>
                </Table>
            </div>
        )
    }
}
