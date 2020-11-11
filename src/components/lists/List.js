import React from "react";
import Card from "../cards/Card";
import "./List.css";
//import FormDialog from "../cards/FormDialog";
import AddJobModal from '../modals/AddJobModal'
import useModal from '../modals/useModal'
import { Droppable } from "react-beautiful-dnd";

function List(props) {
  const { isShowing, toggle } = useModal();

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
      <button className="button-default" onClick={toggle}>ADD NEW CARD</button>
      <AddJobModal
        list={props.list}
        updateList={props.updateList}
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  );
}
export default List;
