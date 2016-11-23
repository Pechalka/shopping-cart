import { clearOrder as clearOrderCard } from 'reduxApp/modules/card';
import { push } from 'redux-router';

const initState = {
    delivery: 'delivery',
    payment: 'cash',
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_PAYMENT':
            return { ...state, payment: action.payload };
        case 'SET_DELIVER':
            return { ...state, delivery: action.payload };
        default:
            return state;
    }
};

export const changePayment = (payment) => ({ type: 'SET_PAYMENT', payload: payment });
export const changeDeliver = (deliver) => ({ type: 'SET_DELIVER', payload: deliver });

export { getItems, getSubTotal, removeItem, reduceItem, increaseItem } from 'reduxApp/modules/card';

export const clearOrder = () => (dispatch) => {
    dispatch(clearOrderCard());
    dispatch(push('/'));
};

export const payNow = () => (dispatch, getState) => {
    dispatch(clearOrderCard());
    dispatch(push('/'));
};
