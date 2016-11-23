const initState = {
    shopingCard: {},
};

// TODO: rewrite to backend
export const reducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_CARD': {
            return action.payload;
        }

        case 'CLEAN_ORDER': {
            return { ...state, shopingCard: {} };
        }
        case 'REMOVE_PRODUCT_ITEM': {
            const { id } = action.payload;

            const shopingCard = { ...state.shopingCard };
            delete shopingCard[id];

            return { ...state, shopingCard };
        }
        case 'ADD_PRODUCT': {
            const { product, count } = action.payload;
            const { id, price } = product;
            let shopingCard = state.shopingCard;
            if (state.shopingCard[id]) {
                shopingCard = { ...shopingCard, [id]: { item: product, count: state.shopingCard[id].count + count, price } };
            } else {
                shopingCard = { ...shopingCard, [id]: { item: product, count, price } };
            }

            return { ...state, shopingCard };
        }

        case 'INCREASE_ITEM': {
            const { id } = action.payload;
            if (!state.shopingCard[id]) return state;
            const shopingCard = { ...state.shopingCard, [id]: { ...state.shopingCard[id], count: state.shopingCard[id].count + 1 } };
            return { ...state, shopingCard };
        }

        case 'REDUCE_ITEM': {
            const { id } = action.payload;
            if (!state.shopingCard[id] || state.shopingCard[id].count === 1) return state;
            const shopingCard = { ...state.shopingCard, [id]: { ...state.shopingCard[id], count: state.shopingCard[id].count - 1 } };
            return { ...state, shopingCard };
        }

        default:
            return state;
    }
};

const save = () => (dispatch, getState) => {
    const cart = getState().card;
    const json = JSON.stringify(cart);
    localStorage.setItem('card', json);
};

const triggerSave = (action) => (dispatch) => {
    dispatch(action);
    dispatch(save());
};


export const increaseItem = (product) => triggerSave({ type: 'INCREASE_ITEM', payload: product });

export const reduceItem = (product) => triggerSave({ type: 'REDUCE_ITEM', payload: product });

export const loadShoppingCard = () => (dispatch, getState) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const str = localStorage.getItem('card');
            dispatch({
                type: 'SET_CARD',
                payload: str ? JSON.parse(str) : initState,
            });
        }, 1000);
    });
};


export const addItem = (product, count) =>
    triggerSave({ type: 'ADD_PRODUCT', payload: { product, count } });

export const getTotalCount = (state) => {
    const { shopingCard } = state.card;
    return Object.keys(shopingCard)
        .map(key => shopingCard[key].count)
        .reduce((total, count) => total + count, 0);
};

export const getSubTotal = (state) => {
    const { shopingCard } = state.card;
    const sum = Object.keys(shopingCard)
        .map(key => shopingCard[key])
        .reduce((total, { count, price }) => total + (count * 100 * price) / 100, 0);

    return sum;
};

export const getItems = (state) => {
    const shopingCard = state.card.shopingCard;

    return Object.keys(shopingCard).map(id => ({
        product: shopingCard[id].item,
        count: shopingCard[id].count,
    }));
};

export const removeItem = (product) =>
    triggerSave({ type: 'REMOVE_PRODUCT_ITEM', payload: product });
export const clearOrder = () =>
    triggerSave({ type: 'CLEAN_ORDER' });

