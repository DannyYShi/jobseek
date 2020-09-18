import React, { useState } from "react";
import Card from "./Card";
import "./List.css";
import FormDialog from "./FormDialog";

function List(props) {
  console.log(props.list);
  return (
    <div className="list">
      <header className="list-header">
        <h2>{props.list.header}</h2>
      </header>
      <div className="list-cards">
        {props.list.cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            position={card.position}
            companyName={card.companyName}
            list={props.list}
            updateList={props.updateList}
          />
        ))}
      </div>
      <FormDialog list={props.list} updateList={props.updateList} />
    </div>
  );
}
export default List;
