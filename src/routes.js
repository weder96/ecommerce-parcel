import React from 'react';
import { BrowserRouter, Switch, Route }  from 'react-router-dom';

import Main from './modules/pages/Main';
import Repository from './modules/pages/Repository';
import Cart from './modules/pages/Cart';
import Products from './modules/pages/Products';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>                
                <Route path="/" exact component={Main} />
                <Route path="/repository" component={Repository} />
                <Route path="/cart" component={Cart} />
                <Route path="/products" component={Products} />
            </Switch>
        </BrowserRouter>
    );
}