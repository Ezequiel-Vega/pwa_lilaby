!function(e){var t={};function r(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(n,a,function(t){return e[t]}.bind(null,a));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/pwa_lilaby/",r(r.s=4)}([function(e,t,r){e.exports=r(3)},function(e,t,r){"use strict";try{self["workbox:precaching:5.1.4"]&&_()}catch(n){}},function(e,t,r){"use strict";try{self["workbox:core:5.1.4"]&&_()}catch(n){}},function(e,t,r){var n=function(e){"use strict";var t,r=Object.prototype,n=r.hasOwnProperty,a="function"===typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",i=a.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(j){u=function(e,t,r){return e[t]=r}}function s(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),c=new S(n||[]);return o._invoke=function(e,t,r){var n=l;return function(a,o){if(n===p)throw new Error("Generator is already running");if(n===v){if("throw"===a)throw o;return U()}for(r.method=a,r.arg=o;;){var c=r.delegate;if(c){var i=R(c,r);if(i){if(i===y)continue;return i}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===l)throw n=v,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=p;var u=f(e,t,r);if("normal"===u.type){if(n=r.done?v:h,u.arg===y)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n=v,r.method="throw",r.arg=u.arg)}}}(e,r,c),o}function f(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(j){return{type:"throw",arg:j}}}e.wrap=s;var l="suspendedStart",h="suspendedYield",p="executing",v="completed",y={};function d(){}function b(){}function g(){}var x={};x[o]=function(){return this};var m=Object.getPrototypeOf,w=m&&m(m(T([])));w&&w!==r&&n.call(w,o)&&(x=w);var k=g.prototype=d.prototype=Object.create(x);function _(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function L(e,t){function r(a,o,c,i){var u=f(e[a],e,o);if("throw"!==u.type){var s=u.arg,l=s.value;return l&&"object"===typeof l&&n.call(l,"__await")?t.resolve(l.__await).then((function(e){r("next",e,c,i)}),(function(e){r("throw",e,c,i)})):t.resolve(l).then((function(e){s.value=e,c(s)}),(function(e){return r("throw",e,c,i)}))}i(u.arg)}var a;this._invoke=function(e,n){function o(){return new t((function(t,a){r(e,n,t,a)}))}return a=a?a.then(o,o):o()}}function R(e,r){var n=e.iterator[r.method];if(n===t){if(r.delegate=null,"throw"===r.method){if(e.iterator.return&&(r.method="return",r.arg=t,R(e,r),"throw"===r.method))return y;r.method="throw",r.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var a=f(n,e.iterator,r.arg);if("throw"===a.type)return r.method="throw",r.arg=a.arg,r.delegate=null,y;var o=a.arg;return o?o.done?(r[e.resultName]=o.value,r.next=e.nextLoc,"return"!==r.method&&(r.method="next",r.arg=t),r.delegate=null,y):o:(r.method="throw",r.arg=new TypeError("iterator result is not an object"),r.delegate=null,y)}function E(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function O(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function S(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(E,this),this.reset(!0)}function T(e){if(e){var r=e[o];if(r)return r.call(e);if("function"===typeof e.next)return e;if(!isNaN(e.length)){var a=-1,c=function r(){for(;++a<e.length;)if(n.call(e,a))return r.value=e[a],r.done=!1,r;return r.value=t,r.done=!0,r};return c.next=c}}return{next:U}}function U(){return{value:t,done:!0}}return b.prototype=k.constructor=g,g.constructor=b,b.displayName=u(g,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"===typeof e&&e.constructor;return!!t&&(t===b||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,u(e,i,"GeneratorFunction")),e.prototype=Object.create(k),e},e.awrap=function(e){return{__await:e}},_(L.prototype),L.prototype[c]=function(){return this},e.AsyncIterator=L,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var c=new L(s(t,r,n,a),o);return e.isGeneratorFunction(r)?c:c.next().then((function(e){return e.done?e.value:c.next()}))},_(k),u(k,i,"Generator"),k[o]=function(){return this},k.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=T,S.prototype={constructor:S,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var r in this)"t"===r.charAt(0)&&n.call(this,r)&&!isNaN(+r.slice(1))&&(this[r]=t)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var r=this;function a(n,a){return i.type="throw",i.arg=e,r.next=n,a&&(r.method="next",r.arg=t),!!a}for(var o=this.tryEntries.length-1;o>=0;--o){var c=this.tryEntries[o],i=c.completion;if("root"===c.tryLoc)return a("end");if(c.tryLoc<=this.prev){var u=n.call(c,"catchLoc"),s=n.call(c,"finallyLoc");if(u&&s){if(this.prev<c.catchLoc)return a(c.catchLoc,!0);if(this.prev<c.finallyLoc)return a(c.finallyLoc)}else if(u){if(this.prev<c.catchLoc)return a(c.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<c.finallyLoc)return a(c.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var c=o?o.completion:{};return c.type=e,c.arg=t,o?(this.method="next",this.next=o.finallyLoc,y):this.complete(c)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),O(r),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;O(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,r,n){return this.delegate={iterator:T(e),resultName:r,nextLoc:n},"next"===this.method&&(this.arg=t),y}},e}(e.exports);try{regeneratorRuntime=n}catch(a){Function("r","regeneratorRuntime = r")(n)}},function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function a(e,t){if(e){if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}}function o(e){return function(e){if(Array.isArray(e))return n(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||a(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.r(t);r(1);var c=[],i=function(){return c};r(2);var u={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!==typeof registration?registration.scope:""},s=function(e){return[u.prefix,e,u.suffix].filter((function(e){return e&&e.length>0})).join("-")},f=function(e){return e||s(u.precache)},l=function(e){return new URL(String(e),location.href).href.replace(new RegExp("^".concat(location.origin)),"")};function h(e,t){var r;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=a(e))||t&&e&&"number"===typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,i=!0,u=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,c=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw c}}}}var p=r(0),v=r.n(p);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],n=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(n=(c=i.next()).done)&&(r.push(c.value),!t||r.length!==t);n=!0);}catch(u){a=!0,o=u}finally{try{n||null==i.return||i.return()}finally{if(a)throw o}}return r}}(e,t)||a(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t,r,n,a,o,c){try{var i=e[o](c),u=i.value}catch(s){return void r(s)}i.done?t(u):Promise.resolve(u).then(n,a)}function b(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var o=e.apply(t,r);function c(e){d(o,n,a,c,i,"next",e)}function i(e){d(o,n,a,c,i,"throw",e)}c(void 0)}))}}function g(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function x(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function k(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function _(e){return(_="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function L(e,t){return!t||"object"!==_(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function R(e,t,r){return(R=k()?Reflect.construct:function(e,t,r){var n=[null];n.push.apply(n,t);var a=new(Function.bind.apply(e,n));return r&&m(a,r.prototype),a}).apply(null,arguments)}function E(e){var t="function"===typeof Map?new Map:void 0;return(E=function(e){if(null===e||(r=e,-1===Function.toString.call(r).indexOf("[native code]")))return e;var r;if("function"!==typeof e)throw new TypeError("Super expression must either be null or a function");if("undefined"!==typeof t){if(t.has(e))return t.get(e);t.set(e,n)}function n(){return R(e,arguments,w(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),m(n,e)})(e)}var O=function(e){for(var t=e,r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return n.length>0&&(t+=" :: ".concat(JSON.stringify(n))),t},S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(r,e);var t=function(e){var t=k();return function(){var r,n=w(e);if(t){var a=w(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return L(this,r)}}(r);function r(e,n){var a;g(this,r);var o=O(e,n);return(a=t.call(this,o)).name=e,a.details=n,a}return r}(E(Error)),T=new Set;function U(){return j.apply(this,arguments)}function j(){return(j=b(v.a.mark((function e(){var t,r,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:0,t=h(T),e.prev=2,t.s();case 4:if((r=t.n()).done){e.next=11;break}return n=r.value,e.next=8,n();case 8:0;case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),t.e(e.t0);case 16:return e.prev=16,t.f(),e.finish(16);case 19:0;case 20:case"end":return e.stop()}}),e,null,[[2,13,16,19]])})))).apply(this,arguments)}var q,K=function(e,t){return e.filter((function(e){return t in e}))},P=function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.request,n=t.mode,a=t.plugins,o=K(void 0===a?[]:a,"cacheKeyWillBeUsed"),c=r,i=h(o),e.prev=4,i.s();case 6:if((u=i.n()).done){e.next=15;break}return s=u.value,e.next=10,s.cacheKeyWillBeUsed.call(s,{mode:n,request:c});case 10:"string"===typeof(c=e.sent)&&(c=new Request(c));case 13:e.next=6;break;case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(4),i.e(e.t0);case 20:return e.prev=20,i.f(),e.finish(20);case 23:return e.abrupt("return",c);case 24:case"end":return e.stop()}}),e,null,[[4,17,20,23]])})));return function(t){return e.apply(this,arguments)}}(),C=function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s,f,l;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.request,n=t.response,a=t.event,o=t.plugins,c=n,i=!1,u=h(void 0===o?[]:o),e.prev=4,u.s();case 6:if((s=u.n()).done){e.next=19;break}if(!("cacheWillUpdate"in(f=s.value))){e.next=17;break}return i=!0,l=f.cacheWillUpdate,e.next=13,l.call(f,{request:r,response:c,event:a});case 13:if(c=e.sent){e.next=17;break}return e.abrupt("break",19);case 17:e.next=6;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(4),u.e(e.t0);case 24:return e.prev=24,u.f(),e.finish(24);case 27:return i||(c=c&&200===c.status?c:void 0),e.abrupt("return",c||null);case 29:case"end":return e.stop()}}),e,null,[[4,21,24,27]])})));return function(t){return e.apply(this,arguments)}}(),N=function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s,f,l,p,y,d;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.cacheName,n=t.request,a=t.event,o=t.matchOptions,c=t.plugins,i=void 0===c?[]:c,e.next=3,self.caches.open(r);case 3:return u=e.sent,e.next=6,P({plugins:i,request:n,mode:"read"});case 6:return s=e.sent,e.next=9,u.match(s,o);case 9:f=e.sent,l=h(i),e.prev=12,l.s();case 14:if((p=l.n()).done){e.next=24;break}if(!("cachedResponseWillBeUsed"in(y=p.value))){e.next=22;break}return d=y.cachedResponseWillBeUsed,e.next=20,d.call(y,{cacheName:r,event:a,matchOptions:o,cachedResponse:f,request:s});case 20:f=e.sent;case 22:e.next=14;break;case 24:e.next=29;break;case 26:e.prev=26,e.t0=e.catch(12),l.e(e.t0);case 29:return e.prev=29,l.f(),e.finish(29);case 32:return e.abrupt("return",f);case 33:case"end":return e.stop()}}),e,null,[[12,26,29,32]])})));return function(t){return e.apply(this,arguments)}}(),M={put:function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s,f,p,y,d,b,g,x;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=t.cacheName,n=t.request,a=t.response,o=t.event,c=t.plugins,i=void 0===c?[]:c,u=t.matchOptions,e.next=4;break;case 4:return e.next=6,P({plugins:i,request:n,mode:"write"});case 6:if(s=e.sent,a){e.next=10;break}throw new S("cache-put-with-no-response",{url:l(s.url)});case 10:return e.next=12,C({event:o,plugins:i,response:a,request:s});case 12:if(f=e.sent){e.next=16;break}return e.abrupt("return");case 16:return e.next=18,self.caches.open(r);case 18:if(p=e.sent,!((y=K(i,"cacheDidUpdate")).length>0)){e.next=26;break}return e.next=23,N({cacheName:r,matchOptions:u,request:s});case 23:e.t0=e.sent,e.next=27;break;case 26:e.t0=null;case 27:return d=e.t0,e.prev=29,e.next=32,p.put(s,f);case 32:e.next=40;break;case 34:if(e.prev=34,e.t1=e.catch(29),"QuotaExceededError"!==e.t1.name){e.next=39;break}return e.next=39,U();case 39:throw e.t1;case 40:b=h(y),e.prev=41,b.s();case 43:if((g=b.n()).done){e.next=49;break}return x=g.value,e.next=47,x.cacheDidUpdate.call(x,{cacheName:r,event:o,oldResponse:d,newResponse:f,request:s});case 47:e.next=43;break;case 49:e.next=54;break;case 51:e.prev=51,e.t2=e.catch(41),b.e(e.t2);case 54:return e.prev=54,b.f(),e.finish(54);case 57:case"end":return e.stop()}}),e,null,[[29,34],[41,51,54,57]])})));return function(t){return e.apply(this,arguments)}}(),match:N},I={fetch:function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s,f,l,p,y,d,b,g,x,m,w,k,_,L;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.request,n=t.fetchOptions,a=t.event,o=t.plugins,c=void 0===o?[]:o,"string"===typeof r&&(r=new Request(r)),!(a instanceof FetchEvent&&a.preloadResponse)){e.next=9;break}return e.next=5,a.preloadResponse;case 5:if(!(i=e.sent)){e.next=9;break}return e.abrupt("return",i);case 9:0,u=K(c,"fetchDidFail"),s=u.length>0?r.clone():null,e.prev=12,f=h(c),e.prev=14,f.s();case 16:if((l=f.n()).done){e.next=27;break}if(!("requestWillFetch"in(p=l.value))){e.next=25;break}return y=p.requestWillFetch,d=r.clone(),e.next=23,y.call(p,{request:d,event:a});case 23:r=e.sent;case 25:e.next=16;break;case 27:e.next=32;break;case 29:e.prev=29,e.t0=e.catch(14),f.e(e.t0);case 32:return e.prev=32,f.f(),e.finish(32);case 35:e.next=40;break;case 37:throw e.prev=37,e.t1=e.catch(12),new S("plugin-error-request-will-fetch",{thrownError:e.t1});case 40:if(b=r.clone(),e.prev=41,"navigate"!==r.mode){e.next=48;break}return e.next=45,fetch(r);case 45:g=e.sent,e.next=51;break;case 48:return e.next=50,fetch(r,n);case 50:g=e.sent;case 51:0,x=h(c),e.prev=53,x.s();case 55:if((m=x.n()).done){e.next=64;break}if(!("fetchDidSucceed"in(w=m.value))){e.next=62;break}return e.next=60,w.fetchDidSucceed.call(w,{event:a,request:b,response:g});case 60:g=e.sent;case 62:e.next=55;break;case 64:e.next=69;break;case 66:e.prev=66,e.t2=e.catch(53),x.e(e.t2);case 69:return e.prev=69,x.f(),e.finish(69);case 72:return e.abrupt("return",g);case 75:e.prev=75,e.t3=e.catch(41),k=h(u),e.prev=79,k.s();case 81:if((_=k.n()).done){e.next=87;break}return L=_.value,e.next=85,L.fetchDidFail.call(L,{error:e.t3,event:a,originalRequest:s.clone(),request:b.clone()});case 85:e.next=81;break;case 87:e.next=92;break;case 89:e.prev=89,e.t4=e.catch(79),k.e(e.t4);case 92:return e.prev=92,k.f(),e.finish(92);case 95:throw e.t3;case 96:case"end":return e.stop()}}),e,null,[[12,37],[14,29,32,35],[41,75],[53,66,69,72],[79,89,92,95]])})));return function(t){return e.apply(this,arguments)}}()};function A(){if(void 0===q){var e=new Response("");if("body"in e)try{new Response(e.body),q=!0}catch(t){q=!1}q=!1}return q}function F(e,t){return W.apply(this,arguments)}function W(){return(W=b(v.a.mark((function e(t,r){var n,a,o,c;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.clone(),a={headers:new Headers(n.headers),status:n.status,statusText:n.statusText},o=r?r(a):a,!A()){e.next=7;break}e.t0=n.body,e.next=10;break;case 7:return e.next=9,n.blob();case 9:e.t0=e.sent;case 10:return c=e.t0,e.abrupt("return",new Response(c,o));case 12:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function D(e){if(!e)throw new S("add-to-cache-list-unexpected-type",{entry:e});if("string"===typeof e){var t=new URL(e,location.href);return{cacheKey:t.href,url:t.href}}var r=e.revision,n=e.url;if(!n)throw new S("add-to-cache-list-unexpected-type",{entry:e});if(!r){var a=new URL(n,location.href);return{cacheKey:a.href,url:a.href}}var o=new URL(n,location.href),c=new URL(n,location.href);return o.searchParams.set("__WB_REVISION__",r),{cacheKey:o.href,url:c.href}}var G,B=function(){function e(t){g(this,e),this._cacheName=f(t),this._urlsToCacheKeys=new Map,this._urlsToCacheModes=new Map,this._cacheKeysToIntegrities=new Map}var t,r,n;return t=e,(r=[{key:"addToCacheList",value:function(e){var t,r=[],n=h(e);try{for(n.s();!(t=n.n()).done;){var a=t.value;"string"===typeof a?r.push(a):a&&void 0===a.revision&&r.push(a.url);var o=D(a),c=o.cacheKey,i=o.url,u="string"!==typeof a&&a.revision?"reload":"default";if(this._urlsToCacheKeys.has(i)&&this._urlsToCacheKeys.get(i)!==c)throw new S("add-to-cache-list-conflicting-entries",{firstEntry:this._urlsToCacheKeys.get(i),secondEntry:c});if("string"!==typeof a&&a.integrity){if(this._cacheKeysToIntegrities.has(c)&&this._cacheKeysToIntegrities.get(c)!==a.integrity)throw new S("add-to-cache-list-conflicting-integrities",{url:i});this._cacheKeysToIntegrities.set(c,a.integrity)}if(this._urlsToCacheKeys.set(i,c),this._urlsToCacheModes.set(i,u),r.length>0){var s="Workbox is precaching URLs without revision "+"info: ".concat(r.join(", "),"\nThis is generally NOT safe. ")+"Learn more at https://bit.ly/wb-precache";console.warn(s)}}}catch(f){n.e(f)}finally{n.f()}}},{key:"install",value:function(){var e=b(v.a.mark((function e(){var t,r,n,a,o,c,i,u,s,f,l,p,d,b,g,x=this,m=arguments;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=m.length>0&&void 0!==m[0]?m[0]:{},r=t.event,n=t.plugins,a=[],o=[],e.next=6,self.caches.open(this._cacheName);case 6:return c=e.sent,e.next=9,c.keys();case 9:i=e.sent,u=new Set(i.map((function(e){return e.url}))),s=h(this._urlsToCacheKeys);try{for(s.s();!(f=s.n()).done;)l=y(f.value,2),p=l[0],d=l[1],u.has(d)?o.push(p):a.push({cacheKey:d,url:p})}catch(v){s.e(v)}finally{s.f()}return b=a.map((function(e){var t=e.cacheKey,a=e.url,o=x._cacheKeysToIntegrities.get(t),c=x._urlsToCacheModes.get(a);return x._addURLToCache({cacheKey:t,cacheMode:c,event:r,integrity:o,plugins:n,url:a})})),e.next=16,Promise.all(b);case 16:return g=a.map((function(e){return e.url})),e.abrupt("return",{updatedURLs:g,notUpdatedURLs:o});case 19:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"activate",value:function(){var e=b(v.a.mark((function e(){var t,r,n,a,o,c,i;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,self.caches.open(this._cacheName);case 2:return t=e.sent,e.next=5,t.keys();case 5:r=e.sent,n=new Set(this._urlsToCacheKeys.values()),a=[],o=h(r),e.prev=9,o.s();case 11:if((c=o.n()).done){e.next=19;break}if(i=c.value,n.has(i.url)){e.next=17;break}return e.next=16,t.delete(i);case 16:a.push(i.url);case 17:e.next=11;break;case 19:e.next=24;break;case 21:e.prev=21,e.t0=e.catch(9),o.e(e.t0);case 24:return e.prev=24,o.f(),e.finish(24);case 27:return e.abrupt("return",{deletedURLs:a});case 29:case"end":return e.stop()}}),e,this,[[9,21,24,27]])})));return function(){return e.apply(this,arguments)}}()},{key:"_addURLToCache",value:function(){var e=b(v.a.mark((function e(t){var r,n,a,o,c,i,u,s,f,l,p,y;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.cacheKey,n=t.url,a=t.cacheMode,o=t.event,c=t.plugins,i=t.integrity,u=new Request(n,{integrity:i,cache:a,credentials:"same-origin"}),e.next=4,I.fetch({event:o,plugins:c,request:u});case 4:s=e.sent,l=h(c||[]);try{for(l.s();!(p=l.n()).done;)"cacheWillUpdate"in(y=p.value)&&(f=y)}catch(v){l.e(v)}finally{l.f()}if(!f){e.next=13;break}return e.next=10,f.cacheWillUpdate({event:o,request:u,response:s});case 10:e.t0=e.sent,e.next=14;break;case 13:e.t0=s.status<400;case 14:if(e.t0){e.next=17;break}throw new S("bad-precaching-response",{url:n,status:s.status});case 17:if(!s.redirected){e.next=21;break}return e.next=20,F(s);case 20:s=e.sent;case 21:return e.next=23,M.put({event:o,plugins:c,response:s,request:r===n?u:new Request(r),cacheName:this._cacheName,matchOptions:{ignoreSearch:!0}});case 23:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"getURLsToCacheKeys",value:function(){return this._urlsToCacheKeys}},{key:"getCachedURLs",value:function(){return o(this._urlsToCacheKeys.keys())}},{key:"getCacheKeyForURL",value:function(e){var t=new URL(e,location.href);return this._urlsToCacheKeys.get(t.href)}},{key:"matchPrecache",value:function(){var e=b(v.a.mark((function e(t){var r,n,a;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t instanceof Request?t.url:t,!(n=this.getCacheKeyForURL(r))){e.next=7;break}return e.next=5,self.caches.open(this._cacheName);case 5:return a=e.sent,e.abrupt("return",a.match(n));case 7:return e.abrupt("return",void 0);case 8:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"createHandler",value:function(){var e=this,t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];return function(){var r=b(v.a.mark((function r(n){var a,o;return v.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=n.request,r.prev=1,r.next=4,e.matchPrecache(a);case 4:if(!(o=r.sent)){r.next=7;break}return r.abrupt("return",o);case 7:throw new S("missing-precache-entry",{cacheName:e._cacheName,url:a instanceof Request?a.url:a});case 10:if(r.prev=10,r.t0=r.catch(1),!t){r.next=15;break}return r.abrupt("return",fetch(a));case 15:throw r.t0;case 16:case"end":return r.stop()}}),r,null,[[1,10]])})));return function(e){return r.apply(this,arguments)}}()}},{key:"createHandlerBoundToURL",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],r=this.getCacheKeyForURL(e);if(!r)throw new S("non-precached-url",{url:e});var n=this.createHandler(t),a=new Request(e);return function(){return n({request:a})}}}])&&x(t.prototype,r),n&&x(t,n),e}(),H=function(){return G||(G=new B),G};function Y(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=function(){var r=a[n];t.some((function(e){return e.test(r)}))&&e.searchParams.delete(r)},n=0,a=o(e.searchParams.keys());n<a.length;n++)r();return e}var J=v.a.mark(Q);function Q(e){var t,r,n,a,o,c,i,u,s,f,l,p,y,d=arguments;return v.a.wrap((function(v){for(;;)switch(v.prev=v.next){case 0:return t=d.length>1&&void 0!==d[1]?d[1]:{},r=t.ignoreURLParametersMatching,n=t.directoryIndex,a=t.cleanURLs,o=t.urlManipulation,(c=new URL(e,location.href)).hash="",v.next=5,c.href;case 5:return i=Y(c,r),v.next=8,i.href;case 8:if(!n||!i.pathname.endsWith("/")){v.next=13;break}return(u=new URL(i.href)).pathname+=n,v.next=13,u.href;case 13:if(!a){v.next=18;break}return(s=new URL(i.href)).pathname+=".html",v.next=18,s.href;case 18:if(!o){v.next=37;break}f=o({url:c}),l=h(f),v.prev=21,l.s();case 23:if((p=l.n()).done){v.next=29;break}return y=p.value,v.next=27,y.href;case 27:v.next=23;break;case 29:v.next=34;break;case 31:v.prev=31,v.t0=v.catch(21),l.e(v.t0);case 34:return v.prev=34,l.f(),v.finish(34);case 37:case"end":return v.stop()}}),J,null,[[21,31,34,37]])}var V=function(e,t){var r,n=H().getURLsToCacheKeys(),a=h(Q(e,t));try{for(a.s();!(r=a.n()).done;){var o=r.value,c=n.get(o);if(c)return c}}catch(i){a.e(i)}finally{a.f()}},$=!1;function z(e){$||(!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ignoreURLParametersMatching,r=void 0===t?[/^utm_/]:t,n=e.directoryIndex,a=void 0===n?"index.html":n,o=e.cleanURLs,c=void 0===o||o,i=e.urlManipulation,u=f();self.addEventListener("fetch",(function(e){var t=V(e.request.url,{cleanURLs:c,directoryIndex:a,ignoreURLParametersMatching:r,urlManipulation:i});if(t){var n=self.caches.open(u).then((function(e){return e.match(t)})).then((function(e){return e||fetch(t)}));e.respondWith(n)}}))}(e),$=!0)}var X,Z=function(e){var t=H(),r=i();e.waitUntil(t.install({event:e,plugins:r}).catch((function(e){throw e})))},ee=function(e){var t=H();e.waitUntil(t.activate())};(function(e){H().addToCacheList(e),e.length>0&&(self.addEventListener("install",Z),self.addEventListener("activate",ee))})([{'revision':'6fc1ff2ad16348b1e0b320fd29205777','url':'/pwa_lilaby/index.html'},{'revision':null,'url':'/pwa_lilaby/static/css/main.860b7315.chunk.css'},{'revision':null,'url':'/pwa_lilaby/static/js/2.2d228acf.chunk.js'},{'revision':null,'url':'/pwa_lilaby/static/js/main.24e518b6.chunk.js'},{'revision':null,'url':'/pwa_lilaby/static/js/runtime-main.1cbf4b4c.js'}]),z(X);var te=["/static/js/main.47c86369.chunk.js","/static/js/2.2d228acf.chunk.js","/static/js/runtime-main.be322562.js","/index.html","/manifest.json"];self.addEventListener("install",(function(e){e.waitUntil(caches.open("pwa-lilaby-v1").then((function(e){e.addAll(te)})).catch((function(e){return console.error(e)})))})),self.addEventListener("fetch",(function(e){e.respondWith(caches.match(e.request).then((function(t){return t||fetch(e.request)})))}))}]);
//# sourceMappingURL=service-worker.js.map