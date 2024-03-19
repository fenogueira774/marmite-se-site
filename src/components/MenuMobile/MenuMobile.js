import React from "react";
//Icons
import {
  FaHome,
  FaInfo,
  FaShoppingBag,
  FaStore,
  FaTimes,
  FaUnlock,
  FaUserCog,
} from "react-icons/fa";

//components
import NavLinkButton from "../Button/NavLinkButton";
import { MdRestaurantMenu } from "react-icons/md";
import { GrContact, GrDocumentConfig } from "react-icons/gr";
import { Container, Content } from "./styles";
import { useAuthValue } from "../../context/AuthContext";
import { useAuthentication } from "../../hooks/useAuthentication";

const MenuMobile = ({ active }) => {
  const closeMenu = () => {
    active(false);
  };
  const { user } = useAuthValue();
  const { logout } = useAuthentication();

  const handleClick = () => {
    logout();
    closeMenu();
  };

  return (
    <Container menumobile={active}>
      <FaTimes onClick={closeMenu} />
      {user && (
        <Content>
          <NavLinkButton Icon={FaHome} to="/" Text="Início" action={closeMenu} />
          <NavLinkButton
            Icon={MdRestaurantMenu}
            to="/menu"
            Text="Cardápio"
            action={closeMenu}
          />
          <NavLinkButton Icon={FaStore} to="/store" Text="Loja" action={closeMenu} />
          <NavLinkButton Icon={FaInfo} to="/about" Text="Sobre" action={closeMenu} />
          <NavLinkButton
            Icon={FaShoppingBag}
            to="/"
            Text="Meus Pedidos"
            action={closeMenu}
          />
          <NavLinkButton
            Icon={FaUserCog}
            to=""
            Text="Meus Dados"
            action={closeMenu}
          />
          <NavLinkButton
            Icon={GrContact}
            to="/contact"
            Text="Contato"
            action={closeMenu}
          />
          <NavLinkButton
            Icon={GrDocumentConfig}
            to="/admin/products"
            Text="Contato"
            action={closeMenu}
          />
          <NavLinkButton
            action={handleClick}
            to="/"
            Icon={FaUnlock}
            Text="Logout"
          />
        </Content>
      )}
      {!user && (
        <Content>
          <NavLinkButton Icon={FaHome} to="/" Text="Início" action={closeMenu} />
          <NavLinkButton
            Icon={MdRestaurantMenu}
            to="/menu"
            Text="Cardápio"
            action={closeMenu}
          />
          <NavLinkButton Icon={FaStore} to="/store" Text="Loja" action={closeMenu} />
          <NavLinkButton Icon={FaInfo} to="/about" Text="Sobre" action={closeMenu} />
          <NavLinkButton
            Icon={GrContact}
            to="/contact"
            Text="Contato"
            action={closeMenu}
          />
        </Content>
      )}
    </Container>
  );
};

export default MenuMobile;
