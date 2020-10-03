import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import Room from './pages/Room';
import SignUp from './pages/SignUp';

const App = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Room} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/SinUp" component={SignUp} />
            </Switch>
        </BrowserRouter>
    )
};

export default App;