

const QuantityControlButton = ({ children, type, onClick,disabled }) => {
  return (
    <div>
      {type === "add" ? (
        <button className="quantity-btn" onClick={onClick} disabled={disabled}>
          {children}
        </button>
      ) : null}
      {type === "reduce" ? (
        <button className="quantity-btn" onClick={onClick} disabled={disabled}>
          {children}
        </button>
      ) : null}
    </div>
  );
};

export default QuantityControlButton;
