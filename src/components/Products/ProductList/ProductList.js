import styles from "./ProductList.module.css";
import React from "react";

const ProductList = ({
  src,
  name,
  price,
  description,
  action,
  button = false,
}) => {
  return (
    <div className={styles.productImage}>
      <div className={styles.image}>
      <img src={src} alt={name} />
      </div>
    

      <div className={styles.details}>
        <span className={styles.name}>{name}</span>
        <label className={styles.description}>{description}</label>
        <span className={styles.price}>R${price}</span>
      </div>

      {button && (
        <div className={styles.add}>
          <button onClick={action}>+</button>
          <span>1</span>
          <button className={styles.minus} onClick={action}>-</button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
