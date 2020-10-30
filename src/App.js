import React, { useState, useEffect } from "react";
import "./App.css";
import config from "./config";
import List from "./components/lists/List";
//import STORE from "./STORE";
import Header from "./components/header/Header";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [lists, setLists] = useState([]);

  const updateList = (list, i) => {
    lists[i] = list
    setLists([...lists])
    loadData();
  };

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const listResponse = await fetch(config.LIST_ENDPOINT);
    const listData = await listResponse.json();
    setLists(listData);
  };

  const updateCardLocation = async (url = config.CARD_ENDPOINT, data = {}) => {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
    updateList()
  }

  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    if (destination.droppableId === source.droppableId) {
      const sourceList = lists[source.droppableId];
      const destList = lists[destination.droppableId];

      const newCardsList = Array.from(sourceList.cards);
      const draggedCard = newCardsList[source.index];
      newCardsList.splice(source.index, 1);
      newCardsList.splice(destination.index, 0, draggedCard);
      const newList = { ...destList, cards: newCardsList };
      console.log(newList);
      updateList(newList, destList.id);
    }
    if (destination.droppableId !== source.droppableId) {
      const sourceList = lists[source.droppableId - 1];
      const destList = lists[destination.droppableId - 1];
      const sourceListId = lists[source.droppableId - 1].list_id;
      const destListId = lists[destination.droppableId - 1].list_id;
      const sourceListCards = Array.from(sourceList.cards);
      const destListCards = Array.from(destList.cards);
      const draggedCard = sourceListCards[source.index];
      console.log(draggedCard)
      updateCardLocation(config.CARD_ENDPOINT + parseInt(draggedCard.card_id), {
        'list_id': parseInt(destListId),
      })
      // sourceListCards.splice(source.index, 1);
      // destListCards.splice(destination.index, 0, draggedCard);
      // const newList = { ...destList, cards: destListCards };
      // console.log(newList);
      // const updatedSourceList = { ...sourceList, cards: sourceListCards };
      // console.log(updatedSourceList)
      // updateList(newList, destListId);
      // updateList(updatedSourceList, sourceListId)
    }
  };

  return (
    <div className="App">
      <main>
        <Header />
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="App-list">
            {lists.map((list) => (
              <List
                key={list.list_id}
                id={list.list_id}
                list={list}
                updateList={updateList}
              />
            ))}
          </div>
        </DragDropContext>
      </main>
    </div>
  );
}

export default App;
