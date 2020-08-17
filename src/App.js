import React from 'react';
import {Route ,Switch} from "react-router-dom";
import BasePage from "./layouts/BasePage";
import './App.sass';
import Authenticate from "./components/registrationAndAuth/Authenticate";

function App() {
    return (
        <div className="App">

                <Route  exact path="/" component={BasePage}/>
                <Route  path="/authenticate" component={Authenticate} />
        </div>
    );
}

export default App;
