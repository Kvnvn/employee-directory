(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{17:function(e,t,a){e.exports=a(40)},40:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),c=a.n(l),m=a(12),o=a(13),s=a(16),u=a(15),i=a(14),E=a.n(i),p=function(){return E.a.get("https://randomuser.me/api/?results=50&nat=us")};var d=function(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4"},"Employee Directory"),r.a.createElement("p",{className:"lead"},"Click on search to find someone or narrow your results")))};var h=function(){return r.a.createElement("form",{className:"form-inline"},r.a.createElement("div",{className:"form-group mx-sm-3 mb-2"},r.a.createElement("label",{for:"inputPassword2",className:"sr-only"},"Password"),r.a.createElement("input",{type:"searchEm",className:"form-control",id:"inputSearch",placeholder:"Search"})),r.a.createElement("button",{type:"submit",className:"btn btn-primary mb-2"},"Search"))};var f=function(e){return r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"Image"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"Phone"),r.a.createElement("th",{scope:"col"},"Email"),r.a.createElement("th",{scope:"col"},"DOB"))),r.a.createElement("tbody",null,e.children))};var b=function(e){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},r.a.createElement("img",{src:e.image,alt:e.lastName})),r.a.createElement("td",null,e.firstName," ",e.lastName),r.a.createElement("td",null,e.phone),r.a.createElement("td",null,e.email),r.a.createElement("td",null,e.dob))},y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={users:[]},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){var e=this;p().then((function(t){e.setState({users:t.data.results})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(d,null),r.a.createElement(h,null),r.a.createElement(f,null,this.state.users.map((function(e){return r.a.createElement(b,{key:e.id,image:e.picture.large,firstName:e.name.first,lastName:e.name.last,phone:e.phone,email:e.email,dob:e.dob.date})}))))}}]),a}(n.Component);var v=function(){return r.a.createElement("div",null,r.a.createElement(y,null))};a(39);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.1765f066.chunk.js.map