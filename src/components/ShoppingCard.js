import { useState } from "react";
import "./../assets/css/shopping-card.css";
import QuantityControlButton from "./QuantityControlButton";
import { shoppingList } from "../utils/mockTasks";

const ShoppingCard = ({ task }) => {
  const [productAmount, setProductAmount] = useState(task.products);
  console.log(productAmount);

  const handleIncrease = () => {
    setProductAmount((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, amount: item.amount + 1 } : item,
      ),
    );
  };

  return (
    <div className="shopping-card">
      <h3>{task.title}</h3>
      <p>Shopping date: {task.shoppingDate}</p>

      {task.products.map((product, index) => (
        <div key={index}>
          <p>Product: {product.name}</p>
          <p>Status: {product.bought ? "Bought" : "Not bought"}</p>
          <div className="quantity-control-div">
            <p>Amount: {product.amount}</p>
            <QuantityControlButton type={"add"} onClick={handleIncrease}>
              +
            </QuantityControlButton>
            <QuantityControlButton type={"reduce"}>-</QuantityControlButton>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShoppingCard;
