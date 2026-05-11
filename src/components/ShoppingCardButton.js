const ShoppingCardButton = ({ type, children }) => {
  return (
    <>
      {type === "complete" ? (
        <button className="btn btn-green">
          <ion-icon name="checkmark-outline"></ion-icon>
          {children}
        </button>
      ) : null}
      {type === "delete" ? (
        <button className="btn btn-red">
          <ion-icon name="trash-outline"></ion-icon>
          {children}
        </button>
      ) : null}
    </>
  );
};

export default ShoppingCardButton;
