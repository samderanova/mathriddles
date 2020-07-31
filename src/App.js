import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="home">  
          <h1>Math Riddles Online</h1>
          <button type="button" id="play">Play</button>
          <button type="button" id="levels">Levels</button>
          <h3>Before you play, please take some time to read our <a href="#" id="privacy">privacy policy</a>!</h3>
        </div>
      </div>
    </div>
  );
}

export default App;