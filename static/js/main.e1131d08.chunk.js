(this["webpackJsonpreact-swapi"]=this["webpackJsonpreact-swapi"]||[]).push([[0],{23:function(e,a,t){e.exports=t(35)},28:function(e,a,t){},35:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(21),l=t.n(c),s=t(8),o=(t(28),t(1));t(6);var u=function(){return r.a.createElement("div",{className:"home-page"},r.a.createElement("h1",null,"This is the homepage!"),r.a.createElement("p",null,"There's not much here, although I'd love to add a ",r.a.createElement("br",null),"search bar to allow you to find your favorite characters ",r.a.createElement("br",null),"and starships aventually. Here's some info about this App:"),r.a.createElement("ul",null,r.a.createElement("li",null,"It was built using React and React-Router"),r.a.createElement("li",null,"The lists and details data are provided by SWAPI"),r.a.createElement("li",null,"It was built as an alternative to a Pokedex assignment ",r.a.createElement("br",null),"-- Aren't you glad?")))},i=t(15),m=t(7);var p=function(e){return r.a.createElement("div",{className:"char-card"},r.a.createElement("h3",null,"Name:  ",r.a.createElement("span",{className:"name"}),e.currentChar.name),r.a.createElement("p",null,"Birth Year:  ",r.a.createElement("span",{className:"data"}),e.currentChar.birth_year),r.a.createElement("p",null,"Height:  ",r.a.createElement("span",{className:"data"}),e.currentChar.height),r.a.createElement("p",null,"Hair Color:  ",r.a.createElement("span",{className:"data"}),e.currentChar.hair_color),r.a.createElement("p",null,"Eye Color:  ",r.a.createElement("span",{className:"data"}),e.currentChar.eye_color),r.a.createElement("p",null,"Gender:  ",r.a.createElement("span",{className:"data"}),e.currentChar.gender),r.a.createElement("button",{onClick:function(){return e.addToFleet(e.currentChar)}},"Add to your Fleet"))},h=t(10),E=t.n(h),d=t(14);var f=function(e){Object(n.useEffect)((function(){(function(){var a=Object(d.a)(E.a.mark((function a(){var t,n,r;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("http://swapi.dev/api/people/");case 2:return t=a.sent,a.next=5,t.json();case 5:n=a.sent,console.log(n),r=n.results,e.setCharacters(r);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),console.log("props.characters -",e.characters);var a=e.characters.map((function(a,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return e.onClick(a)}},r.a.createElement("p",null,a.name," "),r.a.createElement("img",{className:"saber-icon",src:"https://i.imgur.com/wog5YdQ.png"})))}));return r.a.createElement("div",{className:"char-list"},r.a.createElement("ul",{className:"char--list"},a))};var b=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)({}),s=Object(m.a)(l,2),o=s[0],u=s[1],h=Object(n.useState)([]),E=Object(m.a)(h,2),d=E[0],b=E[1];return r.a.createElement("div",{className:"people"},r.a.createElement(f,{className:"char-list",characters:t,setCharacters:c,onClick:function(e){console.log("current charater - ",e),u(e)}}),r.a.createElement(p,{className:"current-char",characters:t,currentChar:o,updateCurrentChar:u,addToFleet:function(e){console.log("adding ",e," to fleet"),b([].concat(Object(i.a)(d),[e])),console.log("new fleet array: ",d)}}))};var v=function(e){return r.a.createElement("div",{className:"ship-card"},r.a.createElement("h3",null,"Name:  ",r.a.createElement("span",{className:"data"}),e.currentShip.name),r.a.createElement("p",null,"Model:  ",r.a.createElement("span",{className:"data"}),e.currentShip.model),r.a.createElement("p",null,"Max Atm. Speed:  ",r.a.createElement("span",{className:"data"}),e.currentShip.max_atmosphering_speed),r.a.createElement("p",null,"Starship Class:  ",r.a.createElement("span",{className:"data"}),e.currentShip.starship_class),r.a.createElement("p",null,"Manufacturer:  ",r.a.createElement("span",{className:"data"}),e.currentShip.manufacturer),r.a.createElement("p",null,"Hyperdrive Rating:  ",r.a.createElement("span",{className:"data"}),e.currentShip.hyperdrive_rating),r.a.createElement("button",{onClick:function(){return e.addToFleet(e.currentShip)}},"Add to your Fleet"))};var g=function(e){Object(n.useEffect)((function(){(function(){var a=Object(d.a)(E.a.mark((function a(){var t,n,r;return E.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("http://swapi.dev/api/starships/");case 2:return t=a.sent,a.next=5,t.json();case 5:n=a.sent,console.log(n),r=n.results,e.setShips(r);case 9:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[]),console.log("props.ships -",e.ships);var a=e.ships.map((function(a,t){return r.a.createElement("li",{key:t},r.a.createElement("button",{onClick:function(){return e.onClick(a)}},r.a.createElement("p",null,a.name," "),r.a.createElement("img",{className:"ship-icon",src:"https://i.imgur.com/ISVKoiR.png"})))}));return r.a.createElement("div",{className:"ship-list"},r.a.createElement("ul",{className:"ship--list"},a))};var N=function(){var e=Object(n.useState)([]),a=Object(m.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)({}),s=Object(m.a)(l,2),o=s[0],u=s[1],p=Object(n.useState)([]),h=Object(m.a)(p,2),E=h[0],d=h[1];return r.a.createElement("div",{className:"starships"},r.a.createElement(g,{className:"ship-list",ships:t,setShips:c,onClick:function(e){console.log("current ship - ",e),u(e)}}),r.a.createElement(v,{className:"current-ship",ships:t,currentShip:o,updateCurrentShip:u,addToFleet:function(e){console.log("adding ",e," to fleet"),d([].concat(Object(i.a)(E),[e])),console.log("new fleet array: ",E)}}))};var C=function(e){return"https://swapi.dev/api/people/?search=".concat(e.name),r.a.createElement("div",{className:"my-fleet"})};var y=function(){return r.a.createElement("div",{className:"App"},r.a.createElement("nav",null,r.a.createElement(s.b,{to:"/"},r.a.createElement("h1",null,"Build your",r.a.createElement("img",{src:"https://clipart.info/images/ccovers/1513370389Star%20Wars%20Logo%20transparent%20PNG.png",alt:"logo"}),"Fleet")),r.a.createElement(s.b,{to:"/people"},"People"),r.a.createElement(s.b,{to:"/starships"},"Starships"),r.a.createElement(s.b,{to:"/myfleet"},"MY FLEET")),r.a.createElement("main",null,r.a.createElement(o.d,null,r.a.createElement(o.b,{exact:!0,path:"/",component:u}),r.a.createElement(o.b,{path:"/people",component:b}),r.a.createElement(o.b,{path:"/starships",component:N}),r.a.createElement(o.b,{path:"/myfleet",component:C}),r.a.createElement(o.b,{path:"*",render:function(){return r.a.createElement(o.a,{to:"/home"})}}))))};l.a.render(r.a.createElement(s.a,null,r.a.createElement(y,null)),document.getElementById("root"))},6:function(e,a,t){}},[[23,1,2]]]);
//# sourceMappingURL=main.e1131d08.chunk.js.map