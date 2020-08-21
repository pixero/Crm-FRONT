import React from 'react';
import { Route} from "react-router-dom";
import BasePage from "./layouts/users/BasePage";
import './App.sass';
import GetRequest from "./components/request/GetRequest";
import Form from "./components/registrationAndAuth/form/Form";
import AdminPage from "./layouts/admin/AdminPage";

function App() {
if(!/admin/.test(window.location.pathname)) {
    return (
        <div className="App">
            <Route path="/" component={GetRequest}/>
            <Route path="/" component={BasePage}/>
            <Route path="/authenticate" component={Form}/>
        </div>
    );
}
else {
    return  <Route path="/admin" component={AdminPage}/>
}
}

export default App;
