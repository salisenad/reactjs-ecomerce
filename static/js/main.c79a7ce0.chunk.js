(this["webpackJsonpecommerce-front"]=this["webpackJsonpecommerce-front"]||[]).push([[0],{21:function(e,a,t){e.exports=t(32)},31:function(e,a,t){},32:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(18),l=t.n(c),o=t(1),m=t(9),s=t(8),i=t(3),u=t(4),d="http://localhost:8000/api",p=function(){return"undefined"===typeof window&&(!!localStorage.getItem("jwt")&&JSON.parse(localStorage.getItem("jwt")))},E=function(e,a){return e.location.pathname===a?{color:"#ff9900"}:{color:"#ffffff"}},f=Object(m.g)((function(e){var a=e.history;return r.a.createElement("div",null,r.a.createElement("ul",{className:"nav nav-tabs bg-primary"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:E(a,"/"),to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{style:E(a,"/admin/dashboard"),to:"/admin/dashboard"},"Dashboard")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:E(a,"/user/dashboard"),to:"/user/dashboard"},"Dashboard")),!p()&&r.a.createElement(n.Fragment,null,r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:E(a,"/signin"),to:"/signin"},"Signin")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(o.b,{className:"nav-link",style:E(a,"/signup"),to:"/signup"},"Signup"))),p()&&r.a.createElement("li",{className:"nav-item"},r.a.createElement("span",{className:"nav-link",style:{cursor:"pointer",color:"#ffffff"},onClick:function(){return function(e){if("undefined"!==typeof window)return localStorage.removeItem("jwt"),e(),fetch("".concat(d,"/signout"),{method:"GET"}).then((function(e){console.log("signout",e)})).catch((function(e){return console.log(e)}))}((function(){a.push("/")}))}},"Signout"))))})),N=(t(31),function(e){var a=e.title,t=void 0===a?"Title":a,n=e.description,c=void 0===n?"Description":n,l=e.className,o=e.children;return r.a.createElement("div",null,r.a.createElement(f,null),r.a.createElement("div",{className:"jumbotron"},r.a.createElement("h2",null,t),r.a.createElement("p",{className:"lead"},c)),r.a.createElement("div",{className:l},o))}),g=function(){var e=Object(n.useState)({email:"senad.sali3@gmamil.com",password:"senadewrwrew",error:"",loading:!1,redirectToReferrer:!1}),a=Object(u.a)(e,2),t=a[0],c=a[1],l=t.email,o=t.password,E=t.loading,f=t.error,g=t.redirectToReferrer,b=p().user,h=function(e){return function(a){c(Object(i.a)({},t,Object(s.a)({error:!1},e,a.target.value)))}},v=function(e){e.preventDefault(),c(Object(i.a)({},t,{error:!1,loading:!0})),function(e){return fetch("".concat(d,"/signin"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}({email:l,password:o}).then((function(e){e.error?c(Object(i.a)({},t,{error:e.error,loading:!1})):function(e,a){"undefined"!==typeof window&&(localStorage.setItem("jwt",JSON.stringify(e)),a())}(e,(function(){c(Object(i.a)({},t,{redirectToReferrer:!0}))}))}))};return r.a.createElement(N,{title:"Signin",description:"Signin to Node react e commerce app",className:"container col-md-8 offset-md-2"},E&&r.a.createElement("div",{className:"alert alert-info"},r.a.createElement("h2",null,"Loading...")),r.a.createElement("div",{className:"alert alert-danger",style:{display:f?"":"none"}},f),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:h("email"),type:"email",className:"form-control",value:l})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:h("password"),type:"password",className:"form-control",value:o})),r.a.createElement("button",{onClick:v,className:"btn btn-primary"},"Submit")),function(){if(g)return b&&1===b.role?r.a.createElement(m.a,{to:"/admin/dashboard"}):r.a.createElement(m.a,{to:"/user/dashboard"})}())},b=function(){var e=Object(n.useState)({name:"",email:"",password:"",error:"",success:!1}),a=Object(u.a)(e,2),t=a[0],c=a[1],l=t.name,m=t.email,p=t.password,E=t.success,f=t.error,g=function(e){return function(a){c(Object(i.a)({},t,Object(s.a)({error:!1},e,a.target.value)))}},b=function(e){var a;e.preventDefault(),c(Object(i.a)({},t,{error:!1})),(a={name:l,email:m,password:p},fetch("".concat(d,"/signup"),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify(a)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))).then((function(e){e.error?c(Object(i.a)({},t,{error:e.error,success:!1})):c(Object(i.a)({},t,{name:"",email:"",password:"",error:"",success:!0}))}))};return r.a.createElement(N,{title:"Signup",description:"Signup to Node react e commerce app",className:"container col-md-8 offset-md-2"},r.a.createElement("div",{className:"alert alert-info",style:{display:E?"":"none"}},"New account is created. Please ",r.a.createElement(o.b,{to:"/signin"},"Signin")),r.a.createElement("div",{className:"alert alert-danger",style:{display:f?"":"none"}},f),r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:g("name"),type:"text",className:"form-control",value:l})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Email"),r.a.createElement("input",{onChange:g("email"),type:"email",className:"form-control",value:m})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Password"),r.a.createElement("input",{onChange:g("password"),type:"password",className:"form-control",value:p})),r.a.createElement("button",{onClick:b,className:"btn btn-primary"},"Submit")))},h=function(e){var a=e.item,t=e.url;return r.a.createElement("div",{className:"product-img"},r.a.createElement("img",{src:"".concat(d,"/").concat(t,"/photo/").concat(a._id),alt:a.name,className:"mb-3",style:{maxHeight:"100%",maxWidth:"100%"}}))},v=function(e){var a=e.product;return r.a.createElement("div",{className:"col-4 mb-3"},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-header"},"produkti pare"),r.a.createElement("div",{className:"card-body"},r.a.createElement(h,{item:a,url:"product"}),r.a.createElement("p",null,"Pershkrimi"),r.a.createElement("p",null,"200"),r.a.createElement(o.b,{to:"/"},r.a.createElement("button",{className:"btn btn-outline-primary mt-2 mb-2"},"View Product")),r.a.createElement("button",{className:"btn btn-outline-warning mt-2 mb-2"},"Add to cart"))))},y=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],c=(a[1],Object(n.useState)([])),l=Object(u.a)(c,2),o=l[0],m=(l[1],Object(n.useState)(!1)),s=Object(u.a)(m,2);s[0],s[1];return Object(n.useEffect)((function(){}),[]),r.a.createElement(N,{title:"Home Page",description:"Node React E-commerce App senad",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("h2",{className:"mb-4 "},"Best Seller"),t.map((function(e,a){return r.a.createElement(v,{key:a,product:e})}))),r.a.createElement("h2",{className:"mb-4 "},"New Arrivals"),r.a.createElement("div",{className:"row"},o.map((function(e,a){return r.a.createElement(v,{key:a,product:e})}))))},j=t(12),w=function(){return r.a.createElement(N,{title:" Dashboard",description:"G'day Senad!",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},"User Links"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{className:"nav-link",to:"/cart"},"My Cart")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{className:"nav-link",to:"/profile/update"},"Update Profile"))))),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"User Information"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Senad"),r.a.createElement("li",{className:"list-group-item"},"senad.sali3@gmail.com"),r.a.createElement("li",{className:"list-group-item"},"Admin"))),r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"Purchase history"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"history"))))))},O=function(e){var a=e.component,t=Object(j.a)(e,["component"]);return r.a.createElement(m.b,Object.assign({},t,{render:function(e){return p()?r.a.createElement(m.a,{to:{pathname:"/signin",state:{from:e.location}}}):r.a.createElement(a,e)}}))},S=function(){return r.a.createElement(N,{title:" Dashboard",description:"G'day Senad!",className:"container-fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-3"},r.a.createElement("div",{className:"card"},r.a.createElement("h4",{className:"card-header"},"Admin Links"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{className:"nav-link",to:"/create/category"},"Create Category")),r.a.createElement("li",{className:"list-group-item"},r.a.createElement(o.b,{className:"nav-link",to:"/create/product"},"Create Product"))))),r.a.createElement("div",{className:"col-9"},r.a.createElement("div",{className:"card mb-5"},r.a.createElement("h3",{className:"card-header"},"Admin Information"),r.a.createElement("ul",{className:"list-group"},r.a.createElement("li",{className:"list-group-item"},"Senad"),r.a.createElement("li",{className:"list-group-item"},"senad.sali3@gmail.com"),r.a.createElement("li",{className:"list-group-item"},"Admin"))))))},x=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!1),m=Object(u.a)(l,2),s=m[0],i=m[1],E=Object(n.useState)(!1),f=Object(u.a)(E,2),g=f[0],b=f[1],h=p(),v=h.user,y=h.token,j=function(e){i(""),c(e.target.value)},w=function(e){e.preventDefault(),i(""),b(!1),function(e,a,t){return fetch("".concat(d,"/category/create/").concat(e),{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)},body:JSON.stringify(t)}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}(v._id,y,{name:t}).then((function(e){e.error?i(!0):(i(""),b(!0))}))};return r.a.createElement(N,{title:" Add a new Category",description:"G'day  Admin Senad! , ready to add a new category"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},function(){if(g)return r.a.createElement("h3",{className:"text-success"},t," is created")}(),function(){if(s)return r.a.createElement("h3",{className:"text-danger"},"Category is should be unique")}(),r.a.createElement("form",{onSubmit:w},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:j,value:t,type:"text",className:"form-control",autoFocus:!0,required:!0})),r.a.createElement("button",{className:"btn btn-outline-primary"},"Create Category")),r.a.createElement("div",{className:"mt-5"},r.a.createElement(o.b,{to:"/admin/dashboard",className:"text-warning"},"Back to Dashboard")))))},C=function(){var e=Object(n.useState)({name:"",description:"",price:"",categories:[],category:"",shipping:"",quantity:"",photo:"",loading:!1,error:"",createdProduct:"",redirectToProfile:!1,formData:""}),a=Object(u.a)(e,2),t=a[0],c=a[1],l=p(),o=l.user,m=l.token,E=t.name,f=t.description,g=t.price,b=(t.categories,t.category,t.shipping,t.quantity),h=t.loading,v=t.error,y=t.createdProduct,j=(t.redirectToProfile,t.formData);Object(n.useEffect)((function(){}),[]);var w=function(e){return function(a){var n="photo"===e?a.target.files[0]:a.target.value;j.set(e,n),c(Object(i.a)({},t,Object(s.a)({},e,n)))}},O=function(e){e.preventDefault(),c(Object(i.a)({},t,{error:"",loading:!0})),function(e,a,t){return fetch("".concat(d,"/product/create/").concat(e),{method:"POST",headers:{Accept:"application/json",Authorization:"Bearer ".concat(a)},body:t}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}(o._id,m,j).then((function(e){e.error?c(Object(i.a)({},t,{error:e.error})):c(Object(i.a)({},t,{name:"",description:"",photo:"",price:"",quantity:b,loading:!1,createdProduct:e.name}))}))};return r.a.createElement(N,{title:" Add a new Product",description:"G'day  Admin Senad! , ready to add a new product"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-8 offset-md-2"},h&&r.a.createElement("div",{className:"alert alert-success"},r.a.createElement("h2",null,"Loading..")),r.a.createElement("div",{className:"alert alert-info",style:{display:y?"":"none"}},r.a.createElement("h2",null,"".concat(y)," is created")),r.a.createElement("div",{className:"alert alert-danger",style:{display:v?"":"none"}},v),r.a.createElement("form",{className:"mb-3",onSubmit:O},r.a.createElement("h4",null,"Post Photo"),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"btn btn-secondary"},r.a.createElement("input",{onChange:w("photo"),type:"file",name:"photo",accept:"image/*"}))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Name"),r.a.createElement("input",{onChange:w("name"),type:"text",className:"form-control",value:E})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Description"),r.a.createElement("textarea",{onChange:w("description"),className:"form-control",value:f})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Price"),r.a.createElement("input",{onChange:w("price"),type:"number",className:"form-control",value:g})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Category"),r.a.createElement("select",{onChange:w("category"),className:"form-control"},r.a.createElement("option",null,"Please select"),r.a.createElement("option",{value:"tesresrsrwerwer"},"Angular"),r.a.createElement("option",{value:"tesresrsrwerwer"},"React"),r.a.createElement("option",{value:"tesresrsrwerwer"},"Vue"),"))}")),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Shipping"),r.a.createElement("select",{onChange:w("shipping"),className:"form-control"},r.a.createElement("option",null,"Please select"),r.a.createElement("option",{value:"0"},"No"),r.a.createElement("option",{value:"1"},"Yes"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{className:"text-muted"},"Quantity"),r.a.createElement("input",{onChange:w("quantity"),type:"number",className:"form-control",value:b})),r.a.createElement("button",{className:"btn btn-outline-primary"},"Create Product")))))},P=function(){return r.a.createElement(o.a,null,r.a.createElement(m.d,null,r.a.createElement(m.b,{path:"/",exact:!0,component:y}),r.a.createElement(m.b,{path:"/signin",exact:!0,component:g}),r.a.createElement(m.b,{path:"/signup",exact:!0,component:b}),r.a.createElement(m.b,{path:"/user/dashboard",exact:!0,component:w}),r.a.createElement(O,{path:"/admin/dashboard",exact:!0,component:S}),r.a.createElement(O,{path:"/create/category",exact:!0,component:x}),r.a.createElement(O,{path:"/create/product",exact:!0,component:C})))};l.a.render(r.a.createElement(P,null),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.c79a7ce0.chunk.js.map