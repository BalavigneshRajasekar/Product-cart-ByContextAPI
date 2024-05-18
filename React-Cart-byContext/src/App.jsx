import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import data from "./products.json";
import { userContext } from "./UserContext";
import Card from "./Card";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const [items, setItems] = useState([]);
  const [stock, setStock] = useState([]);
  const [price, setPrice] = useState([]);

  useEffect(() => {
    console.log(data.products);
    setStock(data.products.map((items) => items.stock));
    setPrice(data.products.map((items) => items.price));
    setItems(data.products);
  }, []);

  return (
    <div className="App">
      <userContext.Provider
        value={{ items, setItems, stock, setStock, price, setPrice }}
      >
        <Card></Card>
      </userContext.Provider>
    </div>
  );
}

export default App;
