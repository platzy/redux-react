!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/home/freddy0fh/WorkSpaces/React/saap/dist/",t(t.s=0)}([function(e,t,n){"use strict";function r(e){e.preventDefault();var t=new FormData(i),n=t.get("title");console.log(n)}var o=n(1),i=document.getElementById("form");i.addEventListener("submit",r);(0,o.createStore)(reducer,initialState,enhancer)},function(e,t,n){"use strict";function r(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}function o(e,t,n){function i(){w===y&&(w=y.slice())}function u(){if(v)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return p}function c(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(v)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return i(),w.push(e),function(){if(t){if(v)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,i();var n=w.indexOf(e);w.splice(n,1)}}}function a(e){if(!r(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(v)throw new Error("Reducers may not dispatch actions.");try{v=!0,p=l(p,e)}finally{v=!1}for(var t=y=w,n=0;n<t.length;n++){(0,t[n])()}return e}function f(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");l=e,a({type:b.REPLACE})}function s(){var e,t=c;return e={subscribe:function(e){function n(){e.next&&e.next(u())}if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");return n(),{unsubscribe:t(n)}}},e[h.a]=function(){return this},e}var d;if("function"==typeof t&&"function"==typeof n||"function"==typeof n&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function");if("function"==typeof t&&void 0===n&&(n=t,t=void 0),void 0!==n){if("function"!=typeof n)throw new Error("Expected the enhancer to be a function.");return n(o)(e,t)}if("function"!=typeof e)throw new Error("Expected the reducer to be a function.");var l=e,p=t,y=[],w=y,v=!1;return a({type:b.INIT}),d={dispatch:a,subscribe:c,getState:u,replaceReducer:f},d[h.a]=s,d}function i(e,t){var n=t&&t.type;return"Given "+(n&&'action "'+String(n)+'"'||"an action")+', reducer "'+e+'" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'}function u(e){Object.keys(e).forEach(function(t){var n=e[t];if(void 0===n(void 0,{type:b.INIT}))throw new Error('Reducer "'+t+"\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined.");if(void 0===n(void 0,{type:b.PROBE_UNKNOWN_ACTION()}))throw new Error('Reducer "'+t+"\" returned undefined when probed with a random type. Don't try to handle "+b.INIT+' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.')})}function c(e){for(var t=Object.keys(e),n={},r=0;r<t.length;r++){var o=t[r];"function"==typeof e[o]&&(n[o]=e[o])}var c,a=Object.keys(n);try{u(n)}catch(e){c=e}return function(e,t){if(void 0===e&&(e={}),c)throw c;for(var r=!1,o={},u=0;u<a.length;u++){var f=a[u],s=n[f],d=e[f],l=s(d,t);if(void 0===l){var p=i(f,t);throw new Error(p)}o[f]=l,r=r||l!==d}return r?o:e}}function a(e,t){return function(){return t(e.apply(this,arguments))}}function f(e,t){if("function"==typeof e)return a(e,t);if("object"!=typeof e||null===e)throw new Error("bindActionCreators expected an object or a function, instead received "+(null===e?"null":typeof e)+'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');for(var n=Object.keys(e),r={},o=0;o<n.length;o++){var i=n[o],u=e[i];"function"==typeof u&&(r[i]=a(u,t))}return r}function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){s(e,t,n[t])})}return e}function l(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return 0===t.length?function(e){return e}:1===t.length?t[0]:t.reduce(function(e,t){return function(){return e(t.apply(void 0,arguments))}})}function p(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(e){return function(){var n=e.apply(void 0,arguments),r=function(){throw new Error("Dispatching while constructing your middleware is not allowed. Other middleware would not be applied to this dispatch.")},o={getState:n.getState,dispatch:function(){return r.apply(void 0,arguments)}},i=t.map(function(e){return e(o)});return r=l.apply(void 0,i)(n.dispatch),d({},n,{dispatch:r})}}}Object.defineProperty(t,"__esModule",{value:!0}),n.d(t,"createStore",function(){return o}),n.d(t,"combineReducers",function(){return c}),n.d(t,"bindActionCreators",function(){return f}),n.d(t,"applyMiddleware",function(){return p}),n.d(t,"compose",function(){return l}),n.d(t,"__DO_NOT_USE__ActionTypes",function(){return b});var h=n(2),y=function(){return Math.random().toString(36).substring(7).split("").join(".")},b={INIT:"@@redux/INIT"+y(),REPLACE:"@@redux/REPLACE"+y(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+y()}}},function(e,t,n){"use strict";(function(e,r){var o,i=n(5);o="undefined"!=typeof self?self:"undefined"!=typeof window?window:void 0!==e?e:r;var u=Object(i.a)(o);t.a=u}).call(t,n(3),n(4)(e))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,n){"use strict";function r(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}t.a=r}]);