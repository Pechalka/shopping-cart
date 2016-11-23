import React from 'react';

import Navigation from 'components/Navigation';

import { getTotalCount } from '../state';

import { connect } from 'react-redux';

export default connect(
    state => ({
        count: getTotalCount(state),
    })
)(Navigation);
