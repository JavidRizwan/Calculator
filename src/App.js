import React from "react";
import { Calculator } from "./features/calculator/calculator";
import "./App.scss";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App text-center">
      <h1>Calculator</h1>
      <Calculator />
      <p>Made with ❤️</p>
    </div>
  );
}

export default App;
