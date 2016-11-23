import React from 'react';

import styles from './styles.scss';


export const Checkout = ({ children }) => (
    <div className={styles.checkout}>
        {children}
    </div>
);

Checkout.Row = ({ children }) => (
    <div className={styles.row}>
        {children}
    </div>
);


export const Title = ({ children }) => (
    <h2 className={styles.title}>{children}</h2>
);


export const RadionGroup = ({ children, name, value, onChange }) => (
    <div className={styles.radionGroup}>
        {React.Children.map(children, child => {
             return React.cloneElement(child, { name, checked: child.props.value === value, onChange });
        })}
    </div>
);

RadionGroup.Item = ({ children, name, checked, onChange, value }) => (
    <label>
        <input onChange={() => onChange(value)} checked={checked} className={styles.radio} type='radio' name={name} />
        <span>{children}</span>
    </label>
);

export const Payment = ({ children }) => (
    <div className={styles.payment}>
        {children}
    </div>
);

Payment.Row = ({ label, children }) => (
    <div className={styles.paymentRow}>
        <span className={styles.paymentRowLabel}>{label}</span>
        <span className={styles.paymentRowPrice}>{children}</span>
    </div>
);


export const PayButtonContainer = ({ children }) => (
    <div className={styles.payButtonContainer}>
        {children}
    </div>
);

export const ItemsButtons = ({ children }) => (
    <div className={styles.itemsButtons}>
        {children}
    </div>
);

export const ItemsList = ({ children }) => (
    <div className={styles.itemsList}>
        {children}
    </div>
);

ItemsList.Item = ({ children }) => (
    <div className={styles.itemsListItem}>
        {children}
    </div>
);

const TODO = (e) => {};

export const ProductItem = ({
    product, count,
    onRemove, reduceItem, increaseItem,
}) => (
    <div className={styles.productItem}>
        <img className={styles.productItemImg} src='https://dummyimage.com/60x60' />
        <div>
            <h2 className={styles.productTitle}>{product.title}</h2>
            <div>{(product.price * count).toFixed(2)}</div>
            <div>{product.price} per item</div>
        </div>
        <div className={styles.actionContainer}>
            <button onClick={() => reduceItem(product)}>-</button>
            <input className={styles.productInput} value={count} onChange={TODO} />
            <button onClick={() => increaseItem(product)}>+</button>
            <button onClick={() => onRemove(product) }>remove</button>
        </div>
    </div>
);


