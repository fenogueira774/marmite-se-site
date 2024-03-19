import React, { useState } from "react";
import styles from "./CartSidebar.module.css";
import ProductList from "../Products/ProductList/ProductList";
import imageDefault from "../../images/logo.png";
import NavLinkButton from "../Button/NavLinkButton";
import { FaSave } from "react-icons/fa";

const CartSidebar = ({ isOpen = false }) => {
  const [image] = useState(imageDefault);
  if (isOpen) {
    return (
      <div className={styles.background}>
        <div className={styles.modal}>
          <div className={styles.shoppingCart}>
            <h3>Meu Carrinho</h3>
            <div className={styles.productsList}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
                <div key={p}>
                  <ProductList
                    src={image}
                    name="Nome do Produto"
                    price="15,00"
                    button={true}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className={styles.total}>
            <span>TOTAL</span>
            <span>R$ 15,00</span>
          </div>
          <div className={styles.button}>
            <NavLinkButton Text="FINALIZAR COMPRA" Icon={FaSave}></NavLinkButton>
          </div>
        </div>
      </div>
    );
  }
};

export default CartSidebar;
