import { useState } from "react";
import "./../assets/css/shopping-card.css";
import Product from "./Product";
import ShoppingCardButton from "./ShoppingCardButton";

const ShoppingCard = ({ list, setShoppingData }) => {
  const [products, setProducts] = useState(list.products);

  const handleComplete = () => {
    console.log(list.completed);
    setShoppingData((prevLists) =>
      prevLists.map((prevItem) =>
        prevItem.title === list.title
          ? { ...prevItem, completed: true }
          : prevItem,
      ),
    );
  };

  return (
    <div className="shopping-card">
      <h3>{list.title}</h3>
      <p className="shopping-card-date">Shopping date: {list.shoppingDate}</p>

      {products.map((product) => (
        <Product
          key={product.name}
          product={product}
          setProducts={setProducts}
        />
      ))}
      <div className="card-buttons">
        {!list.completed && (
          <ShoppingCardButton type={"complete"} onClick={handleComplete}>
            Complete
          </ShoppingCardButton>
        )}
        ;<ShoppingCardButton type={"delete"}>Delete</ShoppingCardButton>
      </div>
    </div>
  );
};

export default ShoppingCard;
