(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{23:function(e,t,r){},43:function(e,t,r){},44:function(e,t,r){"use strict";r.r(t);var n=r(2),s=r.n(n),c=r(12),a=r.n(c),i=(r(23),r(13)),l=r(14),o=r(15),h=r(18),u=r(17),j=r(0);var m=function(e){return Object(j.jsx)("div",{className:"container".concat(e.fluid?"-fluid":""),children:e.children})};var d=function(e){return Object(j.jsx)("div",{className:"row".concat(e.fluid?"-fluid":""),children:e.children})};var b=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(j.jsx)("div",{className:t,children:e.children})};var f=function(e){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(b,{size:"sm-3",children:Object(j.jsx)("img",{alt:e.title,className:"img-fluid",src:e.picture,style:{margin:"0 auto"}})}),Object(j.jsx)(b,{size:"sm-3",children:e.title}),Object(j.jsx)(b,{size:"sm-3",children:e.phone}),Object(j.jsx)(b,{size:"sm-3",children:e.email})]})};var O=function(e){return Object(j.jsx)("form",{children:Object(j.jsxs)("div",{className:"form-group",children:[Object(j.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(j.jsxs)("div",{className:"search-form",children:[Object(j.jsx)("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Employee Name",id:"search"}),Object(j.jsx)("button",{onClick:e.handleFormSubmit,className:"btn btn-secondary",children:"Search"})]})]})})},x=r(16),p=r.n(x),v=function(){return p.a.get("https://randomuser.me/api/?results=100")},g=function(e){Object(h.a)(r,e);var t=Object(u.a)(r);function r(){var e;Object(l.a)(this,r);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={result:{},searchArr:{},search:"",count:0},e.getEmployeeList=function(){v().then((function(t){console.log(t.data.results),e.setState({result:t.data.results,searchArr:t.data.results})})).catch((function(e){return console.log(e)}))},e.searchEmployees=function(t){if(""===t){var r=e.state.result;e.setState({searchArr:r})}else{var n=e.state.result.filter((function(e){return-1!==e.name.first.search(new RegExp(t,"i"))||-1!==e.name.last.search(new RegExp(t,"i"))}));e.setState({searchArr:n})}},e.sortByName=function(){var t=[];e.setState({count:e.state.count+1}),t=e.state.count%2?e.state.searchArr.sort((function(e,t){return e.name.last>t.name.last?1:-1})):e.state.searchArr.sort((function(e,t){return e.name.last>t.name.last?-1:1})),e.setState({searchArr:t})},e.handleInputChange=function(t){var r=t.target,n=r.name,s=r.value;e.searchEmployees(s),e.setState(Object(i.a)({},n,s))},e.handleFormSubmit=function(e){e.preventDefault()},e}return Object(o.a)(r,[{key:"componentDidMount",value:function(){this.getEmployeeList()}},{key:"render",value:function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("header",{children:"Employee Directory"}),Object(j.jsxs)(m,{children:[Object(j.jsx)(d,{children:Object(j.jsx)(b,{size:"sm-6",children:Object(j.jsx)(O,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})})}),Object(j.jsx)("br",{}),Object(j.jsxs)(d,{children:[Object(j.jsx)(b,{size:"sm-3",children:"Image"}),Object(j.jsxs)(b,{size:"sm-3",children:[" ",Object(j.jsx)("a",{href:"#",onClick:this.sortByName,children:"Name"})]}),Object(j.jsx)(b,{size:"sm-3",children:"Phone"}),Object(j.jsx)(b,{size:"sm-3",children:"Email"}),Object(j.jsx)("br",{}),Object(j.jsx)("br",{})]}),this.state.searchArr.length>0?this.state.searchArr.map((function(e,t){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"row flex",children:Object(j.jsx)(f,{picture:e.picture.large,title:e.name.first+" "+e.name.last,phone:e.phone,email:e.email},e.email)}),Object(j.jsx)("br",{})]})})):Object(j.jsx)("div",{})]})]})}}]),r}(s.a.Component);r(43);var y=function(){return Object(j.jsx)(g,{})};a.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(y,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ff380b99.chunk.js.map