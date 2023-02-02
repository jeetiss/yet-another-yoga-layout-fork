import{w as n}from"./wrapAsm-67f6e80c.js";var t,r=(t="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(n){var r,e,a;n=n||{},r||(r=void 0!==n?n:{}),r.ready=new Promise((function(n,t){e=n,a=t}));var i=Object.assign({},r),o="";"undefined"!=typeof document&&document.currentScript&&(o=document.currentScript.src),t&&(o=t),o=0!==o.indexOf("blob:")?o.substr(0,o.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var u=console.log.bind(console),s=console.warn.bind(console);Object.assign(r,i),i=null,"object"!=typeof WebAssembly&&k("no native wasm support detected");var c,f,l,h,p,v,d,y,m,g,w=!1;function b(n,t,r){r=t+r;for(var e="";!(t>=r);){var a=n[t++];if(!a)break;if(128&a){var i=63&n[t++];if(192==(224&a))e+=String.fromCharCode((31&a)<<6|i);else{var o=63&n[t++];65536>(a=224==(240&a)?(15&a)<<12|i<<6|o:(7&a)<<18|i<<12|o<<6|63&n[t++])?e+=String.fromCharCode(a):(a-=65536,e+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else e+=String.fromCharCode(a)}return e}function A(){var n=c.buffer;f=n,r.HEAP8=l=new Int8Array(n),r.HEAP16=p=new Int16Array(n),r.HEAP32=d=new Int32Array(n),r.HEAPU8=h=new Uint8Array(n),r.HEAPU16=v=new Uint16Array(n),r.HEAPU32=y=new Uint32Array(n),r.HEAPF32=m=new Float32Array(n),r.HEAPF64=g=new Float64Array(n)}var P,L,T=[],C=[],O=[],W=0,_=null;function k(n){throw s(n="Aborted("+n+")"),w=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),a(n),n}function S(){return L.startsWith("data:application/octet-stream;base64,")}function E(){try{throw"both async and sync fetching of the wasm failed"}catch(n){k(n)}}function j(n){for(;0<n.length;)n.shift()(r)}function M(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=t&&57>=t?"_"+n:n}function U(n,t){return n=M(n),function(){return t.apply(this,arguments)}}L="yoga.wasm",S()||(L=o+L);var N=[{},{value:void 0},{value:null},{value:!0},{value:!1}],F=[];function V(n){var t=Error,r=U(n,(function(t){this.name=n,this.message=t,void 0!==(t=Error(t).stack)&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var R=void 0;function I(n){throw new R(n)}var x=n=>(n||I("Cannot use deleted val. handle = "+n),N[n].value),z=n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=F.length?F.pop():N.length;return N[t]={fa:1,value:n},t}},H=void 0,$=void 0;function B(n){for(var t="";h[n];)t+=$[h[n++]];return t}var X=[];function Z(){for(;X.length;){var n=X.pop();n.L.Z=!1,n.delete()}}var Y=void 0,q={};function D(n,t){for(void 0===t&&I("ptr should not be undefined");n.P;)t=n.aa(t),n=n.P;return t}var J={};function G(n){var t=B(n=Gn(n));return nt(n),t}function K(n,t){var r=J[n];return void 0===r&&I(t+" has unknown type "+G(n)),r}function Q(){}var nn=!1;function tn(n){--n.count.value,0===n.count.value&&(n.S?n.T.V(n.S):n.O.M.V(n.N))}function rn(n,t,r){return t===r?n:void 0===r.P||null===(n=rn(n,t,r.P))?null:r.ma(n)}var en={},an=void 0;function on(n){throw new an(n)}function un(n,t){return t.O&&t.N||on("makeClassHandle requires ptr and ptrType"),!!t.T!=!!t.S&&on("Both smartPtrType and smartPtr must be specified"),t.count={value:1},sn(Object.create(n,{L:{value:t}}))}function sn(n){return"undefined"==typeof FinalizationRegistry?(sn=n=>n,n):(nn=new FinalizationRegistry((n=>{tn(n.L)})),Q=n=>{nn.unregister(n)},(sn=n=>{var t=n.L;return t.S&&nn.register(n,{L:t},n),n})(n))}var cn={};function fn(n){for(;n.length;){var t=n.pop();n.pop()(t)}}function ln(n){return this.fromWireType(d[n>>2])}var hn={},pn={};function vn(n,t,r){function e(t){(t=r(t)).length!==n.length&&on("Mismatched type converter count");for(var e=0;e<n.length;++e)yn(n[e],t[e])}n.forEach((function(n){pn[n]=t}));var a=Array(t.length),i=[],o=0;t.forEach(((n,t)=>{J.hasOwnProperty(n)?a[t]=J[n]:(i.push(n),hn.hasOwnProperty(n)||(hn[n]=[]),hn[n].push((()=>{a[t]=J[n],++o===i.length&&e(a)})))})),0===i.length&&e(a)}function dn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function yn(n,t,r={}){if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=t.name;if(n||I('type "'+e+'" must have a positive integer typeid pointer'),J.hasOwnProperty(n)){if(r.ta)return;I("Cannot register type '"+e+"' twice")}J[n]=t,delete pn[n],hn.hasOwnProperty(n)&&(t=hn[n],delete hn[n],t.forEach((n=>n())))}function mn(n){I(n.L.O.M.name+" instance already deleted")}function gn(){}function wn(n,t,r){if(void 0===n[t].R){var e=n[t];n[t]=function(){return n[t].R.hasOwnProperty(arguments.length)||I("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].R+")!"),n[t].R[arguments.length].apply(this,arguments)},n[t].R=[],n[t].R[e.Y]=e}}function bn(n,t,r,e,a,i,o,u){this.name=n,this.constructor=t,this.W=r,this.V=e,this.P=a,this.oa=i,this.aa=o,this.ma=u,this.ia=[]}function An(n,t,r){for(;t!==r;)t.aa||I("Expected null or instance of "+r.name+", got an instance of "+t.name),n=t.aa(n),t=t.P;return n}function Pn(n,t){return null===t?(this.da&&I("null is not a valid "+this.name),0):(t.L||I('Cannot pass "'+Un(t)+'" as a '+this.name),t.L.N||I("Cannot pass deleted object as a pointer of type "+this.name),An(t.L.N,t.L.O.M,this.M))}function Ln(n,t){if(null===t){if(this.da&&I("null is not a valid "+this.name),this.ca){var r=this.ea();return null!==n&&n.push(this.V,r),r}return 0}if(t.L||I('Cannot pass "'+Un(t)+'" as a '+this.name),t.L.N||I("Cannot pass deleted object as a pointer of type "+this.name),!this.ba&&t.L.O.ba&&I("Cannot convert argument of type "+(t.L.T?t.L.T.name:t.L.O.name)+" to parameter type "+this.name),r=An(t.L.N,t.L.O.M,this.M),this.ca)switch(void 0===t.L.S&&I("Passing raw pointer to smart pointer is illegal"),this.Aa){case 0:t.L.T===this?r=t.L.S:I("Cannot convert argument of type "+(t.L.T?t.L.T.name:t.L.O.name)+" to parameter type "+this.name);break;case 1:r=t.L.S;break;case 2:if(t.L.T===this)r=t.L.S;else{var e=t.clone();r=this.wa(r,z((function(){e.delete()}))),null!==n&&n.push(this.V,r)}break;default:I("Unsupporting sharing policy")}return r}function Tn(n,t){return null===t?(this.da&&I("null is not a valid "+this.name),0):(t.L||I('Cannot pass "'+Un(t)+'" as a '+this.name),t.L.N||I("Cannot pass deleted object as a pointer of type "+this.name),t.L.O.ba&&I("Cannot convert argument of type "+t.L.O.name+" to parameter type "+this.name),An(t.L.N,t.L.O.M,this.M))}function Cn(n,t,r,e){this.name=n,this.M=t,this.da=r,this.ba=e,this.ca=!1,this.V=this.wa=this.ea=this.ja=this.Aa=this.va=void 0,void 0!==t.P?this.toWireType=Ln:(this.toWireType=e?Pn:Tn,this.U=null)}var On=[];function Wn(n){var t=On[n];return t||(n>=On.length&&(On.length=n+1),On[n]=t=P.get(n)),t}function _n(n,t){var e=(n=B(n)).includes("j")?function(n,t){var e=[];return function(){if(e.length=0,Object.assign(e,arguments),n.includes("j")){var a=r["dynCall_"+n];a=e&&e.length?a.apply(null,[t].concat(e)):a.call(null,t)}else a=Wn(t).apply(null,e);return a}}(n,t):Wn(t);return"function"!=typeof e&&I("unknown function pointer with signature "+n+": "+t),e}var kn=void 0;function Sn(n,t){var r=[],e={};throw t.forEach((function n(t){e[t]||J[t]||(pn[t]?pn[t].forEach(n):(r.push(t),e[t]=!0))})),new kn(n+": "+r.map(G).join([", "]))}function En(n,t,r,e,a){var i=t.length;2>i&&I("argTypes array size mismatch! Must at least get return value and 'this' types!");var o=null!==t[1]&&null!==r,u=!1;for(r=1;r<t.length;++r)if(null!==t[r]&&void 0===t[r].U){u=!0;break}var s="void"!==t[0].name,c=i-2,f=Array(c),l=[],h=[];return function(){if(arguments.length!==c&&I("function "+n+" called with "+arguments.length+" arguments, expected "+c+" args!"),h.length=0,l.length=o?2:1,l[0]=a,o){var r=t[1].toWireType(h,this);l[1]=r}for(var i=0;i<c;++i)f[i]=t[i+2].toWireType(h,arguments[i]),l.push(f[i]);if(i=e.apply(null,l),u)fn(h);else for(var p=o?1:2;p<t.length;p++){var v=1===p?r:f[p-2];null!==t[p].U&&t[p].U(v)}return s?t[0].fromWireType(i):void 0}}function jn(n,t){for(var r=[],e=0;e<n;e++)r.push(y[t+4*e>>2]);return r}function Mn(n){4<n&&0==--N[n].fa&&(N[n]=void 0,F.push(n))}function Un(n){if(null===n)return"null";var t=typeof n;return"object"===t||"array"===t||"function"===t?n.toString():""+n}function Nn(n,t){switch(t){case 2:return function(n){return this.fromWireType(m[n>>2])};case 3:return function(n){return this.fromWireType(g[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Fn(n,t,r){switch(t){case 0:return r?function(n){return l[n]}:function(n){return h[n]};case 1:return r?function(n){return p[n>>1]}:function(n){return v[n>>1]};case 2:return r?function(n){return d[n>>2]}:function(n){return y[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function Vn(n,t){for(var r="",e=0;!(e>=t/2);++e){var a=p[n+2*e>>1];if(0==a)break;r+=String.fromCharCode(a)}return r}function Rn(n,t,r){if(void 0===r&&(r=2147483647),2>r)return 0;var e=t;r=(r-=2)<2*n.length?r/2:n.length;for(var a=0;a<r;++a)p[t>>1]=n.charCodeAt(a),t+=2;return p[t>>1]=0,t-e}function In(n){return 2*n.length}function xn(n,t){for(var r=0,e="";!(r>=t/4);){var a=d[n+4*r>>2];if(0==a)break;++r,65536<=a?(a-=65536,e+=String.fromCharCode(55296|a>>10,56320|1023&a)):e+=String.fromCharCode(a)}return e}function zn(n,t,r){if(void 0===r&&(r=2147483647),4>r)return 0;var e=t;r=e+r-4;for(var a=0;a<n.length;++a){var i=n.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),d[t>>2]=i,(t+=4)+4>r)break}return d[t>>2]=0,t-e}function Hn(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);55296<=e&&57343>=e&&++r,t+=4}return t}var $n={};function Bn(n){var t=$n[n];return void 0===t?B(n):t}var Xn=[],Zn=[],Yn=[null,[],[]];R=r.BindingError=V("BindingError"),r.count_emval_handles=function(){for(var n=0,t=5;t<N.length;++t)void 0!==N[t]&&++n;return n},r.get_first_emval=function(){for(var n=5;n<N.length;++n)if(void 0!==N[n])return N[n];return null},H=r.PureVirtualError=V("PureVirtualError");for(var qn=Array(256),Dn=0;256>Dn;++Dn)qn[Dn]=String.fromCharCode(Dn);$=qn,r.getInheritedInstanceCount=function(){return Object.keys(q).length},r.getLiveInheritedInstances=function(){var n,t=[];for(n in q)q.hasOwnProperty(n)&&t.push(q[n]);return t},r.flushPendingDeletes=Z,r.setDelayFunction=function(n){Y=n,X.length&&Y&&Y(Z)},an=r.InternalError=V("InternalError"),gn.prototype.isAliasOf=function(n){if(!(this instanceof gn&&n instanceof gn))return!1;var t=this.L.O.M,r=this.L.N,e=n.L.O.M;for(n=n.L.N;t.P;)r=t.aa(r),t=t.P;for(;e.P;)n=e.aa(n),e=e.P;return t===e&&r===n},gn.prototype.clone=function(){if(this.L.N||mn(this),this.L.$)return this.L.count.value+=1,this;var n=sn,t=Object,r=t.create,e=Object.getPrototypeOf(this),a=this.L;return(n=n(r.call(t,e,{L:{value:{count:a.count,Z:a.Z,$:a.$,N:a.N,O:a.O,S:a.S,T:a.T}}}))).L.count.value+=1,n.L.Z=!1,n},gn.prototype.delete=function(){this.L.N||mn(this),this.L.Z&&!this.L.$&&I("Object already scheduled for deletion"),Q(this),tn(this.L),this.L.$||(this.L.S=void 0,this.L.N=void 0)},gn.prototype.isDeleted=function(){return!this.L.N},gn.prototype.deleteLater=function(){return this.L.N||mn(this),this.L.Z&&!this.L.$&&I("Object already scheduled for deletion"),X.push(this),1===X.length&&Y&&Y(Z),this.L.Z=!0,this},Cn.prototype.pa=function(n){return this.ja&&(n=this.ja(n)),n},Cn.prototype.ga=function(n){this.V&&this.V(n)},Cn.prototype.argPackAdvance=8,Cn.prototype.readValueFromPointer=ln,Cn.prototype.deleteObject=function(n){null!==n&&n.delete()},Cn.prototype.fromWireType=function(n){function t(){return this.ca?un(this.M.W,{O:this.va,N:r,T:this,S:n}):un(this.M.W,{O:this,N:n})}var r=this.pa(n);if(!r)return this.ga(n),null;var e=function(n,t){return t=D(n,t),q[t]}(this.M,r);if(void 0!==e)return 0===e.L.count.value?(e.L.N=r,e.L.S=n,e.clone()):(e=e.clone(),this.ga(n),e);if(e=this.M.oa(r),!(e=en[e]))return t.call(this);e=this.ba?e.ka:e.pointerType;var a=rn(r,this.M,e.M);return null===a?t.call(this):this.ca?un(e.M.W,{O:e,N:a,T:this,S:n}):un(e.M.W,{O:e,N:a})},kn=r.UnboundTypeError=V("UnboundTypeError");var Jn={q:function(n,t,r){n=B(n),t=K(t,"wrapper"),r=x(r);var e=[].slice,a=t.M,i=a.W,o=a.P.W,u=a.P.constructor;for(var s in n=U(n,(function(){a.P.ia.forEach(function(n){if(this[n]===o[n])throw new H("Pure virtual function "+n+" must be implemented in JavaScript")}.bind(this)),Object.defineProperty(this,"__parent",{value:i}),this.__construct.apply(this,e.call(arguments))})),i.__construct=function(){this===i&&I("Pass correct 'this' to __construct");var n=u.implement.apply(void 0,[this].concat(e.call(arguments)));Q(n);var t=n.L;n.notifyOnDestruction(),t.$=!0,Object.defineProperties(this,{L:{value:t}}),sn(this),n=t.N,n=D(a,n),q.hasOwnProperty(n)?I("Tried to register registered instance: "+n):q[n]=this},i.__destruct=function(){this===i&&I("Pass correct 'this' to __destruct"),Q(this);var n=this.L.N;n=D(a,n),q.hasOwnProperty(n)?delete q[n]:I("Tried to unregister unregistered instance: "+n)},n.prototype=Object.create(i),r)n.prototype[s]=r[s];return z(n)},l:function(n){var t=cn[n];delete cn[n];var r=t.ea,e=t.V,a=t.ha;vn([n],a.map((n=>n.sa)).concat(a.map((n=>n.ya))),(n=>{var i={};return a.forEach(((t,r)=>{var e=n[r],o=t.qa,u=t.ra,s=n[r+a.length],c=t.xa,f=t.za;i[t.na]={read:n=>e.fromWireType(o(u,n)),write:(n,t)=>{var r=[];c(f,n,s.toWireType(r,t)),fn(r)}}})),[{name:t.name,fromWireType:function(n){var t,r={};for(t in i)r[t]=i[t].read(n);return e(n),r},toWireType:function(n,t){for(var a in i)if(!(a in t))throw new TypeError('Missing field:  "'+a+'"');var o=r();for(a in i)i[a].write(o,t[a]);return null!==n&&n.push(e,o),o},argPackAdvance:8,readValueFromPointer:ln,U:e}]}))},v:function(){},B:function(n,t,r,e,a){var i=dn(r);yn(n,{name:t=B(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?e:a},argPackAdvance:8,readValueFromPointer:function(n){if(1===r)var e=l;else if(2===r)e=p;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+t);e=d}return this.fromWireType(e[n>>i])},U:null})},h:function(n,t,e,a,i,o,u,s,c,f,l,h,p){l=B(l),o=_n(i,o),s&&(s=_n(u,s)),f&&(f=_n(c,f)),p=_n(h,p);var v=M(l);!function(n,t){r.hasOwnProperty(n)?(I("Cannot register public name '"+n+"' twice"),wn(r,n,n),r.hasOwnProperty(void 0)&&I("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),r[n].R[void 0]=t):r[n]=t}(v,(function(){Sn("Cannot construct "+l+" due to unbound types",[a])})),vn([n,t,e],a?[a]:[],(function(t){if(t=t[0],a)var e=t.M,i=e.W;else i=gn.prototype;t=U(v,(function(){if(Object.getPrototypeOf(this)!==u)throw new R("Use 'new' to construct "+l);if(void 0===c.X)throw new R(l+" has no accessible constructor");var n=c.X[arguments.length];if(void 0===n)throw new R("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(c.X).toString()+") parameters instead!");return n.apply(this,arguments)}));var u=Object.create(i,{constructor:{value:t}});t.prototype=u;var c=new bn(l,t,u,p,e,o,s,f);e=new Cn(l,c,!0,!1),i=new Cn(l+"*",c,!1,!1);var h=new Cn(l+" const*",c,!1,!0);return en[n]={pointerType:i,ka:h},function(n,t){r.hasOwnProperty(n)||on("Replacing nonexistant public symbol"),r[n]=t,r[n].Y=void 0}(v,t),[e,i,h]}))},d:function(n,t,r,e,a,i,o){var u=jn(r,e);t=B(t),i=_n(a,i),vn([],[n],(function(n){function e(){Sn("Cannot call "+a+" due to unbound types",u)}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]);var s=n.M.constructor;return void 0===s[t]?(e.Y=r-1,s[t]=e):(wn(s,t,a),s[t].R[r-1]=e),vn([],u,(function(n){return n=En(a,[n[0],null].concat(n.slice(1)),null,i,o),void 0===s[t].R?(n.Y=r-1,s[t]=n):s[t].R[r-1]=n,[]})),[]}))},p:function(n,t,r,e,a,i){0<t||k();var o=jn(t,r);a=_n(e,a),vn([],[n],(function(n){var r="constructor "+(n=n[0]).name;if(void 0===n.M.X&&(n.M.X=[]),void 0!==n.M.X[t-1])throw new R("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.M.X[t-1]=()=>{Sn("Cannot construct "+n.name+" due to unbound types",o)},vn([],o,(function(e){return e.splice(1,0,null),n.M.X[t-1]=En(r,e,null,a,i),[]})),[]}))},a:function(n,t,r,e,a,i,o,u){var s=jn(r,e);t=B(t),i=_n(a,i),vn([],[n],(function(n){function e(){Sn("Cannot call "+a+" due to unbound types",s)}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]),u&&n.M.ia.push(t);var c=n.M.W,f=c[t];return void 0===f||void 0===f.R&&f.className!==n.name&&f.Y===r-2?(e.Y=r-2,e.className=n.name,c[t]=e):(wn(c,t,a),c[t].R[r-2]=e),vn([],s,(function(e){return e=En(a,e,n,i,o),void 0===c[t].R?(e.Y=r-2,c[t]=e):c[t].R[r-2]=e,[]})),[]}))},A:function(n,t){yn(n,{name:t=B(t),fromWireType:function(n){var t=x(n);return Mn(n),t},toWireType:function(n,t){return z(t)},argPackAdvance:8,readValueFromPointer:ln,U:null})},n:function(n,t,r){r=dn(r),yn(n,{name:t=B(t),fromWireType:function(n){return n},toWireType:function(n,t){return t},argPackAdvance:8,readValueFromPointer:Nn(t,r),U:null})},e:function(n,t,r,e,a){t=B(t),-1===a&&(a=4294967295),a=dn(r);var i=n=>n;if(0===e){var o=32-8*r;i=n=>n<<o>>>o}r=t.includes("unsigned")?function(n,t){return t>>>0}:function(n,t){return t},yn(n,{name:t,fromWireType:i,toWireType:r,argPackAdvance:8,readValueFromPointer:Fn(t,a,0!==e),U:null})},b:function(n,t,r){function e(n){var t=y;return new a(f,t[1+(n>>=2)],t[n])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];yn(n,{name:r=B(r),fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{ta:!0})},o:function(n,t){var r="std::string"===(t=B(t));yn(n,{name:t,fromWireType:function(n){var t=y[n>>2],e=n+4;if(r)for(var a=e,i=0;i<=t;++i){var o=e+i;if(i==t||0==h[o]){if(a=a?b(h,a,o-a):"",void 0===u)var u=a;else u+=String.fromCharCode(0),u+=a;a=o+1}}else{for(u=Array(t),i=0;i<t;++i)u[i]=String.fromCharCode(h[e+i]);u=u.join("")}return nt(n),u},toWireType:function(n,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var e,a="string"==typeof t;if(a||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||I("Cannot pass non-string to std::string"),r&&a){var i=0;for(e=0;e<t.length;++e){var o=t.charCodeAt(e);127>=o?i++:2047>=o?i+=2:55296<=o&&57343>=o?(i+=4,++e):i+=3}e=i}else e=t.length;if(o=(i=Qn(4+e+1))+4,y[i>>2]=e,r&&a){if(a=o,o=e+1,e=h,0<o){o=a+o-1;for(var u=0;u<t.length;++u){var s=t.charCodeAt(u);if(55296<=s&&57343>=s&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++u)),127>=s){if(a>=o)break;e[a++]=s}else{if(2047>=s){if(a+1>=o)break;e[a++]=192|s>>6}else{if(65535>=s){if(a+2>=o)break;e[a++]=224|s>>12}else{if(a+3>=o)break;e[a++]=240|s>>18,e[a++]=128|s>>12&63}e[a++]=128|s>>6&63}e[a++]=128|63&s}}e[a]=0}}else if(a)for(a=0;a<e;++a)255<(u=t.charCodeAt(a))&&(nt(o),I("String has UTF-16 code units that do not fit in 8 bits")),h[o+a]=u;else for(a=0;a<e;++a)h[o+a]=t[a];return null!==n&&n.push(nt,i),i},argPackAdvance:8,readValueFromPointer:ln,U:function(n){nt(n)}})},k:function(n,t,r){if(r=B(r),2===t)var e=Vn,a=Rn,i=In,o=()=>v,u=1;else 4===t&&(e=xn,a=zn,i=Hn,o=()=>y,u=2);yn(n,{name:r,fromWireType:function(n){for(var r,a=y[n>>2],i=o(),s=n+4,c=0;c<=a;++c){var f=n+4+c*t;c!=a&&0!=i[f>>u]||(s=e(s,f-s),void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),s=f+t)}return nt(n),r},toWireType:function(n,e){"string"!=typeof e&&I("Cannot pass non-string to C++ string type "+r);var o=i(e),s=Qn(4+o+t);return y[s>>2]=o>>u,a(e,s+4,o+t),null!==n&&n.push(nt,s),s},argPackAdvance:8,readValueFromPointer:ln,U:function(n){nt(n)}})},m:function(n,t,r,e,a,i){cn[n]={name:B(t),ea:_n(r,e),V:_n(a,i),ha:[]}},c:function(n,t,r,e,a,i,o,u,s,c){cn[n].ha.push({na:B(t),sa:r,qa:_n(e,a),ra:i,ya:o,xa:_n(u,s),za:c})},C:function(n,t){yn(n,{ua:!0,name:t=B(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},t:function(n,t,r,e,a){n=Xn[n],t=x(t),r=Bn(r);var i=[];return y[e>>2]=z(i),n(t,r,i,a)},j:function(n,t,r,e){(n=Xn[n])(t=x(t),r=Bn(r),null,e)},f:Mn,g:function(n,t){var r=function(n,t){for(var r=Array(n),e=0;e<n;++e)r[e]=K(y[t+4*e>>2],"parameter "+e);return r}(n,t),e=r[0];t=e.name+"_$"+r.slice(1).map((function(n){return n.name})).join("_")+"$";var a=Zn[t];if(void 0!==a)return a;var i=Array(n-1);return a=function(n){var t=Xn.length;return Xn.push(n),t}(((t,a,o,u)=>{for(var s=0,c=0;c<n-1;++c)i[c]=r[c+1].readValueFromPointer(u+s),s+=r[c+1].argPackAdvance;for(t=t[a].apply(t,i),c=0;c<n-1;++c)r[c+1].la&&r[c+1].la(i[c]);if(!e.ua)return e.toWireType(o,t)})),Zn[t]=a},r:function(n){4<n&&(N[n].fa+=1)},s:function(n){fn(x(n)),Mn(n)},i:function(){k("")},x:function(n,t,r){h.copyWithin(n,t,t+r)},w:function(n){var t=h.length;if(2147483648<(n>>>=0))return!1;for(var r=1;4>=r;r*=2){var e=t*(1+.2/r);e=Math.min(e,n+100663296);var a=Math;e=Math.max(n,e),a=a.min.call(a,2147483648,e+(65536-e%65536)%65536);n:{try{c.grow(a-f.byteLength+65535>>>16),A();var i=1;break n}catch(n){}i=void 0}if(i)return!0}return!1},z:function(){return 52},u:function(){return 70},y:function(n,t,r,e){for(var a=0,i=0;i<r;i++){var o=y[t>>2],c=y[t+4>>2];t+=8;for(var f=0;f<c;f++){var l=h[o+f],p=Yn[n];0===l||10===l?((1===n?u:s)(b(p,0)),p.length=0):p.push(l)}a+=c}return y[e>>2]=a,0}};!function(){function n(n){r.asm=n.exports,c=r.asm.D,A(),P=r.asm.I,C.unshift(r.asm.E),0==--W&&_&&(n=_,_=null,n())}function t(t){n(t.instance)}function e(n){return("function"==typeof fetch?fetch(L,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+L+"'";return n.arrayBuffer()})).catch((function(){return E()})):Promise.resolve().then((function(){return E()}))).then((function(n){return WebAssembly.instantiate(n,i)})).then((function(n){return n})).then(n,(function(n){s("failed to asynchronously prepare wasm: "+n),k(n)}))}var i={a:Jn};if(W++,r.instantiateWasm)try{return r.instantiateWasm(i,n)}catch(n){s("Module.instantiateWasm callback failed with error: "+n),a(n)}("function"!=typeof WebAssembly.instantiateStreaming||S()||"function"!=typeof fetch?e(t):fetch(L,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,i).then(t,(function(n){return s("wasm streaming compile failed: "+n),s("falling back to ArrayBuffer instantiation"),e(t)}))}))).catch(a)}(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.E).apply(null,arguments)};var Gn=r.___getTypeName=function(){return(Gn=r.___getTypeName=r.asm.F).apply(null,arguments)};r.__embind_initialize_bindings=function(){return(r.__embind_initialize_bindings=r.asm.G).apply(null,arguments)};var Kn,Qn=r._malloc=function(){return(Qn=r._malloc=r.asm.H).apply(null,arguments)},nt=r._free=function(){return(nt=r._free=r.asm.J).apply(null,arguments)};function tt(){0<W||(j(T),0<W||Kn||(Kn=!0,r.calledRun=!0,w||(j(C),e(r),j(O))))}return r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.K).apply(null,arguments)},_=function n(){Kn||tt(),Kn||(_=n)},tt(),n.ready});function e(t){return r({instantiateWasm(n,r){WebAssembly.instantiate(t,n).then((({instance:n})=>{r(n)}))}}).then((t=>n(t)))}export{e as default};
