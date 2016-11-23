import React from 'react';

import { Router, Route, IndexRoute } from 'react-router';

import Products from 'containers/Products';
import App from 'containers/App';
import Checkout from 'containers/Checkout';
import NoMatch from 'containers/NoMatch';


module.exports = ({ dispatch, getState }) => (
    <div>
        <Router>
            <Route path='/' >
                <Route component={App}>
                    <IndexRoute component={Products} />
                    <Route component={Products} path='products' />
                    <Route component={Checkout} path='checkout' />
                    <Route path='*' component={NoMatch} />
                </Route>
            </Route>
        </Router>
    </div>
);
