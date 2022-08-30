import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import MyProvider from "./context/CartContext";
import { Checkout } from "./components/Checkout";
import "./firebase"
import Aboutus from "./components/Aboutus";


function App() {
  return (
    <BrowserRouter>
      <MyProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/tienda/" element={<ItemListContainer />} />
          <Route path="/cat/:id" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes> 
        <Footer />
      </MyProvider>
    </BrowserRouter>
  );
}

export default App;
