import React from 'react'
import ReactDOM from 'react-dom'
import List from '../components/lists/List'
import { DragDropContext } from "react-beautiful-dnd";


it('renders without crashing', () => {
    const onDragEnd = () => { }
    const div = document.createElement('div');
    const list = {
        id: "0",
        header: "Wishlist",
        cards: [
            { card_id: 1, company_name: "Facebook", position_applied: "Web Developer" },
            { card_id: 2, company_name: "Apple", position_applied: "Genius" },
        ],
    }

    const id = 2
    const updateList = () => { }
    ReactDOM.render(
        <DragDropContext onDragEnd={onDragEnd}>
            <List list={list} id={id} updateList={updateList} />
        </DragDropContext>, div);
    ReactDOM.unmountComponentAtNode(div);
})