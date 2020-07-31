import React from 'react';
import './Privacy.css';

class Privacy extends React.Component {
    render() {
        return (
            <div className="Privacy">
                <div className="navbar">
                    <button type="button" id="leftArrow" onClick={() => document.location.reload()}>&larr;</button>
                    <h1>Privacy Policy</h1>
                    <hr style={{padding: "0"}}/>
                </div>
                <div className="col-sm">
                    <h2 id="cookies">Cookies</h2>
                    <h2 id="ga">Google Analytics</h2>
                </div>
                <div className="col-md">
                    <p>Hello! Thanks for choosing to play this game. This privacy policy is for you can understand what
                        information this game collects about you, so you can play with an easy mind without any concerns
                        about your privacy. The following sections are the information that the application logs and collects.
                    </p>
                    <h2>Cookies</h2>
                    <p>This application utilizes cookies for the sole purpose of logging your progress, the levels you've completed
                        and those you haven't. As a result, the entire game relies on these cookies! This means that if you choose
                        to block or clear cookies on this website, this game will be very difficult to play. Thus by clicking the 
                        "play" button or accessing any of the levels through the "levels" button, you automatically choose to allow 
                        the game to set cookies on your browser.
                        <br></br><br></br>
                        To see what cookies the game sets, you can either access the cookie settings of your browser or navigate
                        through the Developer Tools of your browser.
                    </p>
                    <h2>Google Analytics</h2>
                    <p>If you're checking out the cookies the website has logged, you may see some unfamiliar ones.</p>
                </div>
                
            </div>
        )
    }
}

export default Privacy;