import { createContext } from "react";
import React from "react";
import data from "./products.json";
import { useEffect, useState } from "react";

const userContext = createContext();

export const DataProvider = ({ children }) => {
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
    <userContext.Provider
      value={{ items, setItems, stock, setStock, price, setPrice }}
    >
      {children}
    </userContext.Provider>
  );
};

export default userContext;
