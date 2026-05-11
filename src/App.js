import { useState } from "react";
import "./assets/css/App.css";
import ShoppingCard from "./components/ShoppingCard";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";
import { shoppingList } from "./utils/mockTasks";

function App() {
  const [shoppingData, setShoppingData] = useState([]);

  const finishedShoppingLists = shoppingData.filter((list) => list.completed);
  const unfinishedShoppingLists = shoppingData.filter(
    (list) => !list.completed,
  );

  return (
    <>
      <ShoppingForm setShoppingData={setShoppingData} />
      <div className="shopping-lists-container">
        <ShoppingList
          title="Active shopping lists"
          shoppingLists={unfinishedShoppingLists}
          setShoppingData={setShoppingData}
        />
        <ShoppingList
          title="Completed shopping lists"
          shoppingLists={finishedShoppingLists}
          setShoppingData={setShoppingData}
        />
      </div>
    </>
  );
}

export default App;
