(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(33)},24:function(e,a,t){},25:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var l=t(0),c=t.n(l),n=t(12),r=t.n(n);t(24),t(25);function o(e){return c.a.createElement("div",{className:"accordion my-2",id:"accordionExample"},c.a.createElement("div",{className:"accordion-item "},c.a.createElement("h2",{className:"accordion-header",id:"headingOne"},c.a.createElement("button",{className:"accordion-button bg-".concat(e.mode," text-").concat("dark"===e.mode?"white":"black"," "),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},c.a.createElement("strong",null," Analyze Your Text"))),c.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},c.a.createElement("div",{className:"accordion-body text-".concat("dark"===e.mode?"white":"black"),style:{backgroundColor:"dark"===e.mode?"#0a1e3c":"white"}},"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or"))),c.a.createElement("div",{className:"accordion-item"},c.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},c.a.createElement("button",{className:"accordion-button collapsed bg-".concat(e.mode," text-").concat("dark"===e.mode?"white":"black"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},c.a.createElement("strong",null," Free to Use"))),c.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},c.a.createElement("div",{className:"accordion-body text-".concat("dark"===e.mode?"white":"black"),style:{backgroundColor:"dark"===e.mode?"#0a1e3c":"white"}},"Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit"))),c.a.createElement("div",{className:"accordion-item"},c.a.createElement("h2",{className:"accordion-header",id:"headingThree"},c.a.createElement("button",{className:"accordion-button collapsed bg-".concat(e.mode," text-").concat("dark"===e.mode?"white":"black"),type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},c.a.createElement("strong",null," Browser compatible"))),c.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},c.a.createElement("div",{className:"accordion-body text-".concat("dark"===e.mode?"white":"black"),style:{backgroundColor:"dark"===e.mode?"#0a1e3c":"white"}},"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It sults to count characters in facebook, blog, books, excel document, pdf document,\xa0essays,\xa0etc."))))}function s(e){return c.a.createElement("div",{style:{height:"55px"}},e.alert&&c.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},c.a.createElement("strong",null,(e=>{const a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)})(e.alert.type)),": ",e.alert.msg))}var i=t(10);function m(e){return c.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},c.a.createElement("div",{className:"container-fluid"},c.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),c.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c.a.createElement("span",{className:"navbar-toggler-icon"})),c.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},c.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.Link,{className:"nav-link active","aria-current":"page",to:"/home"},"Home")),c.a.createElement("li",{className:"nav-item"},c.a.createElement(i.Link,{className:"nav-link",to:"/about"},"About"))),c.a.createElement("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"white")},c.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.changeMode}),c.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"change mode")),c.a.createElement("form",{className:"d-flex"},c.a.createElement("input",{className:"form-control me-2",type:"search",placeholder:"Search","aria-label":"Search"}),c.a.createElement("button",{className:"btn btn-outline-success",type:"submit"},"Search")))))}function d(e){const a=e=>{if(0!==e.length)return e},[t,n]=Object(l.useState)("kuchh likh le mc");return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"container text-".concat("dark"===e.mode?"white":"black")},c.a.createElement("h1",null,e.heading),c.a.createElement("div",{className:"mb-3"},c.a.createElement("textarea",{className:"form-control text-".concat("dark"===e.mode?"white":"black"),id:"myBox",value:t,onChange:e=>{n(e.target.value)," "===t&&n("")},style:{backgroundColor:"dark"===e.mode?"#0a1e3c":"white"},rows:"5"})," ",c.a.createElement("button",{onClick:()=>{let a=t.toUpperCase();n(a),e.showAlert(" converted tp uppercase","success")},type:"button",className:"btn btn-primary mx-1 my-1"},"Convert to UpperCase"),c.a.createElement("button",{onClick:()=>{let a=t.toLowerCase();n(a),e.showAlert(" converted tp lowercase","success")},type:"button ",className:"btn btn-primary  mx-1 my-1"},"Convert to LowerCase"),c.a.createElement("button",{onClick:()=>{n(""),e.showAlert(" Text is Cleared","success")},type:"button ",className:"btn btn-primary mx-1 my-1 "},"Clear"))),c.a.createElement("div",{className:"container my-1 text-".concat("dark"===e.mode?"white":"black")},c.a.createElement("h2",null,"Paragraph Details"),c.a.createElement("p",null,t.split(" ").filter(a).length," words and ",t.length," ","characters"),c.a.createElement("p",null," ",.008*t.split(" ").filter(a).length," minutes to read "),c.a.createElement("h3",null,"Preview"),c.a.createElement("p",null,t.length>0?t:"Enter some texts to see preview")))}m.defaultProps={title:"set title",link:"set links"};var u=t(14),b=t(1);var h=function(){const[e,a]=Object(l.useState)("light"),[t,n]=Object(l.useState)(null);let r=(e,a)=>{n({msg:e,type:a}),setTimeout(()=>{n(null)},1500)};return c.a.createElement(c.a.Fragment,null,c.a.createElement(u.a,null,c.a.createElement(m,{title:"TextUtils",link:"Links",mode:e,changeMode:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="#0a1e3c",r("dark Mode is Enabled","success")):(a("light"),document.body.style.backgroundColor="white",r("Light Mode is Enabled","success"))}}),c.a.createElement(s,{alert:t,showAlert:r}),c.a.createElement("div",{className:"container"},c.a.createElement(b.Switch,null,c.a.createElement(b.Route,{path:"/about"},c.a.createElement(o,{mode:e})),c.a.createElement(b.Route,{path:"/"},c.a.createElement(d,{heading:"Write some text to convert",mode:e,showAlert:r}))))))};var p=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then(a=>{let{getCLS:t,getFID:l,getFCP:c,getLCP:n,getTTFB:r}=a;t(e),l(e),c(e),n(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null))),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.f7350219.chunk.js.map