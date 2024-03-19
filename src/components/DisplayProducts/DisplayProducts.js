import React from "react";
import styles from "./DisplayProducts.module.css";
import NavLinkButton from "../../components/Button/NavLinkButton";
import BackButton from "../../components/Button/BackButton";
import { FaShoppingBag } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const DisplayProducts = ({ url }) => {
  return (
    <div className={styles.displayProducts}>
      <div>
        <BackButton />
      </div>
      <div className={styles.main}>
        {url === "store" && <h3>VER TODAS AS OPÇÕES DE</h3>}
        <NavLink
          to={`/${url}/pockets`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.navlink
          }
        >
          MARMITAS
        </NavLink>
        <NavLink
          to={`/${url}/frozenFoods`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.navlink
          }
        >
          CONGELADOS
        </NavLink>
        <NavLink
          to={`/${url}/broths`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.navlink
          }
        >
          CALDOS
        </NavLink>
        <NavLink
          to={`/${url}/desserts`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.navlink
          }
        >
          SOBREMESAS
        </NavLink>
        <NavLink
          to={`/${url}/coffees`}
          className={({ isActive }) =>
            isActive ? styles.active : styles.navlink
          }
        >
          COFFEE-BREAK
        </NavLink>
      </div>
      {url !== "store" && (
        <div>
          <NavLinkButton to="/store" Text="IR PARA A LOJA " Icon={FaShoppingBag} />
        </div>
      )}
    </div>
  );
};

export default React.memo(DisplayProducts);
