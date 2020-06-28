import React from 'react';
import ReactDOM from 'react-dom';
import Question from './Question';
import './How2Play.css';

function How2Play() {   
    return (
        <div className="How2Play">
            <div className="container">
                <div className="play">
                    <h1>How to Play</h1>
                    <p>There are 100 levels (and maybe more in the future!) to solve in this game. Each level provides mathematical
                        clues that will help the player discover the correct answer to the level. For example:</p>
                    <h3>2 + 4 = x</h3>
                    <h3>x + 5 = ?</h3>
                    <p>Using algebra, the answer, indicated by the question mark, is 11. Unfortunately, the clues won't be as 
                        simple as the ones in this level, but the underlying concept is quite understandable. Also, each clue 
                        contains different patterns that need to be applied to the rest of the clues in order to complete the 
                        level. Naturally, until one level is solved, the player may not move on to the next one.</p>
                    <h2>Good luck and let your skills be put to the test!</h2> 
                    <button type="button" onClick={_ => ReactDOM.render(<React.StrictMode><Question questionNum={1} /></React.StrictMode>, document.getElementById("root"))}>Level 1</button>
                </div>
            </div>
        </div>
    )
}

export default How2Play;