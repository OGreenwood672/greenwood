(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,,,function(e,t,a){},,,,function(e,t,a){},,function(e,t,a){e.exports=a(50)},,,,,,,,function(e,t,a){},,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(22),r=a.n(c),i=(a(31),a(1)),o=a(2),s=a(4),m=a(3),u=a(5),d=a(6),E=a(7),h=function(){var e=Object(n.useState)("up"),t=Object(E.a)(e,2),a=t[0],l=t[1],c=Object(n.useRef)(!1),r=Object(n.useRef)(0);return Object(n.useEffect)(function(){r.current=window.pageYOffset;var e=function(){var e=window.pageYOffset;if(Math.abs(e-r.current)>=0){var t=e>r.current?"down":"up";l(t),r.current=e>0?e:0}c.current=!1},t=function(){c.current||(c.current=!0,window.requestAnimationFrame(e))};return window.addEventListener("scroll",t),function(){return window.removeEventListener("scroll",t)}},[a]),a};a(41),a(17);function p(){var e=h();return l.a.createElement("nav",{className:"nav ".concat("up"===e?"show-nav":"hide-nav"),id:"navbar"},l.a.createElement("ol",{className:"nav-content"},l.a.createElement(d.Link,{to:"name",spy:!0,smooth:!0,offset:-400,duration:500},l.a.createElement("img",{className:"logo logo-slideleft",src:"./clock.png",alt:"Website logo"})),l.a.createElement("ol",{className:"nav-items"},l.a.createElement("li",{className:"nav-item underline nav-slidedown"},l.a.createElement(d.Link,{to:"about",spy:!0,smooth:!0,offset:-75,duration:500},"About")),l.a.createElement("li",{className:"nav-item underline nav-slidedown"},l.a.createElement(d.Link,{to:"featured1",spy:!0,smooth:!0,offset:-200,duration:500},"Projects")),l.a.createElement("li",{className:"nav-item underline nav-slidedown"},l.a.createElement(d.Link,{to:"education",spy:!0,smooth:!0,offset:-75,duration:500},"Education")),l.a.createElement("li",{className:"nav-item underline nav-slidedown"},l.a.createElement(d.Link,{to:"contactme",spy:!0,smooth:!0,offset:-75,duration:500},"Contact Me")),l.a.createElement("li",{className:"nav-item underline nav-slidedown"},l.a.createElement("a",{href:"https://drive.google.com/file/d/108AitEGJGDjUB0gGqKHfayhSMjjUuMD-/view?usp=sharing",className:"nav-item",style:{padding:"initial"}},"R\xe9sum\xe9")))))}a(42);function f(){var e=h();return l.a.createElement("div",null,l.a.createElement("div",{className:"".concat("up"===e?"show-logo":"hide-logo"," mobile-menu")},l.a.createElement(d.Link,{to:"about",spy:!0,smooth:!0,offset:-75,duration:500,className:"small-logo"},l.a.createElement("img",{id:"about-menu-button",className:"small-logo hidden",src:"./icons/info.png",alt:"About icon"})),l.a.createElement(d.Link,{to:"featured1",spy:!0,smooth:!0,offset:-200,duration:500,className:"small-logo"},l.a.createElement("img",{id:"projects-menu-button",className:"small-logo hidden",src:"./icons/projects.png",alt:"Projects icon"})),l.a.createElement(d.Link,{to:"name",spy:!0,smooth:!0,offset:-400,duration:500},l.a.createElement("img",{id:"mobile-menu-button",className:"large-logo",src:"./clock.png",alt:"Website logo"})),l.a.createElement(d.Link,{to:"education",spy:!0,smooth:!0,offset:-75,duration:500,className:"small-logo"},l.a.createElement("img",{id:"contact-menu-button",className:"small-logo hidden",src:"./icons/education.png",alt:"Education icon"})),l.a.createElement(d.Link,{to:"contactme",spy:!0,smooth:!0,offset:-75,duration:500,className:"small-logo"},l.a.createElement("img",{id:"contact-menu-button",className:"small-logo hidden",src:"./icons/contact.png",alt:"Contact icon"}))))}a(43);var b=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"Main-Text"},l.a.createElement("p",{className:"typed-text"},"Hi, my name is"),l.a.createElement("div",{className:"titletext-fade"},l.a.createElement("h1",{id:"name"},"Oliver Greenwood"),l.a.createElement("p",null,"Hey there")))}}]),t}(n.Component),g=(a(44),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"about"},l.a.createElement("h2",null,"About me:"),l.a.createElement("div",{id:"about-content"},l.a.createElement("p",{id:"about-text"},"Hi there, my name is Oliver Greenwood. I am a self-taught programmer, with strong experience in Python, JavaScript, Java and C#."),l.a.createElement("img",{src:"me.png",alt:"Oliver Greenwood"})))}}]),t}(n.Component)),v=(a(45),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"projects"},l.a.createElement("h4",{id:"other-projects-title"},"Other Projects"),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/OGreenwood672/LyricGame"},l.a.createElement("div",{className:"other-project"},l.a.createElement("img",{src:"./project_imgs/project_lyric.png",alt:""})))),l.a.createElement("td",null,l.a.createElement("a",{href:"https://github.com/OGreenwood672/Natural-Selection-Simulation"},l.a.createElement("div",{className:"other-project"},l.a.createElement("img",{src:"./project_imgs/project_natural_selection.png",alt:""})))))))}}]),t}(n.Component));a(46);function j(){var e=Object(n.useState)("tab1"),t=Object(E.a)(e,2),a=t[0],c=t[1],r=function(e){c(e)};return l.a.createElement("div",{id:"education"},l.a.createElement("h2",null,"Education"),l.a.createElement("div",{id:"edu-table"},l.a.createElement("div",{className:"tab-col"},l.a.createElement("ul",{className:"tabs"},l.a.createElement("li",{onClick:function(){return r("tab1")}},l.a.createElement("p",{className:"button ".concat("tab1"===a?"edu-tab-active":"")},"University")),l.a.createElement("li",{onClick:function(){return r("tab2")}},l.a.createElement("p",{className:"button ".concat("tab2"===a?"edu-tab-active":"")},"A Levels")),l.a.createElement("li",{onClick:function(){return r("tab3")}},l.a.createElement("p",{className:"button ".concat("tab3"===a?"edu-tab-active":"")},"GCSEs")))),l.a.createElement("div",{className:"content-col"},l.a.createElement("div",{className:"edu-info ".concat("tab1"===a?"":"edu-hidden")},l.a.createElement("h2",null,"Cambridge University (2023 - Present)"),l.a.createElement("p",null)),l.a.createElement("div",{className:"edu-info ".concat("tab2"===a?"":"edu-hidden")},l.a.createElement("h2",null,"A Levels (2021 - 2023)"),l.a.createElement("table",{className:"ALevel-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Subject"),l.a.createElement("th",null,"Grade"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Mathematics"),l.a.createElement("td",null,"A*")),l.a.createElement("tr",null,l.a.createElement("td",null,"Further Mathematics"),l.a.createElement("td",null,"A*")),l.a.createElement("tr",null,l.a.createElement("td",null,"Computer Science"),l.a.createElement("td",null,"A*")),l.a.createElement("tr",null,l.a.createElement("td",null,"Physics"),l.a.createElement("td",null,"A"))))),l.a.createElement("div",{className:"edu-info ".concat("tab3"===a?"":"edu-hidden")},l.a.createElement("h2",null,"GCSEs (2018 - 2021)"),l.a.createElement("table",{className:"GCSE-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Subject"),l.a.createElement("th",null,"Grade"))),l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Mathematics"),l.a.createElement("td",null,"9")),l.a.createElement("tr",null,l.a.createElement("td",null,"Further Mathematics"),l.a.createElement("td",null,"9")),l.a.createElement("tr",null,l.a.createElement("td",null,"Physics"),l.a.createElement("td",null,"9")),l.a.createElement("tr",null,l.a.createElement("td",null,"Biology"),l.a.createElement("td",null,"9")),l.a.createElement("tr",null,l.a.createElement("td",null,"Chemistry"),l.a.createElement("td",null,"9")),l.a.createElement("tr",null,l.a.createElement("td",null,"Computer Science"),l.a.createElement("td",null,"9")),l.a.createElement("tr",null,l.a.createElement("td",null,"Electronics"),l.a.createElement("td",null,"9")),l.a.createElement("tr",null,l.a.createElement("td",null,"History"),l.a.createElement("td",null,"8")),l.a.createElement("tr",null,l.a.createElement("td",null,"French"),l.a.createElement("td",null,"8")),l.a.createElement("tr",null,l.a.createElement("td",null,"English Literature"),l.a.createElement("td",null,"8")),l.a.createElement("tr",null,l.a.createElement("td",null,"English Language"),l.a.createElement("td",null,"7"))))))))}a(47);var N=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"contactme"},l.a.createElement("h2",null,"Contact Me"),l.a.createElement("p",null,"Email: greenwood672.dev@gmail.com"))}}]),t}(n.Component),w=(a(48),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{id:"socials"},l.a.createElement("ul",{className:"social_list social-slideup"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/_greenwood672"},l.a.createElement("img",{className:"social",alt:"",src:"./social_icons/insta.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.discord.com/users/Greenwood#6835"},l.a.createElement("img",{className:"social",alt:"",src:"./social_icons/discord.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.github.com/OGreenwood672"},l.a.createElement("img",{className:"social",alt:"",src:"./social_icons/github.png"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/greenwood672"},l.a.createElement("img",{className:"social",alt:"",src:"./social_icons/LinkedIn.png"})))))}}]),t}(n.Component)),O=(a(21),function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"send_to_website",value:function(e){window.location.href=e}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"featured",id:"featured1"},l.a.createElement("div",{className:"featured-left"},l.a.createElement("a",{className:"project-title",href:"https://github.com/OGreenwood672/algorithms"},"Algorithm Website"),l.a.createElement("p",{className:"summary-text"},"A website which visualises different types of algorithms, including: Graphing algorithms, Sorting algorithms, and some miscellaneous algorithms."),l.a.createElement("div",{className:"project-technologies"},l.a.createElement("p",null,"Technologies used to develop this project include:"),l.a.createElement("svg",{className:"svg_techs"},l.a.createElement("g",null,l.a.createElement("ellipse",{cx:"44%",cy:"24%",className:"tech"}),l.a.createElement("text",{className:"tech-text",x:"40.5%",y:"28%"},"React")),l.a.createElement("g",null,l.a.createElement("ellipse",{cx:"56%",cy:"24%",className:"tech"}),l.a.createElement("text",{className:"tech-text",x:"53%",y:"28%"},"p5.js"))))),l.a.createElement("div",{className:"featured-right"},l.a.createElement("img",{className:"featured-img",src:"./project_imgs/project_algorithms.png",alt:""}),l.a.createElement("div",{className:"project-link-button"},l.a.createElement("div",{onClick:function(){return e.send_to_website("https://github.com/OGreenwood672/algorithms")},className:"project-link"},l.a.createElement("img",{className:"project-link-icon",src:"./social_icons/github.png",alt:""}),l.a.createElement("b",null,"View on GitHub")))))}}]),t}(n.Component)),y=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"send_to_website",value:function(e){window.location.href=e}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"featured"},l.a.createElement("div",{className:"featured-left"},l.a.createElement("img",{className:"featured-img",src:"./project_imgs/project_twitter.png",alt:""}),l.a.createElement("div",{className:"project-link-button"},l.a.createElement("div",{onClick:function(){return e.send_to_website("https://github.com/OGreenwood672/Twitter-Map")},className:"project-link"},l.a.createElement("img",{className:"project-link-icon",src:"./social_icons/github.png",alt:""}),l.a.createElement("b",null,"View on GitHub")))),l.a.createElement("div",{className:"featured-right"},l.a.createElement("a",{href:"https://github.com/OGreenwood672/Twitter-Map",className:"project-title"},"Twitter Map"),l.a.createElement("p",{className:"summary-text"},"A software which is able to scrape data from Twitter's API and create a force directed map of their community both 2D and 3D."),l.a.createElement("div",{className:"project-technologies"},l.a.createElement("p",null,"Technologies used to develop this project include:"),l.a.createElement("svg",{className:"svg_techs"},l.a.createElement("g",null,l.a.createElement("ellipse",{cx:"44%",cy:"24%",className:"tech"}),l.a.createElement("text",{className:"tech-text",x:"42%",y:"28%"},"API")),l.a.createElement("g",null,l.a.createElement("ellipse",{cx:"56%",cy:"24%",className:"tech"}),l.a.createElement("text",{className:"tech-text",x:"52%",y:"28%"},"three.js"))))))}}]),t}(n.Component);function k(e){var t=Object(n.useState)(!1),a=Object(E.a)(t,2),c=a[0],r=a[1],i=Object(n.useRef)();return Object(n.useEffect)(function(){var e=new IntersectionObserver(function(e){e.forEach(function(e){!0===e.isIntersecting&&r(e.isIntersecting)})});return e.observe(i.current),function(){return e.unobserve(i.current)}},[]),l.a.createElement("div",{className:"fade-in-section ".concat(c?"is-visible":""),ref:i},e.children)}a(49);var _=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"},l.a.createElement(p,null)),l.a.createElement("footer",{className:"App-footer"},l.a.createElement(f,null)),l.a.createElement("div",{orientation:"left"},l.a.createElement(w,null)),l.a.createElement("div",{orientation:"right"}),l.a.createElement("div",{className:"thin-content"},l.a.createElement(b,null),l.a.createElement(k,null,l.a.createElement(g,null))),l.a.createElement("div",{className:"thick-content"},l.a.createElement(k,null,l.a.createElement("h2",{className:"project-tab-title"},"Projects"),l.a.createElement(O,null)),l.a.createElement(k,null,l.a.createElement(y,null))),l.a.createElement("div",{className:"thin-content"},l.a.createElement(v,null),l.a.createElement(k,null,l.a.createElement(j,null)),l.a.createElement(k,null,l.a.createElement(N,null))))}}]),t}(n.Component);r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(_,null)))}],[[23,1,2]]]);
//# sourceMappingURL=main.7aab07b9.chunk.js.map