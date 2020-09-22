import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import STORE from "./STORE";
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
      console.log("im working on it");
    }
  };

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>jobseek</h1>
        </header>
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
