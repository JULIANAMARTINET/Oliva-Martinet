import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import ItemListContainer from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer";
import Cart from "./components/Cart";
import MyPRovider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <MyPRovider>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda/" element={<ItemListContainer />} />
          <Route path="/cat/:id" element={<ItemListContainer />} />
          <Route path="/detail/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes> 
        <Footer />
      </MyPRovider>
    </BrowserRouter>
  );
}

export default App;
