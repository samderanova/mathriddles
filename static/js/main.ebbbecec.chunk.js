(this.webpackJsonpmathriddles=this.webpackJsonpmathriddles||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('{"question1":"10, 20, 30, 40, ?","ans1":50,"question2":"0, 1, 1, 2, 3, 5, ?","ans2":8,"question3":"1, 2 = 3\\n6, 7 = 8\\n11, 12 = ?","ans3":13,"question4":"2, 4, ?","ans4":6,"question5":"5, 25, 125, 625, ?","ans5":3125,"question6":"111111111 * 111111111 =\u202c ?","ans6":12345678987654320,"question7":"1, 6, 6, 36, 216, ?","ans7":7776,"question8":"2, 3, 5, 7, ?","ans8":11,"question9":"1, 2, 6, 24, ?","ans9":120,"question10":"1, 5, 14, 30, 55, ?","ans10":91,"question11":"x+y=2\\n3x+y=0\\nx=?","ans11":-1,"question12":"2, 3 = 6\\n4, 5 = 20\\n8, 9 = ?","ans12":72,"question13":"2a=1\\nb^2=0.25\\na+b=? ","ans13":1,"question14":"$*$*$=8\\n($^10)/2=?","ans14":512,"question15":"c=6\\nc=4\\nc=?","ans15":4,"question16":"Questions 16 to 19 are unique questions","ans16":256,"question17":"that cannot be converted from JSON string to HTML as easily.","ans17":28.274,"question18":"Please see the switch cases in Question.js","ans18":100,"question19":"","ans19":90,"question20":"2 % 6 = 2\\n9 % 5 = ?","ans20":4,"question21":"(6 % 4) * (3 * 4) / (5 % 2) = ?","ans21":24,"question22":"","ans22":300,"question23":"","ans23":147,"question24":"","ans24":130,"question25":"0 = 0\\n1 = 1\\n 2 = 10\\n3 = 11\\n4 = ?","ans25":100,"question26":"0101 * 0101\\nLook at the previous clue!","ans26":25,"question27":"(0111 % 0101) * 1111","ans27":30,"question28":"4 * 1010 * 10\\nA combination now!","ans28":400,"question29":"090 + (100)!","ans29":114,"question30":"If you work 8 hours every weekday and your salary is $30, what is your annual salary? Assume that you work every weekday of the year, even on holidays","ans30":62400,"question31":"","ans31":"","question32":"","ans32":"","question33":"","ans33":"","question34":"","ans34":"","question35":"","ans35":"","question36":"","ans36":"","question37":"","ans37":"","question38":"","ans38":"","question39":"","ans39":"","question40":"","ans40":"","question41":"","ans41":"","question42":"","ans42":"","question43":"","ans43":"","question44":"","ans44":"","question45":"","ans45":"","question46":"","ans46":"","question47":"","ans47":"","question48":"","ans48":"","question49":"","ans49":"","question50":"","ans50":"","question51":"","ans51":"","question52":"","ans52":"","question53":"","ans53":"","question54":"","ans54":"","question55":"","ans55":"","question56":"","ans56":"","question57":"","ans57":"","question58":"","ans58":"","question59":"","ans59":"","question60":"","ans60":"","question61":"","ans61":"","question62":"","ans62":"","question63":"","ans63":"","question64":"","ans64":"","question65":"","ans65":"","question66":"","ans66":"","question67":"","ans67":"","question68":"","ans68":"","question69":"","ans69":"","question70":"","ans70":"","question71":"","ans71":"","question72":"","ans72":"","question73":"","ans73":"","question74":"","ans74":"","question75":"","ans75":"","question76":"","ans76":"","question77":"","ans77":"","question78":"","ans78":"","question79":"","ans79":"","question80":"","ans80":"","question81":"","ans81":"","question82":"","ans82":"","question83":"","ans83":"","question84":"","ans84":"","question85":"","ans85":"","question86":"","ans86":"","question87":"","ans87":"","question88":"","ans88":"","question89":"","ans89":"","question90":"","ans90":"","question91":"","ans91":"","question92":"","ans92":"","question93":"","ans93":"","question94":"","ans94":"","question95":"","ans95":"","question96":"","ans96":"","question97":"","ans97":"","question98":"","ans98":"","question99":"","ans99":"","question100":"","ans100":""}')},function(e,t,n){e.exports=n(20)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(2),l=n(0),s=n.n(l),r=n(1),o=n.n(r);n(15),n(16);var u=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"home"},s.a.createElement("h1",null,"Math Riddles Online"),s.a.createElement("button",{type:"button",id:"play"},"Play"),s.a.createElement("button",{type:"button",id:"levels"},"Levels"),s.a.createElement("h3",null,"IMPORTANT: This game relies on cookies to track progress. Clearing them will therefore clear your own progress!"))))},c=n(3),i=n(4),m=n(5),d=n(7),E=n(6),h=(n(17),n(18),n(9),[]);h.push(s.a.createElement("button",{key:1,type:"button",id:1},"1"));for(var q=2;q<101;q++)h.push(s.a.createElement("button",{key:q,type:"button",id:q,disabled:!0},q));var p=function(e){Object(d.a)(n,e);var t=Object(E.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e,t=document.cookie.split(";"),n=[],l=Object(a.a)(t);try{for(l.s();!(e=l.n()).done;){var r=e.value;n.push(parseInt(r))}}catch(c){l.e(c)}finally{l.f()}for(var u=1;u<=n.length+1;u++)document.getElementById(u).removeAttribute("disabled");h.forEach((function(e){document.getElementById(e.props.id).onclick=function(){return o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,{questionNum:e.props.id})),document.getElementById("root"))}}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"levels"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"buttonQuestions"},s.a.createElement("h1",null,"Levels"),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{type:"button",className:"leftArrow",onClick:function(){return document.location.reload()}},"\u2190"),h))))}}]),n}(s.a.Component),y=n(9),b=function(e){Object(d.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).state={value:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(i.a)(n,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"componentDidMount",value:function(){document.getElementById("ans").addEventListener("keyup",(function(e){e.preventDefault(),13===e.keyCode&&document.getElementById("ansSubmit").click()}))}},{key:"render",value:function(){var e=this,t=document.getElementById("rightArrow"),l=this.props.questionNum,r=[];switch(l){case 16:r.push(s.a.createElement("div",{key:1},s.a.createElement("h3",null,s.a.createElement("span",{className:"shape triangle"},"\u25b3")," + ",s.a.createElement("span",{className:"shape square"},"\u25a1")," = 2"),s.a.createElement("h3",null,s.a.createElement("span",{className:"shape triangle"},"\u25b3",s.a.createElement("sup",null,"3"))," = 216"),s.a.createElement("h3",null,s.a.createElement("span",{className:"shape square"},"\u25a1",s.a.createElement("sup",null,"4"))," = ?")));break;case 17:r.push(s.a.createElement("div",{key:2},s.a.createElement("h3",null,"A(",s.a.createElement("span",{className:"circle"},"\u25cb"),") = \u03c0r",s.a.createElement("sup",null,"2")),s.a.createElement("h3",null,s.a.createElement("span",{className:""},"r = 3")),s.a.createElement("h3",null,"A(\u25cb) = ?"),s.a.createElement("h3",null,"Round your answer to 3 decimal places.")));break;case 18:r.push(s.a.createElement("div",{key:3},s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"2"),s.a.createElement("td",null,"?")),s.a.createElement("tr",null,s.a.createElement("td",null,"10"),s.a.createElement("td",null,"4"))))));break;case 19:r.push(s.a.createElement("div",{key:4},s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"3"),s.a.createElement("td",null,"5")),s.a.createElement("tr",null,s.a.createElement("td",null,"6"),s.a.createElement("td",null,"10")))),s.a.createElement("span",{className:"symbol"},"*"),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"1"),s.a.createElement("td",null,"4")),s.a.createElement("tr",null,s.a.createElement("td",null,"2"),s.a.createElement("td",null,"9")))),s.a.createElement("span",{className:"symbol"},"="),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"3"),s.a.createElement("td",null,"20")),s.a.createElement("tr",null,s.a.createElement("td",null,"12"),s.a.createElement("td",null,"?")))),s.a.createElement("h3",null,"Be careful! These aren't matrices!")));break;case 22:r.push(s.a.createElement("div",{key:5},s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"6"),s.a.createElement("td",null,"3")),s.a.createElement("tr",null,s.a.createElement("td",null,"100"),s.a.createElement("td",null,"42")))),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"106"),s.a.createElement("td",null,"45")),s.a.createElement("tr",null,s.a.createElement("td",null,"?"),s.a.createElement("td",null,"252"))))));break;case 23:r.push(s.a.createElement("div",{key:6},s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"1"),s.a.createElement("td",null,"5")),s.a.createElement("tr",null,s.a.createElement("td",null,"12"),s.a.createElement("td",null,"3")),s.a.createElement("tr",null,s.a.createElement("td",null,"11"),s.a.createElement("td",null,"20")))),s.a.createElement("table",null,s.a.createElement("tbody",null,s.a.createElement("tr",null,s.a.createElement("td",null,"6")),s.a.createElement("tr",null,s.a.createElement("td",null,"?")),s.a.createElement("tr",null,s.a.createElement("td",null,"141"))))));break;case 24:r.push(s.a.createElement("div",{key:7},s.a.createElement("h3",null,s.a.createElement("span",{className:"circle"},"\u25cb")," % ",s.a.createElement("span",{className:"shape square"},"\u25a1")," = 5"),s.a.createElement("h3",null,s.a.createElement("span",{className:"symbol sqrt"},"\u221a"),s.a.createElement("span",{className:"shape square"},"\u25a1")," = 5"),s.a.createElement("h3",null,s.a.createElement("span",{className:"circle"},"\u25cb")," = ?")));break;default:!function(){for(var e=y["question"+l].split("\n"),t=0;t<e.length;t++)r.push(s.a.createElement("h3",{key:t},e[t]))}()}return s.a.createElement("div",{className:"display"},s.a.createElement("button",{type:"button",id:"leftArrow",onClick:function(){1===l?document.location.reload():o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(n,{questionNum:l-1})),document.getElementById("root"))}},"\u2190"),s.a.createElement("button",{type:"button",id:"rightArrow"},"\u2192"),s.a.createElement("button",{type:"button",id:"toHome",onClick:function(e){return document.location.reload()}},s.a.createElement("i",{className:"material-icons"},"home")),s.a.createElement("button",{type:"button",id:"toLevels",onClick:function(e){o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root"))}},s.a.createElement("i",{className:"material-icons"},"menu")),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"question"},s.a.createElement("h1",null,"Level ",l),r,s.a.createElement("input",{type:"text",id:"ans",placeholder:"Answer",onChange:this.handleChange}),s.a.createElement("button",{type:"submit",id:"ansSubmit",onClick:function(r){var u=e.state.value,c="";if(u.includes(",")){var i,m=u.split(","),d=Object(a.a)(m);try{for(d.s();!(i=d.n()).done;){c+=i.value}}catch(E){d.e(E)}finally{d.f()}c=Number(c)}else c=Number(u);isNaN(c)?document.getElementById("CorI").innerHTML="Not a valid response! Try again.":c!==y["ans"+l]?document.getElementById("CorI").innerHTML="Incorrect! Try again.":(document.getElementById("CorI").innerHTML='Correct! Press the "space" key to head to the next level.',document.cookie="".concat(e.props.questionNum,"=true"),t.setAttribute("class","active"),t.onclick=function(){o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(n,{questionNum:l+1})),document.getElementById("root")),document.getElementById("CorI").innerHTML="",document.getElementById("ans").value="",t.onclick=null,t.setAttribute("class","")},document.body.onkeyup=function(e){e.preventDefault(),32===e.keyCode&&t.click()})}},"\u2191"),s.a.createElement("p",{id:"CorI"}))))}}]),n}(s.a.Component);n(19);var v=function(){return s.a.createElement("div",{className:"How2Play"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"play"},s.a.createElement("h1",null,"How to Play"),s.a.createElement("p",null,"There are 100 levels (and maybe more in the future!) to solve in this game. Each level provides mathematical clues that will help the player discover the correct answer to the level. For example:"),s.a.createElement("h3",null,"2 + 4 = x"),s.a.createElement("h3",null,"x + 5 = ?"),s.a.createElement("p",null,"Using algebra, the answer, indicated by the question mark, is 11. Unfortunately, the clues won't be as simple as the ones in this level, but the underlying concept is quite understandable. Also, each clue contains different patterns that need to be applied to the rest of the clues in order to complete the level. Naturally, until one level is solved, the player may not move on to the next one."),s.a.createElement("p",null,"And lastly, in order to have the best experience playing this game, please update your browser to the latest version possible."),s.a.createElement("h2",null,"Good luck and let your skills be put to the test!"),s.a.createElement("button",{type:"button",onClick:function(e){return o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,{questionNum:1})),document.getElementById("root"))}},"Level 1"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(u,null)),document.getElementById("root")),document.getElementById("play").onclick=function(){var e=document.cookie;if(e){var t,n=e.split(";"),l=[],r=Object(a.a)(n);try{for(r.s();!(t=r.n()).done;){var u=t.value;l.push(parseInt(u))}}catch(i){r.e(i)}finally{r.f()}var c=l[l.length-1];o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(b,{questionNum:c+1})),document.getElementById("root"))}else o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,null)),document.getElementById("root"))},document.getElementById("levels").onclick=function(){o.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root"))},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.ebbbecec.chunk.js.map