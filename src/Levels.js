import React from 'react';
import ReactDOM from 'react-dom';
import './Levels.css';
import Question from './Question';
import './Questions.json';
import checkCookies from './index';


//create buttons labeled from 1 to 100 and stores them in an array
var newButtons = [];
newButtons.push(<button key={1} type="button" id={1}>1</button>)
for (var i=2; i<61; i++) {
    newButtons.push(<button key={i} type="button" id={i} disabled>{i}</button>);
}

class Levels extends React.Component {
    componentDidMount() {
        //check cookies to see if a level has been solved
        var solvedClues = checkCookies();
        for (var i=1; i<=solvedClues.length+1; i++) {
            /* all buttons except the first level have been disbled; removes disabled attribute for those that have been solved
            plus the one directly afterwards that has not been solved yet*/
            document.getElementById(i).removeAttribute("disabled"); 
        }
        //renders the level to the page
        newButtons.forEach(function (element)  {
            document.getElementById(element.props.id).onclick = function () {
                return ReactDOM.render(<React.StrictMode><Question questionNum={element.props.id} /></React.StrictMode>, document.getElementById('root'));
            }
        })
    }
    render () {
        return (
            <div className="levels">
                <div className="container">
                    <div className="buttonQuestions">
                        <h1>Levels</h1>
                        <div className="buttons">
                            <button type="button" className="leftArrow" onClick={() => document.location.reload()}>&larr;</button>
                            {newButtons}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Levels;