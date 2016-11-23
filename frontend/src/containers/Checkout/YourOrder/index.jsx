import React from 'react';
import { Link } from 'react-router';

import {
    ItemsButtons, ItemsList,
    ProductItem,
} from 'components/Checkout';

const YourOrder = ({
    items,
    removeItem,
    clearOrder,
    reduceItem, increaseItem,
}) => (
    <div>
        {items.length === 0
            ? <div>No products.</div>
            : (
                <ItemsList>
                    {items.map(item => (
                        <ItemsList.Item key={item.product.id}>
                            <ProductItem
                              product={item.product}
                              count={item.count}
                              onRemove={removeItem}
                              reduceItem={reduceItem}
                              increaseItem={increaseItem}
                            />
                        </ItemsList.Item>
                    ))}
                </ItemsList>
            )
        }
        <ItemsButtons>
            <button onClick={clearOrder}>Clear</button>
            <Link to='/'>Update</Link>
        </ItemsButtons>
    </div>
);

import { connect } from 'react-redux';
import {
    clearOrder, removeItem, getItems,
    reduceItem, increaseItem,
} from '../state';

export default connect(
    state => ({ items: getItems(state) }),
    { clearOrder, removeItem, reduceItem, increaseItem }
)(YourOrder);
