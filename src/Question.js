import React from 'react';
import ReactDOM from 'react-dom';
import './Question.css';
var obj = require("./Questions.json");

class Question extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ""}
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    componentDidMount () {
        document.getElementById("ans").addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) {
                document.getElementById("ansSubmit").click();
            }
        });
    }
    render() {
        var nextLevelBtn = document.getElementById("rightArrow");
        var questionNum = this.props.questionNum;
        var getQuestion = obj["question"+questionNum];
        var output = [];
        function renderQuestion() {
            var individualClue = getQuestion.split("\n");
            for (var i=0; i<individualClue.length; i++) {
                output.push(<h3 key={i}>{individualClue[i]}</h3>);
            }
        }
        renderQuestion();
        function renderPreviousLevel() {
            if (questionNum === 1) document.location.reload()
            else ReactDOM.render(<React.StrictMode><Question questionNum={questionNum-1} /></React.StrictMode>, document.getElementById("root"))
        }
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
                <div className="container">
                    <div className="question">
                        <h1>Level {questionNum}</h1>
                        {output}
                        <input type="text" id="ans" placeholder="Answer" onChange={this.handleChange}></input>
                        <button type="submit" id="ansSubmit" onClick={_ => {
                            var value = this.state.value;
                            if (value !== obj["ans"+questionNum]) {
                                document.getElementById("CorI").innerHTML = "Incorrect! Try again.";
                            }
                            else {
                                document.getElementById("CorI").innerHTML = "Correct! Head to the next level.";
                                // document.cookie = `solved${this.props.questionNum}=true`;
                                nextLevelBtn.setAttribute("class", "active")
                                nextLevelBtn.onclick = function () {
                                    renderNewLevel();
                                }
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