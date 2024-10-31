import React, { useState, useEffect } from "react";
import NameTag from "./NameTag";
import UserInput from "./UserInput.js";

const App = () => {
  const [names, setnames] = useState(
    JSON.parse(localStorage.getItem("names")) || []
  );

  const removeName = (clickedIndex) => {
    const newNames = names.filter((_, index) => index !== clickedIndex);
    setnames(newNames);
  };

  const addName = (name) => {
    setnames([name, ...names]);
  };

  useEffect(() => {
    localStorage.setItem("names", JSON.stringify(names));
    [names];
  });

  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      <UserInput addName={addName} />
      {names.map((name, index) => (
        <NameTag
          key={index}
          index={index}
          name={name}
          removeName={removeName}
        />
      ))}
    </div>
  );
};

export default App;
