import React from "react";
//icon
import { FaTimes } from "react-icons/fa";
//css
import styles from "./Button.module.css";

const CloseButton = ({onClick}) => {
  return (
    <div >
      <button className={styles.closeButton} onClick={onClick} >
        <FaTimes />
      </button>
    </div>
  );
};

export default CloseButton;
