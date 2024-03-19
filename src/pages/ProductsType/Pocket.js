import React from "react";
//css
import styles from "./ProductsType.module.css";

import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";

const Pocket = () => {
  return (
    <div className={styles.productType}>
      <DisplayProducts url="productsType"/>
      <div className={styles.tittle}>
        <h1>Marmitas</h1>
      </div>
      <h3>
        Na Marmite-se, estamos empenhados em redefinir a experiência da
        alimentação saudável e saborosa. Somos apaixonados por nutrição e
        bem-estar, e nossa missão é proporcionar refeições que combinem
        perfeitamente o sabor reconfortante das tradicionais com a leveza e os
        benefícios das opções low carb e fit.
      </h3>
      <p>O Que Nos Torna Especiais</p>
      <ul>
        <li>
          <span>Variedade Sem Compromisso:</span> Nossa abordagem equilibrada
          oferece uma ampla gama de opções, desde as receitas tradicionais que
          evocam memórias até criações inovadoras low carb e fit, garantindo que
          cada cliente encontre sua combinação perfeita.
        </li>
        <li>
          <span>Ingredientes de Qualidade: </span>Selecionamos cuidadosamente os
          ingredientes frescos e nutritivos para cada prato. Utilizamos produtos
          naturais e orgânicos sempre que possível, priorizando a qualidade e o
          sabor em cada garfada.
        </li>
        <li>
          <span>Sabor que Surpreende:</span> Acreditamos que comida saudável não
          precisa ser monótona. Nossos chefs talentosos estão sempre explorando
          novos sabores e técnicas culinárias para criar pratos que deleitam o
          paladar e nutrem o corpo.
        </li>
        <li>
          <span>Apoio à Saúde:</span> Sabemos que cada pessoa tem necessidades
          diferentes, e é por isso que trabalhamos em estreita colaboração com
          nutricionistas para garantir que nossas refeições se alinhem com metas
          de saúde e condicionamento físico.
        </li>
        <li>
          <span>Conveniência Valorizada:</span> Entendemos a agitação do dia a
          dia e a importância de uma alimentação rápida e saudável. Com a
          Marmite-se, você não precisa sacrificar sua saúde por conveniência.
          Entregamos diretamente à sua porta, proporcionando uma solução prática
          e nutritiva
        </li>
        <li>
          <span>Satisfação do Cliente em Primeiro Lugar:</span> Seu prazer e
          bem-estar são nossa principal prioridade. Estamos comprometidos em
          oferecer um atendimento excepcional e garantir que cada refeição
          exceda suas expectativas.
        </li>
      </ul>

      <p>Nossas Linhas de Produtos</p>
      <ul>
        <li>
          <span>Tradições Revisitadas:</span> Nossa abordagem equilibrada
          oferece uma ampla gama de opções, desde as receitas tradicionais que
          despaertam memórias até criações inovadoras low carb e fit, garantindo
          que cada cliente encontre sua combinação perfeita.
        </li>
        <li>
          <span>Low Carb, Alto Sabor: </span>Selecionamos cuidadosamente os
          ingredientes frescos e nutritivos para cada prato. Utilizamos produtos
          naturais e orgânicos sempre que possível, priorizando a qualidade e o
          sabor em cada garfada.
        </li>
        <li>
          <span>Fit e Energizante:</span> Acreditamos que comida saudável não
          precisa ser monótona. Nossos chefs talentosos estão sempre explorando
          novos sabores e técnicas culinárias para criar pratos que deleitam o
          paladar e nutrem o corpo.
        </li>
      </ul>
    </div>
  );
};

export default Pocket;
