import React, { Component } from 'react';

import ProductList from './ProductList';


class ProductsPage extends Component {
    componentDidMount() {
        this.props.showPage();
    }

    render() {
        return (
            <div>
                <ProductList />
            </div>
        );
    }
}

import { showPage } from './state';
import { connect } from 'react-redux';

export default connect(
    null,
    { showPage }
)(ProductsPage);
