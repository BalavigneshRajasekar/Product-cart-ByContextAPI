import React from "react";
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
function TotalCart() {
  return (
    <div>
      <Paper
        elevation={3}
        style={{
          backgroundColor: "white",
          marginTop: 30,
          paddingTop: 30,
          paddingLeft: 40,
          paddingRight: 40,
          paddingBottom: 30,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" style={{ fontWeight: 600 }}>
          Total Amount :{" "}
        </Typography>
        <Typography variant="h5" style={{ fontWeight: 600 }}>
          $1000.00{" "}
        </Typography>
      </Paper>
    </div>
  );
}

export default TotalCart;
