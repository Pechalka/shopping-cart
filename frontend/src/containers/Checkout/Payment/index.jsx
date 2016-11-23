import React from 'react';

import {
    RadionGroup,
    PayButtonContainer, Payment,
} from 'components/Checkout';

const PaymentContainer = ({
    payment,
    changePayment,
    subtotal,
    deliveryAmount,
    total,
    payNow,
}) => (
    <div>
         <RadionGroup name='payment' value={payment} onChange={changePayment}>
            <RadionGroup.Item value='byCard'>
                By card
            </RadionGroup.Item>
            <RadionGroup.Item value='cash'>
                cash
            </RadionGroup.Item>
        </RadionGroup>
        <Payment>
            <Payment.Row label='SUBTOTAL:'>{subtotal}</Payment.Row>
            <Payment.Row label='DELIVERY:'>{deliveryAmount}</Payment.Row>
            <Payment.Row label='TOTAL:'>{total}</Payment.Row>
        </Payment>
        <PayButtonContainer>
            <button onClick={payNow}>pay now</button>
        </PayButtonContainer>
    </div>
);

import { connect } from 'react-redux';
import { getSubTotal, changePayment, payNow } from '../state';

export default connect(
    state => {
        const { delivery, payment } = state.checkout;
        const subtotal = getSubTotal(state);
        let deliveryAmount = 0;

        if (delivery === 'delivery') deliveryAmount = 10;

        return {
            delivery,
            payment,
            subtotal,
            deliveryAmount,
            total: subtotal + deliveryAmount,
        };
    },
    { changePayment, payNow }
)(PaymentContainer);
