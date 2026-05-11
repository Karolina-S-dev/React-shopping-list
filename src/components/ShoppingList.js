import ShoppingCard from "./ShoppingCard";

const ShoppingList = ({ shoppingLists, setShoppingData}) => {
  return (
    <div className="shopping-list">
      {shoppingLists.map((list, index) => (
        <ShoppingCard list={list} key={index} setShoppingData={setShoppingData} />
      ))}
    </div>
  );
};

export default ShoppingList;
