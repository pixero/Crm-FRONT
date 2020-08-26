import Axios from "axios";
import React from "react";

export const GET_GUEST_LIST = "GET-GUEST-LIST";

const initialState = {
   guestList:''
}

export const guestReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_GUEST_LIST :

            Axios.get('/guest', {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + localStorage.getItem('accessToken')
                }
            }).then(response => {

                state.guestList = response.data.map((el, key) => (

                    <tr key={key}>
                        <td>{key + 1}</td>
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
                ))})
                return {...state}
        default:
            return state
    }
}