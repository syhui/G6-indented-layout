var p={}.toString,s=function(t,e){return p.call(t)==="[object "+e+"]"};const f=function(t){return s(t,"Function")},l=function(t){return Array.isArray?Array.isArray(t):s(t,"Array")},v=function(t){var e=typeof t;return t!==null&&e==="object"||e==="function"};function y(t,e){if(t){var r;if(l(t))for(var n=0,i=t.length;n<i&&(r=e(t[n],n),r!==!1);n++);else if(v(t)){for(var h in t)if(t.hasOwnProperty(h)&&(r=e(t[h],h),r===!1))break}}}const m=function(t){return s(t,"String")};var d=Object.values?function(t){return Object.values(t)}:function(t){var e=[];return y(t,function(r,n){f(t)&&n==="prototype"||e.push(r)}),e};function u(t,e){for(var r in e)e.hasOwnProperty(r)&&r!=="constructor"&&e[r]!==void 0&&(t[r]=e[r])}function x(t,e,r,n){return e&&u(t,e),r&&u(t,r),n&&u(t,n),t}const w=function(t,e){if(!f(t))throw new TypeError("Expected a function");var r=function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var h=e?e.apply(this,n):n[0],a=r.cache;if(a.has(h))return a.get(h);var c=t.apply(this,n);return a.set(h,c),c};return r.cache=new Map,r};function b(){for(var t=0,e=0,r=arguments.length;e<r;e++)t+=arguments[e].length;for(var n=Array(t),i=0,e=0;e<r;e++)for(var h=arguments[e],a=0,c=h.length;a<c;a++,i++)n[i]=h[a];return n}var o;w(function(t,e){e===void 0&&(e={});var r=e.fontSize,n=e.fontFamily,i=e.fontWeight,h=e.fontStyle,a=e.fontVariant;return o||(o=document.createElement("canvas").getContext("2d")),o.font=[h,a,i,r+"px",n].join(" "),o.measureText(m(t)?t:"").width},function(t,e){return e===void 0&&(e={}),b([t],d(e)).join("")});function A(t,e,r,n="height"){return r==="center"?(t[n]+e[n])/2:t.height}const S={assign:x,getHeight:A};function g(t,e){const r=this;if(r.vgap=r.hgap=0,t instanceof g)return t;r.data=t;const n=e.getHGap(t),i=e.getVGap(t);return r.preH=e.getPreH(t),r.preV=e.getPreV(t),r.width=e.getWidth(t),r.height=e.getHeight(t),r.width+=r.preH,r.height+=r.preV,r.id=e.getId(t),r.x=r.y=0,r.depth=0,r.children||(r.children=[]),r.addGap(n,i),r}S.assign(g.prototype,{isRoot(){return this.depth===0},isLeaf(){return this.children.length===0},addGap(t,e){const r=this;r.hgap+=t,r.vgap+=e,r.width+=2*t,r.height+=2*e},eachNode(t){let r=[this],n;for(;n=r.shift();)t(n),r=n.children.concat(r)},DFTraverse(t){this.eachNode(t)},BFTraverse(t){let r=[this],n;for(;n=r.shift();)t(n),r=r.concat(n.children)},getBoundingBox(){const t={left:Number.MAX_VALUE,top:Number.MAX_VALUE,width:0,height:0};return this.eachNode(e=>{t.left=Math.min(t.left,e.x),t.top=Math.min(t.top,e.y),t.width=Math.max(t.width,e.x+e.width),t.height=Math.max(t.height,e.y+e.height)}),t},translate(t=0,e=0){this.eachNode(r=>{r.x+=t,r.y+=e,r.x+=r.preH,r.y+=r.preV})},right2left(){const t=this,e=t.getBoundingBox();t.eachNode(r=>{r.x=r.x-(r.x-e.left)*2-r.width}),t.translate(e.width,0)},bottom2top(){const t=this,e=t.getBoundingBox();t.eachNode(r=>{r.y=r.y-(r.y-e.top)*2-r.height}),t.translate(0,e.height)}});
