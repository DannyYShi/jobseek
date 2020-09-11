import React, { useState } from "react";
import Card from "./Card";
import "./List.css";
import FormDialog from "./FormDialog";

/*
function List(props) {
  const [cards, setCards] = useState([{ title: "foo" }]);
  function handleClick(e) {
    const newCards = [...cards, { title: "bar" }];
    setCards(newCards);
  }
  return (
    <div className="list">
      <header className="list-header">
        <h2>{props.listTitle}</h2>
      </header>
      <div className="list-cards">
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
      <button type="button" className="add-new-job" onClick={handleClick}>
        Add new job
      </button>
    </div>
  );
}
export default List;
*/

function List(props) {
  const [cards, setCards] = useState([
    { position: "Apple", companyName: "Web Developer" },
  ]);

  function updateList(position, companyName) {
    setCards();
  }

  return (
    <div className="list">
      <header className="list-header">
        <h2>{props.listTitle}</h2>
      </header>
      <div className="list-cards">
        {cards.map((card) => (
          <Card {...card} />
        ))}
      </div>
      <FormDialog updateList={updateList} />
    </div>
  );
}
export default List;
