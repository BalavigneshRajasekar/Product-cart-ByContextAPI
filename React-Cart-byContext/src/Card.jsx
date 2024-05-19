import React, { useContext, useEffect, useState } from "react";
import userContext from "./UserContext";
import {
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
  Button,
  Divider,
} from "@mui/material";

function Card() {
  const { items, setItems, stock, setTotalPrice } = useContext(userContext);

  const handleChange = (e, id, eachPrice, index) => {
    //This Logic will help us to add the Subtotal value to the object
    let updatedPrice = items.map((value) => {
      if (value.id == id) {
        return { ...value, ["subTotal"]: e.target.value * eachPrice };
      }
      return value;
    });
    setItems(updatedPrice);

    //This Logic will help us to add the Total value of already existing cart and new increased quantity
    let total = updatedPrice.map((value, i) => {
      if (i == index) {
        return value.subTotal;
      }
      return value.subTotal ? value.subTotal : value.price;
    });

    setTotalPrice(total.reduce((x, y) => x + y)); //Total Number
    // setDefaultPrice(total); // All Price as an array
  };

  const handleRemove = (id) => {
    setItems(items.filter((f) => f.id !== id));

    // This logic is help us to handle the TotalPrice after cart is removed
    let deletedValue = items.map((value, i) => {
      if (value.id == id) {
        return 0;
      }

      return value.subTotal
        ? value == 0
          ? 0
          : value.subTotal
        : value == 0
        ? 0
        : value.price;
    });
    console.log(deletedValue);
    setTotalPrice(deletedValue.reduce((x, y) => x + y));
  };

  return (
    <Container className="container-fluid ">
      {items.map((eachProd, index) => (
        <Paper
          elevation={3}
          style={{ backgroundColor: "white", marginTop: 30 }}
          key={index}
        >
          <div className="d-md-flex gap-3 px-2 py-5   rounded-3 ">
            <div>
              <CardMedia
                component="img"
                height="140"
                image="iphone.jpg"
                sx={{ width: 140 }}
              ></CardMedia>
            </div>
            <div
              className="d-flex justify-content-between "
              style={{ width: "100%" }}
            >
              <div>
                <CardContent>
                  <Typography variant="h4">{eachProd.title}</Typography>
                  <Typography variant="h6">Description</Typography>
                  <Typography variant="p">{eachProd.description}</Typography>
                </CardContent>
              </div>

              <div className="d-flex justify-content-between">
                <CardContent>
                  <select
                    style={{
                      width: "50px",
                      outline: "none",
                      border: "1px solid grey",
                      height: "30px",
                      borderRadius: "5px",
                    }}
                    onChange={(e) =>
                      handleChange(e, eachProd.id, eachProd.price, index)
                    }
                    defaultValue="1"
                  >
                    {Array.from(
                      { length: stock[index] },
                      (_, index) => index + 1
                    ).map((quan, index1) => (
                      <option value={quan} key={index1}>
                        {quan}
                      </option>
                    ))}
                    ;
                  </select>
                </CardContent>
                <Typography
                  variant="h5"
                  sx={{ fontWeight: 600, marginTop: 3.5 }}
                >
                  ${eachProd.price}.00
                </Typography>
              </div>
            </div>
          </div>
          <CardActions className="d-flex justify-content-end  ">
            <Button
              style={{ color: "orange", marginTop: -80 }}
              onClick={() => handleRemove(eachProd.id)}
            >
              Remove
            </Button>
          </CardActions>
          <Divider component="div" style={{ marginTop: -30 }}></Divider>
          <CardContent className="py-5">
            <div className="d-flex justify-content-between">
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Subtotal :
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                ${eachProd.subTotal ? eachProd.subTotal : eachProd.price}
                .00
              </Typography>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Shipping :
              </Typography>
              <Typography variant="h5" style={{ fontWeight: 600 }}>
                Free
              </Typography>
            </div>
          </CardContent>
          <Divider component="div"></Divider>
        </Paper>
      ))}
    </Container>
  );
}

export default Card;
