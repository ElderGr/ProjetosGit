import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Login from './pages/Login/index';
import Main from './pages/Main/index';

const Routes = () =>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={Login} />
            <Route path='/Main/:user' component={Main} />
        </Switch>
    </BrowserRouter>    

////
export default Routes;