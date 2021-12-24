(this["webpackJsonppathrise-front"]=this["webpackJsonppathrise-front"]||[]).push([[0],{32:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(13),s=c.n(r),i=(c(32),c(4)),o=c(17),u=c.n(o),a="SET_ALL_SOURCES",l="SET_CURRENT_SOURCE",j="RESET_SOURCES_STATE",b=function(e){return{type:a,data:e}},O=function(e){return{type:l,data:e}},d=c(2),p=c(1),h=function(e){var t=Object(i.b)(),c=Object(d.f)(),n=function(e){t(function(e){return function(t){return u.a.get("http://localhost:3001/sources/".concat(e)).then((function(e){t(O(e.data))}))}}(e)),c("/sources/".concat(e,"/opportunities"))};return Object(p.jsxs)("div",{className:"Source",children:[Object(p.jsxs)("p",{className:"rating",children:[e.source.rating," "]}),Object(p.jsx)("img",{className:"logo",src:e.source.logo_file,alt:"logo"}),Object(p.jsxs)("li",{className:"list-item",onClick:function(){return n(e.id)},children:[e.source.name," "]}),Object(p.jsx)("p",{className:"description",children:Object(p.jsx)("em",{children:e.source.description})})]})},m=function(){var e=Object(i.c)((function(e){return e.sources.allSources}));return Object(p.jsxs)("section",{className:"list-view",children:[Object(p.jsx)("h2",{children:"Job Sources"}),function(){var t;return(t=e.map((function(e){return Object(p.jsx)(h,{source:e,id:e.id},e.id)})))?Object(p.jsx)("ul",{id:"items-list",className:"model-list",children:t}):""}()]})},f=c(7),x=function(e){return Object(p.jsxs)("div",{className:"Source",children:[Object(p.jsx)("img",{className:"logo",src:e.opportunity.source.logo_file,alt:"logo"}),Object(p.jsx)("li",{className:"list-item",children:Object(p.jsxs)("b",{children:[" ",e.opportunity.company_name]})}),Object(p.jsxs)("p",{className:"description",children:[Object(p.jsx)("em",{children:"Job Title:"})," ",e.opportunity.job_title,Object(p.jsx)("br",{}),Object(p.jsxs)("p",{children:[Object(p.jsx)("em",{children:"ID:"})," ",e.opportunity.id]}),Object(p.jsx)("em",{children:"Link:"})," ",Object(p.jsx)("a",{href:e.opportunity.job_url,children:e.opportunity.job_url})]})]})},S=function(e){var t=Object(i.c)((function(e){return e.sources.opportunities})),c=Object(i.c)((function(e){return e.sources.currentSource})),r=Object(n.useState)(""),s=Object(f.a)(r,2),o=s[0],u=s[1],a=Object(n.useState)(null),l=Object(f.a)(a,2),j=(l[0],l[1]);Object(n.useEffect)((function(){j(t)}),[t]);var b=function(){return t.filter((function(e){return e.job_title.toUpperCase().includes(o.toUpperCase())}))};return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsxs)("h2",{children:[" Source: ",c?c.name:""," "]}),Object(p.jsx)("h2",{className:"model-list",children:t?1===t.length?t.length+" opportunity":t.length+" opportunities":"Finding current job opportunities, please wait ..."}),Object(p.jsx)("input",{className:"newnewnew",placeholder:"SEARCH POSITIONS",type:"text",name:"name",onChange:function(e){u(e.target.value),b()},value:o}),t?function(){var e;return 0===t.length?Object(p.jsxs)("ul",{className:"model-list",children:[" ",Object(p.jsx)("li",{className:"list-item",children:Object(p.jsx)("p",{className:"no",children:Object(p.jsx)("em",{children:"There aren't any current available job opportunities for this Source"})})})]}):(e=b().map((function(e){return Object(p.jsx)(x,{opportunity:e,id:e.id},e.id)})))?Object(p.jsx)("ul",{id:"items-list",className:"model-list",children:e}):""}():""]})},g=c(9),N=function(){var e=Object(i.b)();return Object(p.jsx)("div",{class:"links",children:Object(p.jsx)(g.b,{to:"/",children:Object(p.jsx)("button",{onClick:function(){e({type:j})},className:"header example_f myButton",children:"Home"})})})};c(58);var v=function(){var e=Object(i.b)(),t=Object(i.c)((function(e){return e.sources.allSources}));return Object(n.useEffect)((function(){t||e((function(e){return u.a.get("http://localhost:3001/sources").then((function(t){e(b(t.data.object))}))}))})),Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)(N,{}),t?Object(p.jsxs)(d.c,{children:[Object(p.jsx)(d.a,{path:"/",element:Object(p.jsx)(m,{})}),Object(p.jsx)(d.a,{path:"/sources/:id/opportunities",element:Object(p.jsx)(S,{})})]}):""]})},_=c(10),E=c(27),y=c(8),C=function(e){return Object(y.a)(Object(y.a)({},e),{},{currentSource:null,opportunities:null})},T=function(e,t){return Object(y.a)(Object(y.a)({},e),{},{allSources:t})},w=function(e,t){return Object(y.a)(Object(y.a)({},e),{},{currentSource:t.object,opportunities:t.options.include})},R=Object(_.b)({sources:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return C(e);case a:return T(e,t.data);case l:return w(e,t.data);default:return e}}}),U=R,k=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||_.c,I=Object(_.d)(U,k(Object(_.a)(E.a)));s.a.render(Object(p.jsx)(i.a,{store:I,children:Object(p.jsx)(g.a,{children:Object(p.jsx)(v,{})})}),document.getElementById("root"))}},[[59,1,2]]]);
//# sourceMappingURL=main.f6a2ae3b.chunk.js.map