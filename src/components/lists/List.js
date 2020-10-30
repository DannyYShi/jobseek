import React from "react";
import Card from "../cards/Card";
import "./List.css";
import FormDialog from "../cards/FormDialog";
import { Droppable } from "react-beautiful-dnd";

function List(props) {
  return (
    <div className="list">
      <header className="list-header">
        <h2>{props.list.list_name}</h2>
      </header>
      <Droppable droppableId={props.id.toString()}>
        {(provided) => (
          <div
            className="list-cards"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {props.list.cards.map((card, index) => (
              <Card
                key={card.card_id}
                id={card.card_id}
                index={index}
                position={card.position_applied}
                companyName={card.company_name}
                jobLocation={card.job_location}
                jobUrl={card.job_url}
                jobDescription={card.job_description}
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
