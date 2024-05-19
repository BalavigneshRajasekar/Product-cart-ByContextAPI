import { createContext } from "react";
import React from "react";
import data from "./products.json";
import { useEffect, useState } from "react";

const userContext = createContext();

export const DataProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [stock, setStock] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    console.log(data.products);
    setStock(data.products.map((items) => items.stock));

    setItems(data.products);

    const IndividualPrice = data.products.map((item) => item.price);
    setTotalPrice(IndividualPrice.reduce((x, y) => x + y));
  }, []);
  return (
    <userContext.Provider
      value={{
        items,
        setItems,
        stock,
        setStock,
        totalPrice,
        setTotalPrice,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default userContext;
