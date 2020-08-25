import React from 'react';
import { Route} from "react-router-dom";
import BasePage from "./layouts/users/BasePage";
import './App.sass';
import GetRequest from "./components/request/GetRequest";
import AdminPage from "./layouts/admin/AdminPage";
import AuthContainer from "./components/Authrization/AuthContainer";

function App() {
if(!/admin/.test(window.location.pathname)) {
    return (
        <div className="App">
            <Route path="/" component={GetRequest}/>
            <Route path="/" component={BasePage}/>
            <Route path="/authenticate" component={AuthContainer}/>
        </div>
    );
}
else {
    return  <Route path="/admin" component={AdminPage}/>
}
}

export default App;
