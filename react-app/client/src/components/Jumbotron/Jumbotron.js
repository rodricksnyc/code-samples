import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div
    style={{ height: 170, clear: "both", paddingTop: 10, textAlign: "center", background: "white" }}
    className="jumbotron"  >
    {children}
  </div>
);

export default Jumbotron;
