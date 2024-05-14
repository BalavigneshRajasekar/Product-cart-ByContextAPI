import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import data from "./products.json";
import { userContext } from "./UserContext";
import Card from "./Card";
function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    console.log(data.products);
    setItems(data.products);
  }, []);

  return (
    <div className="App">
      <userContext.Provider value={items}>
        <Card></Card>
      </userContext.Provider>
    </div>
  );
}

export default App;
