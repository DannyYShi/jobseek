import React, { useState } from "react";
import Card from "./Card";
import "./List.css";
import FormDialog from "./FormDialog";

function List(props) {
  return (
    <div className="list">
      <header className="list-header">
        <h2>{props.list.title}</h2>
      </header>
      <div className="list-cards">
        {props.list.cards.map((card) => (
          <Card
            key={card.id}
            position={card.position}
            companyName={card.companyName}
          />
        ))}
      </div>
      <FormDialog list={props.list} updateList={props.updateList} />
    </div>
  );
}
export default List;
