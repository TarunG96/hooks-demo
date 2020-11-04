import './App.css';
import React from 'react';
import Counter from './Counter'

const App = () => {
  const name = 'Tarun Garg'
  return (
    <div className="App">
      <header className="App-header">
        <Counter name= {name} />
      </header>
    </div>
  );
}

export default App;
