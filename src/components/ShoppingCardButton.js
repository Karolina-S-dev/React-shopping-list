const ShoppingCardButton = ({ type, children,onClick }) => {
  return (
    <>
      {type === "complete" ? (
        <button className="btn btn-complete" onClick={onClick}>
          <ion-icon className="btn-icon" name="checkmark-outline"></ion-icon>
          {children}
        </button>
      ) : null}
      {type === "delete" ? (
        <button className="btn btn-delete" onClick={onClick}>
          <ion-icon className="btn-icon" name="trash-outline"></ion-icon>
          {children}
        </button>
      ) : null}
    </>
  );
};

export default ShoppingCardButton;
