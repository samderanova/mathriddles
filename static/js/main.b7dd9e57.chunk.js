(this.webpackJsonpmathriddles=this.webpackJsonpmathriddles||[]).push([[0],[,,,,,,,,,function(e){e.exports=JSON.parse('{"question1":"10, 20, 30, 40, ?","ans1":50,"question2":"0, 1, 1, 2, 3, 5, ?","ans2":8,"question3":"1, 2 = 3\\n6, 7 = 8\\n11, 12 = ?","ans3":13,"question4":"2, 4, ?","ans4":6,"question5":"5, 25, 125, 625, ?","ans5":3125,"question6":"1.414, 1.732, 2, ?\\nRound to 3 decimal places","ans6":2.236,"question7":"1, 6, 6, 36, 216, ?","ans7":7776,"question8":"2, 3, 5, 7, ?","ans8":11,"question9":"1, 2, 6, 24, ?","ans9":120,"question10":"1, 5, 14, 30, 55, ?","ans10":91,"question11":"x+y=2\\n3x+y=0\\nx=?","ans11":-1,"question12":"2, 3 = 6\\n4, 5 = 20\\n8, 9 = ?","ans12":72,"question13":"2a=1\\nb^2=0.25\\na+b=? ","ans13":1,"question14":"$*$*$=8\\n($^10)/2=?","ans14":512,"question15":"c=6\\nc=4\\nc=?","ans15":4,"question16":"","ans16":"","question17":"","ans17":"","question18":"","ans18":"","question19":"","ans19":"","question20":"","ans20":"","question21":"","ans21":"","question22":"","ans22":"","question23":"","ans23":"","question24":"","ans24":"","question25":"","ans25":"","question26":"","ans26":"","question27":"","ans27":"","question28":"","ans28":"","question29":"","ans29":"","question30":"","ans30":"","question31":"","ans31":"","question32":"","ans32":"","question33":"","ans33":"","question34":"","ans34":"","question35":"","ans35":"","question36":"","ans36":"","question37":"","ans37":"","question38":"","ans38":"","question39":"","ans39":"","question40":"","ans40":"","question41":"","ans41":"","question42":"","ans42":"","question43":"","ans43":"","question44":"","ans44":"","question45":"","ans45":"","question46":"","ans46":"","question47":"","ans47":"","question48":"","ans48":"","question49":"","ans49":"","question50":"","ans50":"","question51":"","ans51":"","question52":"","ans52":"","question53":"","ans53":"","question54":"","ans54":"","question55":"","ans55":"","question56":"","ans56":"","question57":"","ans57":"","question58":"","ans58":"","question59":"","ans59":"","question60":"","ans60":"","question61":"","ans61":"","question62":"","ans62":"","question63":"","ans63":"","question64":"","ans64":"","question65":"","ans65":"","question66":"","ans66":"","question67":"","ans67":"","question68":"","ans68":"","question69":"","ans69":"","question70":"","ans70":"","question71":"","ans71":"","question72":"","ans72":"","question73":"","ans73":"","question74":"","ans74":"","question75":"","ans75":"","question76":"","ans76":"","question77":"","ans77":"","question78":"","ans78":"","question79":"","ans79":"","question80":"","ans80":"","question81":"","ans81":"","question82":"","ans82":"","question83":"","ans83":"","question84":"","ans84":"","question85":"","ans85":"","question86":"","ans86":"","question87":"","ans87":"","question88":"","ans88":"","question89":"","ans89":"","question90":"","ans90":"","question91":"","ans91":"","question92":"","ans92":"","question93":"","ans93":"","question94":"","ans94":"","question95":"","ans95":"","question96":"","ans96":"","question97":"","ans97":"","question98":"","ans98":"","question99":"","ans99":"","question100":"","ans100":""}')},function(e,n,t){e.exports=t(20)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(2),o=t(0),s=t.n(o),i=t(1),u=t.n(i);t(15),t(16);var l=function(){return s.a.createElement("div",{className:"App"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"home"},s.a.createElement("h1",null,"Math Riddles Online"),s.a.createElement("button",{type:"button",id:"play"},"Play"),s.a.createElement("button",{type:"button",id:"levels"},"Levels"),s.a.createElement("h3",null,"IMPORTANT: This game relies on cookies to track progress. Clearing them will therefore clear your own progress!"))))},r=t(3),c=t(4),m=t(5),d=t(7),q=t(6),h=(t(17),t(18),t(9),[]);h.push(s.a.createElement("button",{key:1,type:"button",id:1},"1"));for(var E=2;E<101;E++)h.push(s.a.createElement("button",{key:E,type:"button",id:E,disabled:!0},E));var p=function(e){Object(d.a)(t,e);var n=Object(q.a)(t);function t(){return Object(r.a)(this,t),n.apply(this,arguments)}return Object(c.a)(t,[{key:"componentDidMount",value:function(){var e,n=document.cookie.split(";"),t=[],o=Object(a.a)(n);try{for(o.s();!(e=o.n()).done;){var i=e.value;t.push(parseInt(i))}}catch(r){o.e(r)}finally{o.f()}for(var l=1;l<=t.length+1;l++)document.getElementById(l).removeAttribute("disabled");h.forEach((function(e){document.getElementById(e.props.id).onclick=function(){return u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,{questionNum:e.props.id})),document.getElementById("root"))}}))}},{key:"render",value:function(){return s.a.createElement("div",{className:"levels"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"buttonQuestions"},s.a.createElement("h1",null,"Levels"),s.a.createElement("div",{className:"buttons"},s.a.createElement("button",{type:"button",className:"leftArrow",onClick:function(){return document.location.reload()}},"\u2190"),h))))}}]),t}(s.a.Component),y=t(9),v=function(e){Object(d.a)(t,e);var n=Object(q.a)(t);function t(e){var a;return Object(r.a)(this,t),(a=n.call(this,e)).state={value:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a}return Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"componentDidMount",value:function(){document.getElementById("ans").addEventListener("keyup",(function(e){e.preventDefault(),13===e.keyCode&&document.getElementById("ansSubmit").click()}))}},{key:"render",value:function(){var e=this,n=document.getElementById("rightArrow"),o=this.props.questionNum,i=y["question"+o],l=[];return function(){for(var e=i.split("\n"),n=0;n<e.length;n++)l.push(s.a.createElement("h3",{key:n},e[n]))}(),s.a.createElement("div",{className:"display"},s.a.createElement("button",{type:"button",id:"leftArrow",onClick:function(){1===o?document.location.reload():u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(t,{questionNum:o-1})),document.getElementById("root"))}},"\u2190"),s.a.createElement("button",{type:"button",id:"rightArrow"},"\u2192"),s.a.createElement("button",{type:"button",id:"toHome",onClick:function(e){return document.location.reload()}},s.a.createElement("i",{className:"material-icons"},"home")),s.a.createElement("button",{type:"button",id:"toLevels",onClick:function(e){u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root"))}},s.a.createElement("i",{className:"material-icons"},"menu")),s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"question"},s.a.createElement("h1",null,"Level ",o),l,s.a.createElement("input",{type:"text",id:"ans",placeholder:"Answer",onChange:this.handleChange}),s.a.createElement("button",{type:"submit",id:"ansSubmit",onClick:function(i){var l=e.state.value,r="";if(l.includes(",")){var c,m=l.split(","),d=Object(a.a)(m);try{for(d.s();!(c=d.n()).done;){r+=c.value}}catch(q){d.e(q)}finally{d.f()}r=Number(r)}else r=Number(l);isNaN(r)?document.getElementById("CorI").innerHTML="Not a valid response! Try again.":r!==y["ans"+o]?document.getElementById("CorI").innerHTML="Incorrect! Try again.":(document.getElementById("CorI").innerHTML='Correct! Press the "space" key to Head to the next level.',document.cookie="".concat(e.props.questionNum,"=true"),n.setAttribute("class","active"),n.onclick=function(){u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(t,{questionNum:o+1})),document.getElementById("root")),document.getElementById("CorI").innerHTML="",document.getElementById("ans").value="",n.onclick=null,n.setAttribute("class","")},document.body.onkeyup=function(e){e.preventDefault(),32===e.keyCode&&n.click()})}},"\u2191"),s.a.createElement("p",{id:"CorI"}))))}}]),t}(s.a.Component);t(19);var f=function(){return s.a.createElement("div",{className:"How2Play"},s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"play"},s.a.createElement("h1",null,"How to Play"),s.a.createElement("p",null,"There are 100 levels (and maybe more in the future!) to solve in this game. Each level provides mathematical clues that will help the player discover the correct answer to the level. For example:"),s.a.createElement("h3",null,"2 + 4 = x"),s.a.createElement("h3",null,"x + 5 = ?"),s.a.createElement("p",null,"Using algebra, the answer, indicated by the question mark, is 11. Unfortunately, the clues won't be as simple as the ones in this level, but the underlying concept is quite understandable. Also, each clue contains different patterns that need to be applied to the rest of the clues in order to complete the level. Naturally, until one level is solved, the player may not move on to the next one."),s.a.createElement("h2",null,"Good luck and let your skills be put to the test!"),s.a.createElement("button",{type:"button",onClick:function(e){return u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,{questionNum:1})),document.getElementById("root"))}},"Level 1"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(l,null)),document.getElementById("root")),document.getElementById("play").onclick=function(){var e=document.cookie;if(e){var n,t=e.split(";"),o=[],i=Object(a.a)(t);try{for(i.s();!(n=i.n()).done;){var l=n.value;o.push(parseInt(l))}}catch(c){i.e(c)}finally{i.f()}var r=o[o.length-1];u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(v,{questionNum:r+1})),document.getElementById("root"))}else u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(f,null)),document.getElementById("root"))},document.getElementById("levels").onclick=function(){u.a.render(s.a.createElement(s.a.StrictMode,null,s.a.createElement(p,null)),document.getElementById("root"))},"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.b7dd9e57.chunk.js.map