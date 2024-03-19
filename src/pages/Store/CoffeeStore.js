import React, { useState } from 'react'
import ProductCard from "../../components/Products/ProductCard/ProductCard";
import imageDefault from "../../images/logo.png";
import styles from "./Store.module.css"
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";

const CoffeeStore = () => {
    const [image] = useState(imageDefault);
    return (
      <div className={styles.store}>

        <DisplayProducts url="store"/>
        <div className={styles.productList}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
         <div key={p}>
         <ProductCard
         src={image}
         name="Nome do Produto"
         price="15,00"
         description="Coffe break."
         
       />
       </div>))}
        </div>
        
      </div>
    );
}

export default CoffeeStore