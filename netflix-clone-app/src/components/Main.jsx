import React from "react";
import Face from "./Face";
import Container from "./Container";

export default function Main() {
  
  return (
    <div className="main">
      <Face />
      <div id="recommendation">
        <h2>Recommendations</h2>
      </div>
      <Container />
    </div>
  );
}
