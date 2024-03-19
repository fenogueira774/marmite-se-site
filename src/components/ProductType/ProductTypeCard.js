import React from "react";
//CSS
import styles from "./ProductTypeCard.module.css";

import Button from "../Button/NavLinkButton";
import { FaInfo } from "react-icons/fa";

import logo from "../../images/logo.png"

const ProductTypeCard = ({ image, Title, subtitle, to }) => {

  return (
    <div className={styles.productTypeCard}>
      <div className={styles.imageDiv}>
        <img src={logo} alt={`Imagem de ${Title}`} className={styles.image}/>
      </div>
        <div className={styles.title}>
          <p>{Title}</p>
        </div>
        <div className={styles.subtitle}>
          <p>{subtitle}</p>
        </div>
        <div className={styles.button}>
          <Button Icon={FaInfo} to={to} Text="Saiba Mais" />
        </div>
      </div>
 
  );
};

export default ProductTypeCard;
