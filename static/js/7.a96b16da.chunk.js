(this.webpackJsonpshoppingify=this.webpackJsonpshoppingify||[]).push([[7],{241:function(t,n,e){"use strict";e.r(n);var r=e(19),a=e(97),i=e(98),o=e(30),s=e(23),c=(e(83),e(34)),d=e(95),l=e(96),m=e(64),u=e(73),b=e(31),p=e(3),h={email:"",password:""},j=i.a().shape({email:i.b().email("A valid email address is required").required("A valid email address is required"),password:i.b().min(8,"Password must be at least 8 characters long").required("Password is required")});n.default=function(){var t=Object(r.b)(),n=Object(r.c)((function(t){return t.ui})).isLoading,e=Object(a.a)({initialValues:h,validationSchema:j,onSubmit:function(n){t(Object(c.c)(n))}});return Object(p.jsxs)(d.a,{children:[Object(p.jsx)(s.a,{}),Object(p.jsx)("h1",{className:"no-margin",children:"Signup"}),Object(p.jsxs)(l.a,{onSubmit:e.handleSubmit,autoComplete:"off",children:[Object(p.jsxs)(u.a,{children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(p.jsx)("input",{value:e.values.email,onChange:e.handleChange,type:"email",name:"email",id:"email"}),e.errors.email&&e.touched.email?Object(p.jsx)("div",{className:"error",children:e.errors.email}):null]}),Object(p.jsxs)(u.a,{children:[Object(p.jsx)("label",{htmlFor:"password",children:"Password"}),Object(p.jsx)("input",{value:e.values.password,onChange:e.handleChange,type:"password",name:"password",id:"password"}),e.errors.password&&e.touched.password?Object(p.jsx)("div",{className:"error",children:e.errors.password}):null]}),Object(p.jsx)(m.a,{disabled:n,type:"submit",color:"secondary",full:!0,children:n?Object(p.jsx)(b.a,{size:"sm",center:!0}):"Signup"})]}),Object(p.jsxs)("p",{children:["Already have login and password?"," ",Object(p.jsx)(o.b,{to:"/account/signin",children:"Sign in"})]})]})}},64:function(t,n,e){"use strict";var r,a=e(6),i=e(7),o={primary:"var(--color-primary)",secondary:"var(--color-secondary)",danger:"var(--color-danger)",black:"var(--color-bg)"},s=i.c.button.attrs((function(t){return{type:t.type||"button"}}))(r||(r=Object(a.a)(["\n\tbackground-color: ",";\n\tborder: none;\n\tborder-radius: ",";\n\tbox-shadow: 0px 0.2rem 1.2rem rgba(0, 0, 0, 0.04);\n\tcolor: #fff;\n\tcursor: pointer;\n\tfont-family: inherit;\n\tfont-size: ",";\n\tfont-weight: 700;\n\tpadding: 1.1rem 2rem;\n\ttext-align: center;\n\twidth: ",";\n\t&:disabled {\n\t\tcursor: not-allowed;\n\t\topacity: 0.6;\n\t}\n"])),(function(t){var n=t.color;return n?o[n]:"transparent"}),(function(t){return t.roundedLeft?"1.2rem 0 0 1.2rem":"1.2rem"}),(function(t){return"lg"===t.size?"1.6rem":"1.4rem"}),(function(t){return t.full?"100%":null}));n.a=s},73:function(t,n,e){"use strict";var r,a=e(6),i=e(7).c.div(r||(r=Object(a.a)(["\n\tmargin-bottom: 3rem;\n\tlabel {\n\t\tdisplay: inline-block;\n\t\tfont-size: 1.4rem;\n\t\tmargin-bottom: 0.8rem;\n\t}\n\tinput,\n\ttextarea {\n\t\tbackground: none;\n\t\tborder: 1px solid #bdbdbd;\n\t\tborder-radius: 1.2rem;\n\t\tcolor: #fff;\n\t\tdisplay: block;\n\t\tfont-family: inherit;\n\t\tfont-size: 1.6rem;\n\t\tpadding: 2rem 1.8rem;\n\t\twidth: 100%;\n\t\ttransition: border-color 0.3s ease;\n\t}\n\tinput:focus,\n\ttextarea:focus {\n\t\tborder-color: var(--color-primary);\n\t\toutline: none;\n\t}\n\ttextarea {\n\t\theight: 11rem;\n\t\tresize: none;\n\t}\n\t.error {\n\t\tcolor: #fb928d;\n\t\tmargin-top: 1rem;\n\t\tmargin-bottom: 0;\n\t}\n"])));n.a=i},95:function(t,n,e){"use strict";var r,a=e(6),i=e(7).c.div(r||(r=Object(a.a)(["\n\tborder-radius: 1.2rem;\n\tmargin: 0 auto;\n\tmargin-top: 2rem;\n\tmax-width: 40rem;\n\tpadding: 2rem;\n\t@media (min-width: 37.5em) {\n\t\tbackground-color: var(--color-bg-3);\n\t}\n\t@media (min-width: 56.25em) {\n\t\tmargin-top: 8%;\n\t}\n"])));n.a=i},96:function(t,n,e){"use strict";var r,a=e(6),i=e(7).c.form(r||(r=Object(a.a)(["\n\tmargin-top: 2rem;\n"])));n.a=i}}]);
//# sourceMappingURL=7.a96b16da.chunk.js.map