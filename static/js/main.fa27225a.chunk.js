(this.webpackJsonpshoppingify=this.webpackJsonpshoppingify||[]).push([[3],{14:function(t,e,n){"use strict";n.d(e,"f",(function(){return r})),n.d(e,"b",(function(){return c})),n.d(e,"h",(function(){return i})),n.d(e,"g",(function(){return o})),n.d(e,"c",(function(){return s})),n.d(e,"d",(function(){return u})),n.d(e,"a",(function(){return d})),n.d(e,"e",(function(){return O})),n.d(e,"i",(function(){return b}));var a=n(2),r=function(){return{type:a.a.UI_SHOW_ADD_ITEM}},c=function(){return{type:a.a.UI_HIDE_ADD_ITEM}},i=function(){return{type:a.a.UI_TOGGLE_SIDEBAR_RIGHT}},o=function(){return{type:a.a.UI_SHOW_ITEM_INFO}},s=function(){return{type:a.a.UI_HIDE_ITEM_INFO}},u=function(){return{type:a.a.UI_OPEN_DIALOG}},d=function(){return{type:a.a.UI_CLOSE_DIALOG}},O=function(){return{type:a.a.UI_IS_LOADING}},b=function(){return{type:a.a.UI_IS_NOT_LOADING}}},2:function(t,e,n){"use strict";e.a={UI_SHOW_ADD_ITEM:"[UI] Show the add item sidebar",UI_HIDE_ADD_ITEM:"[UI] Hide the add item sidebar",UI_SHOW_SIDEBAR_RIGHT:"[UI] Show the sidebar right in small screens",UI_HIDE_SIDEBAR_RIGHT:"[UI] Hide the sidebar right in small screens",UI_TOGGLE_SIDEBAR_RIGHT:"[UI] Toggle the sidebar right in small screens",UI_SHOW_ITEM_INFO:"[UI] Show the item info sidebar",UI_HIDE_ITEM_INFO:"[UI] Hide the item info sidebar",UI_OPEN_DIALOG:"[UI] Open dialog",UI_CLOSE_DIALOG:"[UI] Close dialog",UI_IS_LOADING:"[UI] Set the loading state to true",UI_IS_NOT_LOADING:"[UI] Set the loading state to false",AUTH_START_SIGNUP:"[AUTH] Start signup",AUTH_SIGNUP:"[AUTH] Signup",AUTH_START_SIGNIN:"[AUTH] Start signin",AUTH_SIGNIN:"[AUTH] Signin",AUTH_LOGOUT:"[AUTH] Logout",AUTH_CHECKING_FINISH:"[AUTH] Checking for an authenticated user finish",SHOPPING_SET_CATEGORIES_LOADING:"[SHOPPING] Set the isLoadingCategories value",SHOPPING_SAVE_CATEGORIES:"[SHOPPING] Save the user categories",SHOPPING_ADD_CATEGORY:"[SHOPPING] Add a new category",SHOPPING_SAVE_ITEMS:"[SHOPPING] Save the user items",SHOPPING_ADD_ITEM:"[SHOPPING] add a new item",SHOPPING_SHOW_ITEM:"[SHOPPING] Show the info of an item",SHOPPING_HIDE_ITEM:"[SHOPPING] Hide the info of an item",SHOPPING_UPDATE_ITEM:"[SHOPPING] Update an item",SHOPPING_DELETE_ITEM:"[SHOPPING] Delete an item",CART_SET_LOADING:"[CART] Set the cart loading state",CART_GET:"[CART] Get the current user cart",CART_ADD_ITEM:"[CART] Add an item to cart",CART_SET_ITEM_QUANTITY:"[CART] Set the quantity of an item",CART_REMOVE_ITEM:"[CART] Remove an item from the cart",CART_SAVE:"[CART] Save the cart",CART_SAVE_ERROR:"[CART] Save the cart name",CART_ENABLE_EDIT_MODE:"[CART] Enable the cart edit mode",CART_EXIT_EDIT_MODE:"[CART] Exit the cart edit mode",CART_CANCEL:"[CART] Cancel the current cart",CART_COMPLETE:"[CART] Mark the current cart as completed",HISTORY_GET:"[HISTORY] Get the user carts history",HISTORY_SET_LOADING:"[HISTORY] Set the isLoadingHistory value"}},24:function(t,e,n){"use strict";n.d(e,"b",(function(){return a})),n.d(e,"a",(function(){return r}));var a=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a=Object({NODE_ENV:"production",PUBLIC_URL:"/shopping-list",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,r="".concat(a,"/").concat(t);return"GET"===n?fetch(r):fetch(r,{method:n,headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})},r=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"GET",a=Object({NODE_ENV:"production",PUBLIC_URL:"/shopping-list",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).REACT_APP_API_URL,r="".concat(a,"/").concat(t),c=localStorage.getItem("shopping-list:token")||"";return"GET"===n?fetch(r,{method:n,headers:{Authorization:"Bearer ".concat(c)}}):fetch(r,{method:n,headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(c)},body:JSON.stringify(e)})}},32:function(t,e,n){"use strict";var a,r=n(7),c=n(8),i=n(33),o={sm:"1.6rem",md:"2.4rem",lg:"3.2rem",xlg:"4rem"},s=c.c.div(a||(a=Object(r.a)(["\n\tborder: 0.2rem solid transparent;\n\tborder-top-color: #fff;\n\tborder-radius: 50%;\n\theight: ",";\n\tmargin-right: ",";\n\tmargin-left: ",";\n\twidth: ",";\n\tanimation: "," 0.6s linear infinite;\n"])),(function(t){var e=t.size;return o[void 0===e?"md":e]}),(function(t){return t.center?"auto":"0"}),(function(t){return t.center?"auto":"0"}),(function(t){var e=t.size;return o[void 0===e?"md":e]}),i.g);e.a=s},33:function(t,e,n){"use strict";n.d(e,"c",(function(){return b})),n.d(e,"e",(function(){return l})),n.d(e,"b",(function(){return _})),n.d(e,"a",(function(){return j})),n.d(e,"d",(function(){return I})),n.d(e,"f",(function(){return h})),n.d(e,"g",(function(){return f}));var a,r,c,i,o,s,u,d=n(7),O=n(8),b=Object(O.d)(a||(a=Object(d.a)(["\n  from {\n    transform: translate3d(100%, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"]))),l=Object(O.d)(r||(r=Object(d.a)(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(100%, 0, 0);\n  }\n"]))),_=Object(O.d)(c||(c=Object(d.a)(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(-100%, 0, 0);\n  }\n"]))),j=Object(O.d)(i||(i=Object(d.a)(["\n  from {\n    transform: translate3d(-100%, 0, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"]))),I=Object(O.d)(o||(o=Object(d.a)(["\n  from {\n    transform: translate3d(0, -4rem, 0);\n  }\n  to {\n    transform: translate3d(0, 0, 0);\n  }\n"]))),h=Object(O.d)(s||(s=Object(d.a)(["\n  from {\n    transform: translate3d(0, 0, 0);\n  }\n  to {\n    transform: translate3d(0, -100%, 0);\n  }\n"]))),f=Object(O.d)(u||(u=Object(d.a)(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])))},35:function(t,e,n){"use strict";n.d(e,"c",(function(){return d})),n.d(e,"b",(function(){return b})),n.d(e,"a",(function(){return _}));var a=n(15),r=n.n(a),c=n(23),i=n(25),o=n(2),s=n(24),u=n(14),d=function(t){return function(){var e=Object(c.a)(r.a.mark((function e(n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(u.e)()),e.prev=1,e.next=4,Object(s.b)("auth/signup",t,"POST");case 4:return a=e.sent,e.next=7,a.json();case 7:if((c=e.sent).success){e.next=10;break}throw new Error(c.msg);case 10:return localStorage.setItem("shopping-list:token",c.token),n(Object(u.i)()),e.abrupt("return",n(O(c.user.uid)));case 15:e.prev=15,e.t0=e.catch(1),n(Object(u.i)()),i.b.error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}()},O=function(t){return{type:o.a.AUTH_SIGNUP,payload:t}},b=function(t){return function(){var e=Object(c.a)(r.a.mark((function e(n){var a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(Object(u.e)()),e.prev=1,e.next=4,Object(s.b)("auth/signin",t,"POST");case 4:return a=e.sent,e.next=7,a.json();case 7:if((c=e.sent).success){e.next=10;break}throw new Error(c.msg);case 10:return localStorage.setItem("shopping-list:token",c.token),n(Object(u.i)()),e.abrupt("return",n(l(c.user.uid)));case 15:e.prev=15,e.t0=e.catch(1),n(Object(u.i)()),i.b.error(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(t){return e.apply(this,arguments)}}()},l=function(t){return{type:o.a.AUTH_SIGNUP,payload:t}},_=function(t){return function(){var t=Object(c.a)(r.a.mark((function t(e){var n,a;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(s.a)("auth/renewToken");case 3:if((n=t.sent).ok){t.next=6;break}throw new Error(n.statusText);case 6:return t.next=8,n.json();case 8:if((a=t.sent).success){t.next=11;break}throw new Error(a.msg);case 11:localStorage.setItem("shopping-list:token",a.token),e(l(a.user.uid)),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(0),e(j());case 18:case"end":return t.stop()}}),t,null,[[0,15]])})));return function(e){return t.apply(this,arguments)}}()},j=function(){return{type:o.a.AUTH_CHECKING_FINISH}}},60:function(t,e,n){"use strict";n.r(e);var a,r=n(0),c=n.n(r),i=n(17),o=n.n(i),s=n(20),u=n(19),d=n(40),O=n(1),b=n(2),l={showAddItem:!1,showSidebarRight:!1,showItemInfo:!1,isDialogOpen:!1,isLoading:!1},_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b.a.UI_SHOW_ADD_ITEM:return Object(O.a)(Object(O.a)({},t),{},{showAddItem:!0});case b.a.UI_HIDE_ADD_ITEM:return Object(O.a)(Object(O.a)({},t),{},{showAddItem:!1});case b.a.UI_SHOW_SIDEBAR_RIGHT:return Object(O.a)(Object(O.a)({},t),{},{showSidebarRight:!0});case b.a.UI_HIDE_SIDEBAR_RIGHT:return Object(O.a)(Object(O.a)({},t),{},{showSidebarRight:!1});case b.a.UI_TOGGLE_SIDEBAR_RIGHT:return Object(O.a)(Object(O.a)({},t),{},{showSidebarRight:!t.showSidebarRight});case b.a.UI_SHOW_ITEM_INFO:return Object(O.a)(Object(O.a)({},t),{},{showItemInfo:!0});case b.a.UI_HIDE_ITEM_INFO:return Object(O.a)(Object(O.a)({},t),{},{showItemInfo:!1});case b.a.UI_OPEN_DIALOG:return Object(O.a)(Object(O.a)({},t),{},{isDialogOpen:!0});case b.a.UI_CLOSE_DIALOG:return Object(O.a)(Object(O.a)({},t),{},{isDialogOpen:!1});case b.a.UI_IS_LOADING:return Object(O.a)(Object(O.a)({},t),{},{isLoading:!0});case b.a.UI_IS_NOT_LOADING:return Object(O.a)(Object(O.a)({},t),{},{isLoading:!1});default:return t}},j={checking:!0,uid:null},I=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b.a.AUTH_SIGNIN:case b.a.AUTH_SIGNUP:return Object(O.a)(Object(O.a)({},t),{},{checking:!1,uid:e.payload});case b.a.AUTH_CHECKING_FINISH:return Object(O.a)(Object(O.a)({},t),{},{checking:!1});case b.a.AUTH_LOGOUT:return{uid:null,checking:!1};default:return t}},h=n(12),f={items:[],categories:[],currentItem:null,isLoading:!0,isLoadingCategories:!0},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b.a.SHOPPING_SET_CATEGORIES_LOADING:return Object(O.a)(Object(O.a)({},t),{},{isLoadingCategories:e.payload});case b.a.SHOPPING_SAVE_CATEGORIES:return Object(O.a)(Object(O.a)({},t),{},{categories:e.payload,isLoadingCategories:!1});case b.a.SHOPPING_ADD_CATEGORY:return Object(O.a)(Object(O.a)({},t),{},{categories:[].concat(Object(h.a)(t.categories),[e.payload]),isLoadingCategories:!1});case b.a.SHOPPING_ADD_ITEM:var n=t.categories.findIndex((function(t){return t.category===e.payload.category})),a=Object(h.a)(t.items);return a[n]?(a[n].items=[].concat(Object(h.a)(a[n].items),[e.payload]),Object(O.a)(Object(O.a)({},t),{},{items:a})):Object(O.a)(Object(O.a)({},t),{},{items:[].concat(Object(h.a)(a),[{category:e.payload.category,items:[e.payload]}])});case b.a.SHOPPING_SAVE_ITEMS:return Object(O.a)(Object(O.a)({},t),{},{isLoading:!1,isLoadingCategories:!1,categories:e.payload.categories,items:e.payload.categories.map((function(t){return{category:t.category,items:e.payload.items.filter((function(e){return e.category===t.category}))}}))});case b.a.SHOPPING_SHOW_ITEM:return Object(O.a)(Object(O.a)({},t),{},{currentItem:e.payload});case b.a.SHOPPING_HIDE_ITEM:return Object(O.a)(Object(O.a)({},t),{},{currentItem:null});case b.a.SHOPPING_UPDATE_ITEM:return Object(O.a)(Object(O.a)({},t),{},{items:t.items.map((function(t){return e.payload.category!==t.category?t:{category:t.category,items:t.items.map((function(t){return t._id===e.payload._id?e.payload:t}))}}))});case b.a.SHOPPING_DELETE_ITEM:return Object(O.a)(Object(O.a)({},t),{},{items:t.items.map((function(t){return e.payload.category!==t.category?t:{category:t.category,items:t.items.filter((function(t){return t._id!==e.payload._id}))}})),currentItem:null});default:return t}},T={isEditMode:!1,isLoading:!0,cart:{_id:"",name:"",user:"",items:[]},unsavedCart:{name:"Shopping List",user:"",items:[]},history:{total:0,history:[],isLoading:!0}},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case b.a.CART_SET_LOADING:return Object(O.a)(Object(O.a)({},t),{},{isLoading:e.payload});case b.a.CART_ENABLE_EDIT_MODE:return Object(O.a)(Object(O.a)({},t),{},{isEditMode:!0});case b.a.CART_EXIT_EDIT_MODE:return Object(O.a)(Object(O.a)({},t),{},{isEditMode:!1,unsavedCart:Object(O.a)({},t.cart)});case b.a.CART_GET:return e.payload.cart?Object(O.a)(Object(O.a)({},t),{},{isLoading:!1,cart:Object(O.a)({},e.payload.cart),unsavedCart:Object(O.a)({},e.payload.cart)}):Object(O.a)(Object(O.a)({},t),{},{isLoading:!1,cart:Object(O.a)(Object(O.a)({},t.cart),{},{user:e.payload.user}),unsavedCart:Object(O.a)(Object(O.a)({},t.unsavedCart),{},{user:e.payload.user})});case b.a.CART_ADD_ITEM:var n=t.unsavedCart.items.some((function(t){return t.item===e.payload.item})),a=n?t.unsavedCart.items.map((function(t){return t.item===e.payload.item?Object(O.a)(Object(O.a)({},e.payload),{},{quantity:t.quantity+1}):t})):[].concat(Object(h.a)(t.unsavedCart.items),[e.payload]);return Object(O.a)(Object(O.a)({},t),{},{isEditMode:!0,unsavedCart:Object(O.a)(Object(O.a)({},t.unsavedCart),{},{items:a})});case b.a.CART_SET_ITEM_QUANTITY:return Object(O.a)(Object(O.a)({},t),{},{unsavedCart:Object(O.a)(Object(O.a)({},t.unsavedCart),{},{items:t.unsavedCart.items.map((function(t){return t.item===e.payload.id?Object(O.a)(Object(O.a)({},t),{},{quantity:e.payload.quantity}):t}))})});case b.a.CART_REMOVE_ITEM:var r=t.unsavedCart.items.filter((function(t){return t.item!==e.payload}));return Object(O.a)(Object(O.a)({},t),{},{isEditMode:r.length>0,unsavedCart:Object(O.a)(Object(O.a)({},t.unsavedCart),{},{items:r})});case b.a.CART_SAVE:return Object(O.a)(Object(O.a)({},t),{},{isLoading:!1,isEditMode:!1,cart:e.payload,unsavedCart:e.payload});case b.a.CART_SAVE_ERROR:return Object(O.a)(Object(O.a)({},t),{},{isLoading:!1,isEditMode:!1,unsavedCart:e.payload});case b.a.CART_CANCEL:return Object(O.a)(Object(O.a)({},t),{},{isLoading:!1,cart:{_id:"",name:"",user:"",items:[]},unsavedCart:{name:"Shopping List",user:"",items:[]},history:{total:t.history.total+1,history:[e.payload].concat(Object(h.a)(t.history.history))}});case b.a.CART_COMPLETE:return Object(O.a)(Object(O.a)({},t),{},{isLoading:!1,cart:{_id:"",name:"",user:"",items:[]},unsavedCart:{name:"Shopping List",user:e.payload.user,items:[]},history:{total:t.history.total+1,history:[e.payload].concat(Object(h.a)(t.history.history))}});case b.a.HISTORY_SET_LOADING:return Object(O.a)(Object(O.a)({},t),{},{history:Object(O.a)(Object(O.a)({},t.history),{},{isLoading:e.payload})});case b.a.HISTORY_GET:return Object(O.a)(Object(O.a)({},t),{},{history:{total:e.payload.total,history:[].concat(Object(h.a)(t.history.history),Object(h.a)(e.payload.history)),isLoading:!1}});default:return t}},E=Object(u.b)({ui:_,auth:I,shopping:g,cart:m}),p=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.c)(Object(u.a)(d.a)),S=Object(u.d)(E,p),A=n(16),y=n(5),C=n(35),H=n(7),v=n(8),P=n(32),R=n(3),G=v.c.div(a||(a=Object(H.a)(["\n\theight: 100vh;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n"])));var D=function(){return Object(R.jsx)(G,{children:Object(R.jsx)(P.a,{size:"xlg"})})},N=n(22);var U=function(t){var e=t.isAuthenticated,n=Object(N.a)(t,["isAuthenticated"]);return e?Object(R.jsx)(y.a,{to:"/"}):Object(R.jsx)(y.b,Object(O.a)({},n))};var L=function(t){var e=t.isAuthenticated,n=Object(N.a)(t,["isAuthenticated"]);return e?Object(R.jsx)(y.b,Object(O.a)({},n)):Object(R.jsx)(y.a,{to:"/account/signin"})},x=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,247))})),M=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,248))})),w=function(){return Object(R.jsx)(r.Suspense,{fallback:Object(R.jsx)(D,{}),children:Object(R.jsxs)(y.d,{children:[Object(R.jsx)(y.b,{path:"/account/signin",component:x}),Object(R.jsx)(y.b,{path:"/account/signup",component:M}),Object(R.jsx)(y.a,{to:"/account/signin"})]})})},k=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(9)]).then(n.bind(null,251))})),F=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(8)]).then(n.bind(null,252))})),W=Object(r.lazy)((function(){return Promise.all([n.e(0),n.e(2),n.e(1),n.e(10)]).then(n.bind(null,249))})),B=function(){return Object(R.jsx)(r.Suspense,{fallback:Object(R.jsx)(D,{}),children:Object(R.jsxs)(y.d,{children:[Object(R.jsx)(y.b,{exact:!0,path:"/history",component:F}),Object(R.jsx)(y.b,{exact:!0,path:"/statistics",component:W}),Object(R.jsx)(y.b,{exact:!0,path:"/",component:k}),Object(R.jsx)(y.a,{to:"/"})]})})};var z,V=function(){var t=Object(s.b)(),e=Object(s.c)((function(t){return t.auth})),n=e.checking,a=e.uid;return Object(r.useEffect)((function(){t(Object(C.a)())}),[t]),n?Object(R.jsx)(D,{}):Object(R.jsx)(A.a,{basename:"shopping-list",children:Object(R.jsxs)(y.d,{children:[Object(R.jsx)(U,{path:"/account",component:w,isAuthenticated:null!==a}),Object(R.jsx)(L,{path:"/",component:B,isAuthenticated:null!==a}),Object(R.jsx)(y.a,{to:"/account/signin"})]})})},Y=Object(v.a)(z||(z=Object(H.a)(["\n  :root {\n    --color-bg: #121212;\n    --color-bg-2: #212121;\n    --color-bg-3: #424242;\n    --color-text: #fff;\n    --color-primary: #F9A109;\n    --color-secondary: #0064b7;\n    --color-secondary-alt: #56CCF2;\n    --color-danger: #ba000d;\n    --color-danger-alt: #fb928d;\n  }\n  html {\n    box-sizing: border-box;\n    font-size: 62.5%;\n    height: 100%;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: inherit;\n  }\n  body {\n    background-color: var(--color-bg);\n    color: var(--color-text);\n    font-size: 1.6rem;\n    font-family: 'Quicksand', sans-serif;\n    line-height: 1.4;\n    height: 100%;\n    margin: 0;\n  }\n  a {\n    color: #90caf9;\n    text-decoration: none;\n  }\n  ul {\n    list-style: none;\n    margin: 0;\n    padding: 0;\n  }\n  #root {\n    height: 100%;\n  }\n  .layout {\n    height: 100%;\n    display: grid;\n    grid-template-columns: 6.2rem 1fr;\n    @media (min-width: 56.25em) {\n      grid-template-columns: 9.4rem 1fr;\n\t  }\n  }\n  @media (any-hover: hover) {\n    ::-webkit-scrollbar {\n      width: 0.4rem;\n    }\n    ::-webkit-scrollbar-track {\n      background-color: var(--color-bg-2);\n    }\n    ::-webkit-scrollbar-thumb {\n      background-color: var(--color-primary);\n      border-radius: 0.4rem;\n    }\n  }\n  .no-margin {\n    margin: 0;\n  }\n"])));var K=function(){return Object(R.jsx)(R.Fragment,{children:Object(R.jsxs)(s.a,{store:S,children:[Object(R.jsx)(Y,{}),Object(R.jsx)(V,{})]})})},q=function(t){t&&t instanceof Function&&n.e(11).then(n.bind(null,250)).then((function(e){var n=e.getCLS,a=e.getFID,r=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),r(t),c(t),i(t)}))};o.a.render(Object(R.jsx)(c.a.StrictMode,{children:Object(R.jsx)(K,{})}),document.getElementById("root")),q()}},[[60,4,5]]]);
//# sourceMappingURL=main.fa27225a.chunk.js.map