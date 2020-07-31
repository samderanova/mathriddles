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
                    <a href="#cookies">Cookies</a>
                    <a href="#ga">Google Analytics</a>
                </div>
                <div className="col-md">
                    <p>Hello! Thanks for choosing to play this game. This privacy policy is for you can understand what
                        information this game collects about you, so you can play with an easy mind without any concerns
                        about your privacy. The following sections are the information that the application logs and collects.
                    </p>
                    <h2 id="cookies">Cookies</h2>
                    <p>This application utilizes cookies for the sole purpose of logging your progress, the levels you've completed
                        and those you haven't. As a result, the entire game relies on these cookies! This means that if you choose
                        to block or clear cookies on this website, this game will be very difficult to play. Thus by clicking the 
                        "play" button or accessing any of the levels through the "levels" button, you automatically choose to allow 
                        the game to set cookies on your browser.
                        <br></br><br></br>
                        To see what cookies the game sets, you can either access the cookie settings of your browser or navigate
                        through the Developer Tools of your browser.
                    </p>
                    <h2 id="ga">Google Analytics</h2>
                    <p>If you're checking out the cookies the website has logged, you may see some unfamiliar ones. These 
                        are cookies set by Google Analytics. We use this Google service to track consumer behavior on the webiste
                        as well as overall website performance, so we can continue to add to the game.
                        <br></br><br></br>
                        If you feel uncomfortable about this tracking mechanism, feel free to block trackers in your browser settings
                        or turn on "Do Not Track" requests.
                        <br></br><br></br>
                        For more on information gathering, please visit the "Measure performance" section at&nbsp;
                        <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>.
                    </p>
                </div>
                
            </div>
        )
    }
}

export default Privacy;