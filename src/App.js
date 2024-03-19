//CSS
import "./App.css";
//Routes
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
//hooks and services
import { useEffect, useState } from "react";
import { useAuthentication } from "./hooks/useAuthentication";
import { onAuthStateChanged } from "firebase/auth";
//context
import { AuthProvider } from "./context/AuthContext";
//pages
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Pocket from "./pages/ProductsType/Pocket";
import Desserts from "./pages/ProductsType/Desserts";
import Coffee from "./pages/ProductsType/Coffee";
import Broths from "./pages/ProductsType/Broths";
import FrozenFoods from "./pages/ProductsType/FrozenFoods";
import PocketStore from "./pages/Store/PocketStore";
import DessertStore from "./pages/Store/DessertStore";
import CoffeeStore from "./pages/Store/CoffeeStore";
import BrothStore from "./pages/Store/BrothStore";
import FrozenFoodStore from "./pages/Store/FrozenFoodStore";
import Checkout from "./pages/Checkout/Checkout";
import Menu from "./pages/Menu/Menu";
import Store from "./pages/Store/Store";
//components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function App() {
  const [user, setUser] = useState(undefined);
  const { auth } = useAuthentication();

  const loadingUser = user === undefined;

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);

  if (loadingUser) {
    return <p>Carregando...</p>;
  }
  return (
    <div className="App">
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/login"
              element={!user ? <Login /> : <Navigate to="/" />}
            />
            <Route
              path="/register"
              element={
                !user ? <Register /> : <Navigate to="/home" />
              }
            />

            <Route
              path="/productsType/register"
              element={!user ? <Register /> : <Navigate to="/" />}
            />
            <Route path="/productsType/pockets" element={<Pocket />} />
            <Route path="/productsType/desserts" element={<Desserts />} />
            <Route path="/productsType/coffees" element={<Coffee />} />
            <Route path="/productsType/broths" element={<Broths />} />
            <Route
              path="/productsType/frozenFoods"
              element={<FrozenFoods />}
            />
            <Route path="/store/pockets" element={<PocketStore />} />
            <Route path="/store/desserts" element={<DessertStore />} />
            <Route path="/store/coffees" element={<CoffeeStore />} />
            <Route path="/store/broths" element={<BrothStore />} />
            <Route path="/store/frozenFoods" element={<FrozenFoodStore />} />

            <Route path="/store/checkout" element={<Checkout />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/pocket" element={<PocketStore />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </AuthProvider>
  </div>
  );
}

export default App;
