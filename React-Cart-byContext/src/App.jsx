import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "./UserContext";
import Card from "./Card";
import TotalCart from "./TotalCart";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Card></Card>
        <TotalCart></TotalCart>
      </DataProvider>
    </div>
  );
}

export default App;
