import React, { useContext, useEffect, useState } from "react";
import { ProductStock, userContext } from "./UserContext";

function Card() {
  const { items, stock, price } = useContext(userContext);
  // const stock = useContext(ProductStock);

  const [updatePrice, setUpdatePrice] = useState(1);

  const handleChange = (e, id) => {
    console.log(e.target.value);
    console.log(id);
  };

  return (
    <div>
      {items.map((value, index) => (
        <div key={value.id}>
          <h1>{value.title}</h1>
          <h5>{value.brand}</h5>
          <p>{value.description}</p>
          <p>{value.price}</p>
          <select onChange={(e) => handleChange(e, value.id)}>
            {Array.from({ length: stock[index] }, (_, index) => index + 1).map(
              (data, index1) => {
                return (
                  <option key={index1} value={data}>
                    {data}
                  </option>
                );
              }
            )}
          </select>
        </div>
      ))}
    </div>
  );
}

export default Card;
