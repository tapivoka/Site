(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{211:function(e,a,t){"use strict";t.r(a);t(15),t(16),t(8),t(20),t(142);var n=t(0),r=t.n(n),l=t(204),c=(t(232),t(213));t.d(a,"query",(function(){return i}));a.default=function(e){var a,t=e.data.allMarkdownRemark.edges,n=(a=function(e){return e.node.frontmatter.year},t.reduce((function(e,t){return(e[a(t)]=e[a(t)]||[]).push(t),e}),{})),i=Object.keys(n).sort().reverse();return r.a.createElement(l.a,null,r.a.createElement("div",null,r.a.createElement("h1",null,"Публикации"),r.a.createElement("div",{className:"publications"},i.map((function(e){return r.a.createElement("div",{className:"publications__section",key:e},r.a.createElement("h2",{className:"publications__year"},e),n[e].map((function(e){var a=e.node;return r.a.createElement(c.a,{node:a,key:a.id})})))})))))};var i="3715523091"},213:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t(0),r=t.n(n),l=t(35),c=t(214),i=t.n(c),u=(t(215),function(e){var a=e.node,t=Object(n.useState)(!1),c=t[0],u=t[1];return r.a.createElement("div",{className:"publication-card card card--left"},r.a.createElement("h3",{className:"publication-card__title",dangerouslySetInnerHTML:{__html:a.frontmatter.title}}),r.a.createElement("div",null,a.frontmatter.journal),r.a.createElement("div",{className:"publication-card__links"},!!a.html&&r.a.createElement("a",{className:"publication-card__link",onClick:function(){u(!c)}},"Аннотация"),r.a.createElement(l.a,{className:"publication-card__link",to:a.fields.slug},"Подробнее")),r.a.createElement("div",{className:i()("publication-card__abstract",{"publication-card__abstract--visible":c}),dangerouslySetInnerHTML:{__html:a.html}}))})},214:function(e,a,t){var n;t(37),function(){"use strict";var t={}.hasOwnProperty;function r(){for(var e=[],a=0;a<arguments.length;a++){var n=arguments[a];if(n){var l=typeof n;if("string"===l||"number"===l)e.push(n);else if(Array.isArray(n)&&n.length){var c=r.apply(null,n);c&&e.push(c)}else if("object"===l)for(var i in n)t.call(n,i)&&n[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(a,[]))||(e.exports=n)}()}}]);
//# sourceMappingURL=component---src-pages-publications-js-d8cf14f524f42399f012.js.map