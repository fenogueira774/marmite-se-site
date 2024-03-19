import React from "react";
//CSS
import styles from "./Footer.module.css";
//Icons
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import NavLinkButton from "../Button/NavLinkButton";

const Footer = () => {


const whatsApp =() => {
  window.open("https://wa.me/5511993954214")
} 

const instagram = () => {
  window.open("https://www.instagram.com/marmite__se/")
}

const facebook = () => {
  window.open("https://www.instagram.com/marmite__se/")
}
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <div className={styles.contactSite}>
          <p>CONTATO</p>
          <NavLinkButton action={whatsApp} Text="WhatsAPP" Icon={FaWhatsapp} />
          <NavLinkButton to="/contact" Text="Email" Icon={MdOutlineEmail} />
        </div>

        <div className={styles.links}>
          <NavLinkButton action={facebook} Icon={FaFacebook} />

          <NavLinkButton action={instagram} Icon={FaInstagram} />

          <NavLinkButton to="/contact" Icon={FaLinkedin} />
        </div>

        <div className={styles.copyright}>
          <p>&copy;2023 Kay</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
