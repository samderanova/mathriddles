(this.webpackJsonpmathriddles=this.webpackJsonpmathriddles||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('{"question1":"10, 20, 30, 40, ?","ans1":50,"question2":"0, 1, 1, 2, 3, 5, ?","ans2":8,"question3":"1, 2 = 3\\n6, 7 = 8\\n11, 12 = ?","ans3":13,"question4":"2, 4, ?","ans4":6,"question5":"5, 25, 125, 625, ?","ans5":3125,"question6":"111111111 * 111111111 =\u202c ?","ans6":12345678987654320,"question7":"1, 6, 6, 36, 216, ?","ans7":7776,"question8":"2, 3, 5, 7, ?","ans8":11,"question9":"1, 2, 6, 24, ?","ans9":120,"question10":"1, 5, 14, 30, 55, ?","ans10":91,"question11":"x + y = 2\\n3x + y = 0\\nx = ?","ans11":-1,"question12":"2, 3 = 6\\n4, 5 = 20\\n8, 9 = ?","ans12":72,"question13":"2a = 1\\nb^2 = 0.25\\na + b = ?","ans13":1,"question14":"$ * $ * $ = 8\\n($ ^ 10) / 2 = ?","ans14":512,"question15":"c = 6\\nc = 4\\nc = ?","ans15":4,"question16":"Questions 16 to 19 are unique questions","ans16":256,"question17":"that cannot be converted from JSON string to HTML as easily.","ans17":28.274,"question18":"Please see the switch cases in Question.js","ans18":100,"question19":"","ans19":90,"question20":"10 % 6 = 4\\n12 & 3 = 0\\n9 % 5 = ?","ans20":4,"question21":"(6 % 4) * (3 * 4) / (5 % 2) = ?","ans21":24,"question22":"","ans22":300,"question23":"","ans23":147,"question24":"","ans24":125,"question25":"Binary!\\n0 = 0\\n1 = 1\\n 2 = 10\\n3 = 11\\n4 = ?","ans25":100,"question26":"0101 * 0101\\nLook at the previous clue!","ans26":25,"question27":"(0111 % 0101) * 1111","ans27":30,"question28":"4 * 1010 * 10\\nA combination now!","ans28":400,"question29":"0, 10, 100, 1000, 10000, 100000, ?\\nThe answer should be in base-10 form!","ans29":64,"question30":"090 + (100)!\\nLast binary one!","ans30":114,"question31":"If you work 8 hours every weekday and your salary is $30, what is your annual salary? Assume that you work every weekday of the year, even on holidays?","ans31":62400,"question32":"In a world where there are 280 hours in a week, what is the maximum number of hours you can practice music for in a day?","ans32":40,"question33":"","ans33":902,"question34":"","ans34":5.333,"question35":"","ans35":2,"question36":"","ans36":58,"question37":"","ans37":29,"question38":"","ans38":120,"question39":"2, 4\\n3, 36\\n4, ?","ans39":576,"question40":"4, 9, 25, 49, ?","ans40":121,"question41":"6, 2 => 4\\n1 9, 3 => 7.333\\n40, 1 => ?","ans41":41,"question42":"1149, 1369, ? ","ans42":1589,"question43":"12:27\\n14:30\\n16:?","ans43":33,"question44":"","ans44":116,"question45":"14:07, 16:07, ?:07\\nAnswer should NOT be in 24-hour time!","ans45":6,"question46":"Au + Fe / He = ?","ans46":92,"question47":"4, 5, 3 => 60\\n1, 7, 46 => 322\\n5, ?, 2 => 80","ans47":8,"question48":"","ans48":16,"question49":"(5 % 0111) + 1","ans49":6,"question50":"20, 31, 62, 183, ?","ans50":1084,"question51":"","ans51":2,"question52":"c = i\\nc * c * c = ? * i","ans52":-1,"question53":"","ans53":-28,"question54":"","ans54":-25,"question55":"sin(x) = 0\\nx = ?","ans55":0,"question56":"","ans56":-1,"question57":"7/1, 7/8, 7/15, 7/22, 7/29, ?/5","ans57":8,"question58":"1, 2, 5, 13, ?","ans58":68,"question59":"2(C * F) / 3Be","ans59":2,"question60":"94, 36, 18, ?","ans60":8,"question61":"62, 37\\n91, 10\\n10, ?","ans61":2}')},function(e,t,a){e.exports=a(21)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return q}));var n=a(7),l=a(0),r=a.n(l),c=a(1),o=a.n(c);a(15),a(16);var u=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"home"},r.a.createElement("h1",null,"Math Riddles Online"),r.a.createElement("button",{type:"button",id:"play"},"Play"),r.a.createElement("button",{type:"button",id:"levels"},"Levels"),r.a.createElement("h3",null,"Before you play, please take some time to read our ",r.a.createElement("a",{href:"#",id:"privacy"},"privacy policy"),"!"))))},s=a(2),m=a(3),i=a(6),E=a(5),d=a(4),h=(a(17),a(18),a(9),[]);h.push(r.a.createElement("button",{key:1,type:"button",id:1},"1"));for(var y=2;y<62;y++)h.push(r.a.createElement("button",{key:y,type:"button",id:y,disabled:!0},y));var p=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"componentDidMount",value:function(){for(var e=q(),t=1;t<=e.length+1;t++)document.getElementById(t).removeAttribute("disabled");h.forEach((function(e){document.getElementById(e.props.id).onclick=function(){return o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,{questionNum:e.props.id})),document.getElementById("root"))}}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"levels"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"buttonQuestions"},r.a.createElement("h1",null,"Levels"),r.a.createElement("div",{className:"buttons"},r.a.createElement("button",{type:"button",className:"leftArrow",onClick:function(){return document.location.reload()}},"\u2190"),h))))}}]),a}(r.a.Component);var b=function(){return r.a.createElement("div",{className:"Congrats"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"message"},r.a.createElement("h2",null,"Congratulations, you completed all the levels available!"),r.a.createElement("h3",null,"More to come soon!"),r.a.createElement("button",{onClick:function(e){return document.location.reload()}},"Home"),r.a.createElement("button",{onClick:function(e){return o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},"Levels"))))},v=a(9),f=function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={value:""},n.handleChange=n.handleChange.bind(Object(i.a)(n)),n}return Object(m.a)(a,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"componentDidMount",value:function(){document.getElementById("ans").addEventListener("keyup",(function(e){e.preventDefault(),13===e.keyCode&&document.getElementById("ansSubmit").click()}))}},{key:"render",value:function(){var e=this,t=this.props.questionNum,l=[];switch(t){case 16:l.push(r.a.createElement("div",{key:1},r.a.createElement("h3",null,r.a.createElement("span",{className:"shape triangle"},"\u25b3")," + ",r.a.createElement("span",{className:"shape square"},"\u25a1")," = 2"),r.a.createElement("h3",null,r.a.createElement("span",{className:"shape triangle"},"\u25b3",r.a.createElement("sup",null,"3"))," = 216"),r.a.createElement("h3",null,r.a.createElement("span",{className:"shape square"},"\u25a1",r.a.createElement("sup",null,"4"))," = ?")));break;case 17:l.push(r.a.createElement("div",{key:2},r.a.createElement("h3",null,"A(\u25cb) = \u03c0r",r.a.createElement("sup",null,"2")),r.a.createElement("h3",null,r.a.createElement("span",{className:""},"r = 3")),r.a.createElement("h3",null,"A(\u25cb) = ?"),r.a.createElement("h3",null,"Round your answer to 3 decimal places.")));break;case 18:l.push(r.a.createElement("div",{key:3},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"2"),r.a.createElement("td",null,"?")),r.a.createElement("tr",null,r.a.createElement("td",null,"10"),r.a.createElement("td",null,"4"))))));break;case 19:l.push(r.a.createElement("div",{key:4},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null,"5")),r.a.createElement("tr",null,r.a.createElement("td",null,"6"),r.a.createElement("td",null,"10")))),r.a.createElement("span",{className:"symbol"},"*"),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,"4")),r.a.createElement("tr",null,r.a.createElement("td",null,"2"),r.a.createElement("td",null,"9")))),r.a.createElement("span",{className:"symbol"},"="),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null,"20")),r.a.createElement("tr",null,r.a.createElement("td",null,"12"),r.a.createElement("td",null,"?")))),r.a.createElement("h3",null,"Be careful! These aren't matrices!")));break;case 22:l.push(r.a.createElement("div",{key:5},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"6"),r.a.createElement("td",null,"3")),r.a.createElement("tr",null,r.a.createElement("td",null,"100"),r.a.createElement("td",null,"42")))),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"106"),r.a.createElement("td",null,"45")),r.a.createElement("tr",null,r.a.createElement("td",null,"?"),r.a.createElement("td",null,"252"))))));break;case 23:l.push(r.a.createElement("div",{key:6},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"1"),r.a.createElement("td",null,"5")),r.a.createElement("tr",null,r.a.createElement("td",null,"12"),r.a.createElement("td",null,"3")),r.a.createElement("tr",null,r.a.createElement("td",null,"11"),r.a.createElement("td",null,"20")))),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"6")),r.a.createElement("tr",null,r.a.createElement("td",null,"?")),r.a.createElement("tr",null,r.a.createElement("td",null,"141"))))));break;case 24:l.push(r.a.createElement("div",{key:7},r.a.createElement("h3",null,r.a.createElement("span",{className:"circle"},"\u25cb")," / ",r.a.createElement("span",{className:"shape square"},"\u25a1")," = 5"),r.a.createElement("h3",null,r.a.createElement("span",{className:"symbol sqrt"},"\u221a"),r.a.createElement("span",{className:"shape square"},"\u25a1")," = 5"),r.a.createElement("h3",null,r.a.createElement("span",{className:"circle"},"\u25cb")," = ?")));break;case 33:l.push(r.a.createElement("div",{key:8},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"25"),r.a.createElement("td",null)),r.a.createElement("tr",null,r.a.createElement("td",null,"627"),r.a.createElement("td",null),r.a.createElement("td",null,"???")),r.a.createElement("tr",null,r.a.createElement("td",null),r.a.createElement("td",null,"30"),r.a.createElement("td",null))))));break;case 34:l.push(r.a.createElement("div",{key:9},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"0.333"),r.a.createElement("td",null,"1.333")),r.a.createElement("tr",null,r.a.createElement("td",null,"3"),r.a.createElement("td",null,"?")))),r.a.createElement("h3",null,"Round to 3 decimal places.")));break;case 35:l.push(r.a.createElement("div",{key:10},r.a.createElement("h3",null,"3.14159?6535897932384626")));break;case 36:l.push(r.a.createElement("div",{key:11},r.a.createElement("h3",null,r.a.createElement("b",null,"Quarter Note "),r.a.createElement("span",{className:"symbol quarter"},"(\u2669)"),r.a.createElement("b",null," = 116")),r.a.createElement("h3",null,r.a.createElement("b",null,"Eigth Note "),r.a.createElement("span",{className:"symbol eigth"},"(\u266a)"),r.a.createElement("b",null," = ?")),r.a.createElement("h3",null,r.a.createElement("span",{className:"symbol"},"\u2669 + \u266a"),r.a.createElement("b",null," = 174"))));break;case 37:l.push(r.a.createElement("div",{key:12},r.a.createElement("h3",null,r.a.createElement("b",null,"Quarter Note "),r.a.createElement("span",{className:"symbol quarter"},"(\u2669)"),r.a.createElement("b",null," = 116")),r.a.createElement("h3",null,r.a.createElement("b",null,"Sixteenth Note "),r.a.createElement("span",{className:"symbol sixteenth"},"(\u266b)"),r.a.createElement("b",null," = ?"))));break;case 38:l.push(r.a.createElement("div",{key:13},r.a.createElement("h3",null,r.a.createElement("span",{className:"symbol quarter"},"\u2669"),r.a.createElement("b",null," / "),r.a.createElement("span",{className:"symbol quarter"},"\u266b"),r.a.createElement("b",null," + 2"),r.a.createElement("span",{className:"symbol eigth"},"\u266a"),r.a.createElement("b",null," = ?"))));break;case 44:l.push(r.a.createElement("div",{key:14},r.a.createElement("h3",null,"x + y = 120"),r.a.createElement("h3",null,"y + z = 5"),r.a.createElement("h3",null,"z = the greatest zero of the graph of x",r.a.createElement("sup",null,"2")," - 1"),r.a.createElement("h3",null,"x = ?")));break;case 48:l.push(r.a.createElement("div",{key:15},r.a.createElement("h3",{style:{fontSize:"30px"}},"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"1",r.a.createElement("sup",null,"0",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2",r.a.createElement("sup",null,"2"))))))))))," = ?")));break;case 51:l.push(r.a.createElement("div",{key:16},r.a.createElement("h3",null,r.a.createElement("i",null,"i"),r.a.createElement("sup",null,"2")," = -1"),r.a.createElement("h3",null,r.a.createElement("i",null,"i"),r.a.createElement("sup",null,"x")," + 3 = x"),r.a.createElement("h3",null,"x = ?")));break;case 53:l.push(r.a.createElement("div",{key:17},r.a.createElement("h3",null,"(2",r.a.createElement("i",null,"i")," + 3) - (3",r.a.createElement("i",null,"i")," + 31) = ? - ",r.a.createElement("i",null,"i"))));break;case 54:l.push(r.a.createElement("div",{key:18},r.a.createElement("h3",null,"(5",r.a.createElement("i",null,"i")," + 2)",r.a.createElement("sup",null,"2")," = ? + 20",r.a.createElement("i",null,"i")," + 4")));break;case 56:l.push(r.a.createElement("div",{key:19},r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"sin"),r.a.createElement("td",null,"cos"),r.a.createElement("td",null,"tan")),r.a.createElement("tr",null,r.a.createElement("td",null,"   "),r.a.createElement("td",null," \ud835\udf0b "),r.a.createElement("td",null,"   ")))),r.a.createElement("table",null,r.a.createElement("tbody",null,r.a.createElement("tr",null,r.a.createElement("td",null,"0"),r.a.createElement("td",null,"?"),r.a.createElement("td",null,"0"))))));break;default:!function(){for(var e=v["question"+t].split("\n"),a=0;a<e.length;a++)l.push(r.a.createElement("h3",{key:a},e[a]))}()}function c(){61!==t?(o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(a,{questionNum:t+1})),document.getElementById("root")),document.getElementById("CorI").innerHTML="",document.getElementById("ans").value="",o.a.render("",document.getElementById("nextLevel"))):o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}return r.a.createElement("div",{className:"display"},r.a.createElement("button",{type:"button",id:"leftArrow",onClick:function(){1===t?document.location.reload():o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(a,{questionNum:t-1})),document.getElementById("root"))}},"\u2190"),r.a.createElement("button",{type:"button",id:"toLevels",onClick:function(e){o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))}},r.a.createElement("i",{className:"material-icons"},"menu")),r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"question"},r.a.createElement("h1",null,"Level ",t),l,r.a.createElement("input",{type:"text",id:"ans",placeholder:"Answer",onChange:this.handleChange}),r.a.createElement("button",{type:"submit",id:"ansSubmit",onClick:function(a){var l=e.state.value,u="";if(l.includes(",")){var s,m=l.split(","),i=Object(n.a)(m);try{for(i.s();!(s=i.n()).done;){u+=s.value}}catch(h){i.e(h)}finally{i.f()}u=Number(u)}else u=Number(l);if(isNaN(u))document.getElementById("CorI").innerHTML="Not a valid response! Try again.";else if(u!==v["ans"+t])document.getElementById("CorI").innerHTML="Incorrect! Try again.";else{document.getElementById("CorI").innerHTML="Correct! Click the button below to head to the next level.",document.cookie="".concat(e.props.questionNum,"=true");var E=r.a.createElement("button",{id:"nextLevelBtn",onClick:c},"Advance!");if(60===t){var d=r.a.createElement("button",{id:"finishedBtn",onClick:function(e){return o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root"))}},"Advance!");o.a.render(d,document.getElementById("nextLevel"))}else o.a.render(E,document.getElementById("nextLevel"))}}},"\u2191"),r.a.createElement("p",{id:"CorI"}),r.a.createElement("div",{id:"nextLevel"}))))}}]),a}(r.a.Component);a(19);var k=function(){return r.a.createElement("div",{className:"How2Play"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"play"},r.a.createElement("h1",null,"How to Play"),r.a.createElement("p",null,"There are 100 levels (and maybe more in the future!) to solve in this game. Each level provides mathematical clues that will help the player discover the correct answer to the level. For example:"),r.a.createElement("h3",null,"2 + 4 = x"),r.a.createElement("h3",null,"x + 5 = ?"),r.a.createElement("p",null,"Using algebra, the answer, indicated by the question mark, is 11. Unfortunately, the clues won't be as simple as the ones in this level, but the underlying concept is quite understandable. Also, each clue contains different patterns that need to be applied to the rest of the clues in order to complete the level. Naturally, until one level is solved, the player may not move on to the next one."),r.a.createElement("p",null,"And lastly, in order to have the best experience playing this game, please update your browser to the latest version possible."),r.a.createElement("h2",null,"Good luck and let your skills be put to the test!"),r.a.createElement("button",{type:"button",onClick:function(e){return o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,{questionNum:1})),document.getElementById("root"))}},"Level 1"))))},g=(a(20),function(e){Object(E.a)(a,e);var t=Object(d.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Privacy"},r.a.createElement("div",{className:"navbar"},r.a.createElement("button",{type:"button",id:"leftArrow",onClick:function(){return document.location.reload()}},"\u2190"),r.a.createElement("h1",null,"Privacy Policy"),r.a.createElement("hr",{style:{padding:"0"}})),r.a.createElement("div",{className:"col-sm"},r.a.createElement("a",{href:"#cookies"},"Cookies"),r.a.createElement("a",{href:"#ga"},"Google Analytics")),r.a.createElement("div",{className:"col-md"},r.a.createElement("p",null,"Hello! Thanks for choosing to play this game. This privacy policy is for you can understand what information this game collects about you, so you can play with an easy mind without any concerns about your privacy. The following sections are the information that the application logs and collects."),r.a.createElement("h2",{id:"cookies"},"Cookies"),r.a.createElement("p",null,'This application utilizes cookies for the sole purpose of logging your progress, the levels you\'ve completed and those you haven\'t. As a result, the entire game relies on these cookies! This means that if you choose to block or clear cookies on this website, this game will be very difficult to play. Thus by clicking the "play" button or accessing any of the levels through the "levels" button, you automatically choose to allow the game to set cookies on your browser.',r.a.createElement("br",null),r.a.createElement("br",null),"To see what cookies the game sets, you can either access the cookie settings of your browser or navigate through the Developer Tools of your browser."),r.a.createElement("h2",{id:"ga"},"Google Analytics"),r.a.createElement("p",null,"If you're checking out the cookies the website has logged, you may see some unfamiliar ones. These are cookies set by Google Analytics. We use this Google service to track consumer behavior on the webiste as well as overall website performance, so we can continue to add to the game.",r.a.createElement("br",null),r.a.createElement("br",null),'If you feel uncomfortable about this tracking mechanism, feel free to block trackers in your browser settings or turn on "Do Not Track" requests.',r.a.createElement("br",null),r.a.createElement("br",null),'For more on information gathering, please visit the "Measure performance" section at\xa0',r.a.createElement("a",{href:"https://policies.google.com/privacy"},"https://policies.google.com/privacy"),".")))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function q(){var e,t=document.cookie.split(";"),a=[],l=Object(n.a)(t);try{for(l.s();!(e=l.n()).done;){var r=e.value,c=parseInt(r);c&&a.push(c)}}catch(o){l.e(o)}finally{l.f()}return a}o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(u,null)),document.getElementById("root")),document.getElementById("play").onclick=function(){if(document.cookie){var e=q(),t=e[e.length-1];61===t?o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")):o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,{questionNum:t+1})),document.getElementById("root"))}else o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root"))},document.getElementById("levels").onclick=function(){o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p,null)),document.getElementById("root"))},document.getElementById("privacy").onclick=function(){o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root"))},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.d2799fb5.chunk.js.map