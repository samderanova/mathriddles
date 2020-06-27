import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';
import How2Play from './How2Play';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="home">  
          <h1>Math Riddles Online</h1>
          <button type="button" id="play" onClick={ _ => {
            var cookies = document.cookie;
            if (cookies) {
              var cookieArray = cookies.split(";");
              var solvedClues = [];
              for (var cookie of cookieArray) {
                  solvedClues.push(parseInt(cookie));
              }
              var lastClueSolved = solvedClues[solvedClues.length-1];
              ReactDOM.render(<React.StrictMode><Question questionNum={lastClueSolved+1} /></React.StrictMode>, document.getElementById("root"));
            }
            else {
              ReactDOM.render(<React.StrictMode><How2Play /></React.StrictMode>, document.getElementById("root"));
            }
          }}>Play</button>
          <button type="button" id="levels">Levels</button>
          <h3>IMPORTANT: This game relies on cookies to track progress. Clearing them will therefore clear your own progress!</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
