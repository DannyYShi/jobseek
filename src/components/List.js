import React, { useState } from "react";
import Card from "./Card";
import "./List.css";
import FormDialog from "./FormDialog";

function List(props) {
  const [cards, setCards] = useState([
    { position: "Apple", companyName: "Web Developer" },
  ]);

  function updateList(position, companyName) {}

  return (
    <div className="list">
      <header className="list-header">
        <h2>{props.listTitle}</h2>
      </header>
      <div className="list-cards">
        {props.cards.map((card) => (
          <Card
            key={card.id}
            position={card.position}
            companyName={card.companyName}
          />
        ))}
      </div>
      <FormDialog updateList={updateList} />
    </div>
  );
}
export default List;
