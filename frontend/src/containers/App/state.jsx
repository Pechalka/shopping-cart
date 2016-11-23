
import { loadShoppingCard } from 'reduxApp/modules/card';
export { getTotalCount } from 'reduxApp/modules/card';

export const appStart = () => (dispatch, getState) => {
    dispatch(loadShoppingCard());
};

