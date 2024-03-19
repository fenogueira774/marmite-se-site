import React, { useState } from "react";
//CSS
import styles from "./Home.module.css";
import ProductTypeCard from "../../components/ProductType/ProductTypeCard";
import Modal from "../../components/Modal/Modal";
import modalHome from "../../images/modalHome.jpg";

const Home = () => {
  const [openModal, setOpenModal] = useState(true);

  return (
    <div className={styles.home}>
     <Modal isOpen={openModal} src={modalHome} setModalOpen={() => setOpenModal(!openModal)}/>

      <ProductTypeCard
        image="./logo.png"
        Title="Marmitas"
        subtitle="Apresentando Sabores Saudáveis: A Essência da Nutrição em Cada Mordida"
        to="/productsType/pockets"
      />

      <ProductTypeCard
        image="./logo.png"
        Title="Congelados"
        subtitle="Descubra como a praticidade pode ser deliciosa "
        to="/productsType/frozenFoods"
      />

      <ProductTypeCard
        image="./logo.png"
        Title="Coffee-Break"
        subtitle="Elevando o Seu Evento com o Nosso Serviço de Coffee Break Empresarial "
        to="/productsType/coffees"
      />

      <ProductTypeCard
        image="./logo.png"
        Title="Caldos"
        subtitle="Aqueça o Momento com os Nossos Caldos e Sopas Especiais! "
        to="/productsType/broths"
      />

      <ProductTypeCard
        image="./logo.png"
        Title="Sobremesas"
        subtitle="Deleite-se com as Nossas Sobremesas Irresistíveis! "
        to="/productsType/desserts"
      />
    </div>
  );
};

export default Home;
