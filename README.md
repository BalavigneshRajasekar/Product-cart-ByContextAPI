
# Cart Management React useContext Task

Used useContext to manage the cart item which is added in the cart. Calculating the prize when quantity increase and Manage the subTotal based on the quantity increased . Managing Total price when cart quantity increased and when cart item is removed



## Documentation

#### Card Component
Card that is responsible for rendering a list of products in a shopping cart. The component uses React hooks, specifically useContext, useState, and useEffect, to manage the state of the cart items, total price, and product stock.

Here's a breakdown of the selected code:

1.
Import statements: The code imports necessary React components and hooks, as well as the userContext from the UserContext.jsx file.

2.
Card function component: This function component is defined and receives no props.

3.
const { items, setItems, stock, setTotalPrice } = useContext(userContext);: This line destructures the necessary state and setter functions from the userContext. items represents the list of cart items, setItems is the function to update the cart items, stock is an array representing the available stock for each product, and setTotalPrice is the function to update the total price.

4.
const customImages = [...];: This line initializes an array of custom image file names for the products.
5.
handleChange function: This function is called when the user selects a different quantity for a product in the cart. It updates the subtotal for the selected product and the total price of the cart.

6.
handleRemove function: This function is called when the user clicks the "Remove" button for a product in the cart. It removes the product from the cart and updates the total price accordingly.

7.
JSX code: The JSX code inside the return statement renders the list of products in the cart. Each product is represented by a Paper component, which contains the product image, details, quantity selector, subtotal, and remove button. The handleChange and handleRemove functions are passed as props to the relevant components.


#### UserContext component

This component is Context API which holding all the state needed to the project.
from here we send all data as a value to Provide component
## Demo

https://product-cart-by-context-api.vercel.app/


## Run Locally

Clone the project

```bash
  git clone https://github.com/BalavigneshRajasekar/Product-cart-ByContextAPI.git
```

Go to the project directory

```bash
  cd React-Cart-byContext
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

