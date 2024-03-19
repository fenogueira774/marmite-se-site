import React from "react";
import styles from './Button.module.css'
import { NavLink } from "react-router-dom";

const NavLinkButton = ({  to, onClick, Text, Icon }) => {
  return (
    
    <NavLink to={to}>
    <div className= { styles.button} onClick={onClick}>
    <Icon />
    {Text}
    </div>
  </NavLink>
  );
};

export default NavLinkButton;