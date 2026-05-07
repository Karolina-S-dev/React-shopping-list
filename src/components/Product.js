import QuantityControlButton from "./QuantityControlButton";

const Product = ({ product, setProducts }) => {
  const handleIncrease = () => {
    setProducts((prev) =>
      prev.map((item) =>
        item.name === product.name
          ? { ...item, amount: item.amount + 1 }
          : item,
      ),
    );
  };

  const handleDecrease = () => {
    setProducts((prev) =>
      prev.map((item) =>
        item.name === product.name
          ? { ...item, amount: item.amount - 1 }
          : item,
      ),
    );
  };

  return (
    <div>
      <p>Product: {product.name}</p>
      <p>Status: {product.bought ? "Bought" : "Not bought"}</p>
      <div className="quantity-control-div">
        <p>Amount: {product.amount}</p>
        <div className="buttons-div">
          <QuantityControlButton type={"add"} onClick={handleIncrease}>
            +
          </QuantityControlButton>
          <QuantityControlButton type={"reduce"} onClick={handleDecrease}>
            -
          </QuantityControlButton>
        </div>
      </div>
    </div>
  );
};

export default Product;
