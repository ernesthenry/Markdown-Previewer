(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,n,a){e.exports=a(23)},15:function(e,n,a){},17:function(e,n,a){},19:function(e,n,a){},21:function(e,n,a){},23:function(e,n,a){"use strict";a.r(n);var t=a(0),r=a.n(t),o=a(4),c=a.n(o),l=(a(15),a(5)),i=a(6),m=a(8),s=a(7),d=a(9),u=(a(17),function(e){var n=e.onChange,a=e.markdownValue;return r.a.createElement("textarea",{id:"editor",value:a,onChange:n})}),h=a(1),p=a.n(h),w=function(e){var n=e.markdownValue,a=new p.a.Renderer;return a.link=function(e,n,a){return'<a target="_blank" href='.concat(e,">").concat(a,"</a>")},p.a.setOptions({breaks:!0}),r.a.createElement("div",{id:"preview",dangerouslySetInnerHTML:{__html:p()(n,{renderer:a})}})},k=(a(19),function(e){var n=e.children,a=e.title;return r.a.createElement("div",{className:"Card"},r.a.createElement("div",{className:"Card-header"},r.a.createElement("span",{className:"Card-header-title"},a),r.a.createElement("div",{className:"Card-header-circles"},r.a.createElement("span",{className:"circle-1"}),r.a.createElement("span",{className:"circle-2"}),r.a.createElement("span",{className:"circle-3"}))),r.a.createElement("div",{className:"Card-content"},n))}),E=(a(21),function(){return r.a.createElement("footer",{className:"Footer"},r.a.createElement("span",null,"Created by:"," ",r.a.createElement("a",{className:"Footer-link",href:"https://twitter.com/rmasianjr",target:"_blank",rel:"noopener noreferrer"},"Ricardo Masian Jr.")),r.a.createElement("span",null," | "),r.a.createElement("span",null,r.a.createElement("a",{className:"Footer-link",href:"https://github.com/rmasianjr/markdown-previewer",target:"_blank",rel:"noopener noreferrer"},"Repo Link")))}),f="# Greetings Earthlings! \n## Welcome to my markdown previewer\n\n[freeCodeCamp](https://www.freecodecamp.org/)\n\nFront End Libraries Projects\n- Random Quote Machine\n- Markdown Previewer\n- Drum Machine\n- Javascript Calculator\n- Pomodoro Clock\n\nthis is a **bold** text, an _emphasis_ , a _**combined emphasis**_ , and a ~~strikethrough~~\n\nHead 1 | Head 2 | Head 3\n------ |--------| ------\nitem1 | item2 | item3\nitem4 | item5 | item6\nitem7 | item8 | item9\n\n> example of blockquote\n\nInline `code`\n\n```\n// code block\n\nfunction sum (x, y) {\n  return x + y;\n}\n```\n\n![Random Animals](https://loremflickr.com/320/240)\n",v=function(e){function n(){var e,a;Object(l.a)(this,n);for(var t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(s.a)(n)).call.apply(e,[this].concat(r)))).state={markdownValue:f},a.handleChange=function(e){a.setState({markdownValue:e.target.value})},a}return Object(d.a)(n,e),Object(i.a)(n,[{key:"render",value:function(){var e=this.state.markdownValue;return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App-title"}," \u2014Markdown Previewer\u2014"),r.a.createElement("main",{className:"App-content"},r.a.createElement(k,{title:"Editor"},r.a.createElement(u,{onChange:this.handleChange,markdownValue:e})),r.a.createElement(k,{title:"Preview"},r.a.createElement(w,{markdownValue:e}))),r.a.createElement(E,null))}}]),n}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,2,1]]]);
//# sourceMappingURL=main.176d1408.chunk.js.map