(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){},22:function(e,t,a){e.exports=a(48)},30:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(21),r=a.n(c),i=(a(30),a(1)),u=a(2),m=a(4),s=a(3),o=a(5),E=a(7),d=a(6),b=function(){var e=Object(n.useState)("up"),t=Object(d.a)(e,2),a=t[0],l=t[1],c=Object(n.useRef)(!1),r=Object(n.useRef)(0);return Object(n.useEffect)(function(){r.current=window.pageYOffset;var e=function(){var e=window.pageYOffset;if(Math.abs(e-r.current)>=0){var t=e>r.current?"down":"up";l(t),r.current=e>0?e:0}c.current=!1},t=function(){c.current||(c.current=!0,window.requestAnimationFrame(e))};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}},[a]),a};a(40),a(17);function f(){var e=b();return l.a.createElement("nav",{className:"nav ".concat("up"===e?"show-nav":"hide-nav"),id:"navbar"},l.a.createElement("ol",{className:"nav-content"},l.a.createElement("img",{className:"logo logo-slideleft",src:"./clock.png",alt:"Website logo"}),l.a.createElement("ol",{className:"nav-items"},l.a.createElement("li",{className:"nav-item underline nav-slidedown"},l.a.createElement(E.Link,{to:"about",spy:!0,smooth:!0,offset:-75,duration:500},"About")),l.a.createElement("li",{className:"nav-item underline nav-slidedown"},l.a.createElement(E.Link,{to:"projects",spy:!0,smooth:!0,offset:-75,duration:500},"Projects")),l.a.createElement("li",{className:"nav-item underline nav-slidedown"},l.a.createElement(E.Link,{to:"education",spy:!0,smooth:!0,offset:-75,duration:500},"Education")),l.a.createElement("li",{className:"nav-item underline nav-slidedown"},l.a.createElement(E.Link,{to:"contactme",spy:!0,smooth:!0,offset:-75,duration:500},"Contact Me")),l.a.createElement("li",{className:"nav-item"},"Resume"))))}a(41);var h=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Main-Text"},l.a.createElement("p",{className:"typed-text"},"Hi, my name is"),l.a.createElement("div",{className:"titletext-fade"},l.a.createElement("h1",{id:"name"},"Oliver Greenwood"),l.a.createElement("p",null,"Summary")))}}]),t}(n.Component),v=(a(42),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"about"},l.a.createElement("h2",null,"About me:"),l.a.createElement("p",null,"Hi there, my name is Oliver Greenwood"))}}]),t}(n.Component)),p=(a(43),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"projects"},l.a.createElement("h2",null,"Projects"),l.a.createElement("div",{className:"featured"},l.a.createElement("div",{className:"project-summary"},l.a.createElement("h3",{className:"project-title"},"yadyyada"),l.a.createElement("p",null,"Hello summary"),l.a.createElement("div",{className:"project-technologies"},l.a.createElement("p",null,"technologies:"))),l.a.createElement("div",{className:"featured-right"},l.a.createElement("img",{className:"featured-img",src:"./project_imgs/project_algorithms.png",alt:""}),l.a.createElement("div",{className:"project-link-button"},l.a.createElement("b",null,l.a.createElement("p",{href:"/",className:"project-link"},"Img"))))),l.a.createElement("div",{className:"featured"}))}}]),t}(n.Component));a(44);function j(){var e=Object(n.useState)("tab1"),t=Object(d.a)(e,2),a=t[0],c=t[1],r=function(e){c(e)};return l.a.createElement("div",{id:"education"},l.a.createElement("h2",null,"Education"),l.a.createElement("div",{id:"edu-table"},l.a.createElement("div",{className:"tab-col"},l.a.createElement("ul",{className:"tabs"},l.a.createElement("li",{onClick:function(){return r("tab1")}},l.a.createElement("p",{className:"button ".concat("tab1"===a?"edu-tab-active":"")},"University")),l.a.createElement("li",{onClick:function(){return r("tab2")}},l.a.createElement("p",{className:"button ".concat("tab2"===a?"edu-tab-active":"")},"A Levels")),l.a.createElement("li",{onClick:function(){return r("tab3")}},l.a.createElement("p",{className:"button ".concat("tab3"===a?"edu-tab-active":"")},"GCSEs")))),l.a.createElement("div",{className:"content-col"},l.a.createElement("div",{className:"edu-info ".concat("tab1"===a?"":"edu-hidden")},l.a.createElement("h2",null,"University (2023 - )"),l.a.createElement("p",null,"Good Morning VIETNAM")),l.a.createElement("div",{className:"edu-info ".concat("tab2"===a?"":"edu-hidden")},l.a.createElement("h2",null,"A Levels (2021 - 2023)"),l.a.createElement("table",{className:"ALevel-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Subject"),l.a.createElement("th",null,"Grade"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Mathematics"),l.a.createElement("td",null,"_")),l.a.createElement("tr",null,l.a.createElement("td",null,"Further Mathematics"),l.a.createElement("td",null,"_")),l.a.createElement("tr",null,l.a.createElement("td",null,"Physics"),l.a.createElement("td",null,"_")),l.a.createElement("tr",null,l.a.createElement("td",null,"Computer Science"),l.a.createElement("td",null,"_"))))),l.a.createElement("div",{className:"edu-info ".concat("tab3"===a?"":"edu-hidden")},l.a.createElement("h2",null,"GCSEs (2018 - 2021)"),l.a.createElement("table",{className:"GCSE-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Subject"),l.a.createElement("th",null,"Grade"),l.a.createElement("th",null,"Subject"),l.a.createElement("th",null,"Grade"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Mathematics"),l.a.createElement("td",null,"9"),l.a.createElement("td",null,"Physics"),l.a.createElement("td",null,"9")),l.a.createElement("tr",null,l.a.createElement("td",null,"Biology"),l.a.createElement("td",null,"9"),l.a.createElement("td",null,"Chemistry"),l.a.createElement("td",null,"9")),l.a.createElement("tr",null,l.a.createElement("td",null,"Computer Science"),l.a.createElement("td",null,"9"),l.a.createElement("td",null,"Electronics"),l.a.createElement("td",null,"9")),l.a.createElement("tr",null,l.a.createElement("td",null,"History"),l.a.createElement("td",null,"8"),l.a.createElement("td",null,"French"),l.a.createElement("td",null,"8")),l.a.createElement("tr",null,l.a.createElement("td",null,"English Language"),l.a.createElement("td",null,"7"),l.a.createElement("td",null,"English Literature"),l.a.createElement("td",null,"8")),l.a.createElement("tr",null,l.a.createElement("td",null,"Further Mathematics"),l.a.createElement("td",null,"9"))))))))}a(45);var O=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"contactme"},l.a.createElement("h2",null,"Contact Me"))}}]),t}(n.Component),N=(a(46),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"socials"},l.a.createElement("ul",{className:"social_list social-slideup"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/_greenwood672"},l.a.createElement("img",{className:"social",alt:"",src:"./social_icons/insta.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.discord.com/users/Greenwood#6835"},l.a.createElement("img",{className:"social",alt:"",src:"./social_icons/discord.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.github.com/OGreenwood672"},l.a.createElement("img",{className:"social",alt:"",src:"./social_icons/github.png"})))))}}]),t}(n.Component));function w(e){var t=Object(n.useState)(!1),a=Object(d.a)(t,2),c=a[0],r=a[1],i=Object(n.useRef)();return Object(n.useEffect)(function(){var e=new IntersectionObserver(function(e){e.forEach(function(e){!0===e.isIntersecting&&r(e.isIntersecting)})});return e.observe(i.current),function(){return e.unobserve(i.current)}},[]),l.a.createElement("div",{className:"fade-in-section ".concat(c?"is-visible":""),ref:i},e.children)}a(47);var g=function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(f,null)),l.a.createElement("div",{orientation:"left"},l.a.createElement(N,null)),l.a.createElement("div",{orientation:"right"}),l.a.createElement("div",{className:"thin-content"},l.a.createElement(h,null),l.a.createElement(w,null,l.a.createElement(v,null))),l.a.createElement("div",{className:"thick-content"},l.a.createElement(w,null,l.a.createElement(p,null)),l.a.createElement(w,null,l.a.createElement(j,null)),l.a.createElement(w,null,l.a.createElement(O,null))))}}]),t}(n.Component);r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(g,null)))}},[[22,1,2]]]);
//# sourceMappingURL=main.f684f55a.chunk.js.map