import { createContext } from "react";
import React from "react";
import data from "./products.json";
import { useEffect, useState } from "react";

const userContext = createContext();

export const DataProvider = ({ children }) => {
  //All states which is used in the project
  const [items, setItems] = useState([]);
  const [stock, setStock] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    //INitially set the Product data's to the items
    setItems(data.products);
    //Seperate stock in order to render quanity in select box
    setStock(data.products.map((items) => items.stock));

    const IndividualPrice = data.products.map((item) => item.price);
    //Total price of the added product
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
