import React from 'react'
import ReactDOM from 'react-dom'
import Card from '../components/cards/Card'
import { Droppable, DragDropContext } from "react-beautiful-dnd";



it('renders without crashing', () => {

    const div = document.createElement('div');
    const list = {
        id: "0",
        header: "Wishlist",
        cards: [
            { card_id: 1, company_name: "Facebook", position_applied: "Web Developer" },
            { card_id: 2, company_name: "Apple", position_applied: "Genius" },
        ],
    }
    const card = {
        card_id: 1,
        company_name: "Facebook",
        position_applied: "Web Developer",
        job_location: 'somewhere',
        job_url: 'www.something.com',
        job_description: 'some random stuff'
    }
    const updateList = () => { }
    const droppableId = 2
    const index = 4

    ReactDOM.render(
        <DragDropContext>
            <Droppable droppableId={droppableId}>
                <div>
                    <Card
                        id={card.card_id}
                        index={index}
                        position={card.position_applied}
                        companyName={card.company_name}
                        jobLocation={card.job_location}
                        jobUrl={card.job_url}
                        jobDescription={card.job_description}
                        list={list}
                        updateList={updateList} />
                </div>
            </Droppable>
        </DragDropContext>, div);
    ReactDOM.unmountComponentAtNode(div);
})