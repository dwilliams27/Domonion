import React from 'react';
import Hand from './app/components/Hand';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Card from './app/components/Card';
import './App.css';

function App() {
  return (
    <div className="App">
      <DndProvider backend={HTML5Backend}>
        <header className="App-header">
          <Hand cards={
            [
              { initialValue: 1, name: "Copper" },
              { initialValue: 1, name: "Copper" },
              { initialValue: 1, name: "Copper" },
              { initialValue: 1, name: "Copper" },
              { initialValue: 1, name: "Copper" },
            ]
          } />
        </header>
      </DndProvider>sg
    </div>
  );
}

export default App;
