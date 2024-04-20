import React from "react";
import "./App.css";
import Cards from "./Cards";

import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
    
      <Router>
        <Cards />
      </Router>
    </>
  );
}

export default App;
