import { combineReducers } from 'redux';
import { routerStateReducer } from 'redux-router';
import { reducer as formReducer } from 'redux-form';

import { reducer as auth } from './auth';
import { reducer as card } from './card';
import { reducer as products } from 'containers/Products/state';
import { reducer as checkout } from 'containers/Checkout/state';
import { reducer as test } from 'containers/Test/state';

export default combineReducers({
    test,
    card,

    products,
    checkout,
    auth,
    router: routerStateReducer,
    form: formReducer,
});
