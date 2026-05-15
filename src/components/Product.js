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

  //odznaczenie produktu jako kupiony
  const handleBought = () => {
    setProducts((prev) =>
      prev.map((item) =>
        item.name === product.name ? { ...item, bought: !item.bought } : item,
      ),
    );
    
  };
  console.log(product.bought);

  return (
    <div className={product.bought ? "card-product-row bought" : "card-product-row"}>
      <p>{product.name}</p>
      <div className="amount-row">
        <input
          className="product-checkbox"
          type="checkbox"
          checked={product.bought}
          onChange={handleBought}
        />
        <QuantityControlButton
          type={"reduce"}
          onClick={handleDecrease}
          disabled={product.amount === 0 || product.bought} //przycisk usuwania produktów nieaktywny
        >
          -
        </QuantityControlButton>
        <p className="product-amount">{product.amount}</p>
        <QuantityControlButton
          type={"add"}
          onClick={handleIncrease}
          disabled={product.amount === 20 || product.bought}
        >
          +
        </QuantityControlButton>
      </div>
    </div>
  );
};

export default Product;
