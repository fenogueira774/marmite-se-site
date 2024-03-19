import React from "react";
//css
import styles from "./ProductsType.module.css";


import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";

const Broths = () => {
  return (
    <div className={styles.productType}>
      <DisplayProducts url="productsType" />
      <div className={styles.tittle}>
        <h1>Caldos e Sopas</h1>
      </div>
      <h3>
        É com grande satisfação que apresentamos o nosso serviço de Caldos e
        Sopas Especiais, uma experiência gastronômica que combina sabor,
        nutrição e o prazer acolhedor de um prato quente. Seja em um dia frio
        que pede algo reconfortante ou como uma opção saudável para variar o seu
        cardápio, estamos aqui para levar até você uma seleção cuidadosamente
        preparada de sabores excepcionais.
      </h3>
      <p>
        <span>O Que Nos Torna Especiais</span>
      </p>
      <ul>
        <li>
          <span>Variedade Deliciosa:</span> Dos clássicos aos mais ousados,
          oferecemos uma gama diversificada de caldos e sopas, cada um com uma
          personalidade única.
        </li>
        <li>
          <span>Ingredientes Frescos: </span> Utilizamos ingredientes frescos e
          sazonais para garantir o sabor autêntico e a qualidade nutricional em
          cada colherada.
        </li>
      </ul>
      <p>Motivos para Experimentar o Nosso Serviço</p>

      <ul>
        <li>
          <span>Sabor Incomparável: </span> Nossas receitas são criadas por
          chefs experientes, resultando em caldos e sopas que não apenas
          alimentam, mas também encantam o paladar.
        </li>
        <li>
          <span>Conforto Instantâneo: </span> A experiência de degustar um prato
          quente e saboroso é como um abraço para o estômago, proporcionando
          conforto em cada colherada.
        </li>
        <li>
          <span>Entrega Conveniente: </span> Comodidade é primordial. Entregamos
          diretamente na sua porta para que você possa desfrutar sem sair de
          casa.
        </li>
        <li>
          <span>Compromisso com a Saúde: </span> Oferecemos opções saudáveis e
          equilibradas, proporcionando a você uma refeição nutritiva sem
          sacrificar o sabor.
        </li>
      </ul>
    </div>
  );
};

export default Broths;
