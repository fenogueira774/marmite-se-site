import React from "react";
//css
import styles from "./ProductsType.module.css";
import DisplayProducts from "../../components/DisplayProducts/DisplayProducts";

const Coffee = () => {
  return (
    <div className={styles.productType}>
            <DisplayProducts url="productsType"/>
      <div className={styles.tittle}>
        <h1>Coffee-Break</h1>
      </div>
      <h3>
        É com prazer que apresentamos a vocês o nosso serviço de Coffee Break
        Empresarial, projetado para transformar as suas reuniões e eventos
        corporativos em momentos verdadeiramente especiais. Sabemos que cada
        detalhe importa quando se trata de impressionar clientes, colaboradores
        e parceiros, e é por isso que estamos empenhados em oferecer uma
        experiência que vai além das expectativas.
      </h3>

      <p>O Que Você Pode Esperar:</p>
      <ul>
        <li>
          <span>Variedade Excepcional:</span> Nossa seleção de alimentos e
          bebidas é pensada para agradar a todos os paladares, com opções desde
          pães frescos a aperitivos gourmet.
        </li>
        <li>
          <span>Bebidas: </span>Oferecemos uma gama de cafés e chás, preparados
          por baristas experientes para garantir uma experiência de degustação
          memorável.
        </li>
        <li>
          <span>Toque de Sofisticação:</span> Nossas sobremesas e doces são
          preparados com maestria, adicionando um toque de elegância ao seu
          evento.
        </li>
        <li>
          <span>Opções Saudáveis: </span> Reconhecemos a importância de opções
          saudáveis, e por isso incluímos alternativas nutritivas que atendem a
          diferentes preferências alimentares.
        </li>
      </ul>
      <p>Razões para Optar pelo Nosso Serviço:</p>
      <ul>
        <li>
          <span>Atendimento Personalizado:</span> Adaptamos nossos menus de
          acordo com as suas necessidades e preferências específicas, garantindo
          uma experiência totalmente personalizada.
        </li>
        <li>
          <span>Eficiência e Pontualidade: </span>Sabemos que o tempo é valioso.
          Nossa equipe experiente garante a entrega pontual e a configuração
          organizada, sem interrupções.
        </li>
        <li>
          <span>Qualidade Garantida: </span> Utilizamos ingredientes frescos e
          de alta qualidade, priorizando sabores excepcionais e apresentações
          impecáveis.
        </li>
        <li>
          <span>Profissionalismo: </span> Fornecemos serviços para empresas,
          compreendemos as nuances de eventos corporativos e nos esforçamos para
          superar as expectativas.
        </li>
        <li>
          <span>Sustentabilidade: </span> Estamos comprometidos com práticas
          sustentáveis, utilizando embalagens eco-friendly e apoiando produtos
          locais sempre que possível.
        </li>
      </ul>
    </div>
  );
};

export default Coffee;
