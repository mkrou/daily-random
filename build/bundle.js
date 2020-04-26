var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function l(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const c="undefined"!=typeof window;let u=c?()=>window.performance.now():()=>Date.now(),i=c?t=>requestAnimationFrame(t):t;const a=new Set;function f(t){a.forEach(n=>{n.c(t)||(a.delete(n),n.f())}),0!==a.size&&i(f)}function d(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function h(t){t.parentNode.removeChild(t)}function m(t,n){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(n)}function g(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function b(){return $(" ")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function v(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function _(t,n){n=""+n,t.data!==n&&(t.data=n)}function x(t,n){(null!=n||t.value)&&(t.value=n)}function w(t,n,e,o){t.style.setProperty(n,e,o?"important":"")}const E=new Set;let S,F=0;function k(t,n,e,o,r,l,s,c=0){const u=16.666/o;let i="{\n";for(let t=0;t<=1;t+=u){const o=n+(e-n)*l(t);i+=100*t+`%{${s(o,1-o)}}\n`}const a=i+`100% {${s(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${c}`,d=t.ownerDocument;E.add(d);const p=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild(g("style")).sheet),h=d.__svelte_rules||(d.__svelte_rules={});h[f]||(h[f]=!0,p.insertRule(`@keyframes ${f} ${a}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?m+", ":""}${f} ${o}ms linear ${r}ms 1 both`,F+=1,f}function A(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),F-=r,F||i(()=>{F||(E.forEach(t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}}),E.clear())}))}function C(t){S=t}function M(t){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_mount.push(t)}const O=[],N=[],L=[],P=[],R=Promise.resolve();let T=!1;function B(t){L.push(t)}let D=!1;const j=new Set;function q(){if(!D){D=!0;do{for(let t=0;t<O.length;t+=1){const n=O[t];C(n),z(n.$$)}for(O.length=0;N.length;)N.pop()();for(let t=0;t<L.length;t+=1){const n=L[t];j.has(n)||(j.add(n),n())}L.length=0}while(O.length);for(;P.length;)P.pop()();T=!1,D=!1,j.clear()}}function z(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(B)}}let I;function J(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const W=new Set;let G;function H(){G={r:0,c:[],p:G}}function K(){G.r||r(G.c),G=G.p}function Q(t,n){t&&t.i&&(W.delete(t),t.i(n))}function U(t,n,e,o){if(t&&t.o){if(W.has(t))return;W.add(t),G.c.push(()=>{W.delete(t),o&&(e&&t.d(1),o())}),t.o(n)}}const V={duration:0};function X(e,o,s,c){let d=o(e,s),p=c?0:1,h=null,m=null,g=null;function $(){g&&A(e,g)}function b(t,n){const e=t.b-p;return n*=Math.abs(e),{a:p,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function y(o){const{delay:l=0,duration:s=300,easing:c=n,tick:y=t,css:v}=d||V,_={start:u()+l,b:o};o||(_.group=G,G.r+=1),h?m=_:(v&&($(),g=k(e,p,o,s,l,c,v)),o&&y(0,1),h=b(_,s),B(()=>J(e,o,"start")),function(t){let n;0===a.size&&i(f),new Promise(e=>{a.add(n={c:t,f:e})})}(t=>{if(m&&t>m.start&&(h=b(m,s),m=null,J(e,h.b,"start"),v&&($(),g=k(e,p,h.b,h.duration,0,c,d.css))),h)if(t>=h.end)y(p=h.b,1-p),J(e,h.b,"end"),m||(h.b?$():--h.group.r||r(h.group.c)),h=null;else if(t>=h.start){const n=t-h.start;p=h.a+h.d*c(n/h.duration),y(p,1-p)}return!(!h&&!m)}))}return{run(t){l(d)?(I||(I=Promise.resolve(),I.then(()=>{I=null})),I).then(()=>{d=d(),y(t)}):y(t)},end(){$(),h=m=null}}}function Y(t){t&&t.c()}function Z(t,n,o){const{fragment:s,on_mount:c,on_destroy:u,after_update:i}=t.$$;s&&s.m(n,o),B(()=>{const n=c.map(e).filter(l);u?u.push(...n):r(n),t.$$.on_mount=[]}),i.forEach(B)}function tt(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function nt(t,n){-1===t.$$.dirty[0]&&(O.push(t),T||(T=!0,R.then(q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function et(n,e,l,s,c,u,i=[-1]){const a=S;C(n);const f=e.props||{},d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:i};let p=!1;if(d.ctx=l?l(n,f,(t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(d.bound[t]&&d.bound[t](r),p&&nt(n,t)),e}):[],d.update(),p=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(h)}else d.fragment&&d.fragment.c();e.intro&&Q(n.$$.fragment),Z(n,e.target,e.anchor),q()}C(a)}class ot{$destroy(){tt(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(){}}const rt=[];const lt=((n,e)=>{const{subscribe:o,set:r,update:l}=function(n,e=t){let o;const r=[];function l(t){if(s(n,t)&&(n=t,o)){const t=!rt.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),rt.push(e,n)}if(t){for(let t=0;t<rt.length;t+=2)rt[t][0](rt[t+1]);rt.length=0}}}return{set:l,update:function(t){l(t(n))},subscribe:function(s,c=t){const u=[s,c];return r.push(u),1===r.length&&(o=e(l)||t),s(n),()=>{const t=r.indexOf(u);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}(e);return{subscribe:o,set:r,update:l,useLocalStorage:()=>{const t=localStorage.getItem(n);t&&r(JSON.parse(t)),o(t=>{localStorage.setItem(n,JSON.stringify(t))})}}})("persons",[]);function st(t,n,e){const o=t.slice();return o[1]=n[e],o}function ct(t){let n,e,o,r,s,c,u,i=t[1]+"";return{c(){n=g("div"),e=g("span"),o=$(i),r=b(),s=g("button"),s.textContent="Del",c=b(),v(s,"class","svelte-1ps39ub"),v(n,"class","row svelte-1ps39ub")},m(i,a,f){p(i,n,a),d(n,e),d(e,o),d(n,r),d(n,s),d(n,c),f&&u(),u=y(s,"click",(function(){l(it(t[1]))&&it(t[1]).apply(this,arguments)}))},p(n,e){t=n,1&e&&i!==(i=t[1]+"")&&_(o,i)},d(t){t&&h(n),u()}}}function ut(n){let e,o,s,c,u,i,a,f=n[0],$=[];for(let t=0;t<f.length;t+=1)$[t]=ct(st(n,f,t));return{c(){e=g("form"),o=g("div"),s=g("input"),c=b(),u=g("button"),u.textContent="Add",i=b();for(let t=0;t<$.length;t+=1)$[t].c();s.autofocus=!0,v(s,"type","text"),v(s,"class","svelte-1ps39ub"),v(u,"type","submit"),v(u,"class","svelte-1ps39ub"),v(o,"class","row svelte-1ps39ub")},m(t,f,h){p(t,e,f),d(e,o),d(o,s),x(s,n[1]),d(o,c),d(o,u),d(e,i);for(let t=0;t<$.length;t+=1)$[t].m(e,null);var m;s.focus(),h&&r(a),a=[y(s,"input",n[4]),y(u,"click",(function(){l(n[2](n[1]))&&n[2](n[1]).apply(this,arguments)})),y(e,"submit",(m=n[3],function(t){return t.preventDefault(),m.call(this,t)}))]},p(t,[o]){if(n=t,2&o&&s.value!==n[1]&&x(s,n[1]),1&o){let t;for(f=n[0],t=0;t<f.length;t+=1){const r=st(n,f,t);$[t]?$[t].p(r,o):($[t]=ct(r),$[t].c(),$[t].m(e,null))}for(;t<$.length;t+=1)$[t].d(1);$.length=f.length}},i:t,o:t,d(t){t&&h(e),m($,t),r(a)}}}function it(t){lt.update(n=>n.filter(n=>n!==t))}function at(t,n,e){let o=[];lt.useLocalStorage(),lt.subscribe(t=>{e(0,o=t)});let r="";return[o,r,function(t){t.length>0&&-1===o.indexOf(t)&&(lt.update(n=>[t,...n]),e(1,r=""))},function(n){!function(t,n){const e=t.$$.callbacks[n.type];e&&e.slice().forEach(t=>t(n))}(t,n)},function(){r=this.value,e(1,r)}]}class ft extends ot{constructor(t){super(),et(this,t,at,ut,s,{})}}function dt(t){const n=t-1;return n*n*n+1}function pt(t){return--t*t*t*t*t+1}function ht(t,{delay:n=0,duration:e=400,easing:o=dt}){const r=getComputedStyle(t),l=+r.opacity,s=parseFloat(r.height),c=parseFloat(r.paddingTop),u=parseFloat(r.paddingBottom),i=parseFloat(r.marginTop),a=parseFloat(r.marginBottom),f=parseFloat(r.borderTopWidth),d=parseFloat(r.borderBottomWidth);return{delay:n,duration:e,easing:o,css:t=>`overflow: hidden;opacity: ${Math.min(20*t,1)*l};height: ${t*s}px;padding-top: ${t*c}px;padding-bottom: ${t*u}px;margin-top: ${t*i}px;margin-bottom: ${t*a}px;border-top-width: ${t*f}px;border-bottom-width: ${t*d}px;`}}function mt(t,n,e){const o=t.slice();return o[3]=n[e],o}function gt(t){let n,e,o=t[3].character+"";return{c(){n=g("span"),e=$(o),w(n,"left",t[3].x+"%"),w(n,"top",t[3].y+"%"),w(n,"transform","scale("+t[3].r+")"),v(n,"class","svelte-urp9ot")},m(t,o){p(t,n,o),d(n,e)},p(t,r){2&r&&o!==(o=t[3].character+"")&&_(e,o),2&r&&w(n,"left",t[3].x+"%"),2&r&&w(n,"top",t[3].y+"%"),2&r&&w(n,"transform","scale("+t[3].r+")")},d(t){t&&h(n)}}}function $t(n){let e,o,r,l,s,c=n[1],u=[];for(let t=0;t<c.length;t+=1)u[t]=gt(mt(n,c,t));return{c(){for(let t=0;t<u.length;t+=1)u[t].c();e=b(),o=g("p"),r=$("🎉 The winner is "),l=$(n[0]),s=$(" 🎉")},m(t,n){for(let e=0;e<u.length;e+=1)u[e].m(t,n);p(t,e,n),p(t,o,n),d(o,r),d(o,l),d(o,s)},p(t,[n]){if(2&n){let o;for(c=t[1],o=0;o<c.length;o+=1){const r=mt(t,c,o);u[o]?u[o].p(r,n):(u[o]=gt(r),u[o].c(),u[o].m(e.parentNode,e))}for(;o<u.length;o+=1)u[o].d(1);u.length=c.length}1&n&&_(l,t[0])},i:t,o:t,d(t){m(u,t),t&&h(e),t&&h(o)}}}function bt(t,n,e){let{name:o}=n,r=["🥳","🎉","✨"],l=new Array(20).fill().map((t,n)=>({character:r[n%r.length],x:100*Math.random(),y:-20-100*Math.random(),r:.1+1*Math.random()})).sort((t,n)=>t.r-n.r);return M(()=>{let t;return function n(){t=requestAnimationFrame(n),e(1,l=l.map(t=>(t.y+=.7*t.r,t.y>120&&(t.y=-20),t)))}(),()=>cancelAnimationFrame(t)}),t.$set=t=>{"name"in t&&e(0,o=t.name)},[o,l]}class yt extends ot{constructor(t){super(),et(this,t,bt,$t,s,{name:0})}}function vt(t){let n;const e=new yt({props:{name:t[2]}});return{c(){Y(e.$$.fragment)},m(t,o){Z(e,t,o),n=!0},p(t,n){const o={};4&n&&(o.name=t[2]),e.$set(o)},i(t){n||(Q(e.$$.fragment,t),n=!0)},o(t){U(e.$$.fragment,t),n=!1},d(t){tt(e,t)}}}function _t(t){let n,e,o;const r=new ft({});return{c(){n=g("div"),Y(r.$$.fragment),v(n,"class","editor-container svelte-1g1g3da")},m(t,e){p(t,n,e),Z(r,n,null),o=!0},i(t){o||(Q(r.$$.fragment,t),B(()=>{e||(e=X(n,ht,{delay:250,duration:300,easing:pt},!0)),e.run(1)}),o=!0)},o(t){U(r.$$.fragment,t),e||(e=X(n,ht,{delay:250,duration:300,easing:pt},!1)),e.run(0),o=!1},d(t){t&&h(n),tt(r),t&&e&&e.end()}}}function xt(t){let n,e,o,l,s,c,u,i,a,f,m,x,w,E,S=t[0].length+"",F=t[2]&&vt(t),k=t[1]&&_t();return{c(){n=g("main"),e=g("div"),F&&F.c(),o=b(),l=g("button"),s=$("Random"),u=b(),i=g("button"),a=$("Persons ("),f=$(S),m=$(")"),x=b(),k&&k.c(),l.disabled=c=t[0].length<2,v(e,"id","container"),v(e,"class","svelte-1g1g3da"),v(n,"class","svelte-1g1g3da")},m(c,h,g){p(c,n,h),d(n,e),F&&F.m(e,null),d(e,o),d(e,l),d(l,s),d(e,u),d(e,i),d(i,a),d(i,f),d(i,m),d(e,x),k&&k.m(e,null),w=!0,g&&r(E),E=[y(l,"click",t[4]),y(i,"click",t[3])]},p(t,[n]){t[2]?F?(F.p(t,n),4&n&&Q(F,1)):(F=vt(t),F.c(),Q(F,1),F.m(e,o)):F&&(H(),U(F,1,1,()=>{F=null}),K()),(!w||1&n&&c!==(c=t[0].length<2))&&(l.disabled=c),(!w||1&n)&&S!==(S=t[0].length+"")&&_(f,S),t[1]?k?2&n&&Q(k,1):(k=_t(),k.c(),Q(k,1),k.m(e,null)):k&&(H(),U(k,1,1,()=>{k=null}),K())},i(t){w||(Q(F),Q(k),w=!0)},o(t){U(F),U(k),w=!1},d(t){t&&h(n),F&&F.d(),k&&k.d(),r(E)}}}function wt(t,n,e){let o=[];lt.useLocalStorage(),lt.subscribe(t=>{e(0,o=t)});let r=0===o.length;o.length;let l="";return[o,r,l,()=>e(1,r=!r),function(){e(2,l=""),e(2,l=o[Math.floor(Math.random()*o.length)])}]}return new class extends ot{constructor(t){super(),et(this,t,wt,xt,s,{})}}({target:document.body,props:{}})}();
//# sourceMappingURL=bundle.js.map
