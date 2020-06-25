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
        var getQuestion = obj["question"+this.props.questionNum];
        var output = [];
        function renderQuestion() {
            var individualClue = getQuestion.split("\n");
            for (var i=0; i<individualClue.length; i++) {
                output.push(<h3 key={i}>{individualClue[i]}</h3>);
            }
        }
        renderQuestion();
        return (
            <div className="display">
                <button type="button" id="leftArrow" onClick={() => document.location.reload()}>&larr;</button>
                <button type="button" id="rightArrow" disabled={true}>&rarr;</button>
                <div className="container">
                    <div className="question">
                        <h1>Level {this.props.questionNum}</h1>
                        {output}
                        <input type="text" id="ans" placeholder="Answer" onChange={this.handleChange}></input>
                        <button type="submit" id="ansSubmit" onClick={() => {
                            var value = this.state.value;
                            if (value !== obj["ans"+this.props.questionNum]) {
                                document.getElementById("CorI").innerHTML = "Incorrect! Try again.";
                            }
                            else {
                                document.getElementById("CorI").innerHTML = "Correct!";
                                // document.cookie = `solved${this.props.questionNum}=true`;
                                var nextLevelBtn = document.getElementById("rightArrow");
                                nextLevelBtn.removeAttribute("disabled");
                                nextLevelBtn.setAttribute("onclick", console.log("Hello"));
                            }
                        }}>&uarr;</button>
                    </div>
                    <h3 id="CorI"></h3>
                </div>
            </div>
        )
    }
}

export default Question;