import React from 'react';

import YourOrder from './YourOrder';
import Delivery from './Delivery';
import Payment from './Payment';

import {
    Checkout, Title,
} from 'components/Checkout';

const CheckoutPage = () => (
    <Checkout>
        <Checkout.Row>
            <Title>Your order</Title>
            <YourOrder />
        </Checkout.Row>
        <Checkout.Row>
            <Title>Delivery</Title>
            <Delivery />
        </Checkout.Row>
        <Checkout.Row>
            <Title>Payment</Title>
            <Payment />
        </Checkout.Row>
    </Checkout>
);

export default CheckoutPage;
