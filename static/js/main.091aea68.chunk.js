(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,a,t){e.exports=t(33)},24:function(e,a,t){},25:function(e,a,t){},33:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),r=t(12),c=t.n(r);t(24),t(25);function o(e){return n.a.createElement("div",{className:"accordion my-2",id:"accordionExample"},n.a.createElement("div",{className:"accordion-item "},n.a.createElement("h2",{className:"accordion-header",id:"headingOne"},n.a.createElement("button",{className:"accordion-button  text-".concat("dark"===e.mode?"white":"black"," "),style:{backgroundColor:"dark"===e.mode?"rgb(34 54 86)":"white"},type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne"},n.a.createElement("strong",null," Analyze Your Text"))),n.a.createElement("div",{id:"collapseOne",className:"accordion-collapse collapse show","aria-labelledby":"headingOne","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body text-".concat("dark"===e.mode?"white":"black"),style:{backgroundColor:"dark"===e.mode?"#0a1e3c":"white"}},"Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or"))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingTwo"},n.a.createElement("button",{className:"accordion-button collapsed  text-".concat("dark"===e.mode?"white":"black"),style:{backgroundColor:"dark"===e.mode?"rgb(34 54 86)":"white"},type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseTwo","aria-expanded":"false","aria-controls":"collapseTwo"},n.a.createElement("strong",null," Free to Use"))),n.a.createElement("div",{id:"collapseTwo",className:"accordion-collapse collapse","aria-labelledby":"headingTwo","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body text-".concat("dark"===e.mode?"white":"black"),style:{backgroundColor:"dark"===e.mode?"#0a1e3c":"white"}},"Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit"))),n.a.createElement("div",{className:"accordion-item"},n.a.createElement("h2",{className:"accordion-header",id:"headingThree"},n.a.createElement("button",{className:"accordion-button collapsed  text-".concat("dark"===e.mode?"white":"black"),style:{backgroundColor:"dark"===e.mode?"rgb(34 54 86)":"white"},type:"button","data-bs-toggle":"collapse","data-bs-target":"#collapseThree","aria-expanded":"false","aria-controls":"collapseThree"},n.a.createElement("strong",null," Browser compatible"))),n.a.createElement("div",{id:"collapseThree",className:"accordion-collapse collapse","aria-labelledby":"headingThree","data-bs-parent":"#accordionExample"},n.a.createElement("div",{className:"accordion-body text-".concat("dark"===e.mode?"white":"black"),style:{backgroundColor:"dark"===e.mode?"#0a1e3c":"white"}},"This word counter software works in any web browsers such as Chrome, Firefox, Internet Explorer, Safari, Opera. It sults to count characters in facebook, blog, books, excel document, pdf document,essays,etc."))))}function s(e){return n.a.createElement("div",{style:{height:"55px"}},e.alert&&n.a.createElement("div",{class:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},n.a.createElement("strong",null,(e=>{const a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)})(e.alert.type)),": ",e.alert.msg))}var i=t(10);function d(e){return n.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("a",{className:"navbar-brand",href:"/"},e.title),n.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},n.a.createElement("ul",{className:"navbar-nav me-auto mb-2 mb-lg-0"},n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.Link,{className:"nav-link ","aria-current":"page",to:"/home"},"Home")),n.a.createElement("li",{className:"nav-item"},n.a.createElement(i.Link,{className:"nav-link",to:"/about"},"About"))),n.a.createElement("div",{className:"form-check form-switch mx-3 text-".concat("light"===e.mode?"dark":"white")},n.a.createElement("input",{className:"form-check-input",type:"checkbox",role:"switch",id:"flexSwitchCheckDefault",onClick:e.changeMode}),n.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"change mode")))))}function m(e){const a=e=>{if(0!==e.length)return e},[t,r]=Object(l.useState)("");return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"container text-".concat("dark"===e.mode?"white":"black")},n.a.createElement("h1",null,e.heading),n.a.createElement("div",{className:"mb-3"},n.a.createElement("textarea",{className:"form-control text-".concat("dark"===e.mode?"white":"black"),id:"myBox",value:t,onChange:e=>{r(e.target.value)," "===t&&r("")},style:{backgroundColor:"dark"===e.mode?"#0a1e3c":"white"},rows:"5",placeholder:"write something"})," ",n.a.createElement("button",{disabled:0===t.length,onClick:()=>{let a=t.toUpperCase();r(a),e.showAlert(" converted tp uppercase","success")},type:"button",className:"btn btn-primary mx-1 my-1"},"Convert to UpperCase"),n.a.createElement("button",{disabled:0===t.length,onClick:()=>{let a=t.toLowerCase();r(a),e.showAlert("converted tp lowercase","success")},type:"button ",className:"btn btn-primary  mx-1 my-1"},"Convert to LowerCase"),n.a.createElement("button",{disabled:0===t.length,onClick:()=>{r(""),e.showAlert(" Text is Cleared","success")},type:"button ",className:"btn btn-primary mx-1 my-1 "},"Clear"),n.a.createElement("button",{disabled:0===t.length,onClick:()=>{navigator.clipboard.writeText(t),e.showAlert(" Text is Copied","success")},type:"button ",className:"btn btn-primary mx-1 my-1 "},"Copy"),n.a.createElement("button",{disabled:0===t.length,onClick:()=>{let a=t.split(/[ ]+/);r(a.join(" ")),e.showAlert("Extra spaces removed!","success")},type:"button ",className:"btn btn-primary mx-1 my-1 "},"remove Extra Space"))),n.a.createElement("div",{className:"container my-1 text-".concat("dark"===e.mode?"white":"black")},n.a.createElement("h2",null,"Paragraph Details"),n.a.createElement("p",null,t.split(/\s+/).filter(a).length," words and ",t.length," ","characters"),n.a.createElement("p",null," ",.008*t.split(" ").filter(a).length," minutes to read "),n.a.createElement("h3",null,"Preview"),n.a.createElement("p",null,t.length>0?t:"Enter some texts to see preview")))}d.defaultProps={title:"set title",link:"set links"};var u=t(14),b=t(1);var h=function(){const[e,a]=Object(l.useState)("light"),[t,r]=Object(l.useState)(null);let c=(e,a)=>{r({msg:e,type:a}),setTimeout(()=>{r(null)},1500)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(u.a,null,n.a.createElement(d,{title:"TextUtils",link:"Links",mode:e,changeMode:()=>{"light"===e?(a("dark"),document.body.style.backgroundColor="#0a1e3c",c("dark Mode is Enabled","success")):(a("light"),document.body.style.backgroundColor="white",c("Light Mode is Enabled","success"))}}),n.a.createElement(s,{alert:t,showAlert:c}),n.a.createElement("div",{className:"container"},n.a.createElement(b.Switch,null,n.a.createElement(b.Route,{path:"/about"},n.a.createElement(o,{mode:e})),n.a.createElement(b.Route,{path:"/"},n.a.createElement(m,{heading:"Convert text into UpperCase and LowerCase",mode:e,showAlert:c}))))))};var p=e=>{e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then(a=>{let{getCLS:t,getFID:l,getFCP:n,getLCP:r,getTTFB:c}=a;t(e),l(e),n(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(h,null))),p()}},[[15,1,2]]]);
//# sourceMappingURL=main.091aea68.chunk.js.map