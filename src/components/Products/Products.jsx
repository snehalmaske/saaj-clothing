import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product/Product";

const products = [
    {id:1, name:"Shoes", description: "Running Shoes", price: "$50", image: "https://images.unsplash.com/photo-1604531826442-c7b02558f6d2"},
    {id:2, name:"Saree", description: "Silk Saree", price: "$50", image:"https://images.unsplash.com/photo-1616429321229-733d6a7ff456"}

];

function Products(){
    return (
    <main>
           <Grid container justify="center" spacing={4}>
           
               {products.map((product) => (
                   <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                       <Product product={product}/> 
                   </Grid>
               ))}
           </Grid>
       </main>
    )
    
}

export default Products;