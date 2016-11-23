import { addItem } from 'reduxApp/modules/card';

const initState = {
    products: [],
};

export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_PRODUCTS': {
            return { ...state, products: action.payload };
        }
        default:
            return state;
    }
};

export const addProduct = (product, count) => (dispatch, getState) => {
    dispatch(addItem(product, count));
};


const products = [
    { id: 1, price: 0.12, title: 'product1' },
    { id: 2, price: 1.2, title: 'product2' },
    { id: 3, price: 0.12, title: 'product3' },
    { id: 4, price: 0.76, title: 'product4' },
    { id: 5, price: 0.12, title: 'product5' },
    { id: 6, price: 3.2, title: 'product6' },
    { id: 7, price: 0.45, title: 'product7' },
    { id: 8, price: 0.12, title: 'product8' },
    { id: 9, price: 7.1, title: 'product11' },
];

export const showPage = () => (dispatch, getState) => new Promise((resolve) => {
    setTimeout(() => {
        dispatch({ type: 'SET_PRODUCTS', payload: products.slice() });
    }, 1000);
});
