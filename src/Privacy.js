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
                <div className="col-md">
                    <p>Thank you for choosing to play this game! This privacy policy is for you can understand what
                        information this game will collect about you, so you can play with an easy mind without any concerns
                        about your privacy. The following sections are the information that the application logs.
                    </p>
                    <h2 id="cookies">Cookies</h2>
                    <p>Cookies are bits of data that are downloaded onto your device when you visit a website, such as this one!
                        There are three types of such cookies: session, persistent, and third-party. Session cookies are stored
                        on your computer as long as you are on a website that uses such cookies and eliminated as soon as you leave
                        the site. Persistent cookies, however, are not deleted and instead, remain on your device until you 
                        delete them manually. Finally, third party cookies are cookies used from another website for purposes 
                        like tracking.
                    </p>
                    <p>The only cookies this game uses are persistent cookies. This application utilizes such cookies for the sole 
                        purpose of logging your progress (the levels you've completed and those you haven't) and nothing else. 
                        None of your personal information is logged onto these cookies, and we do not disclose anything to third
                        party applications.
                    </p>
                    <p>As you may have realized by now, the entire game relies only on cookies. This means that if 
                        you choose to block or clear cookies on this website, your progress will be reset! 
                        Thus by clicking the "play" button or accessing any of the levels through the "levels" 
                        button, you choose to allow the game to set these kinds of cookies on your browser.
                    </p>
                    <p>To see what cookies the game sets, you can either access the cookie settings of your browser or navigate
                        to the Developer Tools of your browser under the Cookies section of the Application tab. You can 
                        clear cookies set by this website by clicking the small "prohibited" symbol in the top right hand corner of 
                        the Cookies section or by clearing the cookies of this website in your browser settings.
                    </p>
                </div>
                <div className="thanks">
                    <p>Thank you for reading our privacy policy. Now get out there and test your math skills!</p>
                </div>
            </div>
        )
    }
}

export default Privacy;