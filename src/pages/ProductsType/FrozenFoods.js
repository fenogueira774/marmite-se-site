import React from "react";
//css
import styles from "./ProductsType.module.css";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";

const FrozenFoods = () => {
  return (
    <div className={styles.productType}>
      <DisplayProducts url="productsType"/>
      <div className={styles.tittle}>
        <h1>Congelados</h1>
      </div>
      <h3>
        Prepare-se para uma experiência culinária única e prática com nossa
        linha exclusiva de produtos congelados de alta qualidade. No nosso site,
        você encontrará uma variedade de opções deliciosas, perfeitas para
        simplificar suas refeições sem abrir mão do sabor. Nossos produtos são
        cuidadosamente selecionados e preparados para atender às suas
        necessidades de praticidade, sem comprometer a qualidade e o frescor.
        Com ingredientes frescos e processos de congelamento rigorosos,
        garantimos que cada prato mantenha seu sabor e textura originais.
        <br />
        Experimente nossos produtos congelados e descubra como a praticidade
        pode ser deliciosa. Estamos ansiosos para fazer parte das suas refeições
        memoráveis.
      </h3>

      <p>O Que Você Pode Esperar:</p>
      <ul>
        <li>
          <span>Variedade sem Compromisso:</span> Em nosso catálogo,
          orgulhamo-nos de uma ampla seleção de produtos congeladas que atendem
          a diversos gostos e estilos de vida.
        </li>
        <li>
          <span>Ingredientes de Qualidade: </span>Comprometemo-nos a utilizar
          apenas os melhores ingredientes em nossas comidas congeladas. Cada
          item é cuidadosamente preparado com ingredientes frescos e de alta
          qualidade, garantindo uma explosão de sabor em cada mordida.
        </li>
        <li>
          <span>Apoio à Saúde:</span> Entendemos a importância de manter um
          estilo de vida saudável sem abrir mão do prazer de comer. Por isso,
          nossas comidas congeladas são formuladas em parceria com especialistas
          em nutrição, garantindo opções equilibradas e alinhadas com suas metas
          de saúde e bem-estar.
        </li>
        <li>
          <span>Conveniência Valorizada: </span> Reconhecemos a correria do dia
          a dia e a necessidade de opções de produtos de rápido preparo,
          nutritivos e saborosos. Com a nossa linha de produtos congelados,
          oferecemos soluções práticas que podem ser facilmente preparadas no
          conforto da sua casa, sem comprometer a qualidade ou o sabor.
        </li>

        <li>
          <span>Satisfação do Cliente em Primeiro Lugar:</span> O seu
          contentamento é a nossa prioridade máxima. Estamos empenhados em
          proporcionar uma experiência excepcional, desde o momento em que você
          escolhe seus pratos até a última garfada. Sua satisfação é o que
          impulsiona a nossa paixão pela alimentação de qualidade.
        </li>
      </ul>
    </div>
  );
};

export default FrozenFoods;
