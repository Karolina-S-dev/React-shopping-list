import "./assets/css/App.css";
import ShoppingCard from "./components/ShoppingCard";
import {shoppingList} from "./utils/mockTasks"

function App(){
  return(
    <>
    <ShoppingCard task = {shoppingList[0]}/>
    </>
  )
}

export default App;