import React from 'react';
import { Route} from "react-router-dom";
import BasePage from "./layouts/BasePage";
import './App.sass';
import GetRequest from "./components/request/GetRequest";
import Form from "./components/registrationAndAuth/form/Form";

function App() {

    return (
        <div className="App">
                <Route  path="/" component={GetRequest} />
                <Route  path="/" component={BasePage}/>
                <Route  path="/authenticate" component={Form} />
                {/*<Route  path="/registration" component={Form} />*/}
        </div>
    );
}

export default App;
