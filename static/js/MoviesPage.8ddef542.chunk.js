"use strict";(self.webpackChunkmy_app=self.webpackChunkmy_app||[]).push([[410],{2986:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(184);function a(e){var n=e.value;return(0,r.jsx)("h2",{children:n})}},1080:function(e,n,t){t.d(n,{n3:function(){return f},vw:function(){return l},VQ:function(){return p},wH:function(){return v},CL:function(){return d}});var r=t(5861),a=t(7757),c=t.n(a),u="https://api.themoviedb.org/3",o="1938d617a50ef3d61b3b5089a743aea2";function i(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(c().mark((function e(){var n,t,r=arguments;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=r.length>0&&void 0!==r[0]?r[0]:"",e.next=3,fetch(n);case 3:if(!(t=e.sent).ok){e.next=10;break}return e.next=7,t.json();case 7:e.t0=e.sent,e.next=11;break;case 10:e.t0=Promise.reject(new Error("Not found"));case 11:return e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e)}))),s.apply(this,arguments)}function f(){return i("".concat(u,"/trending/all/day?api_key=").concat(o))}function l(e){return i("".concat(u,"/search/movie?api_key=").concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(e))}function p(e){return i("".concat(u,"/movie/").concat(e,"?api_key=").concat(o,"&language=en-US"))}function v(e){return i("".concat(u,"/movie/").concat(e,"/reviews?api_key=").concat(o,"&language=en-US&page=1"))}function d(e){return i("".concat(u,"/movie/").concat(e,"/credits?api_key=").concat(o,"&language=en-US"))}},9269:function(e,n){n.Z={IDLE:"idle",PENDING:"pending",RESOLVED:"resolved",REJECTED:"rejected"}},4325:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r=t(8152),a=t(2791),c=t(1080),u="MoviesPageForm_form__7929c",o="MoviesPageForm_btn__fyx9V",i="MoviesPageForm_input__FzAxb",s=t(184);function f(e){var n=e.onSubmit,t=(0,a.useState)(""),c=(0,r.Z)(t,2),f=c[0],l=c[1];return(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)("form",{className:u,onSubmit:function(e){e.preventDefault(),n(f),l("")},children:[(0,s.jsx)("button",{type:"submit",className:o,children:"Submit"}),(0,s.jsx)("input",{className:i,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",name:"seacrhQuery",value:f,onChange:function(e){var n=e.currentTarget.value.toLowerCase();l(n)}})]})})}var l=t(9111),p=t(9271),v=t(4017),d=t(9269),h=t(2986);function m(){var e=(0,a.useState)(d.Z.IDLE),n=(0,r.Z)(e,2),t=n[0],u=n[1],o=(0,a.useState)(""),i=(0,r.Z)(o,2),m=i[0],g=i[1],x=(0,a.useState)(null),y=(0,r.Z)(x,2),E=y[0],S=y[1],_=(0,a.useState)(null),b=(0,r.Z)(_,2),Z=b[0],j=b[1],k=(0,p.$B)().url,w=(0,p.TH)(),D=(0,p.k6)();return(0,a.useEffect)((function(){var e=new URLSearchParams(w.search).get("query");g(e)}),[w.search]),(0,a.useEffect)((function(){m&&(u(d.Z.PENDING),c.vw(m).then((function(e){S(e),u(d.Z.RESOLVED)})).catch((function(e){j(e),u(d.Z.REJECTED)})))}),[m]),(0,s.jsxs)(s.Fragment,{children:["idle"===t&&null,"rejected"===t&&(0,s.jsx)(h.Z,{value:Z}),"pending"===t&&(0,s.jsx)(v.Z,{}),(0,s.jsx)(f,{onSubmit:function(e){g(e),D.push({search:"query=".concat(e)})}}),"resolved"===t&&(0,s.jsx)(l.Z,{filmList:E.results,urlMoviesPage:k,location:w})]})}}}]);
//# sourceMappingURL=MoviesPage.8ddef542.chunk.js.map