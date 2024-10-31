import React, { useState } from "react";

const UserInput = ({ addName }) => {
  const [inputName, setInputName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addName(inputName);
    setInputName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={(e) => setInputName(e.target.value)}
        type="text"
        placeholder="Add a new name here..."
        value={inputName}
      />
      <input type="submit" value="Create Name Tag" />
    </form>
  );
};

export default UserInput;
