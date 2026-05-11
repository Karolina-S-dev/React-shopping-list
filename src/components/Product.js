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
    <div className="card-product-row">
      <p>{product.name}</p>
      <div className="amount-row">
        <input className="product-checkbox" type="checkbox" />
        <QuantityControlButton
          type={"reduce"}
          onClick={handleDecrease}
          disabled={product.amount === 0} //przycisk usuwania produktów nieaktywny
        >
          -
        </QuantityControlButton>
        <p className="product-amount">{product.amount}</p>
        <QuantityControlButton
          type={"add"}
          onClick={handleIncrease}
          disabled={product.amount === 20}
        >
          +
        </QuantityControlButton>
      </div>
    </div>
  );
};

export default Product;
