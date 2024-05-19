import React, { useContext } from "react";
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
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import userContext from "./UserContext";
function TotalCart() {
  const { totalPrice } = useContext(userContext);

  return (
    <div>
      <Container>
        <Paper
          elevation={3}
          style={{
            backgroundColor: "#f6f5f8",
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
              ${totalPrice}.00
            </Typography>
          </CardContent>

          <Typography
            style={{
              color: "orange",
              fontWeight: 700,
              textAlign: "end",
              fontSize: "0.6rem",
            }}
          >
            * Get Daily Offer With Nespola Card
          </Typography>
          <CardActions>
            <Button
              color="success"
              variant="contained"
              style={{ marginLeft: 10, marginTop: -40 }}
              endIcon={<ShoppingCartIcon></ShoppingCartIcon>}
            >
              Proceed
            </Button>
          </CardActions>
        </Paper>
      </Container>
    </div>
  );
}

export default TotalCart;
