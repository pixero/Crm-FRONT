import React from 'react';
import {Route ,Switch} from "react-router-dom";
import BasePage from "./layouts/BasePage";
import './App.sass';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route to="/" component={BasePage}/>
            </Switch>
        </div>
    );
}

export default App;
