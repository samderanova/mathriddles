(this.webpackJsonpmathriddles=this.webpackJsonpmathriddles||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('{"question1":"10, 20, 30, 40, ?","ans1":50,"question2":"0, 1, 1, 2, 3, 5, ?","ans2":8,"question3":"1, 2 = 3\\n6, 7 = 8\\n11, 12 = ?","ans3":13,"question4":"2, 4, ?","ans4":6,"question5":"5, 25, 125, 625, ?","ans5":3125,"question6":"111111111 * 111111111 =\u202c ?","ans6":12345678987654320,"question7":"1, 6, 6, 36, 216, ?","ans7":7776,"question8":"2, 3, 5, 7, ?","ans8":11,"question9":"1, 2, 6, 24, ?","ans9":120,"question10":"1, 5, 14, 30, 55, ?","ans10":91,"question11":"x + y = 2\\n3x + y = 0\\nx = ?","ans11":-1,"question12":"2, 3 = 6\\n4, 5 = 20\\n8, 9 = ?","ans12":72,"question13":"2a = 1\\nb^2 = 0.25\\na + b = ?","ans13":1,"question14":"$ * $ * $ = 8\\n($ ^ 10) / 2 = ?","ans14":512,"question15":"c = 6\\nc = 4\\nc = ?","ans15":4,"question16":"Questions 16 to 19 are unique questions","ans16":256,"question17":"that cannot be converted from JSON string to HTML as easily.","ans17":28.274,"question18":"Please see the switch cases in Question.js","ans18":100,"question19":"","ans19":90,"question20":"10 % 6 = 4\\n12 & 3 = 0\\n9 % 5 = ?","ans20":4,"question21":"(6 % 4) * (3 * 4) / (5 % 2) = ?","ans21":24,"question22":"","ans22":300,"question23":"","ans23":147,"question24":"","ans24":125,"question25":"Binary!\\n0 = 0\\n1 = 1\\n 2 = 10\\n3 = 11\\n4 = ?","ans25":100,"question26":"0101 * 0101\\nLook at the previous clue!","ans26":25,"question27":"(0111 % 0101) * 1111","ans27":30,"question28":"4 * 1010 * 10\\nA combination now!","ans28":400,"question29":"0, 10, 100, 1000, 10000, 100000, ?\\nThe answer should be in base-10 form!","ans29":64,"question30":"090 + (100)!\\nLast binary one!","ans30":114,"question31":"If you work 8 hours every weekday and your salary is $30, what is your annual salary? Assume that you work every weekday of the year, even on holidays?","ans31":62400,"question32":"In a world where there are 280 hours in a week, what is the maximum number of hours you can practice music for in a day?","ans32":40,"question33":"","ans33":902,"question34":"","ans34":5.333,"question35":"","ans35":2,"question36":"","ans36":58,"question37":"","ans37":29,"question38":"","ans38":120,"question39":"2, 4\\n3, 36\\n4, ?","ans39":576,"question40":"4, 9, 25, 49, ?","ans40":121,"question41":"6, 2 => 4\\n1 9, 3 => 7.333\\n40, 1 => ?","ans41":41,"question42":"1149, 1369, ? ","ans42":1589,"question43":"12:27\\n14:30\\n16:?","ans43":33,"question44":"","ans44":116,"question45":"14:07, 16:07, ?:07\\nAnswer should NOT be in 24-hour time!","ans45":6,"question46":"Au + Fe / He = ?","ans46":92,"question47":"4, 5, 3 => 60\\n1, 7, 46 => 322\\n5, ?, 2 => 80","ans47":8,"question48":"","ans48":16,"question49":"(5 % 0111) + 1","ans49":6,"question50":"20, 31, 62, 183, ?","ans50":1084,"question51":"","ans51":2,"question52":"c = i\\nc * c * c = ? * i","ans52":-1,"question53":"","ans53":-28,"question54":"","ans54":-25,"question55":"sin(x) = 0\\nx = ?","ans55":0,"question56":"","ans56":-1,"question57":"7/1, 7/8, 7/15, 7/22, 7/29, ?/5","ans57":8,"question58":"1, 2, 5, 13, ?","ans58":68,"question59":"2(C * F) / 3Be","ans59":2,"question60":"94, 36, 18, ?","ans60":8,"question61":"62, 37\\n91, 913\\n11, ?","ans61":15,"question62":"A breather:\\n1/2/3/4/5/6/... = ?","ans62":0}')},function(e,t,n){e.exports=n(22)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return q}));var a=n(7),l=n(0),r=n.n(l),o=n(1),c=n.n(o);n(15),n(16);var s=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"Math Riddles Online"),r.a.createElement("button",{type:"button",id:"play"},"Play"),r.a.createElement("button",{type:"button",id:"levels"},"Levels"),r.a.createElement("div",{className:"cookieWarning"},r.a.createElement("p",null,"This game uses cookies to track your progress. By playing and completing levels in this game, you agree to this use. Please read our\xa0",r.a.createElement("span",{id:"privacy"},"Privacy Policy")," to learn more.")))))},u=n(2),i=n(3),m=n(6),d=n(5),E=n(4),h=(n(17),n(18),n(9),[]);h.push(r.a.createElement("button",{key:1,type:"button",id:1},"1"));for(var y=2;y<63;y++)h.push(r.a.createElement("button",{key:y,type:"button",id:y,disabled:!0},y));var p=function(e){Object(d.a)(n,e);var t=Object(E.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){for(var e=q(),t=1;t<=e.length+1;t++)document.getElementById(t).removeAttribute("disabled");h.forEach((function(e){document.getElementById(e.props.id).onclick=function(){return c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,{questionNum:e.props.id})),document.getElementById("root"))}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"levels"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"buttonQuestions"},r.a.createElement("h1",null,"Levels"),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",className:"leftArrow",onClick:function(){return document.location.reload()}},"\u2190"),h))))}}]),n}(r.a.Component);n(19);var b=function(){return r.a.createElement("div",{className:"Congrats"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"message"},r.a.createElement("h2",null,"Congratulations, you completed all the levels available!"),r.a.createElement("h3",null,"More to come soon!"),r.a.createElement("button",{onClick:function(e){return document.location.reload()}},"Home"),r.a.createElement("button",{onClick:function(e){return c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},"Levels"))))},v=n(9),k=function(e){Object(d.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).state={value:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"componentDidMount",value:function(){document.getElementById("ans").addEventListener("keyup",(function(e){e.preventDefault(),13===e.keyCode&&document.getElementById("ansSubmit").click()}))}},{key:"render",value:function(){var e=this,t=this.props.questionNum,l=[];switch(t){case 16:l.push(r.a.createElement("div",{key:1},r.a.createElement("h3",null,r.a.createElement("span",{className:"shape triangle"},"\u25b3")," + ",r.a.createElement("span",{className:"shape square"},"\u25a1")," = 2"),r.a.createElement("h3",null,r.a.createElement("span",{className:"shape triangle"},"\u25b3",r.a.createElement("sup",null,"3"))," = 216"),r.a.createElement("h3",null,r.a.createElement("span",{className:"shape square"},"\u25a1",r.a.createElement("sup",null,"4"))," = ?")));break;case 17:l.push(r.a.createElement("div",{key:2},r.a.createElement("h3",null,"A(\u25cb) = \u03c0r",r.a.createElement("sup",null,"2")),r.a.createElement("h3",null,r.a.createElement("span",{className:""},"r = 3")),r.a.createElement("h3",null,"A(\u25cb) = ?"),r.a.createElement("h3",null,"Round your answer to 3 decimal places.")));break;case 18:l.push(r.a.createElement("div",{key:3},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"2"),r.a.createElement("td",null,"?")),r.a.createElement("tr",null,r.a.createElement("td",null,"10"),r.a.createElement("td",null,"4"))))));break;case 19:l.push(r.a.createElement("div",{key:4},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null,"5")),r.a.createElement("tr",null,r.a.createElement("td",null,"6"),r.a.createElement("td",null,"10")))),r.a.createElement("span",{className:"symbol"},"*"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,"4")),r.a.createElement("tr",null,r.a.createElement("td",null,"2"),r.a.createElement("td",null,"9")))),r.a.createElement("span",{className:"symbol"},"="),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null,"20")),r.a.createElement("tr",null,r.a.createElement("td",null,"12"),r.a.createElement("td",null,"?")))),r.a.createElement("h3",null,"Be careful! These aren't matrices!")));break;case 22:l.push(r.a.createElement("div",{key:5},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"6"),r.a.createElement("td",null,"3")),r.a.createElement("tr",null,r.a.createElement("td",null,"100"),r.a.createElement("td",null,"42")))),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"106"),r.a.createElement("td",null,"45")),r.a.createElement("tr",null,r.a.createElement("td",null,"?"),r.a.createElement("td",null,"252"))))));break;case 23:l.push(r.a.createElement("div",{key:6},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,"5")),r.a.createElement("tr",null,r.a.createElement("td",null,"12"),r.a.createElement("td",null,"3")),r.a.createElement("tr",null,r.a.createElement("td",null,"11"),r.a.createElement("td",null,"20")))),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"6")),r.a.createElement("tr",null,r.a.createElement("td",null,"?")),r.a.createElement("tr",null,r.a.createElement("td",null,"141"))))));break;case 24:l.push(r.a.createElement("div",{key:7},r.a.createElement("h3",null,r.a.createElement("span",{className:"circle"},"\u25cb")," / ",r.a.createElement("span",{className:"shape square"},"\u25a1")," = 5"),r.a.createElement("h3",null,r.a.createElement("span",{className:"symbol sqrt"},"\u221a"),r.a.createElement("span",{className:"shape square"},"\u25a1")," = 5"),r.a.createElement("h3",null,r.a.createElement("span",{className:"circle"},"\u25cb")," = ?")));break;case 33:l.push(r.a.createElement("div",{key:8},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"25"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"627"),r.a.createElement("td",null),r.a.createElement("td",null,"???")),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"30"),r.a.createElement("td",null))))));break;case 34:l.push(r.a.createElement("div",{key:9},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"0.333"),r.a.createElement("td",null,"1.333")),r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null,"?")))),r.a.createElement("h3",null,"Round to 3 decimal places.")));break;case 35:l.push(r.a.createElement("div",{key:10},r.a.createElement("h3",null,"3.14159?6535897932384626")));break;case 36:l.push(r.a.createElement("div",{key:11},r.a.createElement("h3",null,r.a.createElement("b",null,"Quarter Note "),r.a.createElement("span",{className:"symbol quarter"},"(\u2669)"),r.a.createElement("b",null," = 116")),r.a.createElement("h3",null,r.a.createElement("b",null,"Eigth Note "),r.a.createElement("span",{className:"symbol eigth"},"(\u266a)"),r.a.createElement("b",null," = ?")),r.a.createElement("h3",null,r.a.createElement("span",{className:"symbol"},"\u2669 + \u266a"),r.a.createElement("b",null," = 174"))));break;case 37:l.push(r.a.createElement("div",{key:12},r.a.createElement("h3",null,r.a.createElement("b",null,"Quarter Note "),r.a.createElement("span",{className:"symbol quarter"},"(\u2669)"),r.a.createElement("b",null," = 116")),r.a.createElement("h3",null,r.a.createElement("b",null,"Sixteenth Note "),r.a.createElement("span",{className:"symbol sixteenth"},"(\u266b)"),r.a.createElement("b",null," = ?"))));break;case 38:l.push(r.a.createElement("div",{key:13},r.a.createElement("h3",null,r.a.createElement("span",{className:"symbol quarter"},"\u2669"),r.a.createElement("b",null," / "),r.a.createElement("span",{className:"symbol quarter"},"\u266b"),r.a.createElement("b",null," + 2"),r.a.createElement("span",{className:"symbol eigth"},"\u266a"),r.a.createElement("b",null," = ?"))));break;case 44:l.push(r.a.createElement("div",{key:14},r.a.createElement("h3",null,"x + y = 120"),r.a.createElement("h3",null,"y + z = 5"),r.a.createElement("h3",null,"z = the greatest zero of the graph of x",r.a.createElement("sup",null,"2")," - 1"),r.a.createElement("h3",null,"x = ?")));break;case 48:l.push(r.a.createElement("div",{key:15},r.a.createElement("h3",{style:{fontSize:"30px"}},"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"1",r.a.createElement("sup",null,"0",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2"))))))))))," = ?")));break;case 51:l.push(r.a.createElement("div",{key:16},r.a.createElement("h3",null,r.a.createElement("i",null,"i"),r.a.createElement("sup",null,"2")," = -1"),r.a.createElement("h3",null,r.a.createElement("i",null,"i"),r.a.createElement("sup",null,"x")," + 3 = x"),r.a.createElement("h3",null,"x = ?")));break;case 53:l.push(r.a.createElement("div",{key:17},r.a.createElement("h3",null,"(2",r.a.createElement("i",null,"i")," + 3) - (3",r.a.createElement("i",null,"i")," + 31) = ? - ",r.a.createElement("i",null,"i"))));break;case 54:l.push(r.a.createElement("div",{key:18},r.a.createElement("h3",null,"(5",r.a.createElement("i",null,"i")," + 2)",r.a.createElement("sup",null,"2")," = ? + 20",r.a.createElement("i",null,"i")," + 4")));break;case 56:l.push(r.a.createElement("div",{key:19},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"sin"),r.a.createElement("td",null,"cos"),r.a.createElement("td",null,"tan")),r.a.createElement("tr",null,r.a.createElement("td",null,"   "),r.a.createElement("td",null," \ud835\udf0b "),r.a.createElement("td",null,"   ")))),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"0"),r.a.createElement("td",null,"?"),r.a.createElement("td",null,"0"))))));break;default:!function(){for(var e=v["question"+t].split("\n"),n=0;n<e.length;n++)l.push(r.a.createElement("h3",{key:n},e[n]))}()}function o(){62!==t?(c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(n,{questionNum:t+1})),document.getElementById("root")),document.getElementById("CorI").innerHTML="",document.getElementById("ans").value="",c.a.render("",document.getElementById("nextLevel"))):c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}return r.a.createElement("div",{className:"display"},r.a.createElement("button",{type:"button",id:"leftArrow",onClick:function(){1===t?document.location.reload():c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(n,{questionNum:t-1})),document.getElementById("root"))}},"\u2190"),r.a.createElement("button",{type:"button",id:"toLevels",onClick:function(e){c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"question"},r.a.createElement("h1",null,"Level ",t),l,r.a.createElement("input",{type:"text",id:"ans",placeholder:"Answer",onChange:this.handleChange}),r.a.createElement("button",{type:"submit",id:"ansSubmit",onClick:function(n){var l=e.state.value,s="";if(l.includes(",")){var u,i=l.split(","),m=Object(a.a)(i);try{for(m.s();!(u=m.n()).done;){s+=u.value}}catch(h){m.e(h)}finally{m.f()}s=Number(s)}else s=Number(l);if(isNaN(s))document.getElementById("CorI").innerHTML="Not a valid response! Try again.";else if(s!==v["ans"+t])document.getElementById("CorI").innerHTML="Incorrect! Try again.";else{document.getElementById("CorI").innerHTML="Correct! Click the button below to head to the next level.",document.cookie="".concat(e.props.questionNum,"=true");var d=r.a.createElement("button",{id:"nextLevelBtn",onClick:o},"Advance!");if(62===t){var E=r.a.createElement("button",{id:"finishedBtn",onClick:function(e){return c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},"Advance!");c.a.render(E,document.getElementById("nextLevel"))}else c.a.render(d,document.getElementById("nextLevel"))}}},"\u2191"),r.a.createElement("p",{id:"CorI"}),r.a.createElement("div",{id:"nextLevel"}))))}}]),n}(r.a.Component);n(20);var f=function(){return r.a.createElement("div",{className:"How2Play"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"play"},r.a.createElement("h1",null,"How to Play"),r.a.createElement("p",null,"There are 100 levels (and maybe more in the future!) to solve in this game. Each level provides mathematical clues that will help the player discover the correct answer to the level. For example:"),r.a.createElement("h3",null,"2 + 4 = x"),r.a.createElement("h3",null,"x + 5 = ?"),r.a.createElement("p",null,"Using algebra, the answer, indicated by the question mark, is 11. Unfortunately, the clues won't be as simple as the ones in this level, but the underlying concept is quite understandable. Each clue contains different patterns that need to be applied to the rest of the clues in order to complete the level. Naturally, until one level is solved, you may not move on to the next one."),r.a.createElement("p",null,"Perhaps most importantly, in order to have the best experience playing this game, please update your browser to the latest version possible."),r.a.createElement("h2",null,"Good luck and let your skills be put to the test!"),r.a.createElement("p",null,"One final note: Multiplication and division will be represented as * and / respectively unless otherwise indicated."),r.a.createElement("button",{type:"button",onClick:function(e){return c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,{questionNum:1})),document.getElementById("root"))}},"Level 1"))))},g=(n(21),function(e){Object(d.a)(n,e);var t=Object(E.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{className:"Privacy"},r.a.createElement("div",{className:"navbar"},r.a.createElement("button",{type:"button",id:"leftArrow",onClick:function(){return document.location.reload()}},"\u2190"),r.a.createElement("h1",null,"Privacy Policy"),r.a.createElement("hr",{style:{padding:"0"}})),r.a.createElement("div",{className:"col-md"},r.a.createElement("p",null,"Thank you for choosing to play this game! This privacy policy is for you can understand what information this game will collect about you, so you can play with an easy mind without any concerns about your privacy. The following sections are the information that the application logs."),r.a.createElement("h2",{id:"cookies"},"Cookies"),r.a.createElement("p",null,"Cookies are bits of data that are downloaded onto your device when you visit a website, such as this one! There are three types of such cookies: session, persistent, and third-party. Session cookies are stored on your computer as long as you are on a website that uses such cookies and eliminated as soon as you leave the site. Persistent cookies, however, are not deleted and instead, remain on your device until you delete them manually. Finally, third party cookies are cookies used from another website for purposes like tracking."),r.a.createElement("p",null,"The only cookies this game uses are persistent cookies. This application utilizes such cookies for the sole purpose of logging your progress (the levels you've completed and those you haven't) and nothing else. None of your personal information is logged onto these cookies, and we do not disclose anything to third party applications."),r.a.createElement("p",null,'As you may have realized by now, the entire game relies only on cookies. This means that if you choose to block or clear cookies on this website, your progress will be reset! Thus by clicking the "play" button or accessing any of the levels through the "levels" button, you choose to allow the game to set these kinds of cookies on your browser.'),r.a.createElement("p",null,'To see what cookies the game sets, you can either access the cookie settings of your browser or navigate to the Developer Tools of your browser under the Cookies section of the Application tab. You can clear cookies set by this website by clicking the small "prohibited" symbol in the top right hand corner of the Cookies section or by clearing the cookies of this website in your browser settings.')),r.a.createElement("div",{className:"thanks"},r.a.createElement("p",null,"Thank you for reading our privacy policy. Now get out there and test your math skills!")))}}]),n}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(){var e,t=document.cookie.split(";"),n=[],l=Object(a.a)(t);try{for(l.s();!(e=l.n()).done;){var r=e.value,o=parseInt(r);o&&n.push(o)}}catch(c){l.e(c)}finally{l.f()}return n}c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(s,null)),document.getElementById("root")),document.getElementById("play").onclick=function(){if(document.cookie){var e=q(),t=e[e.length-1];62===t?c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")):c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,{questionNum:t+1})),document.getElementById("root"))}else c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},document.getElementById("levels").onclick=function(){c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},document.getElementById("privacy").onclick=function(){c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.dc5c7f15.chunk.js.map