
import Products from 'components/Products';
import { connect } from 'react-redux';

import { addProduct } from '../state';
export default connect(
    state => ({
        products: state.products.products,
    }),
    { addProduct }
)(Products);
