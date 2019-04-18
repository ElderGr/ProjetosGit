import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// import Login from './pages/Login/index';
import Main from './pages/Main/index';

const Routes = () =>{
    <BrowserRouter>
        <Switch>
            <Route path='/' component={Main} />
            {/* <Route path='/Main/' component={Main} /> */}
        </Switch>
    </BrowserRouter>
};

export default Routes;