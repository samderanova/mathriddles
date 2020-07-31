import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import How2Play from './How2Play';
import Levels from './Levels';
import Question from './Question';
import Congrats from './Congrats';
import Privacy from './Privacy';
import * as serviceWorker from './serviceWorker';

export default function checkCookies() {
  var cookies = document.cookie;
  var cookieArray = cookies.split(";");
  var solvedClues = [];
  for (var cookie of cookieArray) {
    var testIfNum = parseInt(cookie);
    if (testIfNum) solvedClues.push(testIfNum);
  }
  return solvedClues;
}

ReactDOM.render(<React.StrictMode><App /></React.StrictMode>, document.getElementById('root'));

document.getElementById("play").onclick = function() {
  var cookies = document.cookie;
  if (cookies) {
    var solvedClues = checkCookies();
    var lastClueSolved = solvedClues[solvedClues.length-1];
    if (lastClueSolved === 61) {
      ReactDOM.render(<React.StrictMode><Congrats /></React.StrictMode>, document.getElementById("root"));
    }
    else {
      ReactDOM.render(<React.StrictMode><Question questionNum={lastClueSolved+1} /></React.StrictMode>, document.getElementById("root"));
    }
  }
  else {
    ReactDOM.render(<React.StrictMode><How2Play /></React.StrictMode>, document.getElementById("root"));
  }
}

document.getElementById("levels").onclick = function() {
  ReactDOM.render(<React.StrictMode><Levels /></React.StrictMode>, document.getElementById("root"));
}

document.getElementById("privacy").onclick = function() {
  ReactDOM.render(<React.StrictMode><Privacy /></React.StrictMode>, document.getElementById("root"));
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
