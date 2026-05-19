import ShoppingCard from "./ShoppingCard";
import "../assets/css/shopping-list.css";

const ShoppingList = ({
  title,
  titleEmpty,
  shoppingLists,
  setShoppingData,
}) => {
  return (
    <div className="shopping-lists">
      {shoppingLists.length === 0 ? <h2>{titleEmpty}</h2> : <h2>{title}</h2>}

      <div className="shopping-list">
        {shoppingLists.map((list, index) => (
          <ShoppingCard
            list={list}
            key={index}
            setShoppingData={setShoppingData}
          />
        ))}
      </div>
    </div>
  );
};

export default ShoppingList;
