import React, { useContext, useEffect, useState } from "react";
import { userContext } from "./UserContext";

function Card() {
  const [product, setProduct] = useState([]);
  const data = useContext(userContext);
  useEffect(() => {
    setProduct(data);
  });
  console.log(product);
  return (
    <div>
      {product.map((value) => (
        <div key={value.id}>
          <h1>{value.title}</h1>
        </div>
      ))}
    </div>
  );
}

export default Card;
