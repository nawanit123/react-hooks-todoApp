(this["webpackJsonpreact-hooks-todo"]=this["webpackJsonpreact-hooks-todo"]||[]).push([[0],{62:function(e,t,n){e.exports=n(74)},67:function(e,t,n){},73:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(8),o=n.n(c),l=(n(67),n(75)),i=n(112),u=n(113),m=n(39),s=n(114),d=n(106),E=n(111),f=n(10);var g=function(e){var t=Object(a.useState)(e),n=Object(f.a)(t,2),r=n[0],c=n[1];return[r,function(e){c(e.target.value)},function(){c("")}]},h=n(30),O=n(53),b=n(117),v=function(e,t){switch(t.type){case"ADD":return[].concat(Object(O.a)(e),[{id:Object(b.a)(),task:t.task,complete:!1}]);case"REMOVE":return e.filter((function(e){return e.id!==t.id}));case"TOGGLE":return e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{complete:!e.complete}):e}));case"EDIT":return e.map((function(e){return e.id===t.id?Object(h.a)(Object(h.a)({},e),{},{task:t.task}):e}));default:return e}};var p=[{id:1,task:"Mow the lawn",complete:!1},{id:2,task:"Mow the lawn",complete:!1}],j=Object(a.createContext)(),k=Object(a.createContext)(),y=function(e){var t=function(e,t,n){var r=Object(a.useReducer)(n,t,(function(){var n;try{n=JSON.parse(window.localStorage.getItem(e)||String(t))}catch(a){n=t}return n})),c=Object(f.a)(r,2),o=c[0],l=c[1];return Object(a.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(o))}),[o,e]),[o,l]}("todos",p,v),n=Object(f.a)(t,2),c=n[0],o=n[1];return r.a.createElement(j.Provider,{value:c},r.a.createElement(k.Provider,{value:o},e.children))},w=n(115);var C=function(e){var t=e.id,n=e.task,c=e.toggleEditForm,o=g(n),l=Object(f.a)(o,3),i=l[0],u=l[1],m=l[2],s=Object(a.useContext)(k);return r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),s({type:"EDIT",id:t,task:i}),m(),c()},style:{marginLeft:"1rem",width:"50%"}},r.a.createElement(w.a,{value:i,onChange:u,margin:"normal",fullWidth:!0,autoFocus:!0}))},x=n(107),D=n(116),S=n(109),T=n(110),I=n(108),F=n(51),M=n.n(F),A=n(52),G=n.n(A);var J=Object(a.memo)((function(e){var t=e.task,n=e.id,c=e.complete,o=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=Object(a.useState)(e),n=Object(f.a)(t,2),r=n[0],c=n[1],o=function(){return c(!r)};return[r,o]}(!1),l=Object(f.a)(o,2),i=l[0],u=l[1],m=Object(a.useContext)(k);return console.log("To-do re-render",t),r.a.createElement(x.a,{style:{height:"64px"}},i?r.a.createElement(C,{id:n,task:t,toggleEditForm:u}):r.a.createElement(r.a.Fragment,null,r.a.createElement(D.a,{tabIndex:-1,checked:c,onClick:function(){return m({type:"TOGGLE",id:n})}}),r.a.createElement(S.a,{style:{textDecoration:c?"line-through":"none"}},t),r.a.createElement(T.a,null,r.a.createElement(I.a,{"aria-label":"Delete",onClick:function(){return m({type:"REMOVE",id:n})}},r.a.createElement(M.a,null)),r.a.createElement(I.a,{"aria-label":"Edit",onClick:function(){return u(n)}},r.a.createElement(G.a,null)))))}));var R=function(e){var t=Object(a.useContext)(j);return t.length?r.a.createElement(l.a,null,r.a.createElement(d.a,null,t.map((function(e,n){return r.a.createElement(r.a.Fragment,{key:e.id},r.a.createElement(J,Object.assign({},e,{key:e.id,complete:e.complete})),n<t.length-1&&r.a.createElement(E.a,null))})))):null};var W=function(e){var t=g(""),n=Object(f.a)(t,3),c=n[0],o=n[1],i=n[2],u=Object(a.useContext)(k);return r.a.createElement(l.a,{style:{margin:"1rem 0",padding:"0 1rem"}},r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),u({type:"ADD",task:c}),i()}},r.a.createElement(w.a,{value:c,onChange:o,margin:"normal",label:"Add to do",fullWidth:!0})))};n(72);var L=function(e){return r.a.createElement(l.a,{style:{height:"100vh",margin:"0",padding:"0",backgroundColor:"white"},elevation:0},r.a.createElement(i.a,{color:"primary",position:"static",style:{height:"64px"}},r.a.createElement(u.a,null,r.a.createElement(m.a,{color:"inherit"},"REACT HOOKS TODO"))),r.a.createElement(s.a,{container:!0,justify:"center",style:{marginTop:"1rem"}},r.a.createElement(s.a,{item:!0,xs:11,md:8,lg:4},r.a.createElement(y,null,r.a.createElement(W,null),r.a.createElement(R,null)))))};n(73);var B=function(){return r.a.createElement(L,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(B,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.6671f66a.chunk.js.map