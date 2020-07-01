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
    handleChange(event) { this.setState({value: event.target.value}); }
    // simultaneously sets state as the user is typing in the text box
    
    componentDidMount () {
        // when a user clicks enter, their answer is submitted
        document.getElementById("ans").addEventListener("keyup", function(event) {
            event.preventDefault();
            if (event.keyCode === 13) document.getElementById("ansSubmit").click();
        });
    }
    render() {
        // render unique questions based on characters/shapes unable to be read by JSON
        var questionNum = this.props.questionNum;
        var output = [];
        switch (questionNum) {
            case 16:
                output.push(
                    <div key={1}>
                        <h3><span className="shape triangle">&#9651;</span> + <span className="shape square">&#9633;</span> = 2</h3>
                        <h3><span className="shape triangle">&#9651;<sup>3</sup></span> = 216</h3>
                        <h3><span className="shape square">&#9633;<sup>4</sup></span> = ?</h3>
                    </div>
                );
                break;
            case 17:
                output.push(
                    <div key={2}>
                        <h3>A(<span className="circle">&#9675;</span>) = &#960;r<sup>2</sup></h3>
                        <h3><span className="">r = 3</span></h3>
                        <h3>A(&#9675;) = ?</h3>
                        <h3>Round your answer to 3 decimal places.</h3>
                    </div>
                );
                break;
            case 18:
                output.push(
                    <div key={3}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>2</td><td>?</td>
                                </tr>
                                <tr>
                                    <td>10</td><td>4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
                break;
            case 19:
                output.push(
                    <div key={4}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>3</td><td>5</td>
                                </tr>
                                <tr>
                                    <td>6</td><td>10</td>
                                </tr>
                            </tbody>
                        </table>
                        <span className="symbol">*</span>
                        <table>
                            <tbody>
                                <tr>
                                    <td>1</td><td>4</td>
                                </tr>
                                <tr>
                                    <td>2</td><td>9</td>
                                </tr>
                            </tbody>
                        </table>
                        <span className="symbol">=</span>
                        <table>
                            <tbody>
                                <tr>
                                    <td>3</td><td>20</td>
                                </tr>
                                <tr>
                                    <td>12</td><td>?</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Be careful! These aren't matrices!</h3>
                    </div>
                );
                break;
            case 22:
                output.push(
                    <div key={5}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>6</td><td>3</td>
                                </tr>
                                <tr>
                                    <td>100</td><td>42</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td>106</td><td>45</td>
                                </tr>
                                <tr>
                                    <td>?</td><td>252</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
                break;
            case 23:
                output.push(
                    <div key={6}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>1</td><td>5</td>
                                </tr>
                                <tr>
                                    <td>12</td><td>3</td>
                                </tr>
                                <tr>
                                    <td>11</td><td>20</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr><td>6</td></tr>
                                <tr><td>?</td></tr>
                                <tr><td>141</td></tr>
                            </tbody>
                        </table>
                    </div>
                );
                break;
            case 24:
                output.push(
                    <div key={7}>
                        <h3><span className="circle">&#9675;</span> / <span className="shape square">&#9633;</span> = 5</h3>
                        <h3><span className="symbol sqrt">&#8730;</span><span className="shape square">&#9633;</span> = 5</h3>
                        <h3><span className="circle">&#9675;</span> = ?</h3>
                    </div>
                );
                break;
            case 33:
                output.push(
                    <div key={8}>
                        <table>
                            <tbody>
                                <tr>
                                    <td></td><td>25</td><td></td>
                                </tr>
                                <tr>
                                    <td>627</td><td></td><td>???</td>
                                </tr>
                                <tr>
                                    <td></td><td>30</td><td></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
                break;
            case 34:
                output.push(
                    <div key={9}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>0.333</td><td>1.333</td>
                                </tr>
                                <tr>
                                    <td>3</td><td>?</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Round to 3 decimal places.</h3>
                    </div>
                );
                break;
            case 35:
                output.push(<div key={10}><h3>3.14159?6535897932384626</h3></div>);
                break;
            case 36:
                output.push(
                    <div key={11}>
                        <h3><b>Quarter Note </b><span className="symbol quarter">(&#9833;)</span><b> = 116</b></h3>
                        <h3><b>Eigth Note </b><span className="symbol eigth">(&#9834;)</span><b> = ?</b></h3>
                        <h3><span className="symbol">&#9833; + &#9834;</span><b> = 174</b></h3>
                    </div>
                );
                break;
            case 37:
                output.push(
                    <div key={12}>
                        <h3><b>Quarter Note </b><span className="symbol quarter">(&#9833;)</span><b> = 116</b></h3>
                        <h3><b>Sixteenth Note </b><span className="symbol sixteenth">(&#9835;)</span><b> = ?</b></h3>
                    </div>
                );
                break;
            case 38:
                output.push(
                    <div key={13}>
                        <h3><span className="symbol quarter">&#9833;</span><b> / </b><span className="symbol quarter">&#9835;</span>
                        <b> + 2</b><span className="symbol eigth">&#9834;</span><b> = ?</b>
                        </h3>
                    </div>
                );
                break;
            case 44:
                output.push(
                    <div key={14}>
                        <h3>x + y = 120</h3>
                        <h3>y + z = 5</h3>
                        <h3>z = the greatest zero of the graph of x<sup>2</sup> - 1</h3>
                        <h3>x = ?</h3>
                    </div>
                );
                break;
            case 48:
                output.push(
                    <div key={15}>
                        <h3 style={{fontSize: "30px"}}>2<sup>2<sup>2<sup>1<sup>0<sup>2<sup>2<sup>2<sup>2<sup>2<sup>2</sup></sup></sup></sup></sup></sup></sup></sup></sup></sup> = ?</h3>
                    </div>
                );
                break;
            case 51:
                output.push(
                    <div key={16}>
                        <h3><i>i</i><sup>2</sup> = -1</h3>
                        <h3><i>i</i><sup>x</sup> + 3 = x</h3>
                        <h3>x = ?</h3>
                    </div>
                );
                break;
            case 53:
                output.push(
                    <div key={17}>
                        <h3>(2<i>i</i> + 3) - (3<i>i</i> + 31) = ? - <i>i</i></h3>
                    </div>
                );
                break;
            case 54:
                output.push(
                    <div key={18}>
                        <h3>(5<i>i</i> + 2)<sup>2</sup> = ? + 20<i>i</i> + 4</h3>
                    </div>
                );
                break;
            case 56:
                output.push(
                    <div key={19}>
                        <table>
                            <tbody>
                                <tr>
                                    <td>sin</td>
                                    <td>cos</td>
                                    <td>tan</td>
                                </tr>
                                <tr>
                                    <td>   </td>
                                    <td> &#120587; </td>
                                    <td>   </td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <tbody>
                                <tr>
                                    <td>0</td>
                                    <td>?</td>
                                    <td>0</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                );
                break;
            default:
                /* get questions from Questions.json according to the props passed into <Question questionNum = {props} />
                and render each individual line of the clue separated by the \n's from the JSON*/
                function renderQuestion() {
                    var getQuestion = obj["question"+questionNum];
                    var individualClue = getQuestion.split("\n");
                    for (var i=0; i<individualClue.length; i++) {
                        output.push(<h3 key={i}>{individualClue[i]}</h3>);
                    }
                }
                renderQuestion();
        }

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
            ReactDOM.render("", document.getElementById("nextLevel"));
        }
        
        return (
            <div className="display">

                <button type="button" id="leftArrow" onClick={renderPreviousLevel}>&larr;</button>
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
                                document.getElementById("CorI").innerHTML = "Correct! Click the button below to head to the next level.";
                                document.cookie = `${this.props.questionNum}=true`;
                                var nextLevelBtn = <button id="nextLevelBtn" onClick={renderNewLevel}>Advance!</button>
                                ReactDOM.render(nextLevelBtn, document.getElementById("nextLevel"));
                            }
                        }}>&uarr;</button>
                        <p id="CorI"></p>
                        <div id="nextLevel"></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Question;