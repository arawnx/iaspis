(this.webpackJsonpiaspis=this.webpackJsonpiaspis||[]).push([[0],{12:function(t,e,n){},13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),u=n(6),c=n.n(u),o=(n(12),n(1)),i=n(2),l=n(3),s=n(4),p=(n(13),function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).tookInput=function(t){t.target.value!==a.props.target.substring(0,t.target.value.length)?(a.inputRef.current.value=t.target.value.substring(0,t.target.value.length-1),a.inputRef.current.style.backgrondColor="red"):a.inputRef.current.style.backgrondColor="green",t.target.value===a.props.target&&(a.props.callback(),a.inputRef.current.value="")},a.inputRef=r.a.createRef(),a}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.inputRef.current.focus()}},{key:"render",value:function(){return r.a.createElement("label",{className:"text"},this.props.target,r.a.createElement("input",{id:"input",type:"text",ref:this.inputRef,onChange:this.tookInput,className:"text"}))}}]),n}(r.a.Component)),f=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(t){var a;return Object(o.a)(this,n),(a=e.call(this,t)).reloadTarget=function(){a.setState({target:"reloaded"})},a.state={target:"test"},a}return Object(i.a)(n,[{key:"render",value:function(){return r.a.createElement(p,{callback:this.reloadTarget,target:this.state.target})}}]),n}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f,null)),document.getElementById("root"))},7:function(t,e,n){t.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.78f1cbe9.chunk.js.map