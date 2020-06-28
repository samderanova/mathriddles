import React from 'react';
import ReactDOM from 'react-dom';
import './Question.css';
import Levels from './Levels';
var obj = require("./Questions.json");

class Question extends React.Component {
    constructor(props) {
        super(props);
        // the onload value of the input text box is ""
        this.state = {value: ""}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        // simultaneously sets state as the user is typing in the text box
        this.setState({value: event.target.value});
    }
    componentDidMount () {
        // when a user clicks enter, their answer is submitted
        document.getElementById("ans").addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) document.getElementById("ansSubmit").click();
        });
    }
    render() {
        var nextLevelBtn = document.getElementById("rightArrow");
        
        // get questions from Questions.json according to the props passed into <Question questionNum = {props} />
        var questionNum = this.props.questionNum;
        var getQuestion = obj["question"+questionNum];
        
        // renders each individual line of the clue separated by the \n's from the JSON
        var output = [];
        function renderQuestion() {
            var individualClue = getQuestion.split("\n");
            for (var i=0; i<individualClue.length; i++) {
                output.push(<h3 key={i}>{individualClue[i]}</h3>);
            }
        }
        renderQuestion();

        // when the left arrow is clilcked, render  previous level; if there is none, reload the homepage
        function renderPreviousLevel() {
            if (questionNum === 1) document.location.reload()
            else ReactDOM.render(<React.StrictMode><Question questionNum={questionNum-1} /></React.StrictMode>, document.getElementById("root"))
        }

        /* after the level is solved, when the right arrow is clicked, render next clue, clear the correct/incorrect text
        and input value*/
        function renderNewLevel() {
            ReactDOM.render(<React.StrictMode><Question questionNum={questionNum+1} /></React.StrictMode>, document.getElementById("root"));
            document.getElementById("CorI").innerHTML = "";
            document.getElementById("ans").value = "";
            nextLevelBtn.onclick = null;
            nextLevelBtn.setAttribute("class", "");
        }
        return (
            <div className="display">
                <button type="button" id="leftArrow" onClick={renderPreviousLevel}>&larr;</button>
                <button type="button" id="rightArrow">&rarr;</button>
                <button type="button" id="toHome" onClick={_ => document.location.reload()}><i className="material-icons">home</i></button>
                <button type="button" id="toLevels" onClick={_ => {
                    ReactDOM.render(<React.StrictMode><Levels /></React.StrictMode>, document.getElementById("root"));
                }}><i className="material-icons">menu</i></button>
                <div className="container">
                    <div className="question">
                        <h1>Level {questionNum}</h1>
                        {output}
                        <input type="text" id="ans" placeholder="Answer" onChange={this.handleChange}></input>
                        <button type="submit" id="ansSubmit" onClick={_ => {
                            var value = this.state.value;
                            var noCommaValue = "";

                            // if a comma is present in the input, remove it and store it in noCommaValue
                            if (value.includes(",")) {
                                var splitNumber = value.split(",");
                                for (var number of splitNumber) { noCommaValue += number; }
                                noCommaValue = Number(noCommaValue);
                            }
                            else noCommaValue = Number(value);

                            // if noCommaValue is not a number or if it's the wrong answer, prompt user to try again
                            if (isNaN(noCommaValue)) document.getElementById("CorI").innerHTML = "Not a valid response! Try again."
                            else if (noCommaValue !== obj["ans"+questionNum]) {
                                document.getElementById("CorI").innerHTML = "Incorrect! Try again.";
                            }
                            else {
                                /* add html to notify user that answer is correct, set cookie saying that the level is solved,
                                make the right arrow active, */
                                document.getElementById("CorI").innerHTML = "Correct! Press the \"space\" key to Head to the next level.";
                                document.cookie = `${this.props.questionNum}=true`;
                                nextLevelBtn.setAttribute("class", "active");
                                nextLevelBtn.onclick = function () { renderNewLevel() }
                                document.body.onkeyup = function(event) {
                                    event.preventDefault();
                                    if (event.keyCode === 32) nextLevelBtn.click();
                                };
                            }
                        }}>&uarr;</button>
                        <p id="CorI"></p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;