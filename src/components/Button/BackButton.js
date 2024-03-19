import React from "react";
//icon
import { FaArrowLeft } from "react-icons/fa";
//css
import styles from "./Button.module.css";
import { useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate= useNavigate()
  return (
    <div >
      <button className={styles.backButton} onClick={() => navigate(-1)}>
        <FaArrowLeft />
        VOLTAR
      </button>
    </div>
  );
};

export default BackButton;
