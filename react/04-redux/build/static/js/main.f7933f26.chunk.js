(this["webpackJsonp04-redux"]=this["webpackJsonp04-redux"]||[]).push([[0],{16:function(e){e.exports=JSON.parse('[{"id":1,"age":16,"username":"yaroslav","role":"admin","timestamp":1627934490151},{"id":2,"username":"John Snow","age":78,"role":"admin","timestamp":1627934784096},{"id":3,"username":"Robb Stark","age":98,"role":"user","timestamp":1627934784096}]')},35:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},53:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(25),s=n.n(a),i=(n(45),n(10)),o=n(4),u=n.p+"static/media/racoon.812c978c.png",d=(n(46),n(1));var l,j,b=function(){return Object(d.jsxs)("div",{className:"page-not-found",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Whoops...."}),Object(d.jsx)("div",{children:"The page you were looking for does not exist"})]}),Object(d.jsx)("div",{className:"logo",children:Object(d.jsx)("img",{src:u,alt:""})})]})},f=n(23),h="view",O="create",p="edit",x="clone",m="username",v="role",g="age",w=(l={},Object(f.a)(l,m,""),Object(f.a)(l,v,"user"),Object(f.a)(l,g,""),l),k=n(5),y=n(12),C=function(e){var t=new Date(e),n=t.getFullYear(),r=(t.getMonth()+1).toString().padStart(2,"0"),c=t.getDate().toString().padStart(2,"0"),a=t.getHours().toString().padStart(2,"0"),s=t.getMinutes().toString().padStart(2,"0");return"".concat(n,"/").concat(r,"/").concat(c," ").concat(a,":").concat(s.substr(-2))},F=function(e){return Object(y.a)(Object(y.a)({},e),{},{age:+e.age})},N=n(2),T=n.n(N),S=n(7),U=n(9),D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:800;return new Promise((function(t){setTimeout(t,e)}))},E=function(){return Date.now()},L=function(e){throw new Error("Record with ID ".concat(e," does not exist"))},R=n(16),A=(j=R.length,function(){return++j}),I={getUsers:function(){return Object(S.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D(1e3);case 2:return console.log("GET /users",R),e.abrupt("return",R);case 4:case"end":return e.stop()}}),e)})))()},getUser:function(e){return Object(S.a)(T.a.mark((function t(){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D();case 2:if(!(n=R.find((function(t){return t.id===e})))){t.next=8;break}return console.log("GET /users/".concat(n.id),n),t.abrupt("return",n);case 8:L(e);case 9:case"end":return t.stop()}}),t)})))()},createUser:function(e){return Object(S.a)(T.a.mark((function t(){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D();case 2:return n=Object(y.a)(Object(y.a)({},e),{},{id:A(),timestamp:E()}),R.push(n),console.log("POST /users",n),t.abrupt("return",n);case 6:case"end":return t.stop()}}),t)})))()},editUser:function(e){return Object(S.a)(T.a.mark((function t(){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D();case 2:if(!~(n=R.findIndex((function(t){return t.id===e.id})))){t.next=9;break}return R[n]=Object(y.a)(Object(y.a)({},e),{},{timestamp:E()}),console.log("PUT /users",R[n]),t.abrupt("return",R[n]);case 9:L(e.id);case 10:case"end":return t.stop()}}),t)})))()},deleteUser:function(e){return Object(S.a)(T.a.mark((function t(){var n;return T.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("user deletion"),console.log(e),t.next=4,D();case 4:if(n=R.findIndex((function(t){return t.id===e.id})),console.log("index to delete: "+n),!~n){t.next=11;break}return console.log("DELETE /users",e),t.abrupt("return",R.splice(n,1));case 11:L(e.id);case 12:case"end":return t.stop()}}),t)})))()},getRoles:function(){return Object(S.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:return t=["user","super-user","admin"],console.log("GET /roles",t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))()}},q=Object(U.b)("users/fetch",Object(S.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getUsers();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),J=Object(U.b)("users/get",function(){var e=Object(S.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getUser(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),V=Object(U.b)("users/create",function(){var e=Object(S.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.createUser(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),G=Object(U.b)("users/update",function(){var e=Object(S.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.editUser(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),M=Object(U.b)("roles/fetch",Object(S.a)(T.a.mark((function e(){var t;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.getRoles();case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))),P=Object(U.b)("users/clone",function(){var e=Object(S.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.editUser(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),W=Object(U.b)("users/remove",function(){var e=Object(S.a)(T.a.mark((function e(t){var n;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,I.deleteUser(t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());var B=function(e){var t=e.id,n=e.user,r=Object(k.b)();function c(){return(c=Object(S.a)(T.a.mark((function e(){return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r(W(n));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var a=Object(o.i)().url,s=Object(o.g)(),i=function(e){return function(){s.push("".concat(a,"/user/").concat(e,"/").concat(t))}};return Object(d.jsxs)("div",{className:"Actions",children:[Object(d.jsx)("button",{onClick:i(h),children:"View"})," ",Object(d.jsx)("button",{onClick:i(p),children:"Edit"}),Object(d.jsx)("button",{onClick:function(){return c.apply(this,arguments)},children:"Delete"}),Object(d.jsx)("button",{onClick:i(x),children:"Clone"})]})};n(53),n(35);var H=function(){return Object(d.jsx)("div",{className:"loader-container",children:Object(d.jsx)("div",{className:"loader",children:"Loading..."})})};var X=function(){var e=Object(o.i)().url,t=Object(k.b)(),n=Object(k.c)((function(e){return e.users.list})),c=Object(k.c)((function(e){return e.users.usersFetched}));return Object(r.useEffect)((function(){c||t(q())}),[c,t]),Object(d.jsxs)("div",{className:"UsersTable",children:[Object(d.jsx)(i.b,{to:"".concat(e,"/user/").concat(O),children:"Create User"}),Object(d.jsxs)("table",{children:[Object(d.jsx)("thead",{children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"ID"}),Object(d.jsx)("th",{children:"Username"}),Object(d.jsx)("th",{children:"Age"}),Object(d.jsx)("th",{children:"Role"}),Object(d.jsx)("th",{children:"Last Updated At"}),Object(d.jsx)("th",{children:"Actions"})]})}),Object(d.jsx)("tbody",{children:n.map((function(e){return Object(d.jsxs)("tr",{children:[Object(d.jsx)("td",{children:e.id}),Object(d.jsx)("td",{children:e.username}),Object(d.jsx)("td",{children:e.age}),Object(d.jsx)("td",{children:e.role}),Object(d.jsx)("td",{children:C(e.timestamp)}),Object(d.jsx)("td",{children:Object(d.jsx)(B,{user:e,id:e.id})})]},e.id)}))})]}),Object(d.jsx)("div",{className:c?"hidden":"regular",children:Object(d.jsx)(H,{})})]})},Y=(n(54),n(17)),$=n(40);var _=function(e){var t=e.name,n=e.label,r=e.validate,c=e.type,a=void 0===c?"text":c,s=e.disabled,i=void 0!==s&&s,o=e.required,u=void 0!==o&&o,l=Object(Y.e)({name:t,validate:function(e){return u&&""===e?"This field is required, please add the necessary information":!!r&&r(e)}}),j=Object($.a)(l,1)[0];return Object(d.jsxs)("div",{className:"Input",children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("div",{children:u?"*"+n:n}),Object(d.jsx)("input",Object(y.a)({type:a,disabled:i},j))]}),Object(d.jsx)(Y.a,{name:t,className:"error",component:"div"})]})};var z=function(e){var t=e.mode,n=Object(o.g)(),r=Object(Y.f)().isSubmitting;return Object(d.jsxs)("div",{children:[(t===O||t===p||t===x)&&Object(d.jsx)("button",{type:"submit",disabled:r,children:"Save"}),Object(d.jsx)("button",{type:"button",onClick:function(){return n.push("/users")},children:"Cancel"})]})};var K=function(){return Object(d.jsx)("div",{className:"local-loader-container",children:Object(d.jsx)("div",{className:"local-loader",children:"Loading..."})})};var Q=function(e){var t=e.name,n=e.label,r=e.options,c=e.disabled,a=void 0!==c&&c,s=Object(k.c)((function(e){return e.users.rolesFetched})),i=r.map((function(e){return Object(d.jsx)("option",{value:e,children:e},t+"_"+e)}));return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{className:s?"regular":"hidden",children:Object(d.jsx)(Y.b,{as:"select",disabled:a,label:n,name:t,children:i})}),Object(d.jsx)("div",{className:s?"hidden":"regular",children:Object(d.jsx)(K,{})})]})};var Z=function(e){var t=e.initialValues,n=e.onSubmit,r=e.mode,c=e.roles;return Object(d.jsx)(Y.d,{initialValues:t,onSubmit:n,children:Object(d.jsxs)(Y.c,{children:[Object(d.jsx)(_,{required:!0,name:m,label:"Username",disabled:r===h}),"Role",Object(d.jsx)("br",{}),Object(d.jsx)(Q,{options:c,disabled:r===h,label:"Role",name:v,loading:!c}),Object(d.jsx)(_,{required:!0,name:g,label:"Age",disabled:r===h,type:"number",validate:function(e){if(e<16||e>110)return"The age should be within the range of 16 and 110"}}),Object(d.jsx)(z,{mode:r})]})})};var ee=function(){var e=Object(o.h)(),t=e.mode,n=e.id,c=Object(o.g)(),a=Object(k.b)(),s=Object(k.c)((function(e){return e.users.list})),i=Object(k.c)((function(e){return e.users.usersFetched})),u=s.find((function(e){return e.id===Number(n)})),l=Object(k.c)((function(e){return e.users.roles})),j=Object(k.c)((function(e){return e.users.rolesFetched}));Object(r.useEffect)((function(){t!==h&&t!==p&&t!==x||u||a(J(Number(n))),i||a(q())}),[u,n,t,i,a]),Object(r.useEffect)((function(){t&&(j||a(M()))}),[t,j,a]);var b=function(){var e=Object(S.a)(T.a.mark((function e(n){var r;return T.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,r=F(n),e.t0=t,e.next=e.t0===O?5:e.t0===p?8:e.t0===x?11:14;break;case 5:return e.next=7,a(V(r));case 7:return e.abrupt("break",15);case 8:return e.next=10,a(G(r));case 10:return e.abrupt("break",15);case 11:return e.next=13,a(V(r));case 13:return e.abrupt("break",15);case 14:console.error("Failed to execute this request for ".concat(t," mode"));case 15:e.next=20;break;case 17:e.prev=17,e.t1=e.catch(0),window.alert(e.t1.message);case 20:c.push("/users");case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t){return e.apply(this,arguments)}}(),f=function(e){return e||w}(u);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(Z,{initialValues:f,onSubmit:b,mode:t,roles:l},"".concat(t,":").concat(f.id)),Object(d.jsx)("div",{className:i?"hidden":"regular",children:Object(d.jsx)(H,{})})]})};var te=function(){var e=Object(o.i)().path;return Object(d.jsx)("div",{className:"App",children:Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.b,{exact:!0,path:"".concat(e),children:Object(d.jsx)(X,{})}),Object(d.jsx)(o.b,{exact:!0,path:"".concat(e,"/user/:mode(").concat(x,"|").concat(h,"|").concat(O,"|").concat(p,")/:id?"),children:Object(d.jsx)(ee,{})}),Object(d.jsx)(o.b,{children:Object(d.jsx)(b,{})})]})})};n(55);var ne=function(){var e=Object(o.i)().url;return Object(d.jsx)("header",{children:Object(d.jsxs)("nav",{className:"menu-container",children:[Object(d.jsx)("div",{children:Object(d.jsx)(i.b,{to:"".concat(e,"users"),children:"Users"})}),Object(d.jsx)("div",{children:Object(d.jsx)(i.b,{to:"".concat(e,"todoList"),children:"To-Do List"})})]})})},re=(n(56),Object(U.c)({name:"todoList",initialState:{title:"",todos:[]},reducers:{setTitle:function(e,t){e.title=t.payload},prepare:function(e,t,n){return{payload:{id:Date.now(),title:t,todos:n}}},addTodo:function(e,t){e.title="",e.todos.push(t.payload)},toggleTodo:function(e,t){e.todos=e.todos.map((function(e){return e.id===t.payload?Object(y.a)(Object(y.a)({},e),{},{isCompleted:!e.isCompleted}):e}))},deleteTodo:function(e,t){e.todos=e.todos.filter((function(e){return e.id!==t.payload}))}}})),ce=re.actions,ae=ce.setTitle,se=ce.addTodo,ie=ce.toggleTodo,oe=ce.deleteTodo,ue=re.reducer;var de=function(){var e=Object(k.b)(),t=Object(k.c)((function(e){return e.todoList.todos})),n=Object(k.c)((function(e){return e.todoList.title}));return Object(d.jsxs)("div",{className:"TodoList",children:[Object(d.jsx)("h2",{children:"To-Do list"}),Object(d.jsx)("form",{className:"to-do-form",onSubmit:function(t){t.preventDefault(),n.trim()&&e(se({id:Date.now(),title:n.trim(),isCompleted:!1}))},children:Object(d.jsx)("input",{type:"text",value:n,onChange:function(t){return e(ae(t.target.value))}})}),Object(d.jsx)("ul",{children:t.map((function(t){var n=t.id,r=t.title,c=t.isCompleted;return Object(d.jsxs)("li",{onClick:function(){return e(ie(n))},children:[Object(d.jsx)("span",{style:{textDecoration:c?"line-through":"auto"},children:r}),Object(d.jsx)("button",{type:"button",onClick:function(){return e(oe(n))},children:"X"})]},n)}))})]})};var le=function(){return Object(d.jsx)(i.a,{children:Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(ne,{}),Object(d.jsxs)(o.d,{children:[Object(d.jsx)(o.a,{exact:!0,from:"/",to:"/users"}),Object(d.jsx)(o.b,{path:"/users",render:function(){return Object(d.jsx)(c.a.Fragment,{children:Object(d.jsx)(te,{})})}}),Object(d.jsx)(o.b,{path:"/todolist",children:Object(d.jsx)(de,{})}),Object(d.jsx)(o.b,{children:Object(d.jsx)(b,{})})]})]})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var je=n(22),be=Object(U.c)({name:"users",initialState:{list:[],usersFetched:!1,roles:[],rolesFetched:!1},reducers:{},extraReducers:function(e){e.addCase(q.pending,(function(e,t){e.usersFetched=!1})).addCase(q.fulfilled,(function(e,t){e.usersFetched=!0,e.list=Object(je.a)(t.payload)})).addCase(q.rejected,(function(e,t){e.usersFetched=!1,window.alert("Failed to fetch users")})).addCase(M.pending,(function(e,t){e.rolesFetched=!1})).addCase(M.fulfilled,(function(e,t){e.rolesFetched=!0,e.roles=e.roles.concat(t.payload)})).addCase(M.rejected,(function(e,t){e.rolesFetched=!1,window.alert("Failed to fetch roles")})).addCase(V.pending,(function(e,t){e.usersFetched=!1})).addCase(V.fulfilled,(function(e,t){e.usersFetched=!0,e.list=e.list.concat(t.payload)})).addCase(V.rejected,(function(e,t){window.alert("Failed to add user")})).addCase(G.pending,(function(e,t){e.usersFetched=!1})).addCase(G.fulfilled,(function(e,t){e.usersFetched=!0,e.list=e.list.map((function(e){return e.id===t.payload.id?t.payload:e}))})).addCase(G.rejected,(function(e,t){window.alert("Failed to add user")})).addCase(P.pending,(function(e,t){e.usersFetched=!1})).addCase(P.fulfilled,(function(e,t){e.usersFetched=!0,e.list=e.list.concat(t.payload)})).addCase(P.rejected,(function(e,t){window.alert("Failed to clone user")})).addCase(W.pending,(function(e,t){e.usersFetched=!1})).addCase(W.fulfilled,(function(e,t){e.usersFetched=!0,e.list=e.list.filter((function(e){return e.id!==t.payload[0].id}))})).addCase(W.rejected,(function(e,t){window.alert("Failed to remove user")}))}}),fe=be.actions,he=(fe.deleteUser,fe.editUser,be.reducer),Oe=n(39),pe=Object(U.a)({reducer:{users:he,todoList:ue},middleware:function(e){return e().concat(Oe.a)}});var xe=function(e){var t=e.children;return Object(d.jsx)(k.a,{store:pe,children:Object(d.jsx)(i.a,{basename:"/globallogic-js-basecamp-2021/react/04-redux/build",children:t})})},me=document.getElementById("root");s.a.render(Object(d.jsx)(r.StrictMode,{children:Object(d.jsx)(xe,{children:Object(d.jsx)(le,{})})}),me),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[57,1,2]]]);
//# sourceMappingURL=main.f7933f26.chunk.js.map