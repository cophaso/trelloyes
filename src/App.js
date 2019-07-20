import React from 'react';
import STORE from './store.js';
import List from './List.js';
import './App.css';

function App() {
  return (
    <main className='App'>
      <header className="App-header">
        <h1>Trelloyes!</h1>
      </header>
      <div className="App-list">
      {STORE.lists.map((list, i) => (
          <List key={i} header={list.header} cardIds={list.cardIds}></List>
        ))}
      </div>
    </main>
  );
}

export default App;
