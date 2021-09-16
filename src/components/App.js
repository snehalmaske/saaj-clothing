import React, {useState, useEffect} from 'react';
import {Switch, Route } from "react-router-dom";
import Homepage from './Homepage';
import Navbar from "./Navbar/Navbar.jsx";
import Register from './Register';
import Products from './Products/Products';
import { commerce } from "../lib/commerce";

function App() {

  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products)

  return (
    <div>
    <Navbar/>
    <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/signin" component={Register} />
        <Route exact path="/products" component={Products} />
        
    </Switch>
    
    </div>
    
  );
}

export default App;
