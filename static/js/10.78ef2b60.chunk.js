(this.webpackJsonpshoppingify=this.webpackJsonpshoppingify||[]).push([[10],{138:function(t,n,e){"use strict";var r,i=e(7),c=e(8).c.ul(r||(r=Object(i.a)(["\n\tdisplay: grid;\n\tgap: 2.4rem 0.8rem;\n\t@media (min-width: 36em) {\n\t\tgrid-template-columns: repeat(2, 1fr);\n\t}\n\t@media (min-width: 75em) {\n\t\tgrid-template-columns: repeat(4, 1fr);\n\t\tgap: 4rem 2rem;\n\t}\n"])));n.a=c},417:function(t,n,e){"use strict";e.r(n);var r,i,c,o=e(0),a=e(20),s=e(25),l=(e(98),e(87)),m=e(74),d=e(156),j=e(137),b=e(7),u=e(8),g=e(70),f=e(69),h=e(71),O=e(3),p=u.c.form(r||(r=Object(b.a)(["\n\tflex: 0 0 18rem;\n\tbackground-color: var(--color-bg-3);\n\tborder-radius: 1.2rem;\n\theight: 5rem;\n\tmargin-left: 5.6rem;\n\tdisplay: grid;\n\tgrid-template-columns: 2rem 2rem 1fr;\n\talign-items: center;\n\t@media (min-width: 87.5em) {\n\t\tflex-basis: 27.5rem;\n\t}\n"]))),x=u.c.button(i||(i=Object(b.a)(["\n\tgrid-column: 2;\n\tgrid-row: 1;\n\tbackground: none;\n\tborder: none;\n\tcolor: #fff;\n\tcursor: pointer;\n\tmargin: 0;\n\tpadding: 0;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tjustify-content: center;\n"]))),v=u.c.input(c||(c=Object(b.a)(["\n\tgrid-column: 1 / -1;\n\tgrid-row: 1;\n\tbackground: none;\n\tborder: 1px solid transparent;\n\tborder-radius: 1.2rem;\n\tcolor: #fff;\n\tfont-family: inherit;\n\tfont-size: 1.6rem;\n\theight: 100%;\n\tpadding-left: 5rem;\n\tpadding-right: 1rem;\n\ttransition: border-color 0.25s ease;\n\t&:focus {\n\t\toutline: none;\n\t\tborder-color: var(--color-primary);\n\t}\n\t&::placeholder {\n\t\tcolor: inherit;\n\t}\n"])));var y,w,C=function(){var t=Object(o.useState)(""),n=Object(f.a)(t,2),e=n[0],r=n[1],i=Object(a.b)();return Object(o.useEffect)((function(){var t=setTimeout((function(){i(Object(l.f)(e))}),500);return function(){return clearTimeout(t)}}),[e,i]),Object(O.jsxs)(p,{onSubmit:function(t){t.preventDefault(),e&&i(Object(l.f)(e))},children:[Object(O.jsx)(x,{type:"submit",title:"Search",children:Object(O.jsx)(h.n,{size:20,color:"currentCOlor"})}),Object(O.jsx)(v,{type:"text",placeholder:"search item","aria-label":"Search Item",value:e,onChange:function(t){return r(t.target.value)}})]})},k=u.c.header(y||(y=Object(b.a)(["\n\tdisplay: none;\n\t@media (min-width: 75em) {\n\t\tpadding: 3rem 9rem 0rem 8rem;\n\t\tdisplay: flex;\n\t\talign-items: start;\n\t\tjustify-content: space-between;\n\t}\n"]))),z=u.c.h1(w||(w=Object(b.a)(["\n\tfont-size: 2rem;\n\tfont-weight: 500;\n\tmargin: 0;\n\t@media (min-width: 87.5em) {\n\t\tfont-size: 2.6rem;\n\t}\n\t.hightlight {\n\t\tcolor: var(--color-primary);\n\t\tfont-weight: 700;\n\t}\n"])));var I,E,L,S=function(){return Object(O.jsxs)(k,{children:[Object(O.jsxs)(z,{children:[Object(O.jsx)("span",{className:"hightlight",children:"Shoppingify"})," allows you to take your shopping list wherever you go"]}),Object(O.jsx)(C,{})]})},A=e(32),N=u.c.div(I||(I=Object(b.a)(["\n\tpadding: 2rem 2rem 0;\n\t@media (min-width: 75em) {\n\t\tmargin-top: 3rem;\n\t\tpadding: 0 9rem 1rem 8rem;\n\t}\n"]))),_=e(138),T=e(14),q=u.c.button(E||(E=Object(b.a)(["\n\tbackground: none;\n\tborder: none;\n\tcolor: #fff;\n\tcursor: pointer;\n\tpadding: 0;\n\tmargin: 0;\n"]))),D=u.c.li(L||(L=Object(b.a)(["\n\t",";\n\tdisplay: grid;\n\tgrid-template-columns: 1fr repeat(2, 2.4rem);\n\tgap: 0.8rem;\n\talign-items: start;\n\t",":first-of-type {\n\t\topacity: 0.7;\n\t}\n"])),g.a,q);var F,J,P=function(t){var n=t.item,e=Object(a.b)();return Object(O.jsxs)(D,{onClick:function(){e(Object(l.g)(n)),e(Object(T.g)())},children:[n.name,Object(O.jsx)(q,{type:"button",title:"Edit Item",onClick:function(t){t.stopPropagation(),e(Object(l.g)(n)),e(Object(T.f)())},children:Object(O.jsx)(h.h,{size:24,color:"currentColor"})}),Object(O.jsx)(q,{type:"button",title:"Add Item to the list",onClick:function(t){t.stopPropagation(),e(Object(m.a)({name:n.name,quantity:1,category:n.category,completed:!1,item:n._id}))},children:Object(O.jsx)(h.a,{size:24,color:"currentColor"})})]})},B=u.c.section(F||(F=Object(b.a)(["\n\tmargin-bottom: 1.6rem;\n"]))),G=u.c.h2(J||(J=Object(b.a)(["\n\tfont-size: 1.8rem;\n\tfont-weight: 500;\n\tmargin: 0 0 1.8rem 0;\n"])));var H,K=function(t){var n=t.category,e=t.items;return Object(O.jsxs)(B,{children:[Object(O.jsx)(G,{children:n}),Object(O.jsx)(_.a,{children:e.map((function(t){return Object(O.jsx)(P,{item:t},t._id)}))})]})},M=u.c.button(H||(H=Object(b.a)(["\n\tbackground-color: var(--color-bg-3);\n\tborder: none;\n\tborder-radius: 1.2rem;\n\tcolor: #fff;\n\tcursor: pointer;\n\tfont-family: inherit;\n\tfont-size: 1.6rem;\n\tmargin: 0;\n\tpadding: 1.2rem 1.6rem;\n\ttext-align: left;\n\tdisplay: grid;\n\tgrid-template-columns: 1fr 2.4rem;\n\tgap: 0.8rem;\n\talign-items: start;\n"])));var Q,R=function(t){var n=t.children,e=Object(a.b)();return Object(O.jsxs)(M,{onClick:function(){return e(Object(T.f)())},children:[n,Object(O.jsx)(h.a,{size:24,color:"currentColor",cursor:"pointer"})]})},U=u.c.div(Q||(Q=Object(b.a)(["\n\t",";\n\t.space {\n\t\tmargin-top: 4rem;\n\t}\n\t.no-data {\n\t\t",";\n\t\th2 {\n\t\t\tfont-weight: 500;\n\t\t}\n\t}\n"])),g.e,g.d);var V,W,X,Y,Z,$,tt=function(){var t=Object(a.c)((function(t){return t.ui})),n=Object(a.c)((function(t){return t.shopping})),e=n.items,r=n.isLoading,i=n.searchTerm,c=i?e.map((function(t){return{category:t.category,items:t.items.filter((function(t){return t.name.toLowerCase().includes(i.toLowerCase())}))}})).filter((function(t){return t.items.length>0})):e;return Object(O.jsxs)(U,{children:[Object(O.jsx)(S,{}),t.isLoading?Object(O.jsx)("div",{className:"space",children:Object(O.jsx)(A.a,{center:!0,size:"lg"})}):c.map((function(t){return t.items.length>0?Object(O.jsx)(N,{children:Object(O.jsx)(K,{category:t.category,items:t.items})},t.category):null})),!t.isLoading&&!r&&0===e.length&&Object(O.jsxs)("div",{className:"no-data",children:[Object(O.jsx)("h2",{children:"No items to show"}),Object(O.jsx)(R,{children:"Create an item"})]})]})},nt=e(154),et=e(158),rt=e(33),it=e(73),ct=e(159),ot=u.c.div(V||(V=Object(b.a)(["\n\t",";\n\t",";\n\tanimation: ","\n\t\t0.4s ease forwards;\n\t@media (min-width: 56.25em) {\n\t\tpadding-top: 3.4rem;\n\t\tanimation: "," 0.4s\n\t\t\tease forwards;\n\t}\n"])),g.h,g.g,(function(t){return t.show?rt.c:rt.a}),(function(t){return t.show?rt.d:rt.f})),at=u.c.button(W||(W=Object(b.a)(["\n\tborder: none;\n\tbackground: none;\n\tcolor: var(--color-primary);\n\tcursor: pointer;\n\tfont-family: inherit;\n\tfont-size: 1.6rem;\n\tfont-weight: 700;\n\tmargin: 0;\n\tmargin-bottom: 3rem;\n\tpadding: 0;\n\tdisplay: inline-flex;\n\talign-items: center;\n\tsvg {\n\t\tmargin-right: 1rem;\n\t}\n"]))),st=u.c.img(X||(X=Object(b.a)(["\n\tborder-radius: 2.5rem;\n\tdisplay: block;\n\theight: auto;\n\tmargin-bottom: 2.5rem;\n\tmax-width: 100%;\n"]))),lt=u.c.h4(Y||(Y=Object(b.a)(["\n\tfont-size: 1.5rem;\n\tfont-weight: 500;\n\tmargin-top: 0;\n\tmargin-bottom: 1.15rem;\n\topacity: 0.79;\n"]))),mt=u.c.p(Z||(Z=Object(b.a)(["\n\tfont-size: 1.8rem;\n\tmargin-top: 0;\n\tmargin-bottom: 2.5rem;\n"]))),dt=u.c.div($||($=Object(b.a)(["\n\tpadding: 1rem 0;\n\ttext-align: center;\n\t@media (min-width: 37.5em) {\n\t\ttext-align: right;\n\t}\n\t@media (min-width: 56.25em) {\n\t\ttext-align: center;\n\t\tpadding: 3rem 0;\n\t}\n\t",":first-child {\n\t\tmargin-right: 2rem;\n\t}\n"])),it.a);var jt=function(t){var n=t.show,e=t.item,r=Object(o.useState)(n),i=Object(f.a)(r,2),c=i[0],s=i[1],d=Object(a.b)(),j=Object(a.c)((function(t){return t.ui}));Object(o.useEffect)((function(){n&&s(!0)}),[n]);var b=function(){return d(Object(T.a)())};return c?Object(O.jsxs)(ot,{onAnimationEnd:function(){n||s(!1)},show:n,children:[Object(O.jsxs)(at,{type:"button",onClick:function(){d(Object(l.e)()),d(Object(T.c)())},children:[Object(O.jsx)(h.b,{size:24,color:"currentColor"}),"back"]}),(null===e||void 0===e?void 0:e.image)&&Object(O.jsx)(st,{src:null===e||void 0===e?void 0:e.image}),Object(O.jsx)(lt,{children:"name"}),Object(O.jsx)(mt,{children:null===e||void 0===e?void 0:e.name}),Object(O.jsx)(lt,{children:"category"}),Object(O.jsx)(mt,{children:null===e||void 0===e?void 0:e.category}),(null===e||void 0===e?void 0:e.note)&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(lt,{children:"note"}),Object(O.jsx)(mt,{children:null===e||void 0===e?void 0:e.note})]}),Object(O.jsxs)(dt,{children:[Object(O.jsx)(it.a,{size:"lg",type:"button",onClick:function(){d(Object(T.d)())},children:"delete"}),Object(O.jsx)(it.a,{size:"lg",type:"button",color:"primary",onClick:function(){d(Object(m.a)({name:(null===e||void 0===e?void 0:e.name)||"",quantity:1,category:(null===e||void 0===e?void 0:e.category)||"",completed:!1,item:(null===e||void 0===e?void 0:e._id)||""})),d(Object(T.c)())},children:"Add to list"})]}),Object(O.jsx)(ct.a,{title:"Are you sure that you want to delete this item?",isOpen:j.isDialogOpen,onClose:b,onConfirm:function(){d(Object(T.c)()),d(Object(l.h)(null===e||void 0===e?void 0:e._id)),b()}})]}):null};n.default=function(){var t=Object(a.b)(),n=Object(a.c)((function(t){return t.ui})),e=Object(a.c)((function(t){return t.shopping})),r=e.items,i=e.currentItem,c=e.isLoading,b=Object(a.c)((function(t){return t.cart})).unsavedCart;return Object(o.useEffect)((function(){c&&0===r.length&&t(Object(l.d)())}),[t,c,r]),Object(o.useEffect)((function(){b.user||t(Object(m.h)())}),[t,b.user]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(s.a,{}),Object(O.jsxs)("div",{className:"layout",children:[Object(O.jsx)(d.a,{}),Object(O.jsxs)(j.a,{children:[Object(O.jsx)(tt,{}),Object(O.jsx)(nt.a,{}),Object(O.jsx)(et.a,{show:n.showAddItem}),Object(O.jsx)(jt,{item:i,show:n.showItemInfo})]})]})]})}}}]);
//# sourceMappingURL=10.78ef2b60.chunk.js.map