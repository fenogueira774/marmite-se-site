import { React, useState } from "react";
//CSS
import styles from "./Navbar.module.css";
//Images
import logo from "../../images/logo.png";
//Components
import NavLinkButton from "../Button/NavLinkButton";
import MenuMobile from "../MenuMobile/MenuMobile";
//Icons
import {
  FaBars,
  FaHome,
  FaInfo,
  FaLock,
  FaPen,
  FaShoppingCart,
  FaStore,
  FaUnlock,
} from "react-icons/fa";
import { GrContact, GrDocumentConfig } from "react-icons/gr";
import { MdRestaurantMenu } from "react-icons/md";
//hook
import { useAuthentication } from "../../hooks/useAuthentication";
//context
import { useAuthValue } from "../../context/AuthContext";
import CartSidebar from "../CartSidebar/CartSidebar";

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const showMenuMobile = () => setMenuMobile(!menuMobile);
  const [openModal, setOpenModal] = useState(false);

  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  console.log(openModal)

  return (
    <div className={styles.navbar}>
      {user && (
        <>
          <div className={styles.mobile}>
            <FaBars className={styles.faBars} onClick={showMenuMobile} />
            {menuMobile && <MenuMobile active={setMenuMobile} />}
          </div>
          <div className={styles.brand}>
            <img src={logo} alt="logo" className={styles.brand} />
          </div>

          <div className={styles.links}>
            <ul>
              <li>
                <NavLinkButton Icon={FaHome} to="/" Text="Início" />
              </li>
              <li>
                <NavLinkButton
                  Icon={MdRestaurantMenu}
                  to="/menu"
                  Text="Cardápio"
                />
              </li>
              <li>
                <NavLinkButton Icon={FaStore} to="/store" Text="Loja" />
              </li>
              <li>
                <NavLinkButton Icon={FaInfo} to="/about" Text="Sobre" />
              </li>

              <li>
                <NavLinkButton Icon={GrContact} to="/contact" Text="Contato" />
              </li>
            </ul>
          </div>
          <div className={styles.links}>
            <div className={styles.link_list}>
              <li>
                <NavLinkButton
                  Icon={FaShoppingCart}
                  Text="Carrinho"
                  onClick={() => setOpenModal(!openModal)}
                />
              </li>
              {openModal && <CartSidebar isOpen={openModal} />}

              <li>
                <NavLinkButton
                  onClick={logout}
                  to="/"
                  Icon={FaUnlock}
                  Text="Logout"
                  className={styles.siderbaritem}
                ></NavLinkButton>
              </li>
            </div>
          </div>
        </>
      )}

      {!user && (
        <>
          <div className={styles.mobile}>
            <FaBars className={styles.faBars} onClick={showMenuMobile} />
            {menuMobile && <MenuMobile active={setMenuMobile} />}
          </div>
          <div>
            <img src={logo} alt="logo" className={styles.brand} />
          </div>

          <div className={styles.links}>
            <ul>
              <NavLinkButton
                Icon={GrDocumentConfig}
                to="/admin/products"
                Text="Contato"
              />
              <li>
                <NavLinkButton Icon={FaHome} to="/" Text="Início" />
              </li>
              <li>
                <NavLinkButton
                  Icon={MdRestaurantMenu}
                  to="/menu"
                  Text="Cardápio"
                />
              </li>
              <li>
                <NavLinkButton Icon={FaStore} to="/store" Text="Loja" />
              </li>
              <li>
                <NavLinkButton Icon={FaInfo} to="/about" Text="Sobre" />
              </li>
            </ul>
          </div>

          <div className={styles.link_list}>
            <li>
              <NavLinkButton
                to="/login"
                Icon={FaLock}
                Text="Login"
              ></NavLinkButton>
            </li>
            <li>
              <NavLinkButton
                to="/register"
                Icon={FaPen}
                Text="Cadastre-se"
              ></NavLinkButton>
            </li>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
