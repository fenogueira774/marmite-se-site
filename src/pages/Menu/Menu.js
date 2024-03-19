import React, { useState } from "react";
import styles from "./Menu.module.css";
import ProductList from "../../components/Products/ProductList/ProductList";
import imageDefault from "../../images/logo.png";

const Menu = () => {
  const [image] = useState(imageDefault);
  return (
    <div className={styles.menu}>
      <div className={styles.pocket}>
        <h3>Marmitas</h3>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
          <div key={p}>
            <ProductList
              src={image}
              name="Nome do Produto"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              price="15,00"
            />
          </div>
        ))}
      </div>
      <div className={styles.frozenFoods}>
        <h3>Congelados</h3>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
          <div key={p}>
            <ProductList
              src={image}
              name="Nome do Produto"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              price="15,00"
            />
          </div>
        ))}
      </div>
      <div className={styles.brothes}>
        <h3>Caldos e Sopas</h3>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
          <div key={p}>
            <ProductList
              src={image}
              name="Nome do Produto"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              price="15,00"
            />
          </div>
        ))}
      </div>
      <div className={styles.desserts}>
        <h3>Sobremesas</h3>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
          <div key={p}>
            <ProductList
              src={image}
              name="Nome do Produto"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              price="15,00"
            />
          </div>
        ))}
      </div>
      <div className={styles.coffee}>
        <h3>Coffee-Break</h3>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
          <div key={p}>
            <ProductList
              src={image}
              name="Nome do Produto"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
              price="15,00"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
