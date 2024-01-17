import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Navbar from "./Navbar";
import CartProvider from "./components/CartContext";
import CartItems from "./components/CartItems";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import "./index.css";

function App() {
  return (
    <>
      <CartProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/cart" element={<CartItems />} />
        </Routes>

        <ToastContainer position="top-right" />
        <Footer />
      </CartProvider>
    </>
  );
}

export default App;
