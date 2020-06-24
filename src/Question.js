import React from 'react';
var obj = require("./Questions.json");

class Question extends React.Component {
    render() {
        var question = obj["question"+this.props.questionNum];
        return (
            <div className="question">
                <h1>Level {this.props.questionNum}</h1>
                <h2>{question}</h2>
            </div>
        )
    }
}

export default Question;