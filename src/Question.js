import React from 'react';

class Question extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            question: "What is 2*4?",
        }
    }
    render() {
        return (
            <div className="question">
                <h1>Question {this.props.question}</h1>
            </div>
        )
    }
}

export default Question;