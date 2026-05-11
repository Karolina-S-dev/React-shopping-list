import { useState } from "react";
import "./assets/css/App.css";
import ShoppingCard from "./components/ShoppingCard";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";
import { shoppingList } from "./utils/mockTasks";

function App() {
  const [shoppingData, setShoppingData] = useState([]);

  return (
    <>
      <ShoppingForm setShoppingData={setShoppingData} />
      <ShoppingList shoppingLists={shoppingList} setShoppingData={setShoppingData}/>
    </>
  );
}

export default App;
