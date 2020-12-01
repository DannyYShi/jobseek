import React from "react";
import config from '../../app/config'
import { Draggable } from "react-beautiful-dnd";
import useModal from '../modals/useModal'
import DetailsModal from '../modals/DetailsModal'
import './Card.css'


export default function JobCard(props) {

  const { isShowing, toggle } = useModal();

  const deleteData = async (url = config.CARD_ENDPOINT, data = {}) => {
    await fetch(url, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(data),
    });
  };

  async function handleDelete(id) {
    await deleteData(config.CARD_ENDPOINT + id, {
      'card_id': id,
    })
    const listCopy = { ...props.list }
    const indexToDelete = listCopy.cards.findIndex((card) => card.card_id === id)
    listCopy.cards.splice(indexToDelete, 1)
    props.updateList(listCopy, listCopy.list_id - 1)
  }

  return (
    <Draggable draggableId={props.id.toString()} index={props.index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.dragHandleProps}
          {...provided.draggableProps}>

          <div className='job-app'>
            <h2>{props.companyName}</h2>
            <p>{props.position}</p>
            <button className="button-default" onClick={toggle}>Edit</button>
            <DetailsModal
              isShowing={isShowing}
              hide={toggle}
              id={props.id}
              company_name={props.companyName}
              job_position={props.position}
              job_location={props.jobLocation}
              job_url={props.jobUrl}
              job_description={props.jobDescription}
              updateList={props.updateList}
              list={props.list}
            />
            <button onClick={() => handleDelete(props.id)}>Delete</button>
          </div>
        </div>
      )}
    </Draggable>
  );
}
