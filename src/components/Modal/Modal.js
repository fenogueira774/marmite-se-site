import React from "react";

import styles from "./Modal.module.css";
import CloseButton from "../Button/CloseButton";

const Modal = ({ isOpen, src, setModalOpen }) => {
  if (isOpen) {
    return (
      <div className={styles.background}>
        <div className={styles.modal}>
          <div>
            <img
              className={styles.modalPicture}
              src={src}
              alt="Promoção da semana"
            />
          </div>
          <div className={styles.button}>
            <CloseButton onClick={setModalOpen} />
          </div>
        </div>
      </div>
    );
  }
  return null;
};

export default Modal;
