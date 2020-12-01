import React, { useState, useEffect } from "react";
import "./App.css";
import config from "./config";
import List from "../components/lists/List";
import Header from "../components/header/Header";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [lists, setLists] = useState([]);

  const updateList = (newList, i) => {
    const copyList = lists.slice()
    copyList[i] = newList;
    setLists(copyList);
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
    await fetch(url, {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data),
    });
  }

  const onDragEnd = (result) => {
    const { destination, source } = result;

    console.log(destination, source)

    if (!destination) {
      return;
    } else if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    } else if (destination.droppableId === source.droppableId) {

      const list = { ...lists[source.droppableId - 1] };
      const card = list.cards[source.index];
      list.cards.splice(destination.index, 0, card)
      list.cards.splice(source.index, 1)
      console.log(list)
      updateList(list, list.id);
    }
    if (destination.droppableId !== source.droppableId) {
      // const sourceList = { ...lists[source.droppableId] };
      // const destList = { ...lists[destination.droppableId] };

      // const card = sourceList.cards[source.index];
      // // Put card into destination list
      // destList.cards.splice(destination.index, 0, card)
      // // Remove  card from  source list
      // sourceList.cards.splice(source.index, 1)
      // const newList = { ...destList, cards: newCardsList };
      // updateList(newList, destList.id);
      // updateCardLocation(config.CARD_ENDPOINT + +draggedCard.card_id, {
      //   'list_id': destListId,
      // })

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
