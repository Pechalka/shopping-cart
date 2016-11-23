
import React from 'react';

import styles from './index.scss';


export const Header = ({ children }) => (
    <div>
        {children}
    </div>
);


const Layout = ({ children }) => (
    <div className={styles.layout}>
        {children}
    </div>
);


Layout.Header = ({ children }) => (
    <div className={styles.header}>
        {children}
    </div>
);


Layout.Main = ({ children }) => (
    <div className={styles.main}>
        {children}
    </div>
);


Layout.Footer = ({ children }) => (
    <div className={styles.footer}>
        {children}
    </div>
);

export default Layout;
