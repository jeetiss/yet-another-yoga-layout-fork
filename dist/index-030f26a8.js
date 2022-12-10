var t={ALIGN_COUNT:8,ALIGN_AUTO:0,ALIGN_FLEX_START:1,ALIGN_CENTER:2,ALIGN_FLEX_END:3,ALIGN_STRETCH:4,ALIGN_BASELINE:5,ALIGN_SPACE_BETWEEN:6,ALIGN_SPACE_AROUND:7,DIMENSION_COUNT:2,DIMENSION_WIDTH:0,DIMENSION_HEIGHT:1,DIRECTION_COUNT:3,DIRECTION_INHERIT:0,DIRECTION_LTR:1,DIRECTION_RTL:2,DISPLAY_COUNT:2,DISPLAY_FLEX:0,DISPLAY_NONE:1,EDGE_COUNT:9,EDGE_LEFT:0,EDGE_TOP:1,EDGE_RIGHT:2,EDGE_BOTTOM:3,EDGE_START:4,EDGE_END:5,EDGE_HORIZONTAL:6,EDGE_VERTICAL:7,EDGE_ALL:8,EXPERIMENTAL_FEATURE_COUNT:1,EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS:0,FLEX_DIRECTION_COUNT:4,FLEX_DIRECTION_COLUMN:0,FLEX_DIRECTION_COLUMN_REVERSE:1,FLEX_DIRECTION_ROW:2,FLEX_DIRECTION_ROW_REVERSE:3,GUTTER_COUNT:3,GUTTER_COLUMN:0,GUTTER_ROW:1,GUTTER_ALL:2,JUSTIFY_COUNT:6,JUSTIFY_FLEX_START:0,JUSTIFY_CENTER:1,JUSTIFY_FLEX_END:2,JUSTIFY_SPACE_BETWEEN:3,JUSTIFY_SPACE_AROUND:4,JUSTIFY_SPACE_EVENLY:5,LOG_LEVEL_COUNT:6,LOG_LEVEL_ERROR:0,LOG_LEVEL_WARN:1,LOG_LEVEL_INFO:2,LOG_LEVEL_DEBUG:3,LOG_LEVEL_VERBOSE:4,LOG_LEVEL_FATAL:5,MEASURE_MODE_COUNT:3,MEASURE_MODE_UNDEFINED:0,MEASURE_MODE_EXACTLY:1,MEASURE_MODE_AT_MOST:2,NODE_TYPE_COUNT:2,NODE_TYPE_DEFAULT:0,NODE_TYPE_TEXT:1,OVERFLOW_COUNT:3,OVERFLOW_VISIBLE:0,OVERFLOW_HIDDEN:1,OVERFLOW_SCROLL:2,POSITION_TYPE_COUNT:3,POSITION_TYPE_STATIC:0,POSITION_TYPE_RELATIVE:1,POSITION_TYPE_ABSOLUTE:2,PRINT_OPTIONS_COUNT:3,PRINT_OPTIONS_LAYOUT:1,PRINT_OPTIONS_STYLE:2,PRINT_OPTIONS_CHILDREN:4,UNIT_COUNT:4,UNIT_UNDEFINED:0,UNIT_POINT:1,UNIT_PERCENT:2,UNIT_AUTO:3,WRAP_COUNT:3,WRAP_NO_WRAP:0,WRAP_WRAP:1,WRAP_WRAP_REVERSE:2};class E{left;right;top;bottom;width;height;constructor(t,E,e,i,_,N){this.left=t,this.right=E,this.top=e,this.bottom=i,this.width=_,this.height=N}fromJS(t){t(this.left,this.right,this.top,this.bottom,this.width,this.height)}toString(){return`<Layout#${this.left}:${this.right};${this.top}:${this.bottom};${this.width}:${this.height}>`}}class e{static fromJS({width:t,height:E}){return new e(t,E)}width;height;constructor(t,E){this.width=t,this.height=E}fromJS(t){t(this.width,this.height)}toString(){return`<Size#${this.width}x${this.height}>`}}class i{unit;value;constructor(t,E){this.unit=t,this.value=E}fromJS(t){t(this.unit,this.value)}toString(){switch(this.unit){case t.UNIT_POINT:return String(this.value);case t.UNIT_PERCENT:return`${this.value}%`;case t.UNIT_AUTO:return"auto";default:return`${this.value}?`}}valueOf(){return this.value}}function _(t,E,e){let i=t[E];t[E]=function(...t){return e.call(this,i,...t)}}var N=(N,T)=>{for(let E of["setPosition","setMargin","setFlexBasis","setWidth","setHeight","setMinWidth","setMinHeight","setMaxWidth","setMaxHeight","setPadding"]){let e={[t.UNIT_POINT]:T.Node.prototype[E],[t.UNIT_PERCENT]:T.Node.prototype[`${E}Percent`],[t.UNIT_AUTO]:T.Node.prototype[`${E}Auto`]};_(T.Node.prototype,E,(function(_,...N){let T,o,O=N.pop();if("auto"===O)T=t.UNIT_AUTO,o=void 0;else if(O instanceof i)T=O.unit,o=O.valueOf();else if(T="string"==typeof O&&O.endsWith("%")?t.UNIT_PERCENT:t.UNIT_POINT,o=parseFloat(O),!Number.isNaN(O)&&Number.isNaN(o))throw new Error(`Invalid value ${O} for ${E}`);if(!e[T])throw new Error(`Failed to execute "${E}": Unsupported unit '${O}'`);return void 0!==o?e[T].call(this,...N,o):e[T].call(this,...N)}))}return _(T.Config.prototype,"free",(function(){T.Config.destroy(this)})),_(T.Node,"create",(function(t,E){return E?T.Node.createWithConfig(E):T.Node.createDefault()})),_(T.Node.prototype,"free",(function(){T.Node.destroy(this)})),_(T.Node.prototype,"freeRecursive",(function(){for(let t=0,E=this.getChildCount();t<E;++t)this.getChild(0).freeRecursive();this.free()})),_(T.Node.prototype,"setMeasureFunc",(function(t,E){var e;t.call(this,(e=E,T.MeasureCallback.implement({measure:(...t)=>{const{width:E,height:i}=e(...t);return{width:E??0,height:i??0}}})))})),_(T.Node.prototype,"setDirtiedFunc",(function(t,E){var e;t.call(this,(e=E,T.DirtiedCallback.implement({dirtied:e})))})),_(T.Node.prototype,"calculateLayout",(function(E,e=NaN,i=NaN,_=t.DIRECTION_LTR){return E.call(this,e,i,_)})),{Config:T.Config,Node:T.Node,Layout:N("Layout",E),Size:N("Size",e),Value:N("Value",i),...t}};export{N as e};