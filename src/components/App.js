import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import Navbar from "./Navbar/Navbar.jsx";
import Register from './Register';
import Products from './Products/Products';
import { commerce } from "../lib/commerce";
import Cart from "./Cart/Cart.jsx";

function App() {

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  const fetchCart = async () => {
    const cart = await commerce.cart.retrieve();

    setCart(cart);
  }

  const handleAddToCart = async(productId, quantity) => {
    const {cart} = await commerce.cart.add(productId,quantity);

    setCart(cart);
  }

  const handleUpdateCartQty = async (productId, quantity) => {
      const {cart} = await commerce.cart.update(productId, {quantity});

      setCart(cart);
  }

  const handleRemoveFromCart = async (productId) => {
      const {cart} = await commerce.cart.remove(productId);

      setCart(cart);
  }

  const handleEmptyCart = async () => {
    const{cart} = await commerce.cart.remove();

    setCart(cart);
  }

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  

  return (
    <div>
    <Navbar totalItems={cart.total_items}/>
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" component={Register} />
        <Route exact path="/products">
            <Products products={products} onAddToCart={handleAddToCart}/>
        </Route>
        <Route exact path="/cart">
            <Cart cart={cart}
              handleUpdateCartQty
              handleRemoveFromCart
              handleEmptyCar
              handleEmptyCart
            />
        </Route>
        
    </Switch>
    
    </div>
    
  );
}

export default App;
