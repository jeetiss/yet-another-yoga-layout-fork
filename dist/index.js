import{e as n}from"./index-030f26a8.js";var t,r=(t="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(n){var r,e,a;n=n||{},r||(r=void 0!==n?n:{}),r.ready=new Promise((function(n,t){e=n,a=t}));var i=Object.assign({},r),o="";"undefined"!=typeof document&&document.currentScript&&(o=document.currentScript.src),t&&(o=t),o=0!==o.indexOf("blob:")?o.substr(0,o.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var u=console.log.bind(console),s=console.warn.bind(console);Object.assign(r,i),i=null,"object"!=typeof WebAssembly&&k("no native wasm support detected");var c,f,l,h,p,v,d,y,m,g,w=!1;function b(n,t,r){r=t+r;for(var e="";!(t>=r);){var a=n[t++];if(!a)break;if(128&a){var i=63&n[t++];if(192==(224&a))e+=String.fromCharCode((31&a)<<6|i);else{var o=63&n[t++];65536>(a=224==(240&a)?(15&a)<<12|i<<6|o:(7&a)<<18|i<<12|o<<6|63&n[t++])?e+=String.fromCharCode(a):(a-=65536,e+=String.fromCharCode(55296|a>>10,56320|1023&a))}}else e+=String.fromCharCode(a)}return e}function O(){var n=c.buffer;f=n,r.HEAP8=l=new Int8Array(n),r.HEAP16=p=new Int16Array(n),r.HEAP32=d=new Int32Array(n),r.HEAPU8=h=new Uint8Array(n),r.HEAPU16=v=new Uint16Array(n),r.HEAPU32=y=new Uint32Array(n),r.HEAPF32=m=new Float32Array(n),r.HEAPF64=g=new Float64Array(n)}var P,A,T=[],_=[],C=[],W=0,S=null;function k(n){throw s(n="Aborted("+n+")"),w=!0,n=new WebAssembly.RuntimeError(n+". Build with -sASSERTIONS for more info."),a(n),n}function E(){return A.startsWith("data:application/octet-stream;base64,")}function j(){try{throw"both async and sync fetching of the wasm failed"}catch(n){k(n)}}function R(n){for(;0<n.length;)n.shift()(r)}function U(n){this.P=n-24,this.ta=function(n){y[this.P+4>>2]=n},this.qa=function(n){y[this.P+8>>2]=n},this.ra=function(){d[this.P>>2]=0},this.pa=function(){l[this.P+12>>0]=0},this.sa=function(){l[this.P+13>>0]=0},this.na=function(n,t){this.oa(),this.ta(n),this.qa(t),this.ra(),this.pa(),this.sa()},this.oa=function(){y[this.P+16>>2]=0}}function V(n){if(void 0===n)return"_unknown";var t=(n=n.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return 48<=t&&57>=t?"_"+n:n}function F(n,t){return n=V(n),function(){return t.apply(this,arguments)}}A="yoga.wasm",E()||(A=o+A);var I=[{},{value:void 0},{value:null},{value:!0},{value:!1}],x=[];function H(n){var t=Error,r=F(n,(function(t){this.name=n,this.message=t,void 0!==(t=Error(t).stack)&&(this.stack=this.toString()+"\n"+t.replace(/^Error(:[^\n]*)?\n/,""))}));return r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},r}var z=void 0;function X(n){throw new z(n)}var $=n=>(n||X("Cannot use deleted val. handle = "+n),I[n].value),B=n=>{switch(n){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var t=x.length?x.pop():I.length;return I[t]={ia:1,value:n},t}},Y=void 0,Z=void 0;function M(n){for(var t="";h[n];)t+=Z[h[n++]];return t}var D=[];function N(){for(;D.length;){var n=D.pop();n.O.ba=!1,n.delete()}}var q=void 0,G={};function J(n,t){for(void 0===t&&X("ptr should not be undefined");n.T;)t=n.da(t),n=n.T;return t}var L={};function K(n){var t=M(n=Jn(n));return Qn(n),t}function Q(n,t){var r=L[n];return void 0===r&&X(t+" has unknown type "+K(n)),r}function nn(){}var tn=!1;function rn(n){--n.count.value,0===n.count.value&&(n.V?n.W.Y(n.V):n.S.R.Y(n.P))}function en(n,t,r){return t===r?n:void 0===r.T||null===(n=en(n,t,r.T))?null:r.wa(n)}var an={},on=void 0;function un(n){throw new on(n)}function sn(n,t){return t.S&&t.P||un("makeClassHandle requires ptr and ptrType"),!!t.W!=!!t.V&&un("Both smartPtrType and smartPtr must be specified"),t.count={value:1},cn(Object.create(n,{O:{value:t}}))}function cn(n){return"undefined"==typeof FinalizationRegistry?(cn=n=>n,n):(tn=new FinalizationRegistry((n=>{rn(n.O)})),nn=n=>{tn.unregister(n)},(cn=n=>{var t=n.O;return t.V&&tn.register(n,{O:t},n),n})(n))}var fn={};function ln(n){for(;n.length;){var t=n.pop();n.pop()(t)}}function hn(n){return this.fromWireType(d[n>>2])}var pn={},vn={};function dn(n,t,r){function e(t){(t=r(t)).length!==n.length&&un("Mismatched type converter count");for(var e=0;e<n.length;++e)mn(n[e],t[e])}n.forEach((function(n){vn[n]=t}));var a=Array(t.length),i=[],o=0;t.forEach(((n,t)=>{L.hasOwnProperty(n)?a[t]=L[n]:(i.push(n),pn.hasOwnProperty(n)||(pn[n]=[]),pn[n].push((()=>{a[t]=L[n],++o===i.length&&e(a)})))})),0===i.length&&e(a)}function yn(n){switch(n){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+n)}}function mn(n,t,r={}){if(!("argPackAdvance"in t))throw new TypeError("registerType registeredInstance requires argPackAdvance");var e=t.name;if(n||X('type "'+e+'" must have a positive integer typeid pointer'),L.hasOwnProperty(n)){if(r.Da)return;X("Cannot register type '"+e+"' twice")}L[n]=t,delete vn[n],pn.hasOwnProperty(n)&&(t=pn[n],delete pn[n],t.forEach((n=>n())))}function gn(n){X(n.O.S.R.name+" instance already deleted")}function wn(){}function bn(n,t,r){if(void 0===n[t].U){var e=n[t];n[t]=function(){return n[t].U.hasOwnProperty(arguments.length)||X("Function '"+r+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+n[t].U+")!"),n[t].U[arguments.length].apply(this,arguments)},n[t].U=[],n[t].U[e.aa]=e}}function On(n,t,r,e,a,i,o,u){this.name=n,this.constructor=t,this.Z=r,this.Y=e,this.T=a,this.ya=i,this.da=o,this.wa=u,this.la=[]}function Pn(n,t,r){for(;t!==r;)t.da||X("Expected null or instance of "+r.name+", got an instance of "+t.name),n=t.da(n),t=t.T;return n}function An(n,t){return null===t?(this.ga&&X("null is not a valid "+this.name),0):(t.O||X('Cannot pass "'+Un(t)+'" as a '+this.name),t.O.P||X("Cannot pass deleted object as a pointer of type "+this.name),Pn(t.O.P,t.O.S.R,this.R))}function Tn(n,t){if(null===t){if(this.ga&&X("null is not a valid "+this.name),this.fa){var r=this.ha();return null!==n&&n.push(this.Y,r),r}return 0}if(t.O||X('Cannot pass "'+Un(t)+'" as a '+this.name),t.O.P||X("Cannot pass deleted object as a pointer of type "+this.name),!this.ea&&t.O.S.ea&&X("Cannot convert argument of type "+(t.O.W?t.O.W.name:t.O.S.name)+" to parameter type "+this.name),r=Pn(t.O.P,t.O.S.R,this.R),this.fa)switch(void 0===t.O.V&&X("Passing raw pointer to smart pointer is illegal"),this.Ka){case 0:t.O.W===this?r=t.O.V:X("Cannot convert argument of type "+(t.O.W?t.O.W.name:t.O.S.name)+" to parameter type "+this.name);break;case 1:r=t.O.V;break;case 2:if(t.O.W===this)r=t.O.V;else{var e=t.clone();r=this.Ga(r,B((function(){e.delete()}))),null!==n&&n.push(this.Y,r)}break;default:X("Unsupporting sharing policy")}return r}function _n(n,t){return null===t?(this.ga&&X("null is not a valid "+this.name),0):(t.O||X('Cannot pass "'+Un(t)+'" as a '+this.name),t.O.P||X("Cannot pass deleted object as a pointer of type "+this.name),t.O.S.ea&&X("Cannot convert argument of type "+t.O.S.name+" to parameter type "+this.name),Pn(t.O.P,t.O.S.R,this.R))}function Cn(n,t,r,e){this.name=n,this.R=t,this.ga=r,this.ea=e,this.fa=!1,this.Y=this.Ga=this.ha=this.ma=this.Ka=this.Fa=void 0,void 0!==t.T?this.toWireType=Tn:(this.toWireType=e?An:_n,this.X=null)}function Wn(n,t){var e=(n=M(n)).includes("j")?function(n,t){var e=[];return function(){if(e.length=0,Object.assign(e,arguments),n.includes("j")){var a=r["dynCall_"+n];a=e&&e.length?a.apply(null,[t].concat(e)):a.call(null,t)}else a=P.get(t).apply(null,e);return a}}(n,t):P.get(t);return"function"!=typeof e&&X("unknown function pointer with signature "+n+": "+t),e}var Sn=void 0;function kn(n,t){var r=[],e={};throw t.forEach((function n(t){e[t]||L[t]||(vn[t]?vn[t].forEach(n):(r.push(t),e[t]=!0))})),new Sn(n+": "+r.map(K).join([", "]))}function En(n,t,r,e,a){var i=t.length;2>i&&X("argTypes array size mismatch! Must at least get return value and 'this' types!");var o=null!==t[1]&&null!==r,u=!1;for(r=1;r<t.length;++r)if(null!==t[r]&&void 0===t[r].X){u=!0;break}var s="void"!==t[0].name,c=i-2,f=Array(c),l=[],h=[];return function(){if(arguments.length!==c&&X("function "+n+" called with "+arguments.length+" arguments, expected "+c+" args!"),h.length=0,l.length=o?2:1,l[0]=a,o){var r=t[1].toWireType(h,this);l[1]=r}for(var i=0;i<c;++i)f[i]=t[i+2].toWireType(h,arguments[i]),l.push(f[i]);if(i=e.apply(null,l),u)ln(h);else for(var p=o?1:2;p<t.length;p++){var v=1===p?r:f[p-2];null!==t[p].X&&t[p].X(v)}return s?t[0].fromWireType(i):void 0}}function jn(n,t){for(var r=[],e=0;e<n;e++)r.push(y[t+4*e>>2]);return r}function Rn(n){4<n&&0==--I[n].ia&&(I[n]=void 0,x.push(n))}function Un(n){if(null===n)return"null";var t=typeof n;return"object"===t||"array"===t||"function"===t?n.toString():""+n}function Vn(n,t){switch(t){case 2:return function(n){return this.fromWireType(m[n>>2])};case 3:return function(n){return this.fromWireType(g[n>>3])};default:throw new TypeError("Unknown float type: "+n)}}function Fn(n,t,r){switch(t){case 0:return r?function(n){return l[n]}:function(n){return h[n]};case 1:return r?function(n){return p[n>>1]}:function(n){return v[n>>1]};case 2:return r?function(n){return d[n>>2]}:function(n){return y[n>>2]};default:throw new TypeError("Unknown integer type: "+n)}}function In(n,t){for(var r="",e=0;!(e>=t/2);++e){var a=p[n+2*e>>1];if(0==a)break;r+=String.fromCharCode(a)}return r}function xn(n,t,r){if(void 0===r&&(r=2147483647),2>r)return 0;var e=t;r=(r-=2)<2*n.length?r/2:n.length;for(var a=0;a<r;++a)p[t>>1]=n.charCodeAt(a),t+=2;return p[t>>1]=0,t-e}function Hn(n){return 2*n.length}function zn(n,t){for(var r=0,e="";!(r>=t/4);){var a=d[n+4*r>>2];if(0==a)break;++r,65536<=a?(a-=65536,e+=String.fromCharCode(55296|a>>10,56320|1023&a)):e+=String.fromCharCode(a)}return e}function Xn(n,t,r){if(void 0===r&&(r=2147483647),4>r)return 0;var e=t;r=e+r-4;for(var a=0;a<n.length;++a){var i=n.charCodeAt(a);if(55296<=i&&57343>=i&&(i=65536+((1023&i)<<10)|1023&n.charCodeAt(++a)),d[t>>2]=i,(t+=4)+4>r)break}return d[t>>2]=0,t-e}function $n(n){for(var t=0,r=0;r<n.length;++r){var e=n.charCodeAt(r);55296<=e&&57343>=e&&++r,t+=4}return t}var Bn={};function Yn(n){var t=Bn[n];return void 0===t?M(n):t}var Zn=[],Mn=[],Dn=[null,[],[]];z=r.BindingError=H("BindingError"),r.count_emval_handles=function(){for(var n=0,t=5;t<I.length;++t)void 0!==I[t]&&++n;return n},r.get_first_emval=function(){for(var n=5;n<I.length;++n)if(void 0!==I[n])return I[n];return null},Y=r.PureVirtualError=H("PureVirtualError");for(var Nn=Array(256),qn=0;256>qn;++qn)Nn[qn]=String.fromCharCode(qn);Z=Nn,r.getInheritedInstanceCount=function(){return Object.keys(G).length},r.getLiveInheritedInstances=function(){var n,t=[];for(n in G)G.hasOwnProperty(n)&&t.push(G[n]);return t},r.flushPendingDeletes=N,r.setDelayFunction=function(n){q=n,D.length&&q&&q(N)},on=r.InternalError=H("InternalError"),wn.prototype.isAliasOf=function(n){if(!(this instanceof wn&&n instanceof wn))return!1;var t=this.O.S.R,r=this.O.P,e=n.O.S.R;for(n=n.O.P;t.T;)r=t.da(r),t=t.T;for(;e.T;)n=e.da(n),e=e.T;return t===e&&r===n},wn.prototype.clone=function(){if(this.O.P||gn(this),this.O.ca)return this.O.count.value+=1,this;var n=cn,t=Object,r=t.create,e=Object.getPrototypeOf(this),a=this.O;return(n=n(r.call(t,e,{O:{value:{count:a.count,ba:a.ba,ca:a.ca,P:a.P,S:a.S,V:a.V,W:a.W}}}))).O.count.value+=1,n.O.ba=!1,n},wn.prototype.delete=function(){this.O.P||gn(this),this.O.ba&&!this.O.ca&&X("Object already scheduled for deletion"),nn(this),rn(this.O),this.O.ca||(this.O.V=void 0,this.O.P=void 0)},wn.prototype.isDeleted=function(){return!this.O.P},wn.prototype.deleteLater=function(){return this.O.P||gn(this),this.O.ba&&!this.O.ca&&X("Object already scheduled for deletion"),D.push(this),1===D.length&&q&&q(N),this.O.ba=!0,this},Cn.prototype.za=function(n){return this.ma&&(n=this.ma(n)),n},Cn.prototype.ja=function(n){this.Y&&this.Y(n)},Cn.prototype.argPackAdvance=8,Cn.prototype.readValueFromPointer=hn,Cn.prototype.deleteObject=function(n){null!==n&&n.delete()},Cn.prototype.fromWireType=function(n){function t(){return this.fa?sn(this.R.Z,{S:this.Fa,P:r,W:this,V:n}):sn(this.R.Z,{S:this,P:n})}var r=this.za(n);if(!r)return this.ja(n),null;var e=function(n,t){return t=J(n,t),G[t]}(this.R,r);if(void 0!==e)return 0===e.O.count.value?(e.O.P=r,e.O.V=n,e.clone()):(e=e.clone(),this.ja(n),e);if(e=this.R.ya(r),!(e=an[e]))return t.call(this);e=this.ea?e.ua:e.pointerType;var a=en(r,this.R,e.R);return null===a?t.call(this):this.fa?sn(e.R.Z,{S:e,P:a,W:this,V:n}):sn(e.R.Z,{S:e,P:a})},Sn=r.UnboundTypeError=H("UnboundTypeError");var Gn={i:function(n){return Kn(n+24)+24},h:function(n,t,r){throw new U(n).na(t,r),n},m:function(n,t,r){n=M(n),t=Q(t,"wrapper"),r=$(r);var e=[].slice,a=t.R,i=a.Z,o=a.T.Z,u=a.T.constructor;for(var s in n=F(n,(function(){a.T.la.forEach(function(n){if(this[n]===o[n])throw new Y("Pure virtual function "+n+" must be implemented in JavaScript")}.bind(this)),Object.defineProperty(this,"__parent",{value:i}),this.__construct.apply(this,e.call(arguments))})),i.__construct=function(){this===i&&X("Pass correct 'this' to __construct");var n=u.implement.apply(void 0,[this].concat(e.call(arguments)));nn(n);var t=n.O;n.notifyOnDestruction(),t.ca=!0,Object.defineProperties(this,{O:{value:t}}),cn(this),n=t.P,n=J(a,n),G.hasOwnProperty(n)?X("Tried to register registered instance: "+n):G[n]=this},i.__destruct=function(){this===i&&X("Pass correct 'this' to __destruct"),nn(this);var n=this.O.P;n=J(a,n),G.hasOwnProperty(n)?delete G[n]:X("Tried to unregister unregistered instance: "+n)},n.prototype=Object.create(i),r)n.prototype[s]=r[s];return B(n)},j:function(n){var t=fn[n];delete fn[n];var r=t.ha,e=t.Y,a=t.ka;dn([n],a.map((n=>n.Ca)).concat(a.map((n=>n.Ia))),(n=>{var i={};return a.forEach(((t,r)=>{var e=n[r],o=t.Aa,u=t.Ba,s=n[r+a.length],c=t.Ha,f=t.Ja;i[t.xa]={read:n=>e.fromWireType(o(u,n)),write:(n,t)=>{var r=[];c(f,n,s.toWireType(r,t)),ln(r)}}})),[{name:t.name,fromWireType:function(n){var t,r={};for(t in i)r[t]=i[t].read(n);return e(n),r},toWireType:function(n,t){for(var a in i)if(!(a in t))throw new TypeError('Missing field:  "'+a+'"');var o=r();for(a in i)i[a].write(o,t[a]);return null!==n&&n.push(e,o),o},argPackAdvance:8,readValueFromPointer:hn,X:e}]}))},u:function(){},z:function(n,t,r,e,a){var i=yn(r);mn(n,{name:t=M(t),fromWireType:function(n){return!!n},toWireType:function(n,t){return t?e:a},argPackAdvance:8,readValueFromPointer:function(n){if(1===r)var e=l;else if(2===r)e=p;else{if(4!==r)throw new TypeError("Unknown boolean type size: "+t);e=d}return this.fromWireType(e[n>>i])},X:null})},e:function(n,t,e,a,i,o,u,s,c,f,l,h,p){l=M(l),o=Wn(i,o),s&&(s=Wn(u,s)),f&&(f=Wn(c,f)),p=Wn(h,p);var v=V(l);!function(n,t){r.hasOwnProperty(n)?(X("Cannot register public name '"+n+"' twice"),bn(r,n,n),r.hasOwnProperty(void 0)&&X("Cannot register multiple overloads of a function with the same number of arguments (undefined)!"),r[n].U[void 0]=t):r[n]=t}(v,(function(){kn("Cannot construct "+l+" due to unbound types",[a])})),dn([n,t,e],a?[a]:[],(function(t){if(t=t[0],a)var e=t.R,i=e.Z;else i=wn.prototype;t=F(v,(function(){if(Object.getPrototypeOf(this)!==u)throw new z("Use 'new' to construct "+l);if(void 0===c.$)throw new z(l+" has no accessible constructor");var n=c.$[arguments.length];if(void 0===n)throw new z("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(c.$).toString()+") parameters instead!");return n.apply(this,arguments)}));var u=Object.create(i,{constructor:{value:t}});t.prototype=u;var c=new On(l,t,u,p,e,o,s,f);e=new Cn(l,c,!0,!1),i=new Cn(l+"*",c,!1,!1);var h=new Cn(l+" const*",c,!1,!0);return an[n]={pointerType:i,ua:h},function(n,t){r.hasOwnProperty(n)||un("Replacing nonexistant public symbol"),r[n]=t,r[n].aa=void 0}(v,t),[e,i,h]}))},c:function(n,t,r,e,a,i,o){var u=jn(r,e);t=M(t),i=Wn(a,i),dn([],[n],(function(n){function e(){kn("Cannot call "+a+" due to unbound types",u)}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]);var s=n.R.constructor;return void 0===s[t]?(e.aa=r-1,s[t]=e):(bn(s,t,a),s[t].U[r-1]=e),dn([],u,(function(n){return n=En(a,[n[0],null].concat(n.slice(1)),null,i,o),void 0===s[t].U?(n.aa=r-1,s[t]=n):s[t].U[r-1]=n,[]})),[]}))},n:function(n,t,r,e,a,i){0<t||k();var o=jn(t,r);a=Wn(e,a),dn([],[n],(function(n){var r="constructor "+(n=n[0]).name;if(void 0===n.R.$&&(n.R.$=[]),void 0!==n.R.$[t-1])throw new z("Cannot register multiple constructors with identical number of parameters ("+(t-1)+") for class '"+n.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return n.R.$[t-1]=()=>{kn("Cannot construct "+n.name+" due to unbound types",o)},dn([],o,(function(e){return e.splice(1,0,null),n.R.$[t-1]=En(r,e,null,a,i),[]})),[]}))},a:function(n,t,r,e,a,i,o,u){var s=jn(r,e);t=M(t),i=Wn(a,i),dn([],[n],(function(n){function e(){kn("Cannot call "+a+" due to unbound types",s)}var a=(n=n[0]).name+"."+t;t.startsWith("@@")&&(t=Symbol[t.substring(2)]),u&&n.R.la.push(t);var c=n.R.Z,f=c[t];return void 0===f||void 0===f.U&&f.className!==n.name&&f.aa===r-2?(e.aa=r-2,e.className=n.name,c[t]=e):(bn(c,t,a),c[t].U[r-2]=e),dn([],s,(function(e){return e=En(a,e,n,i,o),void 0===c[t].U?(e.aa=r-2,c[t]=e):c[t].U[r-2]=e,[]})),[]}))},y:function(n,t){mn(n,{name:t=M(t),fromWireType:function(n){var t=$(n);return Rn(n),t},toWireType:function(n,t){return B(t)},argPackAdvance:8,readValueFromPointer:hn,X:null})},r:function(n,t,r){r=yn(r),mn(n,{name:t=M(t),fromWireType:function(n){return n},toWireType:function(n,t){return t},argPackAdvance:8,readValueFromPointer:Vn(t,r),X:null})},d:function(n,t,r,e,a){t=M(t),-1===a&&(a=4294967295),a=yn(r);var i=n=>n;if(0===e){var o=32-8*r;i=n=>n<<o>>>o}r=t.includes("unsigned")?function(n,t){return t>>>0}:function(n,t){return t},mn(n,{name:t,fromWireType:i,toWireType:r,argPackAdvance:8,readValueFromPointer:Fn(t,a,0!==e),X:null})},b:function(n,t,r){function e(n){var t=y;return new a(f,t[1+(n>>=2)],t[n])}var a=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][t];mn(n,{name:r=M(r),fromWireType:e,argPackAdvance:8,readValueFromPointer:e},{Da:!0})},q:function(n,t){var r="std::string"===(t=M(t));mn(n,{name:t,fromWireType:function(n){var t=y[n>>2],e=n+4;if(r)for(var a=e,i=0;i<=t;++i){var o=e+i;if(i==t||0==h[o]){if(a=a?b(h,a,o-a):"",void 0===u)var u=a;else u+=String.fromCharCode(0),u+=a;a=o+1}}else{for(u=Array(t),i=0;i<t;++i)u[i]=String.fromCharCode(h[e+i]);u=u.join("")}return Qn(n),u},toWireType:function(n,t){t instanceof ArrayBuffer&&(t=new Uint8Array(t));var e,a="string"==typeof t;if(a||t instanceof Uint8Array||t instanceof Uint8ClampedArray||t instanceof Int8Array||X("Cannot pass non-string to std::string"),r&&a){var i=0;for(e=0;e<t.length;++e){var o=t.charCodeAt(e);127>=o?i++:2047>=o?i+=2:55296<=o&&57343>=o?(i+=4,++e):i+=3}e=i}else e=t.length;if(o=(i=Kn(4+e+1))+4,y[i>>2]=e,r&&a){if(a=o,o=e+1,e=h,0<o){o=a+o-1;for(var u=0;u<t.length;++u){var s=t.charCodeAt(u);if(55296<=s&&57343>=s&&(s=65536+((1023&s)<<10)|1023&t.charCodeAt(++u)),127>=s){if(a>=o)break;e[a++]=s}else{if(2047>=s){if(a+1>=o)break;e[a++]=192|s>>6}else{if(65535>=s){if(a+2>=o)break;e[a++]=224|s>>12}else{if(a+3>=o)break;e[a++]=240|s>>18,e[a++]=128|s>>12&63}e[a++]=128|s>>6&63}e[a++]=128|63&s}}e[a]=0}}else if(a)for(a=0;a<e;++a)255<(u=t.charCodeAt(a))&&(Qn(o),X("String has UTF-16 code units that do not fit in 8 bits")),h[o+a]=u;else for(a=0;a<e;++a)h[o+a]=t[a];return null!==n&&n.push(Qn,i),i},argPackAdvance:8,readValueFromPointer:hn,X:function(n){Qn(n)}})},l:function(n,t,r){if(r=M(r),2===t)var e=In,a=xn,i=Hn,o=()=>v,u=1;else 4===t&&(e=zn,a=Xn,i=$n,o=()=>y,u=2);mn(n,{name:r,fromWireType:function(n){for(var r,a=y[n>>2],i=o(),s=n+4,c=0;c<=a;++c){var f=n+4+c*t;c!=a&&0!=i[f>>u]||(s=e(s,f-s),void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),s=f+t)}return Qn(n),r},toWireType:function(n,e){"string"!=typeof e&&X("Cannot pass non-string to C++ string type "+r);var o=i(e),s=Kn(4+o+t);return y[s>>2]=o>>u,a(e,s+4,o+t),null!==n&&n.push(Qn,s),s},argPackAdvance:8,readValueFromPointer:hn,X:function(n){Qn(n)}})},k:function(n,t,r,e,a,i){fn[n]={name:M(t),ha:Wn(r,e),Y:Wn(a,i),ka:[]}},g:function(n,t,r,e,a,i,o,u,s,c){fn[n].ka.push({xa:M(t),Ca:r,Aa:Wn(e,a),Ba:i,Ia:o,Ha:Wn(u,s),Ja:c})},A:function(n,t){mn(n,{Ea:!0,name:t=M(t),argPackAdvance:0,fromWireType:function(){},toWireType:function(){}})},D:function(n,t,r,e,a){n=Zn[n],t=$(t),r=Yn(r);var i=[];return y[e>>2]=B(i),n(t,r,i,a)},E:function(n,t,r,e){(n=Zn[n])(t=$(t),r=Yn(r),null,e)},f:Rn,s:function(n,t){var r=function(n,t){for(var r=Array(n),e=0;e<n;++e)r[e]=Q(y[t+4*e>>2],"parameter "+e);return r}(n,t),e=r[0];t=e.name+"_$"+r.slice(1).map((function(n){return n.name})).join("_")+"$";var a=Mn[t];if(void 0!==a)return a;var i=Array(n-1);return a=function(n){var t=Zn.length;return Zn.push(n),t}(((t,a,o,u)=>{for(var s=0,c=0;c<n-1;++c)i[c]=r[c+1].readValueFromPointer(u+s),s+=r[c+1].argPackAdvance;for(t=t[a].apply(t,i),c=0;c<n-1;++c)r[c+1].va&&r[c+1].va(i[c]);if(!e.Ea)return e.toWireType(o,t)})),Mn[t]=a},B:function(n){4<n&&(I[n].ia+=1)},C:function(n){ln($(n)),Rn(n)},o:function(){k("")},x:function(n,t,r){h.copyWithin(n,t,t+r)},v:function(n){var t=h.length;if(2147483648<(n>>>=0))return!1;for(var r=1;4>=r;r*=2){var e=t*(1+.2/r);e=Math.min(e,n+100663296);var a=Math;e=Math.max(n,e),a=a.min.call(a,2147483648,e+(65536-e%65536)%65536);n:{try{c.grow(a-f.byteLength+65535>>>16),O();var i=1;break n}catch(n){}i=void 0}if(i)return!0}return!1},w:function(){return 52},t:function(){return 70},p:function(n,t,r,e){for(var a=0,i=0;i<r;i++){var o=y[t>>2],c=y[t+4>>2];t+=8;for(var f=0;f<c;f++){var l=h[o+f],p=Dn[n];0===l||10===l?((1===n?u:s)(b(p,0)),p.length=0):p.push(l)}a+=c}return y[e>>2]=a,0}};!function(){function n(n){r.asm=n.exports,c=r.asm.F,O(),P=r.asm.H,_.unshift(r.asm.G),0==--W&&S&&(n=S,S=null,n())}function t(t){n(t.instance)}function e(n){return("function"==typeof fetch?fetch(A,{credentials:"same-origin"}).then((function(n){if(!n.ok)throw"failed to load wasm binary file at '"+A+"'";return n.arrayBuffer()})).catch((function(){return j()})):Promise.resolve().then((function(){return j()}))).then((function(n){return WebAssembly.instantiate(n,i)})).then((function(n){return n})).then(n,(function(n){s("failed to asynchronously prepare wasm: "+n),k(n)}))}var i={a:Gn};if(W++,r.instantiateWasm)try{return r.instantiateWasm(i,n)}catch(n){s("Module.instantiateWasm callback failed with error: "+n),a(n)}("function"!=typeof WebAssembly.instantiateStreaming||E()||"function"!=typeof fetch?e(t):fetch(A,{credentials:"same-origin"}).then((function(n){return WebAssembly.instantiateStreaming(n,i).then(t,(function(n){return s("wasm streaming compile failed: "+n),s("falling back to ArrayBuffer instantiation"),e(t)}))}))).catch(a)}(),r.___wasm_call_ctors=function(){return(r.___wasm_call_ctors=r.asm.G).apply(null,arguments)};var Jn=r.___getTypeName=function(){return(Jn=r.___getTypeName=r.asm.I).apply(null,arguments)};r.__embind_initialize_bindings=function(){return(r.__embind_initialize_bindings=r.asm.J).apply(null,arguments)};var Ln,Kn=r._malloc=function(){return(Kn=r._malloc=r.asm.K).apply(null,arguments)},Qn=r._free=function(){return(Qn=r._free=r.asm.L).apply(null,arguments)};function nt(){0<W||(R(T),0<W||Ln||(Ln=!0,r.calledRun=!0,w||(R(_),e(r),R(C))))}return r.___cxa_is_pointer_type=function(){return(r.___cxa_is_pointer_type=r.asm.M).apply(null,arguments)},r.dynCall_jiji=function(){return(r.dynCall_jiji=r.asm.N).apply(null,arguments)},S=function n(){Ln||nt(),Ln||(S=n)},nt(),n.ready});function e(n,t){return t}function a(t){return r({instantiateWasm(n,r){WebAssembly.instantiate(t,n).then((n=>{r(n.instance||n)}))}}).then((t=>n(e,t)))}function i(t){return r({instantiateWasm(n,r){WebAssembly.instantiateStreaming(t,n).then((n=>{r(n.instance||n)}))}}).then((t=>n(e,t)))}export{a as default,i as initStreaming};
