import React from 'react';
import './Levels.css';

function Levels() {
    var newButtons = [];
    for (var i=1; i<101; i++) {
        newButtons.push(<button key={i} type="button" id={i}>{i}</button>);
    }
    return (
        <div className="container">
            <div className="levels">
                <h1>Levels</h1>   
                {newButtons}
            </div>
        </div>
    );
}

export default Levels;