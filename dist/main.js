(()=>{"use strict";var e={426:(e,n,t)=>{t.d(n,{Z:()=>m});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),s=t(667),d=t.n(s),c=new URL(t(829),t.b),l=i()(o()),p=d()(c);l.push([e.id,`*{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n    font-family: 'Poppins', sans-serif;\n    --main-color: #333333;\n    --accent:  #f5f5f5;\n}\n\n#content{\n    display: grid;\n    grid-template-rows: 1fr 10fr 1fr;\n    width: 100vw;\n    height: 95vh;\n}\n\n.header{\n    background: var(--main-color);\n    color: var(--accent);\n    padding-top: 20px;\n    padding-bottom: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.title{\n    width: 20%;\n}\n\n.links{\n    width: 50%;\n    display: flex;\n    align-items: center;\n    justify-content: space-around;\n}\n\n.header button{\n    background: none;\n    border: none;\n    color: var(--accent);\n    cursor: pointer;\n    width: 4rem;\n}\n\n.home{\n    display: grid;\n    height: 93.1vh;\n    grid-template-rows: repeat(4,1fr);\n    justify-items: center;\n    align-items: center;\n    background: url(${p}) center center fixed;\n    background-size: cover;\n}\n\n.home .headline{\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    gap: 1rem;\n    grid-row: 1/3;\n    padding: 3rem 1rem 3rem 1rem;\n    background: rgba(51, 51, 51, 0.8);\n    color: var(--accent);\n    border-radius: 10px;\n}\n\n.home .headline p{\n    font-size: 1.2rem;\n}\n\n.home .order-home{\n    grid-row: 3/5;\n    width: 50%;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    text-align: center;\n    gap: 1rem;\n    padding: 3rem 1rem 3rem 1rem;\n    background: rgba(51, 51, 51, 0.8);\n    color: var(--accent);\n    border-radius: 10px;\n    font-size: 1.3rem;\n    \n}\n\n.home button{\n    cursor: pointer;\n    background: none;\n    border: 1px solid var(--accent);\n    color: var(--accent);\n    width: 8rem;\n    padding: 0.5rem;\n    font-size: 1rem;\n}\n\n.home button:hover{\n    background: var(--accent);\n    color: var(--main-color);\n}\n\n.menu, .contact-page{\n    background: url(${p}) center center fixed;\n    background-size: cover;\n    display: grid;\n    height: 93.1vh;\n    justify-items: center;\n    align-items: center;\n}\n\n.menu-container{\n    background: rgba(51, 51, 51, 0.8);\n    border-radius: 10px;\n    padding: 3rem 1rem 3rem 1rem;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    gap: 10px;\n}\n\n.dishes{\n    width: 50%;\n    color: var(--accent);\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    align-items: center;\n}\n\n.dishes p{\n    display: flex;\n    justify-content: end;\n}\n\n\n.dishes .dish-description{\n    grid-row: 2/3;\n    grid-column: 1/3;\n}\n\n.contact-container{\n    width: 40%;\n    display: grid;\n    background: rgba(51, 51, 51, 0.8);\n    border-radius: 10px;\n    padding: 3rem 1rem 3rem 1rem;\n    display: grid;\n    justify-items: center;\n    align-items: center;\n    color: var(--accent);\n}\n\n.contact-container .info{\n    width: 100%;\n    display: grid;\n    grid-template-rows: 0.5fr 0.5fr 0.5fr 0.5fr 1fr;\n    gap: 10px;\n}\n\n.info .details{\n    display: grid;\n    grid-template-columns: 1fr 5fr;\n    justify-items:center;\n    align-items: center;\n}\n\n.info .message-form{\n    width: 90%;\n    display: flex;\n    flex-direction: column;\n    align-self: center;\n    justify-self: center;\n}\n\n.message-form form{\n    display: grid;\n    gap: 20px;\n}\n\ninput, textarea{\n    appearance: none;\n    outline: none;\n    width: 100%;\n    background: none;\n    border: none;\n    border-bottom: 1px solid var(--accent);\n    resize: none;\n    color: var(--accent);\n}\n\ninput::placeholder, textarea::placeholder{\n    color: var(--accent);\n    opacity: 0.5;\n}\n\n.message-form form button{\n    background: none;\n    color: var(--accent);\n    border: 1px solid var(--accent);\n    padding: 5px;\n}\n\n.message-form form button:hover{\n    background: var(--accent);\n    color: var(--main-color);\n}`,""]);const m=l},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var d=this[s][0];null!=d&&(i[d]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var d=e[s],c=r.base?d[0]+r.base:d[0],l=a[c]||0,p="".concat(c," ").concat(l);a[c]=l+1;var m=t(p),u={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==m)n[m].references++,n[m].updater(u);else{var f=o(u,r);r.byIndex=s,n.splice(s,0,{identifier:p,updater:f,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=t(a[i]);n[s].references--}for(var d=r(e,o),c=0;c<a.length;c++){var l=t(a[c]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=d}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},829:(e,n,t)=>{e.exports=t.p+"2b5b71cb7758acdf2762.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),s=t(565),d=t.n(s),c=t(216),l=t.n(c),p=t(589),m=t.n(p),u=t(426),f={};function h(){const e=document.createElement("div");e.classList.add("home");const n=document.createElement("div");n.classList.add("headline"),n.innerHTML="<h1>Discover Delicious Moments at Bistro Bliss</h1><p>Join us and experience the genuine joy of exceptional food</p><p>Reserve your table today</p><button>Reserve Now!</button>";const t=document.createElement("div");return t.classList.add("order-home"),t.innerHTML="<p>Can't dine in? No worries!</p><button>Order Now!</button>",e.appendChild(n),e.appendChild(t),e}f.styleTagTransform=m(),f.setAttributes=d(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),n()(u.Z,f),u.Z&&u.Z.locals&&u.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{const e=document.querySelector("#content"),n=document.createElement("div");n.classList.add("header");const t=document.createElement("div");t.classList.add("title"),t.textContent="Bistro Bliss";const r=document.createElement("div");r.classList.add("links");const o=document.createElement("button");o.classList.add("link-1"),o.textContent="HOME";const a=document.createElement("button");a.classList.add("link-2"),a.textContent="MENU";const i=document.createElement("button");i.classList.add("link-3"),i.textContent="CONTACT",r.appendChild(o),r.appendChild(a),r.appendChild(i),n.appendChild(t),n.appendChild(r);const s=document.createElement("div");s.classList.add("pages");let d=!0,c=!1,l=!1,p=!1,m="1px solid #f5f5f5";function u(){if(p){if(d){s.removeChild(s.firstChild);const e=h();s.appendChild(e)}else if(c){s.removeChild(s.firstChild);const e=function(){const e=document.createElement("div");e.classList.add("menu");const n=document.createElement("div");n.classList.add("menu-container");const t=document.createElement("div");t.classList.add("dish-one"),t.classList.add("dishes");const r=document.createElement("h2");r.textContent="Dish One";const o=document.createElement("p");o.textContent="$8";const a=document.createElement("div");a.classList.add("dish-description"),a.textContent="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet.";const i=document.createElement("div");i.classList.add("dish-two"),i.classList.add("dishes");const s=document.createElement("h2");s.textContent="Dish Two";const d=document.createElement("p");d.textContent="$10";const c=document.createElement("div");c.classList.add("dish-description"),c.textContent="Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque placerat, tellus sit amet.";const l=document.createElement("div");l.classList.add("dish-three"),l.classList.add("dishes");const p=document.createElement("h2");p.textContent="Dish Three";const m=document.createElement("p");m.textContent="$12";const u=document.createElement("div");u.classList.add("dish-description"),u.textContent="Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque placerat, tellus sit amet.";const f=document.createElement("div");f.classList.add("dish-four"),f.classList.add("dishes");const h=document.createElement("h2");h.textContent="Dish Four";const g=document.createElement("p");g.textContent="$16";const v=document.createElement("div");return v.classList.add("dish-description"),v.textContent="Lorem ipsum dolor sit amet, adipiscing elit. Pellentesque placerat, tellus sit amet.",t.appendChild(r),t.appendChild(o),t.appendChild(a),i.appendChild(s),i.appendChild(d),i.appendChild(c),l.appendChild(p),l.appendChild(m),l.appendChild(u),f.appendChild(h),f.appendChild(g),f.appendChild(v),n.appendChild(t),n.appendChild(i),n.appendChild(l),n.appendChild(f),e.appendChild(n),e}();s.appendChild(e)}else if(l){s.removeChild(s.firstChild);const e=function(){const e=document.createElement("div");e.classList.add("contact-page");const n=document.createElement("div");n.classList.add("contact-container");const t=document.createElement("div");t.classList.add("info");const r=document.createElement("div");r.classList.add("address"),r.classList.add("details"),r.innerHTML='<i class="fa-solid fa-location-dot fa-lg" style="color: #f5f5f5f5;"></i><p>1024 Oakwood Ave San Diego, CA 22434</p>';const o=document.createElement("div");o.classList.add("timing"),o.classList.add("details"),o.innerHTML='<i class="fa-solid fa-clock" style="color: #f5f5f5;"></i><p>Mon - Sun: 8am - 10pm</p>';const a=document.createElement("div");a.classList.add("calling-info"),a.classList.add("details"),a.innerHTML='<i class="fa-solid fa-phone" style="color: #f5f5f5;"></i><p>(111) - 222 3333</p>';const i=document.createElement("div");i.classList.add("message"),i.classList.add("details"),i.innerHTML='<i class="fa-solid fa-envelope" style="color: #f5f5f5;"></i><h4>Message us</h4>';const s=document.createElement("div");return s.classList.add("message-form"),s.innerHTML='<form><input class="form-element" type="text" placeholder="Name"><input class="form-element" type="email" placeholder="Email"><textarea class=class="form-element" rows="3" placeholder="Message"></textarea><button>Send</button></form>',t.appendChild(r),t.appendChild(o),t.appendChild(a),t.appendChild(i),t.appendChild(s),n.appendChild(t),e.appendChild(n),e}();s.appendChild(e)}}else{const e=h();s.appendChild(e)}}o.addEventListener("click",(()=>{d=!0,o.style.borderBottom=m,a.style.borderBottom="none",i.style.borderBottom="none",c=!1,l=!1,p=!0,u(),p=!1})),a.addEventListener("click",(()=>{c=!0,a.style.borderBottom=m,o.style.borderBottom="none",i.style.borderBottom="none",d=!1,l=!1,p=!0,u(),p=!1})),i.addEventListener("click",(()=>{l=!0,i.style.borderBottom=m,o.style.borderBottom="none",a.style.borderBottom="none",d=!1,c=!1,p=!0,u(),p=!1})),e.appendChild(n),e.appendChild(s),u()}))})()})();