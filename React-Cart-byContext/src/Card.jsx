import React, { useContext, useEffect, useState } from "react";
import { userContext } from "./UserContext";
import {
  CardActions,
  CardContent,
  CardMedia,
  Container,
  MenuItem,
  Paper,
  Select,
  Typography,
  Button,
  Divider,
} from "@mui/material";

function Card() {
  const { items, stock, price } = useContext(userContext);

  const [updatePrice, setUpdatePrice] = useState();
  const [quantity, setQuantity] = useState(10);

  const handleChange = (e, id) => {
    console.log(e.target.value);

    setQuantity(e.target.value);
  };

  return (
    <Container className="container-fluid ">
      <Paper
        elevation={3}
        style={{ backgroundColor: "white", height: "100vh" }}
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
                <Typography variant="h4">Iphone 16</Typography>
                <Typography variant="h6">Description</Typography>
                <Typography variant="p">
                  An apple mobile which is nothing like
                </Typography>
              </CardContent>
            </div>

            <div className="d-flex justify-content-between">
              <CardContent>
                <Select
                  value={quantity}
                  onChange={(e) => handleChange(e)}
                  defaultValue={quantity}
                >
                  <MenuItem value={10}>10</MenuItem>
                  <MenuItem value={20}>20</MenuItem>
                  <MenuItem value={30}>30</MenuItem>
                </Select>
              </CardContent>
              <Typography variant="h5" sx={{ fontWeight: 600, marginTop: 3.5 }}>
                $254.00
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
              $254.00
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
    </Container>
  );
}

export default Card;

// {
//   items.map((value, index) => (
//     <div key={value.id}>
//       <h1>{value.title}</h1>
//       <h5>{value.brand}</h5>
//       <p>{value.description}</p>
//       <p>{value.price}</p>
//       <select onChange={(e) => handleChange(e, value.id)}>
//         {Array.from({ length: stock[index] }, (_, index) => index + 1).map(
//           (data, index1) => {
//             return (
//               <option key={index1} value={data}>
//                 {data}
//               </option>
//             );
//           }
//         )}
//       </select>
//     </div>
//   ));
// }
