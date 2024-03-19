import React from "react";
//css
import styles from "./ProductsType.module.css";

import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";

const Desserts = () => {
  return (
    <div className={styles.productType}>
      <DisplayProducts url="productsType"/>
      <div className={styles.tittle}>
        <h1>Sobremesas</h1>
      </div>
      <h3>
        Seja para satisfazer os desejos após uma refeição, para impressionar
        convidados em um evento especial ou para presentear alguém querido,
        nossas Sobremesas Irresistíveis estão prontas para encantar. É com
        grande entusiasmo que apresentamos a vocês o nosso serviço de Sobremesas
        Irresistíveis, uma experiência que transformará cada refeição em um
        momento de celebração. Nossas criações cuidadosamente elaboradas não são
        apenas doces, são pequenas obras de arte culinárias que encantam os
        olhos e satisfazem os desejos mais exigentes.
      </h3>
      <p>O Que Tornará as Nossas Sobremesas Inesquecíveis</p>
      <ul>
        <li>
          <span>Variedade Excepcional:</span> Nossa abordagem equilibrada
          oferece uma ampla gama de opções, desde as receitas tradicionais que
          evocam memórias até criações inovadoras low carb e fit, garantindo que
          cada cliente encontre sua combinação perfeita.
        </li>
        <li>
          <span>Ingredientes Premium: </span>Selecionamos cuidadosamente os
          ingredientes frescos e nutritivos para cada prato. Utilizamos produtos
          naturais e orgânicos sempre que possível, priorizando a qualidade e o
          sabor em cada garfada.
        </li>
        <li>
          <span>Apresentação Sofisticada:</span> Acreditamos que comida saudável
          não precisa ser monótona. Nossos chefs talentosos estão sempre
          explorando novos sabores e técnicas culinárias para criar pratos que
          deleitam o paladar e nutrem o corpo.
        </li>
      </ul>
      <p>Motivos para Experimentar o Nosso Serviço</p>
      <ul>
        <li>
          <span> Paixão pela Doçura: </span> Nossa equipe de confeiteiros
          apaixonados se dedica a transformar os ingredientes em sobremesas que
          trazem alegria e satisfação.
        </li>
        <li>
          <span>Celebração Instantânea: </span>Cada sobremesa é uma celebração
          em si mesma, perfeita para marcar momentos especiais ou simplesmente
          para adicionar alegria ao seu dia.
        </li>
        <li>
          <span>Entrega Conveniente: </span> Levamos a doçura até você. Desfrute
          das nossas sobremesas no conforto da sua casa, escritório ou evento.
        </li>
        <li>
          <span>Compromisso com a Qualidade: </span> Nosso compromisso é
          fornecer sobremesas de excelência, garantindo que cada mordida seja
          uma experiência memorável.
        </li>
      </ul>
    </div>
  );
};

export default Desserts;
