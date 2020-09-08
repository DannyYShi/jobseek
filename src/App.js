import React from "react";
import "./App.css";
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <main>
        <header className="App-header">
          <h1>jobseek</h1>
        </header>
        <div className="App-list">
          <List listTitle="Wishlist" />
          <List listTitle="Applied" />
          <List listTitle="Interview" />
          <List listTitle="Offered" />
          <List listTitle="Rejected" />
        </div>
      </main>
    </div>
  );
}

export default App;
