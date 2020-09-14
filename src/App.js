import React from "react";
import "./App.css";
import List from "./components/List";
import STORE from "./STORE";

function App() {
  const store = {
    lists: [
      {
        id: "1",
        header: "Wishlist",
        cardIds: ["a", "b", "c"],
      },
      {
        id: "2",
        header: "Applied",
        cardIds: ["a", "b", "c"],
      },
      {
        id: "3",
        header: "Interview",
        cardIds: ["a", "b", "c"],
      },
      {
        id: "4",
        header: "Offer",
        cardIds: ["a", "c"],
      },
      {
        id: "5",
        header: "Rejected",
        cardIds: ["a", "b", "c"],
      },
    ],
    allCards: {
      a: { id: "a", position: "First card", companyName: "lorem ipsum" },
      b: { id: "b", position: "Second card", companyName: "lorem ipsum" },
      c: { id: "c", position: "Third card", companyName: "lorem ipsum" },
    },
  };
  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>jobseek</h1>
        </header>
        <div className="App-list">
          {store.lists.map((list) => (
            <List
              key={list.id}
              listTitle={list.header}
              cards={list.cardIds.map((id) => store.allCards[id])}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
