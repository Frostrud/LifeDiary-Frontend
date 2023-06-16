import React, { useState } from "react";

const CollectionForm = ({ onSubmit }) => {
  const [collectionName, setCollectionName] = useState("");

  const handleNameChange = (event) => {
    setCollectionName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(collectionName);
    setCollectionName("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={collectionName}
        onChange={handleNameChange}
        placeholder="Enter collection name"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CollectionForm;
