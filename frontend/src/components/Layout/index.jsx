
import React from 'react';

import styles from './styles.scss';


const Layout = ({ children }) => (
    <div className={styles.layout}>
        {children}
    </div>
);


Layout.Header = ({ children }) => (
    <div className={styles.header}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
);


Layout.Main = ({ children }) => (
    <div className={styles.main}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
);


Layout.Footer = ({ children }) => (
    <div className={styles.footer}>
        <div className={styles.container}>
            {children}
        </div>
    </div>
);

export default Layout;
