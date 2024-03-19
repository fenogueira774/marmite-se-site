import styles from "./ProductCard.module.css";
import React from "react";

const ProductCard = ({ src, name, price, description, action }) => {
  return (
    <div className={styles.productCard}>
      <div className={styles.image}>
        <img src={src} alt={name} />
      </div>
      <div className={styles.priceAdd}>
        <div>
          <span className={styles.price}>R${price}</span>
        </div>
        <div className={styles.add}>
          <button onClick={action}>+</button>
          <span>1</span>
          <button className={styles.minus} onClick={action}>-</button>
        </div>
      </div>

      <span className={styles.name}>{name}</span>
      <label className={styles.description}>{description}</label>
    </div>
  );
};

export default ProductCard;
