import React, { useState } from "react";
import "./App.css";
import List from "./components/lists/List";
import STORE from "./STORE";
import Header from "./components/header/Header";
import { DragDropContext } from "react-beautiful-dnd";

function App() {
  const [lists, setLists] = useState(STORE.lists);

  const updateList = (list, i) => {
    lists[i] = list;
    setLists([...lists]);
  };

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
      const sourceList = lists[source.droppableId];
      const destList = lists[destination.droppableId];
      const sourceListCards = Array.from(sourceList.cards);
      const destListCards = Array.from(destList.cards);
      const draggedCard = sourceListCards[source.index];
      sourceListCards.splice(source.index, 1);
      destListCards.splice(destination.index, 0, draggedCard);
      const newList = { ...destList, cards: destListCards };
      console.log(newList);
      console.log(sourceListCards);
      const updatedSourceList = { ...sourceList, cards: sourceListCards };
      updateList(newList, destList.id);
      updateList(updatedSourceList, sourceList.id);
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
                key={list.id}
                id={list.id}
                list={list}
                updateList={(list, i) => {
                  lists[i] = list;
                  setLists([...lists]);
                }}
              />
            ))}
          </div>
        </DragDropContext>
      </main>
    </div>
  );
}

export default App;
