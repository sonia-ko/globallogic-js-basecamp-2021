(this["webpackJsonpreact-router-formik"]=this["webpackJsonpreact-router-formik"]||[]).push([[0],{100:function(e,t,r){},101:function(e,t,r){},102:function(e,t,r){},16:function(e){e.exports=JSON.parse('[{"id":1,"age":16,"username":"yaroslav","role":"admin","timestamp":1627934490151},{"id":2,"username":"John Snow","age":78,"role":"admin","timestamp":1627934784096},{"id":3,"username":"Robb Stark","age":98,"role":"user","timestamp":1627934784096}]')},18:function(e){e.exports=JSON.parse('[{"id":1,"book":"Arch of Triumph","author":"Erich Maria Remarque","personal_rating":10,"reading_status":"done","is_popular":true,"description":"A novel about stateless refugees in Paris before World War II. Written during Remarque\'s exile in the United States, it was his second worldwide bestseller."},{"id":2,"book":"Brave New World","author":"Aldous Huxley","personal_rating":"","reading_status":"done","is_popular":true,"description":"Brave New World is a dystopian social science fiction novel.  Largely set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, psychological manipulation and classical conditioning that are combined to make a dystopian society."},{"id":3,"book":"1984","author":"George Orwell","personal_rating":"","reading_status":"planning","is_popular":false,"description":"A dystopian social science fiction novel. Thematically, it centres on the consequences of totalitarianism and repressive regimentation of persons and behaviours within society. Orwell modelled the totalitarian government in the novel after Stalinist Russia and Nazi Germany. The novel examines the role of facts within politics and the ways in which they are manipulated."},{"id":4,"book":"An American Tragedy","author":" Theodore Dreiser","personal_rating":"","reading_status":"planning","is_popular":true,"description":"The story of Clyde Griffiths, who spends his life in the desperate pursuit of success. On a deeper  level, it is the masterful portrayal of the society whose values both shape Clyde\'s ambitions and seal his fate; it is an unsurpassed depiction of the harsh realities of American life and of the dark side of the American dream. "},{"id":5,"book":"Handmaid\'s Tale","author":"Margaret Atwood","personal_rating":"","reading_status":"in progress","is_popular":false,"description":" It is set in a near-future New England, in a strongly patriarchal, totalitarian theonomic state, known as Republic of Gilead, that has overthrown the United States government."}]')},201:function(e,t,r){},202:function(e,t,r){},203:function(e,t,r){"use strict";r.r(t);var n=r(1),a=r(81),c=r.n(a),s=r(3),i=r.p+"static/media/racoon.812c978c.png",o=(r(91),r(0));var u,d=function(){return Object(o.jsxs)("div",{className:"page-not-found",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{children:"Whoops...."}),Object(o.jsx)("div",{children:"The page you were looking for does not exist"})]}),Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{src:i,alt:""})})]})},l=r(10),b="view",j="create",h="edit",p="clone",x=r(9),O=r(12),f="username",m="role",v="age",g=(u={},Object(O.a)(u,f,""),Object(O.a)(u,m,"user"),Object(O.a)(u,v,""),u),k=function(e){var t=new Date(e),r=t.getFullYear(),n=(t.getMonth()+1).toString().padStart(2,"0"),a=t.getDate().toString().padStart(2,"0"),c=t.getHours().toString().padStart(2,"0"),s=t.getMinutes().toString().padStart(2,"0");return"".concat(r,"/").concat(n,"/").concat(a," ").concat(c,":").concat(s.substr(-2))},w=function(e){return{id:e.id,username:e.username,age:+e.age,role:e.role,timestamp:e.timestamp}},y=r(17),_=r(2),S=r.n(_),N=r(4),T=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:800;return new Promise((function(t){setTimeout(t,e)}))},U=function(e){return function(){return++e}},B=function(){return Date.now()},A=function(e){throw new Error("Record with ID ".concat(e," does not exist"))},q=r(16),E=U(q.length),I={getUsers:function(){return Object(N.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(1e3);case 2:return console.log("GET /users",q),e.abrupt("return",q);case 4:case"end":return e.stop()}}),e)})))()},getUser:function(e){return Object(N.a)(S.a.mark((function t(){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:if(!(r=q.find((function(t){return t.id===e})))){t.next=8;break}return console.log("GET /users/".concat(r.id),r),t.abrupt("return",r);case 8:A(e);case 9:case"end":return t.stop()}}),t)})))()},createUser:function(e){return Object(N.a)(S.a.mark((function t(){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:return r=Object(y.a)(Object(y.a)({},e),{},{id:E(),timestamp:B()}),q.push(r),console.log("POST /users",r),t.abrupt("return",r);case 6:case"end":return t.stop()}}),t)})))()},editUser:function(e){return Object(N.a)(S.a.mark((function t(){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:if(!~(r=q.findIndex((function(t){return t.id===e.id})))){t.next=9;break}return q[r]=Object(y.a)(Object(y.a)({},e),{},{timestamp:B()}),console.log("PUT /users",q[r]),t.abrupt("return",q[r]);case 9:A(e.id);case 10:case"end":return t.stop()}}),t)})))()},deleteUser:function(e){return Object(N.a)(S.a.mark((function t(){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:if(!~(r=q.findIndex((function(t){return t.id===e.id})))){t.next=8;break}return console.log("DELETE /users",e),t.abrupt("return",q.splice(r,1));case 8:A(e.id);case 9:case"end":return t.stop()}}),t)})))()},getRoles:function(){return Object(N.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T();case 2:return t=["user","super-user","admin"],console.log("GET /roles",t),e.abrupt("return",t);case 5:case"end":return e.stop()}}),e)})))()}},C=r(7);var R=function(e){var t=e.id,r=e.setUsers;function n(){return(n=Object(N.a)(S.a.mark((function e(){var n;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=I,e.next=3,I.getUser(t);case 3:return e.t1=e.sent,e.next=6,e.t0.deleteUser.call(e.t0,e.t1);case 6:return e.next=8,I.getUsers();case 8:n=e.sent,r(Object(C.a)(n));case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var a=Object(s.i)().url,c=Object(s.g)(),i=function(e){return function(){c.push("".concat(a,"/user/").concat(e,"/").concat(t))}};return Object(o.jsxs)("div",{className:"Actions",children:[Object(o.jsx)("button",{onClick:i(b),children:"View"})," ",Object(o.jsx)("button",{onClick:i(h),children:"Edit"}),Object(o.jsx)("button",{onClick:function(){return n.apply(this,arguments)},children:"Delete"}),Object(o.jsx)("button",{onClick:i(p),children:"Clone"})]})};r(98);var D=function(e){var t=e.users,r=e.setUsers,a=Object(s.i)().url;return Object(n.useEffect)((function(){I.getUsers().then(r)}),[r]),Object(o.jsxs)("div",{className:"UsersTable",children:[Object(o.jsx)(x.b,{to:"".concat(a,"/user/").concat(j),children:"Create User"}),Object(o.jsxs)("table",{children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"ID"}),Object(o.jsx)("th",{children:"Username"}),Object(o.jsx)("th",{children:"Age"}),Object(o.jsx)("th",{children:"Role"}),Object(o.jsx)("th",{children:"Last Updated At"}),Object(o.jsx)("th",{children:"Actions"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:e.id}),Object(o.jsx)("td",{children:e.username}),Object(o.jsx)("td",{children:e.age}),Object(o.jsx)("td",{children:e.role}),Object(o.jsx)("td",{children:k(e.timestamp)}),Object(o.jsx)("td",{children:Object(o.jsx)(R,{setUsers:r,id:e.id})})]},e.id)}))})]})]})},P=(r(99),r(6));r(100);var G=function(e){var t=e.name,r=e.label,n=e.validate,a=e.type,c=void 0===a?"text":a,s=e.disabled,i=void 0!==s&&s,u=e.required,d=void 0!==u&&u,b=Object(P.e)({name:t,validate:function(e){return d&&""===e?"This field is required, please add the necessary information":!!n&&n(e)}}),j=Object(l.a)(b,1)[0];return Object(o.jsxs)("div",{className:"Input",children:[Object(o.jsxs)("label",{children:[Object(o.jsx)("div",{children:d?"*"+r:r}),Object(o.jsx)("input",Object(y.a)({type:c,disabled:i},j))]}),Object(o.jsx)(P.a,{name:t,className:"error",component:"div"})]})};var V=function(e){var t=e.mode,r=Object(s.g)(),n=Object(P.f)().isSubmitting;return Object(o.jsxs)("div",{children:[(t===j||t===h||t===p)&&Object(o.jsx)("button",{type:"submit",disabled:n,children:"Save"}),Object(o.jsx)("button",{type:"button",onClick:function(){return r.push("/users")},children:"Cancel"})]})};var W=function(e){var t=e.initialValues,r=e.onSubmit,n=e.mode;return e.roles,Object(o.jsx)(P.d,{initialValues:t,onSubmit:r,children:Object(o.jsxs)(P.c,{children:[Object(o.jsx)(G,{required:!0,name:f,label:"Username",disabled:n===b}),"Role",Object(o.jsx)("br",{}),Object(o.jsxs)(P.b,{as:"select",required:!0,disabled:n===b,label:"Role",name:m,children:[Object(o.jsx)("option",{value:"user",children:"User"}),Object(o.jsx)("option",{value:"admin",children:"Admin"}),Object(o.jsx)("option",{value:"super-user",children:"Super-user"})]}),Object(o.jsx)("br",{}),Object(o.jsx)(G,{required:!0,name:v,label:"Age",disabled:n===b,type:"number",validate:function(e){if(e<16||e>110)return"The age should be within the range of 16 and 110"}}),Object(o.jsx)(V,{mode:n})]})})};var H=function(e){var t=e.users,r=e.setUsers,a=Object(s.h)(),c=a.mode,i=a.id,u=Object(s.g)(),d=t.find((function(e){return e.id===Number(i)}));Object(n.useEffect)((function(){c!==b&&c!==h&&c!==p||d||I.getUser(Number(i)).then((function(e){return r((function(t){return[].concat(Object(C.a)(t),[e])}))})).catch((function(e){return window.alert(e.message)}))}),[i,c,d,r]);var x=Object(n.useState)([]),O=Object(l.a)(x,2),f=O[0],m=O[1];Object(n.useEffect)((function(){I.getRoles().then(m)}),[r]);var v=function(){var e=Object(N.a)(S.a.mark((function e(t){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:e.prev=0,r=w(t),console.log(r),e.t0=c,e.next=e.t0===j?6:e.t0===h?9:e.t0===p?12:15;break;case 6:return e.next=8,I.createUser(r);case 8:return e.abrupt("break",16);case 9:return e.next=11,I.editUser(r);case 11:return e.abrupt("break",16);case 12:return e.next=14,I.createUser(r);case 14:return e.abrupt("break",16);case 15:console.error("Failed to execute this request for ".concat(c," mode"));case 16:e.next=21;break;case 18:e.prev=18,e.t1=e.catch(0),window.alert(e.t1.message);case 21:u.push("/users");case 22:case"end":return e.stop()}}),e,null,[[0,18]])})));return function(t){return e.apply(this,arguments)}}(),k=function(e){return e||g}(d);return Object(o.jsx)(W,{initialValues:k,onSubmit:v,mode:c,roles:f},"".concat(c,":").concat(k.id))};var J=function(){var e=Object(s.i)().path,t=Object(n.useState)([]),r=Object(l.a)(t,2),a=r[0],c=r[1];return console.log(a),Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(s.d,{children:[Object(o.jsx)(s.b,{exact:!0,path:e,children:Object(o.jsx)(D,{users:a,setUsers:c})}),Object(o.jsx)(s.b,{exact:!0,path:"".concat(e,"/user/:mode(").concat(p,"|").concat(b,"|").concat(j,"|").concat(h,")/:id?"),children:Object(o.jsx)(H,{users:a,setUsers:c})}),Object(o.jsx)(s.b,{children:Object(o.jsx)(d,{})})]})})};r(101);var M,L=function(){var e=Object(s.i)().url;return Object(o.jsx)("header",{children:Object(o.jsxs)("nav",{className:"menu-container",children:[Object(o.jsx)("div",{children:Object(o.jsx)(x.b,{to:"".concat(e,"users"),children:"Users"})}),Object(o.jsx)("div",{children:Object(o.jsx)(x.b,{to:"".concat(e,"books"),children:"Books"})})]})})},F="book",z="author",Y="personal_rating",K="reading_status",Q="is_popular",X="description",Z=(M={},Object(O.a)(M,F,""),Object(O.a)(M,z,""),Object(O.a)(M,Y,""),Object(O.a)(M,K,""),Object(O.a)(M,Q,""),Object(O.a)(M,X,""),M),$="create",ee="edit",te=function(e){return{id:e.id,book:e.book,author:e.author,personal_rating:e.personal_rating,reading_status:e.reading_status,is_popular:e.is_popular,description:e.description}},re=r(18),ne=U(re.length),ae={getBooks:function(){return Object(N.a)(S.a.mark((function e(){return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,T(1e3);case 2:return e.abrupt("return",re);case 3:case"end":return e.stop()}}),e)})))()},getBook:function(e){return Object(N.a)(S.a.mark((function t(){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:if(!(r=re.find((function(t){return t.id===e})))){t.next=7;break}return t.abrupt("return",r);case 7:A(e);case 8:case"end":return t.stop()}}),t)})))()},createBook:function(e){return Object(N.a)(S.a.mark((function t(){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:return r=Object(y.a)(Object(y.a)({},e),{},{id:ne()}),re.push(r),t.abrupt("return",r);case 5:case"end":return t.stop()}}),t)})))()},editBook:function(e){return Object(N.a)(S.a.mark((function t(){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:if(!~(r=re.findIndex((function(t){return t.id===e.id})))){t.next=8;break}return re[r]=Object(y.a)({},e),t.abrupt("return",re[r]);case 8:A(e.id);case 9:case"end":return t.stop()}}),t)})))()},deleteBook:function(e){return Object(N.a)(S.a.mark((function t(){var r;return S.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,T();case 2:if(!~(r=re.findIndex((function(t){return t.id===e.id})))){t.next=7;break}return t.abrupt("return",re.splice(r,1));case 7:A(e.id);case 8:case"end":return t.stop()}}),t)})))()}};r(58);var ce=function(){var e=Object(s.i)().url;return Object(o.jsxs)("div",{className:"add-book-btn-container",children:[Object(o.jsxs)("div",{className:"add-book-button-description",children:[Object(o.jsx)("h1",{children:"Books table"}),"Hi there! Here you can add any book of your choise \ud83d\udcda You may add your favourite books or the books that you are planning to read in the future. Once you are done with the book, feel free to mark it accordingly using the Edit button (finished books are marked with the green color in the table)"]}),Object(o.jsx)("button",{className:"add-book-btn",children:Object(o.jsx)(x.b,{to:"".concat(e,"/book/").concat($),children:"Add a book"})})]})};var se=function(e){var t,r=e.id,n=e.setBooks,a=function(){var e=Object(N.a)(S.a.mark((function e(){var t;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=ae,e.next=3,ae.getBook(r);case 3:return e.t1=e.sent,e.next=6,e.t0.deleteBook.call(e.t0,e.t1);case 6:return e.next=8,ae.getBooks();case 8:t=e.sent,n(Object(C.a)(t));case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),c=Object(s.i)().url,i=Object(s.g)();return Object(o.jsxs)("div",{children:[Object(o.jsx)("button",{onClick:(t=ee,function(){i.push("".concat(c,"/book/").concat(t,"/").concat(r))}),children:"Edit"}),Object(o.jsx)("button",{onClick:a,children:"Delete"})]})};var ie=function(e){var t=e.books,r=e.setBooks;return Object(n.useEffect)((function(){ae.getBooks().then(r)}),[r]),Object(o.jsxs)("div",{className:"books-table-container",children:[Object(o.jsx)(ce,{}),Object(o.jsxs)("table",{className:"books-table",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Book"}),Object(o.jsx)("th",{children:"Author"}),Object(o.jsx)("th",{children:"Rate"}),Object(o.jsx)("th",{children:"Status"}),Object(o.jsx)("th",{children:"Popular"}),Object(o.jsx)("th",{children:"Description"}),Object(o.jsx)("th",{children:"Actions"})]})}),Object(o.jsx)("tbody",{children:t.map((function(e){return Object(o.jsxs)("tr",{className:(t=e.reading_status,"done"===t?"done":"in progress"===t?"in-progress":"planning"),children:[Object(o.jsx)("td",{children:e.book}),Object(o.jsx)("td",{children:e.author}),Object(o.jsx)("td",{children:e.personal_rating}),Object(o.jsx)("td",{children:e.reading_status}),Object(o.jsx)("td",{children:e.is_popular?"yes":"no"}),Object(o.jsx)("td",{children:e.description}),Object(o.jsxs)("td",{children:[Object(o.jsx)(se,{setBooks:r,id:e.id})," "]})]},e.id);var t}))})]})]})},oe=(r(102),r(27));var ue=function(e){var t=e.initialValues,r=e.onSubmit,n=(e.mode,Object(s.g)()),a=oe.b().shape({book:oe.c().min(3," The name of the book is too short, it should be at least 3 characters long").max(100,"The name of the book should be up to 100 characters").required("This field is required, please enter it"),author:oe.c().min(2,"Please add at least 3 characters here").max(50,"Too Long!"),personal_rating:oe.a().min(0,"The mininmum rating is 0").max(10,"The maximum rating is 10"),reading_status:oe.c().required("This field is required, please enter it"),description:oe.c().min(3," The description should be at least 3 characters long").max(900,"The description should be up to 900 characters").required("This field is required, please enter it")});return Object(o.jsx)(P.d,{validationSchema:a,initialValues:t,onSubmit:r,children:function(e){var t=e.errors,r=e.touched;return Object(o.jsxs)(P.c,{className:"book-form",children:[Object(o.jsx)("h2",{children:"Simple questions about the book..."}),Object(o.jsxs)("div",{className:"books-form-questions",children:[Object(o.jsx)("div",{children:"Please enter a name of the book"}),Object(o.jsx)(P.b,{name:F,label:"book"}),t.book&&r.book?Object(o.jsx)("div",{className:"error-msg-book-form",children:t.book}):null,Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:"Please enter the author of the book"}),Object(o.jsx)(P.b,{name:z,label:"autor"}),t.author&&r.author?Object(o.jsx)("div",{className:"error-msg-book-form",children:t.author}):null,Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:"Please rate the book from 0 to 10 (you can skip this one now and add a rating once you read the book:"}),Object(o.jsx)(P.b,{name:Y,type:"number"}),t.personal_rating&&r.personal_rating?Object(o.jsx)("div",{className:"error-msg-book-form",children:t.personal_rating}):null,Object(o.jsx)("br",{}),Object(o.jsxs)("div",{children:[Object(o.jsxs)("label",{children:[Object(o.jsx)(P.b,{type:"checkbox",name:Q}),"This is a popular book"]})," "]}),Object(o.jsx)("br",{}),Object(o.jsxs)("div",{role:"group","aria-labelledby":"my-radio-group",children:[Object(o.jsx)("div",{children:"Have you read this book? "}),Object(o.jsxs)("label",{children:[Object(o.jsx)(P.b,{type:"radio",name:K,value:"planning"}),"I have not read the book yet, but I am planning to read it really soon \ud83d\udcd9"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)(P.b,{type:"radio",name:K,value:"in progress"}),"I am reading this book right now \ud83d\udcd6"]}),Object(o.jsxs)("label",{children:[Object(o.jsx)(P.b,{type:"radio",name:K,value:"done"}),"I have already read this book \ud83d\udcd7"]}),t.reading_status&&r.reading_status?Object(o.jsx)("div",{className:"error-msg-book-form",children:t.reading_status}):null]}),Object(o.jsx)("br",{}),Object(o.jsx)("div",{children:"Please add a short description of a book:"}),Object(o.jsx)(P.b,{as:"textarea",name:X}),t.description&&r.description?Object(o.jsx)("div",{className:"error-msg-book-form",children:t.description}):null,Object(o.jsxs)("div",{className:"form-btns",children:[Object(o.jsx)("button",{type:"submit",children:"Save"}),Object(o.jsx)("button",{type:"button",onClick:function(){return n.push("/books")},children:"Cancel"})]})]})]})}})};var de=function(e){var t=e.books,r=e.setBooks,a=Object(s.h)(),c=a.mode,i=a.id,u=Object(s.g)(),d=t.find((function(e){return e.id===Number(i)}));function l(){return(l=Object(N.a)(S.a.mark((function e(t){var r;return S.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=te(t),e.prev=1,c!==$){e.next=7;break}return e.next=5,ae.createBook(r);case 5:e.next=13;break;case 7:if(c!==ee){e.next=12;break}return e.next=10,ae.editBook(r);case 10:e.next=13;break;case 12:console.log("Failed to execute this request for ".concat(c," mode"));case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),window.alert(e.t0.message);case 18:u.push("/books");case 19:case"end":return e.stop()}}),e,null,[[1,15]])})))).apply(this,arguments)}Object(n.useEffect)((function(){c===ee&&(d||ae.getBook(Number(i)).then((function(e){return r((function(t){return[].concat(Object(C.a)(t),[e])}))})).catch((function(e){return window.alert(e.message)})))}),[i,c,d,r]);var b=function(e){return e||Z}(d);return Object(o.jsx)(ue,{initialValues:b,onSubmit:function(e){return l.apply(this,arguments)},mode:c},"".concat(c,":").concat(b.id))};var le=function(){var e=Object(s.i)().path,t=Object(n.useState)([]),r=Object(l.a)(t,2),a=r[0],c=r[1];return Object(o.jsx)("div",{children:Object(o.jsxs)(s.d,{children:[Object(o.jsx)(s.b,{exact:!0,path:e,children:Object(o.jsx)(ie,{books:a,setBooks:c})}),Object(o.jsx)(s.b,{exact:!0,path:"".concat(e,"/book/:mode(").concat($,"|").concat(ee,")/:id?"),children:Object(o.jsx)(de,{books:a,setBooks:c})}),Object(o.jsx)(s.b,{children:Object(o.jsx)(d,{})})]})})};r(201);var be=function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(L,{}),Object(o.jsxs)(s.d,{children:[Object(o.jsx)(s.a,{exact:!0,from:"/",to:"/users"}),Object(o.jsx)(s.b,{path:"/users",children:Object(o.jsx)(J,{})}),Object(o.jsx)(s.b,{path:"/books",children:Object(o.jsx)(le,{})}),Object(o.jsx)(s.b,{children:Object(o.jsx)(d,{})})]})]})};var je=function(e){var t=e.children;return Object(o.jsx)(x.a,{basename:"/globallogic-js-basecamp-2021/react/03-react-router-formik/build",children:t})},he=(r(202),document.getElementById("root"));c.a.render(Object(o.jsx)(n.StrictMode,{children:Object(o.jsx)(je,{children:Object(o.jsx)(be,{})})}),he)},58:function(e,t,r){},91:function(e,t,r){},98:function(e,t,r){},99:function(e,t,r){}},[[203,1,2]]]);
//# sourceMappingURL=main.caec257a.chunk.js.map