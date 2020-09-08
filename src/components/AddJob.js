import React, { useState } from "react";

function AddJob() {
  const [companyName, setCompanyName] = useState("");
  const [position, setPosition] = useState("");
  const [listName, setListName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    alert(`submitted ${companyName} ${position} ${listName}`);
  }

  return (
    <div className="Add-job-form">
      <header>Add Job</header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Company"
          value={companyName}
          name="companyName"
          onChange={(e) => {
            setCompanyName(e.target.value);
          }}
        />
        <br />
        <input
          type="text"
          placeholder="Position"
          value={position}
          name="positionName"
          onChange={(e) => {
            setPosition(e.target.value);
          }}
        />
        <br />
        <select
          name="listName"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        >
          <option value="">-- Please choose a list --</option>
          <option value="Wishlist">Wishlist</option>
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offered">Offered</option>
          <option value="Rejected">Rejected</option>
        </select>
        <br />
        <input type="submit" value="Save Job" />
      </form>
    </div>
  );
}
export default AddJob;
