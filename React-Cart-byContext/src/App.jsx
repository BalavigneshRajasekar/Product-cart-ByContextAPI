import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { DataProvider } from "./UserContext";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <DataProvider>
        <Card></Card>
      </DataProvider>
    </div>
  );
}

export default App;
