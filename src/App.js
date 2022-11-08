import React from 'react';
import {Route, Switch} from "react-router-dom";
import Main from "./containers/Main/Main";
import Registration from "./containers/Registration/Registration";
import './scss/style.scss'

const App = () => {
    return (
        <>
            <Switch>
                <Route path="/" exact component={Main}/>
                <Route path="/registration" component={Registration}/>
            </Switch>
        </>


    );
};

export default App;