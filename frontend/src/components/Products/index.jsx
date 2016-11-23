import React, { Component } from 'react';

import styles from './styles.scss';

class ProductItem extends Component {
    state = { value: 1 }

    onChange = (e) => {
        const value = +e.target.value;
        if (isNaN(value) || value <= 0) return;

        this.setState({ value });
    }

    inc = () => {
        this.setState({ value: this.state.value + 1 });
    }

    dec = () => {
        if (this.state.value === 1) return;

        this.setState({ value: this.state.value - 1 });
    }

    add = () => {
        const { addProduct, product } = this.props;
        addProduct(product, this.state.value);
    }

    render() {
        const { product } = this.props;
        const { value } = this.state;
        return (
            <div className={styles.productItem}>
                <h3 className={styles.title}>{product.title}</h3>
                <img className={styles.image} src='https://dummyimage.com/110x100' />
                <span className={styles.price}>$ {product.price}</span>
                <div className={styles.productPrice}>
                    <div>
                        <button
                          className={styles.priceBtn}
                          onClick={this.dec}
                        >-</button>
                        <input
                          type='text'
                          value={value}
                          onChange={this.onChange}
                          className={styles.priceInput}
                        />
                        <button
                          className={styles.priceBtn}
                          onClick={this.inc}
                        >+</button>
                    </div>
                    <div className={styles.addContainer}>
                        <button onClick={this.add}>add</button>
                    </div>
                </div>
            </div>
        );
    }
}


const Products = ({ products, addProduct }) => (
    <div className={styles.products}>
        <h2 className={styles.productTitle}>Our products</h2>
        <div className={styles.productsContainer}>
            {products.map(product => (
                <ProductItem
                  key={product.id}
                  product={product}
                  addProduct={addProduct}
                />
            ))}
        </div>
    </div>
);


export default Products;
