import React from "react";
import BMICalculator from "./BMICalculator.jsx";
import "./App.css";

function App() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
    }}>
    

      <BMICalculator />

    </div>
  );
}

export default App;
