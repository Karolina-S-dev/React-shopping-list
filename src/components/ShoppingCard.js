import { useState } from "react";
import "./../assets/css/shopping-card.css";
import Product from "./Product";


const ShoppingCard = ({ shoppingList }) => {
  const [products, setProducts] = useState(shoppingList.products);

  return (
    <div className="shopping-card">
      <h3>{shoppingList.title}</h3>
      <p>Shopping date: {shoppingList.shoppingDate}</p>

      {products.map((product) => (
        <Product key={product.name} product ={product} setProducts={setProducts}/>
      ))}

    </div>
  );
};

export default ShoppingCard;
