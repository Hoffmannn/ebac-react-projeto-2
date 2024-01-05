import { useState } from "react";
import "./App.css";
import CategoriesContainer from "./components/Categories/CategoriesContainer";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Footer";
function App() {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleAddProduct = (product) => {
    const index = cart.findIndex((item) => item.id === product.id);
    if (index !== -1) {
      const newCart = [...cart];
      newCart[index].quantity++;
      setCart(newCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="App">
      <NavBar setIsCartOpen={setIsCartOpen} />
      <CategoriesContainer handleAddProduct={handleAddProduct} />
      <Cart
        cart={cart}
        setCart={setCart}
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
      />
      <Footer />
    </div>
  );
}

export default App;
