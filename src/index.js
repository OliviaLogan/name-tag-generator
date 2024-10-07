import React from "react";
import ReactDOM from "react-dom";
import NameTag from "./NameTag";

import "./styles.css";

const App = () => (
  <div className="App">
    <h1>Name Tag Generator</h1>
    <NameTag name="Lauren" />
    <NameTag name="Emily" />
    <NameTag name="Dave" />
    <NameTag name="Henry" />
    <NameTag name="William" />
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
