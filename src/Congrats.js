import React from 'react';
import ReactDOM from 'react-dom';
import './Congrats.css';
import Levels from './Levels';

function Congrats() {
    return(
        <div className="Congrats">
            <div className="container">
                <div className="message">
                    <h2>Congratulations, you completed all the levels available!</h2>
                    <h3>More to come soon!</h3>
                    <button onClick={_ => document.location.reload()}>Home</button>
                    <button onClick={_ => ReactDOM.render(<React.StrictMode><Levels /></React.StrictMode>, document.getElementById("root"))}>Levels</button>
                </div>
            </div>
        </div>
    )
}

export default Congrats;