import React from "react";
import Card from "./Card";
import "./List.css";
import FormDialog from "./FormDialog";
import { Droppable } from "react-beautiful-dnd";

function List(props) {
  return (
    <div className="list">
      <header className="list-header">
        <h2>{props.list.header}</h2>
      </header>
      <Droppable droppableId={props.id}>
        {(provided) => (
          <div
            className="list-cards"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.list.cards.map((card, index) => (
              <Card
                key={card.id}
                id={card.id}
                index={index}
                position={card.position}
                companyName={card.companyName}
                list={props.list}
                updateList={props.updateList}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <FormDialog list={props.list} updateList={props.updateList} />
    </div>
  );
}
export default List;
