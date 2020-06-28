import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import How2Play from './How2Play';
import Levels from './Levels';
import Question from './Question';
import * as serviceWorker from './serviceWorker';



ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

document.getElementById("play").onclick = function() {
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
}

document.getElementById("levels").onclick = function() {
  ReactDOM.render(<React.StrictMode><Levels /></React.StrictMode>, document.getElementById("root"));
}



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
