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
import TotalCart from "./TotalCart";

function Card() {
  const { items, setItems, stock, price } = useContext(userContext);

  const handleChange = (e, id, eachPrice, index) => {
    let updatedPrice = items.map((value) => {
      if (value.id == id) {
        return { ...value, ["subTotal"]: e.target.value * eachPrice };
      }
      return value;
    });
    setItems(updatedPrice);
    console.log(updatedPrice);
    console.log(items);
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
                    className="form-select"
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
            <Button style={{ color: "orange", marginTop: -80 }}>Remove</Button>
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
      <TotalCart></TotalCart>
    </Container>
  );
}

export default Card;
