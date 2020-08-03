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
          <div className="cookieWarning">
            <p>This game uses cookies to track your progress. By playing and completing levels in this game, you 
              agree to this use. Please read our&nbsp; 
              <span id="privacy">Privacy Policy</span> to learn more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;