import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import STORE from "./STORE";

function App() {
  const [lists, setLists] = useState(STORE.lists);

  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>jobseek</h1>
        </header>
        <div className="App-list">
          {lists.map((list) => (
            <List
              key={list.id}
              list={list}
              updateList={(list, i) => {
                lists[i] = list;
                setLists([...lists]);
              }}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
