import{e as t}from"./index-030f26a8.js";var r,e=(r="undefined"!=typeof document&&document.currentScript?document.currentScript.src:void 0,function(t){var e;t=t||{},e||(e=void 0!==t?t:{});var n,o,i=Object.assign;e.ready=new Promise((function(t,r){n=t,o=r}));var a=i({},e),s="";"undefined"!=typeof document&&document.currentScript&&(s=document.currentScript.src),r&&(s=r),s=0!==s.indexOf("blob:")?s.substr(0,s.replace(/[?#].*/,"").lastIndexOf("/")+1):"";var u,c=console.log.bind(console),f=console.warn.bind(console);i(e,a),a=null,"object"!=typeof WebAssembly&&I("no native wasm support detected");var l,p,h,d,v,y,m,g,b,w,$=!1;function C(t,r,e){for(var n=r+e,o="";!(r>=n);){var i=t[r++];if(!i)return o;if(128&i){var a=63&t[r++];if(192!=(224&i)){var s=63&t[r++];if((i=224==(240&i)?(15&i)<<12|a<<6|s:(7&i)<<18|a<<12|s<<6|63&t[r++])<65536)o+=String.fromCharCode(i);else{var u=i-65536;o+=String.fromCharCode(55296|u>>10,56320|1023&u)}}else o+=String.fromCharCode((31&i)<<6|a)}else o+=String.fromCharCode(i)}return o}function P(t,r){return t?C(h,t,r):""}function T(t,r){for(var e="",n=0;!(n>=r/2);++n){var o=d[t+2*n>>1];if(0==o)break;e+=String.fromCharCode(o)}return e}function _(t,r,e){if(void 0===e&&(e=2147483647),e<2)return 0;for(var n=r,o=(e-=2)<2*t.length?e/2:t.length,i=0;i<o;++i){var a=t.charCodeAt(i);d[r>>1]=a,r+=2}return d[r>>1]=0,r-n}function A(t){return 2*t.length}function W(t,r){for(var e=0,n="";!(e>=r/4);){var o=y[t+4*e>>2];if(0==o)break;if(++e,o>=65536){var i=o-65536;n+=String.fromCharCode(55296|i>>10,56320|1023&i)}else n+=String.fromCharCode(o)}return n}function S(t,r,e){if(void 0===e&&(e=2147483647),e<4)return 0;for(var n=r,o=n+e-4,i=0;i<t.length;++i){var a=t.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++i)),y[r>>2]=a,(r+=4)+4>o)break}return y[r>>2]=0,r-n}function O(t){for(var r=0,e=0;e<t.length;++e){var n=t.charCodeAt(e);n>=55296&&n<=57343&&++e,r+=4}return r}function k(t){l=t,e.HEAP8=p=new Int8Array(t),e.HEAP16=d=new Int16Array(t),e.HEAP32=y=new Int32Array(t),e.HEAPU8=h=new Uint8Array(t),e.HEAPU16=v=new Uint16Array(t),e.HEAPU32=m=new Uint32Array(t),e.HEAPF32=g=new Float32Array(t),e.HEAPF64=b=new Float64Array(t)}var E,F=[],j=[],D=[],U=0,x=null;function I(t){f(t="Aborted("+t+")"),$=!0,t+=". Build with -s ASSERTIONS=1 for more info.";var r=new WebAssembly.RuntimeError(t);throw o(r),r}function V(t){return t.startsWith("data:application/octet-stream;base64,")}function R(t){try{throw"both async and sync fetching of the wasm failed"}catch(t){I(t)}}function H(t){for(;t.length>0;){var r=t.shift();if("function"!=typeof r){var n=r.func;"number"==typeof n?void 0===r.arg?N(n)():N(n)(r.arg):n(void 0===r.arg?null:r.arg)}else r(e)}}function N(t){return w.get(t)}function B(t){this.excPtr=t,this.ptr=t-16,this.set_type=function(t){y[this.ptr+4>>2]=t},this.get_type=function(){return y[this.ptr+4>>2]},this.set_destructor=function(t){y[this.ptr+8>>2]=t},this.get_destructor=function(){return y[this.ptr+8>>2]},this.set_refcount=function(t){y[this.ptr>>2]=t},this.set_caught=function(t){t=t?1:0,p[this.ptr+12>>0]=t},this.get_caught=function(){return 0!=p[this.ptr+12>>0]},this.set_rethrown=function(t){t=t?1:0,p[this.ptr+13>>0]=t},this.get_rethrown=function(){return 0!=p[this.ptr+13>>0]},this.init=function(t,r){this.set_type(t),this.set_destructor(r),this.set_refcount(0),this.set_caught(!1),this.set_rethrown(!1)},this.add_ref=function(){var t=y[this.ptr>>2];y[this.ptr>>2]=t+1},this.release_ref=function(){var t=y[this.ptr>>2];return y[this.ptr>>2]=t-1,1===t}}function M(t){if(void 0===t)return"_unknown";var r=(t=t.replace(/[^a-zA-Z0-9_]/g,"$")).charCodeAt(0);return r>=48&&r<=57?"_"+t:t}function z(t,r){return t=M(t),function(){return r.apply(this,arguments)}}e.preloadedImages={},e.preloadedAudios={},V(E="yoga.wasm")||(E=s+E);var G=[{},{value:void 0},{value:null},{value:!0},{value:!1}],L=[];function q(t,r){var e=z(r,(function(t){this.name=r,this.message=t;var e=new Error(t).stack;void 0!==e&&(this.stack=this.toString()+"\n"+e.replace(/^Error(:[^\n]*)?\n/,""))}));return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.prototype.toString=function(){return void 0===this.message?this.name:this.name+": "+this.message},e}var J=void 0;function Z(t){throw new J(t)}var K=function(t){return t||Z("Cannot use deleted val. handle = "+t),G[t].value},Q=function(t){switch(t){case void 0:return 1;case null:return 2;case!0:return 3;case!1:return 4;default:var r=L.length?L.pop():G.length;return G[r]={refcount:1,value:t},r}},X=void 0,Y=void 0;function tt(t){for(var r="",e=t;h[e];)r+=Y[h[e++]];return r}var rt=[];function et(){for(;rt.length;){var t=rt.pop();t.$$.deleteScheduled=!1,t.delete()}}var nt=void 0;var ot={};function it(t,r){for(void 0===r&&Z("ptr should not be undefined");t.baseClass;)r=t.upcast(r),t=t.baseClass;return r}function at(t,r,e){r=it(t,r),ot.hasOwnProperty(r)?Z("Tried to register registered instance: "+r):ot[r]=e}var st={};function ut(t){var r=Yt(t),e=tt(r);return er(r),e}function ct(t,r){var e=st[t];return void 0===e&&Z(r+" has unknown type "+ut(t)),e}function ft(t){}var lt=!1;function pt(t){t.count.value-=1,0===t.count.value&&function(t){t.smartPtr?t.smartPtrType.rawDestructor(t.smartPtr):t.ptrType.registeredClass.rawDestructor(t.ptr)}(t)}function ht(t){return"undefined"==typeof FinalizationGroup?(ht=function(t){return t},t):(lt=new FinalizationGroup((function(t){for(var r=t.next();!r.done;r=t.next()){var e=r.value;e.ptr?pt(e):console.warn("object already deleted: "+e.ptr)}})),ht=function(t){return lt.register(t,t.$$,t.$$),t},ft=function(t){lt.unregister(t.$$)},ht(t))}var dt={};function vt(t){for(;t.length;){var r=t.pop();t.pop()(r)}}function yt(t){return this.fromWireType(m[t>>2])}var mt={},gt={},bt=void 0;function wt(t){throw new bt(t)}function $t(t,r,e){function n(r){var n=e(r);n.length!==t.length&&wt("Mismatched type converter count");for(var o=0;o<t.length;++o)Pt(t[o],n[o])}t.forEach((function(t){gt[t]=r}));var o=new Array(r.length),i=[],a=0;r.forEach((function(t,r){st.hasOwnProperty(t)?o[r]=st[t]:(i.push(t),mt.hasOwnProperty(t)||(mt[t]=[]),mt[t].push((function(){o[r]=st[t],++a===i.length&&n(o)})))})),0===i.length&&n(o)}function Ct(t){switch(t){case 1:return 0;case 2:return 1;case 4:return 2;case 8:return 3;default:throw new TypeError("Unknown type size: "+t)}}function Pt(t,r,e){if(e=e||{},!("argPackAdvance"in r))throw new TypeError("registerType registeredInstance requires argPackAdvance");var n=r.name;if(t||Z('type "'+n+'" must have a positive integer typeid pointer'),st.hasOwnProperty(t)){if(e.ignoreDuplicateRegistrations)return;Z("Cannot register type '"+n+"' twice")}if(st[t]=r,delete gt[t],mt.hasOwnProperty(t)){var o=mt[t];delete mt[t],o.forEach((function(t){t()}))}}function Tt(t){Z(t.$$.ptrType.registeredClass.name+" instance already deleted")}function _t(){}var At={};function Wt(t,r,e){if(void 0===t[r].overloadTable){var n=t[r];t[r]=function(){return t[r].overloadTable.hasOwnProperty(arguments.length)||Z("Function '"+e+"' called with an invalid number of arguments ("+arguments.length+") - expects one of ("+t[r].overloadTable+")!"),t[r].overloadTable[arguments.length].apply(this,arguments)},t[r].overloadTable=[],t[r].overloadTable[n.argCount]=n}}function St(t,r,e,n,o,i,a,s){this.name=t,this.constructor=r,this.instancePrototype=e,this.rawDestructor=n,this.baseClass=o,this.getActualType=i,this.upcast=a,this.downcast=s,this.pureVirtualFunctions=[]}function Ot(t,r,e){for(;r!==e;)r.upcast||Z("Expected null or instance of "+e.name+", got an instance of "+r.name),t=r.upcast(t),r=r.baseClass;return t}function kt(t,r){if(null===r)return this.isReference&&Z("null is not a valid "+this.name),0;r.$$||Z('Cannot pass "'+Mt(r)+'" as a '+this.name),r.$$.ptr||Z("Cannot pass deleted object as a pointer of type "+this.name);var e=r.$$.ptrType.registeredClass;return Ot(r.$$.ptr,e,this.registeredClass)}function Et(t,r){var e;if(null===r)return this.isReference&&Z("null is not a valid "+this.name),this.isSmartPointer?(e=this.rawConstructor(),null!==t&&t.push(this.rawDestructor,e),e):0;r.$$||Z('Cannot pass "'+Mt(r)+'" as a '+this.name),r.$$.ptr||Z("Cannot pass deleted object as a pointer of type "+this.name),!this.isConst&&r.$$.ptrType.isConst&&Z("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);var n=r.$$.ptrType.registeredClass;if(e=Ot(r.$$.ptr,n,this.registeredClass),this.isSmartPointer)switch(void 0===r.$$.smartPtr&&Z("Passing raw pointer to smart pointer is illegal"),this.sharingPolicy){case 0:r.$$.smartPtrType===this?e=r.$$.smartPtr:Z("Cannot convert argument of type "+(r.$$.smartPtrType?r.$$.smartPtrType.name:r.$$.ptrType.name)+" to parameter type "+this.name);break;case 1:e=r.$$.smartPtr;break;case 2:if(r.$$.smartPtrType===this)e=r.$$.smartPtr;else{var o=r.clone();e=this.rawShare(e,Q((function(){o.delete()}))),null!==t&&t.push(this.rawDestructor,e)}break;default:Z("Unsupporting sharing policy")}return e}function Ft(t,r){if(null===r)return this.isReference&&Z("null is not a valid "+this.name),0;r.$$||Z('Cannot pass "'+Mt(r)+'" as a '+this.name),r.$$.ptr||Z("Cannot pass deleted object as a pointer of type "+this.name),r.$$.ptrType.isConst&&Z("Cannot convert argument of type "+r.$$.ptrType.name+" to parameter type "+this.name);var e=r.$$.ptrType.registeredClass;return Ot(r.$$.ptr,e,this.registeredClass)}function jt(t,r,e){if(r===e)return t;if(void 0===e.baseClass)return null;var n=jt(t,r,e.baseClass);return null===n?null:e.downcast(n)}function Dt(t,r){return r.ptrType&&r.ptr||wt("makeClassHandle requires ptr and ptrType"),!!r.smartPtrType!=!!r.smartPtr&&wt("Both smartPtrType and smartPtr must be specified"),r.count={value:1},ht(Object.create(t,{$$:{value:r}}))}function Ut(t,r,e,n,o,i,a,s,u,c,f){this.name=t,this.registeredClass=r,this.isReference=e,this.isConst=n,this.isSmartPointer=o,this.pointeeType=i,this.sharingPolicy=a,this.rawGetPointee=s,this.rawConstructor=u,this.rawShare=c,this.rawDestructor=f,o||void 0!==r.baseClass?this.toWireType=Et:n?(this.toWireType=kt,this.destructorFunction=null):(this.toWireType=Ft,this.destructorFunction=null)}function xt(t,r,n){return t.includes("j")?function(t,r,n){var o=e["dynCall_"+t];return n&&n.length?o.apply(null,[r].concat(n)):o.call(null,r)}(t,r,n):N(r).apply(null,n)}function It(t,r){var e,n,o,i=(t=tt(t)).includes("j")?(e=t,n=r,o=[],function(){o.length=arguments.length;for(var t=0;t<arguments.length;t++)o[t]=arguments[t];return xt(e,n,o)}):N(r);return"function"!=typeof i&&Z("unknown function pointer with signature "+t+": "+r),i}var Vt=void 0;function Rt(t,r){var e=[],n={};throw r.forEach((function t(r){n[r]||st[r]||(gt[r]?gt[r].forEach(t):(e.push(r),n[r]=!0))})),new Vt(t+": "+e.map(ut).join([", "]))}function Ht(t,r,e,n,o){var i=r.length;i<2&&Z("argTypes array size mismatch! Must at least get return value and 'this' types!");for(var a=null!==r[1]&&null!==e,s=!1,u=1;u<r.length;++u)if(null!==r[u]&&void 0===r[u].destructorFunction){s=!0;break}var c="void"!==r[0].name,f=i-2,l=new Array(f),p=[],h=[];return function(){var e;arguments.length!==f&&Z("function "+t+" called with "+arguments.length+" arguments, expected "+f+" args!"),h.length=0,p.length=a?2:1,p[0]=o,a&&(e=r[1].toWireType(h,this),p[1]=e);for(var i=0;i<f;++i)l[i]=r[i+2].toWireType(h,arguments[i]),p.push(l[i]);var u=n.apply(null,p);function d(t){if(s)vt(h);else for(var n=a?1:2;n<r.length;n++){var o=1===n?e:l[n-2];null!==r[n].destructorFunction&&r[n].destructorFunction(o)}if(c)return r[0].fromWireType(t)}return d(u)}}function Nt(t,r){for(var e=[],n=0;n<t;n++)e.push(y[(r>>2)+n]);return e}function Bt(t){t>4&&0==--G[t].refcount&&(G[t]=void 0,L.push(t))}function Mt(t){if(null===t)return"null";var r=typeof t;return"object"===r||"array"===r||"function"===r?t.toString():""+t}function zt(t,r){switch(r){case 2:return function(t){return this.fromWireType(g[t>>2])};case 3:return function(t){return this.fromWireType(b[t>>3])};default:throw new TypeError("Unknown float type: "+t)}}function Gt(t,r,e){switch(r){case 0:return e?function(t){return p[t]}:function(t){return h[t]};case 1:return e?function(t){return d[t>>1]}:function(t){return v[t>>1]};case 2:return e?function(t){return y[t>>2]}:function(t){return m[t>>2]};default:throw new TypeError("Unknown integer type: "+t)}}var Lt={};function qt(t){var r=Lt[t];return void 0===r?tt(t):r}var Jt=[],Zt=[];function Kt(t){try{return u.grow(t-l.byteLength+65535>>>16),k(u.buffer),1}catch(t){}}var Qt={mappings:{},buffers:[null,[],[]],printChar:function(t,r){var e=Qt.buffers[t];0===r||10===r?((1===t?c:f)(C(e,0)),e.length=0):e.push(r)},varargs:void 0,get:function(){return Qt.varargs+=4,y[Qt.varargs-4>>2]},getStr:function(t){return P(t)},get64:function(t,r){return t}};J=e.BindingError=q(Error,"BindingError"),e.count_emval_handles=function(){for(var t=0,r=5;r<G.length;++r)void 0!==G[r]&&++t;return t},e.get_first_emval=function(){for(var t=5;t<G.length;++t)if(void 0!==G[t])return G[t];return null},X=e.PureVirtualError=q(Error,"PureVirtualError"),function(){for(var t=new Array(256),r=0;r<256;++r)t[r]=String.fromCharCode(r);Y=t}(),e.getInheritedInstanceCount=function(){return Object.keys(ot).length},e.getLiveInheritedInstances=function(){var t=[];for(var r in ot)ot.hasOwnProperty(r)&&t.push(ot[r]);return t},e.flushPendingDeletes=et,e.setDelayFunction=function(t){nt=t,rt.length&&nt&&nt(et)},bt=e.InternalError=q(Error,"InternalError"),_t.prototype.isAliasOf=function(t){if(!(this instanceof _t))return!1;if(!(t instanceof _t))return!1;for(var r=this.$$.ptrType.registeredClass,e=this.$$.ptr,n=t.$$.ptrType.registeredClass,o=t.$$.ptr;r.baseClass;)e=r.upcast(e),r=r.baseClass;for(;n.baseClass;)o=n.upcast(o),n=n.baseClass;return r===n&&e===o},_t.prototype.clone=function(){if(this.$$.ptr||Tt(this),this.$$.preservePointerOnDelete)return this.$$.count.value+=1,this;var t,r=ht(Object.create(Object.getPrototypeOf(this),{$$:{value:(t=this.$$,{count:t.count,deleteScheduled:t.deleteScheduled,preservePointerOnDelete:t.preservePointerOnDelete,ptr:t.ptr,ptrType:t.ptrType,smartPtr:t.smartPtr,smartPtrType:t.smartPtrType})}}));return r.$$.count.value+=1,r.$$.deleteScheduled=!1,r},_t.prototype.delete=function(){this.$$.ptr||Tt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Z("Object already scheduled for deletion"),ft(this),pt(this.$$),this.$$.preservePointerOnDelete||(this.$$.smartPtr=void 0,this.$$.ptr=void 0)},_t.prototype.isDeleted=function(){return!this.$$.ptr},_t.prototype.deleteLater=function(){return this.$$.ptr||Tt(this),this.$$.deleteScheduled&&!this.$$.preservePointerOnDelete&&Z("Object already scheduled for deletion"),rt.push(this),1===rt.length&&nt&&nt(et),this.$$.deleteScheduled=!0,this},Ut.prototype.getPointee=function(t){return this.rawGetPointee&&(t=this.rawGetPointee(t)),t},Ut.prototype.destructor=function(t){this.rawDestructor&&this.rawDestructor(t)},Ut.prototype.argPackAdvance=8,Ut.prototype.readValueFromPointer=yt,Ut.prototype.deleteObject=function(t){null!==t&&t.delete()},Ut.prototype.fromWireType=function(t){var r=this.getPointee(t);if(!r)return this.destructor(t),null;var e=function(t,r){return r=it(t,r),ot[r]}(this.registeredClass,r);if(void 0!==e){if(0===e.$$.count.value)return e.$$.ptr=r,e.$$.smartPtr=t,e.clone();var n=e.clone();return this.destructor(t),n}function o(){return this.isSmartPointer?Dt(this.registeredClass.instancePrototype,{ptrType:this.pointeeType,ptr:r,smartPtrType:this,smartPtr:t}):Dt(this.registeredClass.instancePrototype,{ptrType:this,ptr:t})}var i,a=this.registeredClass.getActualType(r),s=At[a];if(!s)return o.call(this);i=this.isConst?s.constPointerType:s.pointerType;var u=jt(r,this.registeredClass,i.registeredClass);return null===u?o.call(this):this.isSmartPointer?Dt(i.registeredClass.instancePrototype,{ptrType:i,ptr:u,smartPtrType:this,smartPtr:t}):Dt(i.registeredClass.instancePrototype,{ptrType:i,ptr:u})},Vt=e.UnboundTypeError=q(Error,"UnboundTypeError");var Xt={j:function(){f("missing function: _ZN8facebook4yoga24LayoutPassReasonToStringENS0_16LayoutPassReasonE"),I(-1)},s:function(t){return rr(t+16)+16},r:function(t,r,e){throw new B(t).init(r,e),t},k:function(t,r,e){t=tt(t),r=ct(r,"wrapper"),e=K(e);var n=[].slice,o=r.registeredClass,i=o.instancePrototype,a=o.baseClass.instancePrototype,s=o.baseClass.constructor,u=z(t,(function(){o.baseClass.pureVirtualFunctions.forEach(function(t){if(this[t]===a[t])throw new X("Pure virtual function "+t+" must be implemented in JavaScript")}.bind(this)),Object.defineProperty(this,"__parent",{value:i}),this.__construct.apply(this,n.call(arguments))}));for(var c in i.__construct=function(){this===i&&Z("Pass correct 'this' to __construct");var t=s.implement.apply(void 0,[this].concat(n.call(arguments)));ft(t);var r=t.$$;t.notifyOnDestruction(),r.preservePointerOnDelete=!0,Object.defineProperties(this,{$$:{value:r}}),ht(this),at(o,r.ptr,this)},i.__destruct=function(){var t;this===i&&Z("Pass correct 'this' to __destruct"),ft(this),t=it(o,t=this.$$.ptr),ot.hasOwnProperty(t)?delete ot[t]:Z("Tried to unregister unregistered instance: "+t)},u.prototype=Object.create(i),e)u.prototype[c]=e[c];return Q(u)},g:function(t){var r=dt[t];delete dt[t];var e=r.rawConstructor,n=r.rawDestructor,o=r.fields;$t([t],o.map((function(t){return t.getterReturnType})).concat(o.map((function(t){return t.setterArgumentType}))),(function(t){var i={};return o.forEach((function(r,e){var n=r.fieldName,a=t[e],s=r.getter,u=r.getterContext,c=t[e+o.length],f=r.setter,l=r.setterContext;i[n]={read:function(t){return a.fromWireType(s(u,t))},write:function(t,r){var e=[];f(l,t,c.toWireType(e,r)),vt(e)}}})),[{name:r.name,fromWireType:function(t){var r={};for(var e in i)r[e]=i[e].read(t);return n(t),r},toWireType:function(t,r){for(var o in i)if(!(o in r))throw new TypeError('Missing field:  "'+o+'"');var a=e();for(o in i)i[o].write(a,r[o]);return null!==t&&t.push(n,a),a},argPackAdvance:8,readValueFromPointer:yt,destructorFunction:n}]}))},u:function(t,r,e,n,o){},A:function(t,r,e,n,o){var i=Ct(e);Pt(t,{name:r=tt(r),fromWireType:function(t){return!!t},toWireType:function(t,r){return r?n:o},argPackAdvance:8,readValueFromPointer:function(t){var n;if(1===e)n=p;else if(2===e)n=d;else{if(4!==e)throw new TypeError("Unknown boolean type size: "+r);n=y}return this.fromWireType(n[t>>i])},destructorFunction:null})},e:function(t,r,n,o,i,a,s,u,c,f,l,p,h){l=tt(l),a=It(i,a),u&&(u=It(s,u)),f&&(f=It(c,f)),h=It(p,h);var d=M(l);!function(t,r,n){e.hasOwnProperty(t)?(Z("Cannot register public name '"+t+"' twice"),Wt(e,t,t),e.hasOwnProperty(n)&&Z("Cannot register multiple overloads of a function with the same number of arguments ("+n+")!"),e[t].overloadTable[void 0]=r):e[t]=r}(d,(function(){Rt("Cannot construct "+l+" due to unbound types",[o])})),$t([t,r,n],o?[o]:[],(function(r){var n,i;r=r[0],i=o?(n=r.registeredClass).instancePrototype:_t.prototype;var s=z(d,(function(){if(Object.getPrototypeOf(this)!==c)throw new J("Use 'new' to construct "+l);if(void 0===p.constructor_body)throw new J(l+" has no accessible constructor");var t=p.constructor_body[arguments.length];if(void 0===t)throw new J("Tried to invoke ctor of "+l+" with invalid number of parameters ("+arguments.length+") - expected ("+Object.keys(p.constructor_body).toString()+") parameters instead!");return t.apply(this,arguments)})),c=Object.create(i,{constructor:{value:s}});s.prototype=c;var p=new St(l,s,c,h,n,a,u,f),v=new Ut(l,p,!0,!1,!1),y=new Ut(l+"*",p,!1,!1,!1),m=new Ut(l+" const*",p,!1,!0,!1);return At[t]={pointerType:y,constPointerType:m},function(t,r,n){e.hasOwnProperty(t)||wt("Replacing nonexistant public symbol"),e[t].overloadTable,e[t]=r,e[t].argCount=n}(d,s),[v,y,m]}))},c:function(t,r,e,n,o,i,a){var s=Nt(e,n);r=tt(r),i=It(o,i),$t([],[t],(function(t){var n=(t=t[0]).name+"."+r;function o(){Rt("Cannot call "+n+" due to unbound types",s)}r.startsWith("@@")&&(r=Symbol[r.substring(2)]);var u=t.registeredClass.constructor;return void 0===u[r]?(o.argCount=e-1,u[r]=o):(Wt(u,r,n),u[r].overloadTable[e-1]=o),$t([],s,(function(t){var o=[t[0],null].concat(t.slice(1)),s=Ht(n,o,null,i,a);return void 0===u[r].overloadTable?(s.argCount=e-1,u[r]=s):u[r].overloadTable[e-1]=s,[]})),[]}))},p:function(t,r,e,n,o,i){r>0||I(undefined);var a=Nt(r,e);o=It(n,o),$t([],[t],(function(t){var e="constructor "+(t=t[0]).name;if(void 0===t.registeredClass.constructor_body&&(t.registeredClass.constructor_body=[]),void 0!==t.registeredClass.constructor_body[r-1])throw new J("Cannot register multiple constructors with identical number of parameters ("+(r-1)+") for class '"+t.name+"'! Overload resolution is currently only performed using the parameter count, not actual type info!");return t.registeredClass.constructor_body[r-1]=function(){Rt("Cannot construct "+t.name+" due to unbound types",a)},$t([],a,(function(n){return n.splice(1,0,null),t.registeredClass.constructor_body[r-1]=Ht(e,n,null,o,i),[]})),[]}))},a:function(t,r,e,n,o,i,a,s){var u=Nt(e,n);r=tt(r),i=It(o,i),$t([],[t],(function(t){var n=(t=t[0]).name+"."+r;function o(){Rt("Cannot call "+n+" due to unbound types",u)}r.startsWith("@@")&&(r=Symbol[r.substring(2)]),s&&t.registeredClass.pureVirtualFunctions.push(r);var c=t.registeredClass.instancePrototype,f=c[r];return void 0===f||void 0===f.overloadTable&&f.className!==t.name&&f.argCount===e-2?(o.argCount=e-2,o.className=t.name,c[r]=o):(Wt(c,r,n),c[r].overloadTable[e-2]=o),$t([],u,(function(o){var s=Ht(n,o,t,i,a);return void 0===c[r].overloadTable?(s.argCount=e-2,c[r]=s):c[r].overloadTable[e-2]=s,[]})),[]}))},z:function(t,r){Pt(t,{name:r=tt(r),fromWireType:function(t){var r=K(t);return Bt(t),r},toWireType:function(t,r){return Q(r)},argPackAdvance:8,readValueFromPointer:yt,destructorFunction:null})},o:function(t,r,e){var n=Ct(e);Pt(t,{name:r=tt(r),fromWireType:function(t){return t},toWireType:function(t,r){return r},argPackAdvance:8,readValueFromPointer:zt(r,n),destructorFunction:null})},d:function(t,r,e,n,o){r=tt(r);var i=Ct(e),a=function(t){return t};if(0===n){var s=32-8*e;a=function(t){return t<<s>>>s}}var u=r.includes("unsigned");Pt(t,{name:r,fromWireType:a,toWireType:u?function(t,r){return this.name,r>>>0}:function(t,r){return this.name,r},argPackAdvance:8,readValueFromPointer:Gt(r,i,0!==n),destructorFunction:null})},b:function(t,r,e){var n=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array][r];function o(t){var r=m,e=r[t>>=2],o=r[t+1];return new n(l,o,e)}Pt(t,{name:e=tt(e),fromWireType:o,argPackAdvance:8,readValueFromPointer:o},{ignoreDuplicateRegistrations:!0})},n:function(t,r){var e="std::string"===(r=tt(r));Pt(t,{name:r,fromWireType:function(t){var r,n=m[t>>2];if(e)for(var o=t+4,i=0;i<=n;++i){var a=t+4+i;if(i==n||0==h[a]){var s=P(o,a-o);void 0===r?r=s:(r+=String.fromCharCode(0),r+=s),o=a+1}}else{var u=new Array(n);for(i=0;i<n;++i)u[i]=String.fromCharCode(h[t+4+i]);r=u.join("")}return er(t),r},toWireType:function(t,r){var n;r instanceof ArrayBuffer&&(r=new Uint8Array(r));var o="string"==typeof r;o||r instanceof Uint8Array||r instanceof Uint8ClampedArray||r instanceof Int8Array||Z("Cannot pass non-string to std::string"),n=e&&o?function(){return function(t){for(var r=0,e=0;e<t.length;++e){var n=t.charCodeAt(e);n>=55296&&n<=57343&&(n=65536+((1023&n)<<10)|1023&t.charCodeAt(++e)),n<=127?++r:r+=n<=2047?2:n<=65535?3:4}return r}(r)}:function(){return r.length};var i=n(),a=rr(4+i+1);if(m[a>>2]=i,e&&o)!function(t,r,e,n){if(!(n>0))return 0;for(var o=e+n-1,i=0;i<t.length;++i){var a=t.charCodeAt(i);if(a>=55296&&a<=57343&&(a=65536+((1023&a)<<10)|1023&t.charCodeAt(++i)),a<=127){if(e>=o)break;r[e++]=a}else if(a<=2047){if(e+1>=o)break;r[e++]=192|a>>6,r[e++]=128|63&a}else if(a<=65535){if(e+2>=o)break;r[e++]=224|a>>12,r[e++]=128|a>>6&63,r[e++]=128|63&a}else{if(e+3>=o)break;r[e++]=240|a>>18,r[e++]=128|a>>12&63,r[e++]=128|a>>6&63,r[e++]=128|63&a}}r[e]=0}(r,h,a+4,i+1);else if(o)for(var s=0;s<i;++s){var u=r.charCodeAt(s);u>255&&(er(a),Z("String has UTF-16 code units that do not fit in 8 bits")),h[a+4+s]=u}else for(s=0;s<i;++s)h[a+4+s]=r[s];return null!==t&&t.push(er,a),a},argPackAdvance:8,readValueFromPointer:yt,destructorFunction:function(t){er(t)}})},i:function(t,r,e){var n,o,i,a,s;e=tt(e),2===r?(n=T,o=_,a=A,i=function(){return v},s=1):4===r&&(n=W,o=S,a=O,i=function(){return m},s=2),Pt(t,{name:e,fromWireType:function(t){for(var e,o=m[t>>2],a=i(),u=t+4,c=0;c<=o;++c){var f=t+4+c*r;if(c==o||0==a[f>>s]){var l=n(u,f-u);void 0===e?e=l:(e+=String.fromCharCode(0),e+=l),u=f+r}}return er(t),e},toWireType:function(t,n){"string"!=typeof n&&Z("Cannot pass non-string to C++ string type "+e);var i=a(n),u=rr(4+i+r);return m[u>>2]=i>>s,o(n,u+4,i+r),null!==t&&t.push(er,u),u},argPackAdvance:8,readValueFromPointer:yt,destructorFunction:function(t){er(t)}})},h:function(t,r,e,n,o,i){dt[t]={name:tt(r),rawConstructor:It(e,n),rawDestructor:It(o,i),fields:[]}},f:function(t,r,e,n,o,i,a,s,u,c){dt[t].fields.push({fieldName:tt(r),getterReturnType:e,getter:It(n,o),getterContext:i,setterArgumentType:a,setter:It(s,u),setterContext:c})},B:function(t,r){Pt(t,{isVoid:!0,name:r=tt(r),argPackAdvance:0,fromWireType:function(){},toWireType:function(t,r){}})},E:function(t,r,e,n,o){return(t=Jt[t])(r=K(r),e=qt(e),function(t){var r=[];return y[t>>2]=Q(r),r}(n),o)},F:function(t,r,e,n){(t=Jt[t])(r=K(r),e=qt(e),null,n)},G:Bt,q:function(t,r){var e=function(t,r){for(var e=new Array(t),n=0;n<t;++n)e[n]=ct(y[(r>>2)+n],"parameter "+n);return e}(t,r),n=e[0],o=n.name+"_$"+e.slice(1).map((function(t){return t.name})).join("_")+"$",i=Zt[o];if(void 0!==i)return i;var a,s,u=new Array(t-1);return a=function(r,o,i,a){for(var s=0,c=0;c<t-1;++c)u[c]=e[c+1].readValueFromPointer(a+s),s+=e[c+1].argPackAdvance;var f=r[o].apply(r,u);for(c=0;c<t-1;++c)e[c+1].deleteObject&&e[c+1].deleteObject(u[c]);if(!n.isVoid)return n.toWireType(i,f)},s=Jt.length,Jt.push(a),i=s,Zt[o]=i,i},C:function(t){t>4&&(G[t].refcount+=1)},D:function(t){vt(K(t)),Bt(t)},l:function(){I("")},w:function(t,r,e){h.copyWithin(t,r,r+e)},x:function(t){var r,e=h.length,n=2147483648;if((t>>>=0)>n)return!1;for(var o=1;o<=4;o*=2){var i=e*(1+.2/o);if(i=Math.min(i,t+100663296),Kt(Math.min(n,((r=Math.max(t,i))%65536>0&&(r+=65536-r%65536),r))))return!0}return!1},y:function(t){return 0},t:function(t,r,e,n,o){},m:function(t,r,e,n){for(var o=0,i=0;i<e;i++){var a=y[r>>2],s=y[r+4>>2];r+=8;for(var u=0;u<s;u++)Qt.printChar(t,h[a+u]);o+=s}return y[n>>2]=o,0},v:function(t){}};!function(){var t={a:Xt};function r(t,r){var n,o=t.exports;e.asm=o,k((u=e.asm.H).buffer),w=e.asm.J,n=e.asm.I,j.unshift(n),function(t){if(0==--U&&x){var r=x;x=null,r()}}()}function n(t){r(t.instance)}function i(r){return("function"==typeof fetch?fetch(E,{credentials:"same-origin"}).then((function(t){if(!t.ok)throw"failed to load wasm binary file at '"+E+"'";return t.arrayBuffer()})).catch((function(){return R()})):Promise.resolve().then((function(){return R()}))).then((function(r){return WebAssembly.instantiate(r,t)})).then((function(t){return t})).then(r,(function(t){f("failed to asynchronously prepare wasm: "+t),I(t)}))}if(U++,e.instantiateWasm)try{return e.instantiateWasm(t,r)}catch(t){return f("Module.instantiateWasm callback failed with error: "+t),!1}("function"!=typeof WebAssembly.instantiateStreaming||V(E)||"function"!=typeof fetch?i(n):fetch(E,{credentials:"same-origin"}).then((function(r){return WebAssembly.instantiateStreaming(r,t).then(n,(function(t){return f("wasm streaming compile failed: "+t),f("falling back to ArrayBuffer instantiation"),i(n)}))}))).catch(o)}(),e.___wasm_call_ctors=function(){return(e.___wasm_call_ctors=e.asm.I).apply(null,arguments)};var Yt=e.___getTypeName=function(){return(Yt=e.___getTypeName=e.asm.K).apply(null,arguments)};e.___embind_register_native_and_builtin_types=function(){return(e.___embind_register_native_and_builtin_types=e.asm.L).apply(null,arguments)};var tr,rr=e._malloc=function(){return(rr=e._malloc=e.asm.M).apply(null,arguments)},er=e._free=function(){return(er=e._free=e.asm.N).apply(null,arguments)};function nr(t){U>0||(H(F),U>0||tr||(tr=!0,e.calledRun=!0,$||(H(j),n(e),H(D))))}return e.dynCall_jiji=function(){return(e.dynCall_jiji=e.asm.O).apply(null,arguments)},x=function t(){tr||nr(),tr||(x=t)},e.run=nr,nr(),t.ready});function n(t,r){return r}function o(r){return e({instantiateWasm(t,e){WebAssembly.instantiate(r,t).then((t=>{e(t.instance||t)}))}}).then((r=>t(n,r)))}function i(r){return e({instantiateWasm(t,e){WebAssembly.instantiateStreaming(r,t).then((t=>{e(t.instance||t)}))}}).then((r=>t(n,r)))}export{o as default,i as initStreaming};
