
const QuantityControlButton = ({ children, type, onClick }) => {
  return (
    <div>
      {type === "add" ? (
        <button className="quantity-control" onClick={onClick}>
          {children}
        </button>
      ) : null}
      {type === "reduce" ? (
        <button className="quantity-control" onClick={onClick}>
          {children}
        </button>
      ) : null}
    </div>
  );
};

export default QuantityControlButton;
