(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{62:function(e,t,n){},63:function(e,t,n){},68:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(9),i=n.n(o),r=(n(62),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,i=t.getLCP,r=t.getTTFB;n(e),c(e),o(e),i(e),r(e)}))}),u=(n(63),n(35)),a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(c.useState)(e),n=Object(u.a)(t,2),o=n[0],i=n[1];return{inputValue:o,changeInput:function(e){return i(e.target.value)},clearInput:function(){return i("")},keyInput:function(e,t){return(13===e.which||13===e.keyCode)&&(t(o),!0)}}},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=Object(c.useState)(e),n=Object(u.a)(t,2),o=n[0],i=n[1];return{todos:o,addTodo:function(e){""!==e&&i(o.concat({text:e,checked:!1}))},checkTodo:function(e){i(o.map((function(t,n){return e===n&&(t.checked=!t.checked),t})))},removeTodo:function(e){i(o.filter((function(t,n){return e!==n})))}}},l=n(69),s=n(102),j=n(103),h=n(36),b=n(6),m=Object(c.memo)((function(e){return Object(b.jsxs)(l.a,{elevation:0,style:{padding:0,margin:0,backgroundColor:"#fafafa"},children:[Object(b.jsx)(s.a,{color:"primary",position:"static",style:{height:64},children:Object(b.jsx)(j.a,{style:{height:64},children:Object(b.jsx)(h.a,{color:"inherit",children:"TODO APP"})})}),e.children]})})),O=n(104),f=n(112),g=n(106),p=Object(c.memo)((function(e){return Object(b.jsx)(l.a,{style:{margin:16,padding:16},children:Object(b.jsxs)(O.a,{container:!0,children:[Object(b.jsx)(O.a,{xs:10,md:11,item:!0,style:{paddingRight:16},children:Object(b.jsx)(f.a,{placeholder:"Add Todo here",value:e.inputValue,onChange:e.onInputChange,onKeyPress:e.onInputKeyPress,fullWidth:!0})}),Object(b.jsx)(O.a,{xs:2,md:1,item:!0,children:Object(b.jsx)(g.a,{fullWidth:!0,color:"secondary",variant:"outlined",onClick:e.onButtonClick,children:"Add"})})]})})})),x=n(40),k=n(105),v=n(107),C=n(113),y=n(109),I=n(110),T=n(108),B=n(111),P=Object(c.memo)((function(e){return Object(b.jsxs)(v.a,{divider:e.divider,children:[Object(b.jsx)(C.a,{onClick:e.onCheckBoxToggle,checked:e.checked,disableRipple:!0}),Object(b.jsx)(y.a,{primary:e.text}),Object(b.jsx)(I.a,{children:Object(b.jsx)(T.a,{"aria-label":"Delete Todo",onClick:e.onButtonClick,children:Object(b.jsx)(B.a,{})})})]})})),F=Object(c.memo)((function(e){return Object(b.jsx)(b.Fragment,{children:e.items.length>0&&Object(b.jsx)(l.a,{style:{margin:16},children:Object(b.jsx)(k.a,{style:{overflow:"scroll"},children:e.items.map((function(t,n){return Object(c.createElement)(P,Object(x.a)(Object(x.a)({},t),{},{key:"TodoItem.".concat(n),divider:n!==e.items.length-1,onButtonClick:function(){return e.onItemRemove(n)},onCheckBoxToggle:function(){return e.onItemCheck(n)}}))}))})})})})),w=Object(c.memo)((function(e){var t=a(),n=t.inputValue,c=t.changeInput,o=t.clearInput,i=t.keyInput,r=d(),u=r.todos,l=r.addTodo,s=r.checkTodo,j=r.removeTodo,h=function(e){o(),l(n)};return Object(b.jsxs)(m,{children:[Object(b.jsx)(p,{inputValue:n,onInputChange:c,onButtonClick:h,onInputKeyPress:function(e){return i(e,h)}}),Object(b.jsx)(F,{items:u,onItemCheck:function(e){return s(e)},onItemRemove:function(e){return j(e)}})]})}));i.a.render(Object(b.jsx)(w,{}),document.getElementById("root")),r()}},[[68,1,2]]]);
//# sourceMappingURL=main.26b39164.chunk.js.map