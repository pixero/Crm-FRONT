import React from "react";
import ViewGuestStyle from './ViewGuest.module.sass';
import Table from "react-bootstrap/Table";
import Axios from "axios";



export default class ViewGuest  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            guestList:[]

        }
    }
    componentDidMount() {

        Axios.get('/guest', {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        }).then(response => {
            this.setState({guestList:response.data})

        })
    }

    render() {

        let arrayNew = this.state.guestList.map(  (el,key) =>(

            <tr key={key}>
                <td>{key+1}</td>
                <td>{el.surname}</td>
                <td>{el.name}</td>
                <td>{el.patronymic}</td>
                <td>{el.dateOfBirth}</td>
                <td>{el.passportId}</td>
                <td>{el.passportSeries}</td>
                <td>{el.issued}</td>
                <td>{el.arrivalDate}</td>
                <td>{el.dateOfDeparture}</td>
            </tr>
        ))


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
                    {arrayNew}
                    </tbody>
                </Table>
            </div>
        )
    }
}