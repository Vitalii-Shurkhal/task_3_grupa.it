(this.webpackJsonptask_3=this.webpackJsonptask_3||[]).push([[0],{44:function(t,e,a){},45:function(t,e,a){"use strict";a.r(e);var n=a(2),c=a.n(n),o=a(19),s=a.n(o),r=a(10),i=a(5),u=a(6),b=a(8),l=a(7),h=a(20),j=a.n(h),f=a(0),d=function(t){Object(b.a)(a,t);var e=Object(l.a)(a);function a(){return Object(i.a)(this,a),e.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Task_3"}),Object(f.jsx)("hr",{}),Object(f.jsx)("p",{children:"Przygotowanie aplikacji, kt\xf3ra b\u0119dzie pobiera\u0142a cytaty z API, kt\xf3ra b\u0119dzie wy\u015bwietla\u0142a losowy cytat."}),Object(f.jsx)("a",{href:"https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json",children:"Link to API"}),Object(f.jsx)("p",{children:" Dodatkowo stw\xf3rz przycisk kt\xf3ry umo\u017cliwi wylosowanie nast\u0119pnego cytatu oraz przycisk, kt\xf3rypozwoli na powr\xf3t do poprzedniego cytatu."}),Object(f.jsx)("hr",{})]})}}]),a}(c.a.Component),p=d,O=(a(44),function(t){Object(b.a)(a,t);var e=Object(l.a)(a);function a(){var t;Object(i.a)(this,a);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={quote:"",latestQuote:""},t.displayPrevQuote=function(){if(t.state.latestQuote.length>1){var e=Object(r.a)(t.state.latestQuote),a=e.length-1;e.pop(),t.setState({quote:e[--a]}),t.setState({latestQuote:e})}},t.fetchQuote=function(){j.a.get("https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json").then((function(e){var a=Math.floor(Math.random()*e.data.length),n=e.data[a].quote;t.setState({quote:n}),t.setState({latestQuote:[].concat(Object(r.a)(t.state.latestQuote),[n])})})).catch((function(t){console.log(t)}))},t}return Object(u.a)(a,[{key:"componentDidMount",value:function(){this.fetchQuote()}},{key:"render",value:function(){var t=this.state.quote;return Object(f.jsxs)("div",{className:"app",children:[Object(f.jsx)(p,{}),Object(f.jsx)("h2",{children:t}),Object(f.jsxs)("div",{children:[Object(f.jsx)("button",{onClick:this.displayPrevQuote,children:"Previous"}),Object(f.jsx)("button",{onClick:this.fetchQuote,children:"Next "})]})]})}}]),a}(c.a.Component)),y=O;s.a.render(Object(f.jsx)(y,{}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.c193ef1e.chunk.js.map