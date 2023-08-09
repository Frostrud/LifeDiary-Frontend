import React, { useState } from "react";

const ItemForm = ({ onSubmit }) => {
  const [itemName, setItemName] = useState("");

  const handleNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(itemName);
    setItemName("");
  };

  return (
    <form className="collection-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={itemName}
        onChange={handleNameChange}
        placeholder="Enter collection name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ItemForm;