import React from 'react';
import ReactDOM from 'react-dom';
import './Levels.css';
import Question from './Question.js';
import './Questions.json';

var newButtons = [];
for (var i=1; i<101; i++) {
    newButtons.push(<button key={i} type="button" id={i}>{i}</button>);
}

class Levels extends React.Component {
    componentDidMount() {
        newButtons.forEach(function (element)  {
            document.getElementById(element.props.id).onclick = function () {
                return ReactDOM.render(<React.StrictMode><Question questionNum={element.props.id} /></React.StrictMode>, document.getElementById('root'));
            }
        })
    }
    render () {
        return (
            <div className="levels">
                <button type="button" className="leftArrow">&larr;</button>
                <div className="container">
                    <div className="buttonQuestions">
                        <h1>Levels</h1>
                        <div className="buttons">
                            {newButtons}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Levels;