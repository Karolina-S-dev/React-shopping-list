import { useState } from "react";
import "./assets/css/App.css";
import ShoppingForm from "./components/ShoppingForm";
import ShoppingList from "./components/ShoppingList";
import { shoppingList } from "./utils/mockTasks";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer transition={Flip} />
    </>
  );
}

export default App;
