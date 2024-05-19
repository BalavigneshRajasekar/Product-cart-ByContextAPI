import React, { useContext } from "react";

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
import { Delete } from "@mui/icons-material";

function Card() {
  const { items, setItems, stock, setTotalPrice } = useContext(userContext);
  //Images which are provided in data its not working that y used custom images
  const customImages = [
    "iphone.jpg",
    "iphone10.jpg",
    "samsunguniverse.jpg",
    "oppof19.jpg",
    "p30.jpg",
  ];

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

    setTotalPrice(total.reduce((x, y) => x + y)); //TotalPrice
  };

  const handleRemove = (id) => {
    //Remove the cart based on the ID
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

    setTotalPrice(deletedValue.reduce((x, y) => x + y));
  };

  return (
    <Container>
      <div className="d-flex justify-content-between">
        <Typography
          variant="h6"
          style={{ marginTop: "10px", fontWeight: 600, padding: "10px" }}
        >
          Total Product's in the Cart :
        </Typography>

        <Typography
          variant="h6"
          style={{
            marginTop: "10px",
            fontWeight: 600,
            backgroundColor: "black",
            padding: "10px",
            color: "white",
            borderRadius: "50%",
          }}
        >
          {items.length}
        </Typography>
      </div>
      {items.map((eachProd, index) => (
        <Paper
          elevation={3}
          style={{ backgroundColor: "#f6f5f8", marginTop: 30 }}
          key={index}
        >
          <div className="d-md-flex gap-3 px-2 py-5   rounded-3 ">
            <div>
              <CardMedia
                component="img"
                height="160"
                image={customImages[index]}
                sx={{ width: 140, marginLeft: 2.5 }}
              ></CardMedia>
            </div>
            <div
              className="d-flex justify-content-between "
              style={{ width: "100%" }}
            >
              <div>
                <CardContent>
                  <Typography variant="h4">{eachProd.title}</Typography>
                  <Typography variant="h6" style={{ marginTop: "10px" }}>
                    Description :
                  </Typography>
                  <Typography
                    variant="p"
                    style={{ color: "#b3b3b5", fontSize: "1.5rem" }}
                  >
                    {eachProd.description}
                  </Typography>
                  <Typography
                    variant="h6"
                    style={{ marginTop: "10px", fontWeight: 600 }}
                  >
                    Sustainability
                  </Typography>
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
                      marginTop: "10px",
                      color: "orange",
                      fontWeight: 700,
                      textAlign: "center",
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
              endIcon={<Delete></Delete>}
              style={{ color: "orange", marginTop: -80, fontWeight: 700 }}
              onClick={() => handleRemove(eachProd.id)}
            >
              Remove
            </Button>
          </CardActions>
          <Divider component="div" style={{ marginTop: -30 }}></Divider>
          <CardContent className="py-5">
            <div className="d-flex justify-content-between">
              <Typography
                variant="h6"
                style={{ fontWeight: 600, color: "#b3b3b5" }}
              >
                Subtotal :
              </Typography>
              <Typography variant="h6" style={{ fontWeight: 600 }}>
                ${eachProd.subTotal ? eachProd.subTotal : eachProd.price}
                .00
              </Typography>
            </div>
            <div className="d-flex justify-content-between mt-4">
              <Typography
                variant="h6"
                style={{ fontWeight: 600, color: "#b3b3b5" }}
              >
                Shipping :
              </Typography>
              <Typography variant="h6" style={{ fontWeight: 600 }}>
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
