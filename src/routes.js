import React from 'react';
import { BrowserRouter, Switch, Route }  from 'react-router-dom';

import Main from './pages/Main';
import Repository from './pages/Repository';
import Cart from './pages/Cart';


export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>                
                <Route path="/" exact component={Main} />
                <Route path="/repository" component={Repository} />
                <Route path="/cart" component={Cart} />
            </Switch>
        </BrowserRouter>
    );
}