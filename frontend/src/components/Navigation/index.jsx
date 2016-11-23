
import React from 'react';
import { Link } from 'react-router';

import styles from './styles.scss';


const Navigation = ({ count = 5 }) => (
    <nav className={styles.nav}>
        <Link className={styles.link} to='/'>shop now</Link>
        <Link disabled={count === 0} className={styles.link} to='/checkout'>
            <span>checkout</span>
            <span className={styles.count}>({count})</span>
        </Link>
    </nav>
);

export default Navigation;
