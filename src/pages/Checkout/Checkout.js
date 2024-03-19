import React, { useRef, useState } from "react";
//css
import styles from "./Checkout.module.css";
import ProductList from "../../components/Products/ProductList/ProductList";
import imageDefault from "../../images/logo.png";

const Checkout = () => {
  //const form
  const [zipCode, setZipCode] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  const [address, setAddress] = useState("");
  const [homeNumber, setHomeNumber] = useState("");
  const [addressComplement, setAddressComplement] = useState("");
  const [district, setDistrict] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardExpiryDate, setCardExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolderName, setCardHolderName] = useState("");
  const [document, setDocument] = useState("");
  //const Ref
  const zipCodeRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const addressRef = useRef();
  const homeNumberRef = useRef();
  const addressComplementRef = useRef();
  const districtRef = useRef();
  const cardNumberRef = useRef();
  const cardExpiryDateRef = useRef();
  const cvvRef = useRef();
  const cardHolderNameRef = useRef();
  const documentRef = useRef();
  //const State
  const [image] = useState(imageDefault);

  return (
    <div className={styles.checkout}>
      <div className={styles.deliveryForm}>
        <h3>Dados de Entrega</h3>
        <form action="">
          <label>
            <input
              type="text"
              name="zipCode"
              ref={zipCodeRef}
              placeholder="CEP"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
            ></input>
          </label>
          <label className={styles.row}>
            <input
              className={styles.smallField}
              type="text"
              name="state"
              ref={stateRef}
              placeholder="Estado"
              value={state}
              onChange={(e) => setState(e.target.value)}
            ></input>

            <input
              className={styles.mediumField}
              type="text"
              name="city"
              ref={cityRef}
              placeholder="Cidade"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            ></input>
          </label>
          <label>
            <input
              type="text"
              name="address"
              ref={addressRef}
              placeholder="Endereço"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            ></input>
          </label>
          <label className={styles.row}>
            <input
              className={styles.smallField}
              type="text"
              name="homeNumber"
              ref={homeNumberRef}
              placeholder="Número"
              value={homeNumber}
              onChange={(e) => setHomeNumber(e.target.value)}
            ></input>

            <input
              className={styles.mediumField}
              type="text"
              name="addressComplement"
              ref={addressComplementRef}
              placeholder="Complemento"
              value={addressComplement}
              onChange={(e) => setAddressComplement(e.target.value)}
            ></input>
          </label>
          <label>
            <input
              type="text"
              name="district"
              ref={districtRef}
              placeholder="Bairro"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            ></input>
          </label>
        </form>
        <h3>Dados de Pagamento</h3>
        <form action="">
          <label>
            <input
              type="text"
              name="cardNumber"
              ref={cardNumberRef}
              placeholder="Número do Cartão"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            ></input>
          </label>
          <label className={styles.row}>
            <input
              className={styles.smallField}
              type="text"
              name="cardExpiryDate"
              ref={cardExpiryDateRef}
              placeholder="Validade"
              value={cardExpiryDate}
              onChange={(e) => setCardExpiryDate(e.target.value)}
            ></input>

            <input
              className={styles.mediumField}
              type="text"
              name="cvv"
              ref={cvvRef}
              placeholder="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
            ></input>
          </label>
          <label className={styles.row}>
            <input
              className={styles.smallField}
              type="text"
              name="cardHolderName"
              ref={cardHolderNameRef}
              placeholder="Nome do Titular do Cartão"
              value={cardHolderName}
              onChange={(e) => setCardHolderName(e.target.value)}
            ></input>

            <input
              className={styles.mediumField}
              type="text"
              name="document"
              ref={documentRef}
              placeholder="CPF/CNPJ do titular"
              value={document}
              onChange={(e) => setDocument(e.target.value)}
            ></input>
          </label>
          <label className={styles.rowTotal}>
            <span>Total</span>
            <span className={styles.total}>R$ 150,00</span>
          </label>
          <button>Finalizar Compra</button>
        </form>
      </div>
      <div className={styles.shoppingCart}>
        <h3>Minha Sacola</h3>
        <div className={styles.productsList}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((p) => (
            <div key={p}>
              <ProductList
                src={image}
                name="Nome do Produto"
                price="15,00"
                button={true}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkout;
