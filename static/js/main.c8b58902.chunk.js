(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{22:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){"use strict";c.r(t);var n=c(10),a=c(5),r=(c(20),c(21),c(22),c(2)),s=c(0),j=function(){return Object(s.jsx)("h1",{className:"title",children:"Home Page"})},i=function(){return Object(s.jsx)("h1",{className:"title",children:"Page not found"})},l=c(6),b=c.n(l),o=function(e){var t=e.link,c=e.title;return Object(s.jsx)(a.c,{to:t,className:function(e){var t=e.isActive;return b()("navbar-item",{"has-background-grey-lighter":t})},children:c})},d=function(){return Object(s.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)("div",{className:"navbar-brand",children:[Object(s.jsx)(o,{link:"/",title:"Home"}),Object(s.jsx)(o,{link:"/people",title:"People"})]})})})},h=c(8),O=c(11),x=c(4),u=c(1),p=(c(24),function(){return Object(s.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(s.jsx)("div",{className:"Loader__content"})})}),m=function(e){var t=e.person,c=t.name,n=t.sex,r=t.slug;return Object(s.jsx)(a.b,{to:"/people/".concat(r),className:b()({"has-text-danger":"f"===n}),children:c})},f=function(e,t){return e.find((function(e){return e.name===t}))||null},v=function(e){var t=e.people,c=e.personId;return Object(s.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)("th",{children:"Name"}),Object(s.jsx)("th",{children:"Sex"}),Object(s.jsx)("th",{children:"Born"}),Object(s.jsx)("th",{children:"Died"}),Object(s.jsx)("th",{children:"Mother"}),Object(s.jsx)("th",{children:"Father"})]})}),Object(s.jsx)("tbody",{children:t.map((function(e){var n=e.sex,a=e.born,r=e.died,j=e.motherName,i=e.fatherName,l=e.slug,o=f(t,j),d=f(t,i);return Object(s.jsxs)("tr",{"data-cy":"person",className:b()({"has-background-warning":l===c}),children:[Object(s.jsx)("td",{children:Object(s.jsx)(m,{person:e})}),Object(s.jsx)("td",{children:n}),Object(s.jsx)("td",{children:a}),Object(s.jsx)("td",{children:r}),Object(s.jsx)("td",{children:o?Object(s.jsx)(m,{person:o}):j||"-"}),Object(s.jsx)("td",{children:d?Object(s.jsx)(m,{person:d}):i||"-"})]},l)}))})]})};function g(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var N=function(){var e=Object(u.useState)([]),t=Object(x.a)(e,2),c=t[0],n=t[1],a=Object(u.useState)(!1),j=Object(x.a)(a,2),i=j[0],l=j[1],b=Object(u.useState)(!1),o=Object(x.a)(b,2),d=o[0],m=o[1],f=Object(r.h)().slug,N=void 0===f?"":f;Object(u.useEffect)((function(){var e=function(){var e=Object(O.a)(Object(h.a)().mark((function e(){var t;return Object(h.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),l(!1),e.prev=2,e.next=5,g();case 5:t=e.sent,n(t),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(2),l(!0);case 12:m(!1);case 13:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(){return e.apply(this,arguments)}}();e()}),[]);var y=c.length<=0;return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)("h1",{className:"title",children:"People Page"}),Object(s.jsx)("div",{className:"block",children:Object(s.jsx)("div",{className:"box table-container",children:d?Object(s.jsx)(p,{}):Object(s.jsxs)(s.Fragment,{children:[i&&Object(s.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),y&&Object(s.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),Object(s.jsx)(v,{people:c,personId:N})]})})})]})},y=function(){return Object(s.jsxs)("div",{"data-cy":"app",children:[Object(s.jsx)(d,{}),Object(s.jsx)("main",{className:"section",children:Object(s.jsx)("div",{className:"container",children:Object(s.jsxs)(r.d,{children:[Object(s.jsx)(r.b,{path:"/",element:Object(s.jsx)(j,{})}),Object(s.jsx)(r.b,{path:"/home",element:Object(s.jsx)(r.a,{to:"/",replace:!0})}),Object(s.jsxs)(r.b,{path:"people",children:[Object(s.jsx)(r.b,{index:!0,element:Object(s.jsx)(N,{})}),Object(s.jsx)(r.b,{path:":slug",element:Object(s.jsx)(N,{})})]}),Object(s.jsx)(r.b,{path:"*",element:Object(s.jsx)(i,{})})]})})})]})};Object(n.createRoot)(document.getElementById("root")).render(Object(s.jsx)(a.a,{children:Object(s.jsx)(y,{})}))}},[[25,1,2]]]);
//# sourceMappingURL=main.c8b58902.chunk.js.map