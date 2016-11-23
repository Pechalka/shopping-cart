
import React from 'react';

import styles from './styles.scss';
import { Link } from 'react-router';


const Header = ({ children }) => (
    <div className={styles.header}>
        {children}
    </div>
);

Header.Logo = ({ }) => (
    <div className={styles.logoContainer}>
        <Link to='/'>
            <img className={styles.logo} src={'https://dummyimage.com/150x50'}/>
        </Link>
    </div>
);

Header.Nav = ({ children }) => (
    <div className={styles.nav}>
        {children}
    </div>
);


export default Header;
