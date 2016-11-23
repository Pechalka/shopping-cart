import React from 'react';

import {
    RadionGroup,
} from 'components/Checkout';

const Delivery = ({
    delivery,
    changeDeliver,
}) => (
    <RadionGroup name='delivery' value={delivery} onChange={changeDeliver}>
        <RadionGroup.Item value='pickup'>
            Pickup
        </RadionGroup.Item>
        <RadionGroup.Item value='delivery'>
            Delivery
        </RadionGroup.Item>
    </RadionGroup>
);

import { connect } from 'react-redux';
import { changeDeliver } from '../state';

export default connect(
    state => ({ delivery: state.checkout.delivery }),
    { changeDeliver }
)(Delivery);
