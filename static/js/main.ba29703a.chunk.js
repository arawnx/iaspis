(this.webpackJsonpiaspis=this.webpackJsonpiaspis||[]).push([[0],{12:function(t,e,a){},13:function(t,e,a){},14:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),u=a(6),c=a.n(u),i=(a(12),a(1)),o=a(2),s=a(3),l=a(4),p=(a(13),function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).tookInput=function(t){t.target.value!==n.props.target.substring(0,t.target.value.length)&&(n.inputRef.current.value=t.target.value.substring(0,t.target.value.length-1)),t.target.value===n.props.target&&(n.props.callback(),n.inputRef.current.value="")},n.inputRef=r.a.createRef(),n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){return r.a.createElement("label",{className:"text"},this.props.target,r.a.createElement("input",{id:"input",type:"text",ref:this.inputRef,onChange:this.tookInput,className:"text"}))}}]),a}(r.a.Component)),f=function(t){Object(l.a)(a,t);var e=Object(s.a)(a);function a(t){var n;return Object(i.a)(this,a),(n=e.call(this,t)).reloadTarget=function(){n.setState({target:"reloaded"})},n.state={target:"test"},n}return Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(p,{callback:this.reloadTarget,target:this.state.target})}}]),a}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},7:function(t,e,a){t.exports=a(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.ba29703a.chunk.js.map