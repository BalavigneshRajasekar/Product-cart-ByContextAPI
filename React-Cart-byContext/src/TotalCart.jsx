import React, { useContext, useEffect } from "react";
import {
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Paper,
  Typography,
  Button,
  Card,
} from "@mui/material";
import userContext from "./UserContext";
function TotalCart() {
  const { totalPrice } = useContext(userContext);

  return (
    <div>
      <Paper
        elevation={3}
        style={{
          backgroundColor: "white",
          marginTop: 30,
          paddingTop: 30,
          paddingLeft: 10,
          paddingRight: 10,
          paddingBottom: 30,
        }}
      >
        <CardContent
          style={{
            display: "flex",
            flexWrap: "nowrap",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h5" style={{ fontWeight: 600 }}>
            Total Amount :
          </Typography>
          <Typography variant="h5" style={{ fontWeight: 600 }}>
            ${totalPrice}
          </Typography>
        </CardContent>
        <CardActions>
          <Button variant="contained" style={{ marginLeft: 10 }}>
            Checkout
          </Button>
        </CardActions>
      </Paper>
    </div>
  );
}

export default TotalCart;
