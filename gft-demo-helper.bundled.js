/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var t,i,s,e;const o=globalThis.trustedTypes,n=o?o.createPolicy("lit-html",{createHTML:t=>t}):void 0,r=`lit$${(Math.random()+"").slice(9)}$`,l="?"+r,h=`<${l}>`,a=document,d=(t="")=>a.createComment(t),c=t=>null===t||"object"!=typeof t&&"function"!=typeof t,u=Array.isArray,v=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,p=/-->/g,b=/>/g,f=/>|[ 	\n\r](?:([^\s"'>=/]+)([ 	\n\r]*=[ 	\n\r]*(?:[^ 	\n\r"'`<>=]|("|')|))|$)/g,m=/'/g,g=/"/g,y=/^(?:script|style|textarea)$/i,w=(t=>(i,...s)=>({_$litType$:t,strings:i,values:s}))(1),x=Symbol.for("lit-noChange"),S=Symbol.for("lit-nothing"),$=new WeakMap,k=a.createTreeWalker(a,129,null,!1);class E{constructor({strings:t,_$litType$:i},s){let e;this.parts=[];let a=0,c=0;const u=t.length-1,w=this.parts,[x,S]=((t,i)=>{const s=t.length-1,e=[];let o,l=2===i?"<svg>":"",a=v;for(let i=0;i<s;i++){const s=t[i];let n,d,c=-1,u=0;for(;u<s.length&&(a.lastIndex=u,d=a.exec(s),null!==d);)u=a.lastIndex,a===v?"!--"===d[1]?a=p:void 0!==d[1]?a=b:void 0!==d[2]?(y.test(d[2])&&(o=RegExp("</"+d[2],"g")),a=f):void 0!==d[3]&&(a=f):a===f?">"===d[0]?(a=null!=o?o:v,c=-1):void 0===d[1]?c=-2:(c=a.lastIndex-d[2].length,n=d[1],a=void 0===d[3]?f:'"'===d[3]?g:m):a===g||a===m?a=f:a===p||a===b?a=v:(a=f,o=void 0);const w=a===f&&t[i+1].startsWith("/>")?" ":"";l+=a===v?s+h:c>=0?(e.push(n),s.slice(0,c)+"$lit$"+s.slice(c)+r+w):s+r+(-2===c?(e.push(void 0),i):w)}const d=l+(t[s]||"<?>")+(2===i?"</svg>":"");return[void 0!==n?n.createHTML(d):d,e]})(t,i);if(this.el=E.createElement(x,s),k.currentNode=this.el.content,2===i){const t=this.el.content,i=t.firstChild;i.remove(),t.append(...i.childNodes)}for(;null!==(e=k.nextNode())&&w.length<u;){if(1===e.nodeType){if(e.hasAttributes()){const t=[];for(const i of e.getAttributeNames())if(i.endsWith("$lit$")||i.startsWith(r)){const s=S[c++];if(t.push(i),void 0!==s){const t=e.getAttribute(s.toLowerCase()+"$lit$").split(r),i=/([.?@])?(.*)/.exec(s);w.push({type:1,index:a,name:i[2],strings:t,ctor:"."===i[1]?T:"?"===i[1]?z:"@"===i[1]?L:A})}else w.push({type:6,index:a})}for(const i of t)e.removeAttribute(i)}if(y.test(e.tagName)){const t=e.textContent.split(r),i=t.length-1;if(i>0){e.textContent=o?o.emptyScript:"";for(let s=0;s<i;s++)e.append(t[s],d()),k.nextNode(),w.push({type:2,index:++a});e.append(t[i],d())}}}else if(8===e.nodeType)if(e.data===l)w.push({type:2,index:a});else{let t=-1;for(;-1!==(t=e.data.indexOf(r,t+1));)w.push({type:7,index:a}),t+=r.length-1}a++}}static createElement(t,i){const s=a.createElement("template");return s.innerHTML=t,s}}function M(t,i,s=t,e){var o,n,r,l;if(i===x)return i;let h=void 0!==e?null===(o=s.Σi)||void 0===o?void 0:o[e]:s.Σo;const a=c(i)?void 0:i._$litDirective$;return(null==h?void 0:h.constructor)!==a&&(null===(n=null==h?void 0:h.O)||void 0===n||n.call(h,!1),void 0===a?h=void 0:(h=new a(t),h.T(t,s,e)),void 0!==e?(null!==(r=(l=s).Σi)&&void 0!==r?r:l.Σi=[])[e]=h:s.Σo=h),void 0!==h&&(i=M(t,h.S(t,i.values),h,e)),i}class C{constructor(t,i){this.l=[],this.N=void 0,this.D=t,this.M=i}u(t){var i;const{el:{content:s},parts:e}=this.D,o=(null!==(i=null==t?void 0:t.creationScope)&&void 0!==i?i:a).importNode(s,!0);k.currentNode=o;let n=k.nextNode(),r=0,l=0,h=e[0];for(;void 0!==h;){if(r===h.index){let i;2===h.type?i=new _(n,n.nextSibling,this,t):1===h.type?i=new h.ctor(n,h.name,h.strings,this,t):6===h.type&&(i=new U(n,this,t)),this.l.push(i),h=e[++l]}r!==(null==h?void 0:h.index)&&(n=k.nextNode(),r++)}return o}v(t){let i=0;for(const s of this.l)void 0!==s&&(void 0!==s.strings?(s.I(t,s,i),i+=s.strings.length-2):s.I(t[i])),i++}}class _{constructor(t,i,s,e){this.type=2,this.N=void 0,this.A=t,this.B=i,this.M=s,this.options=e}setConnected(t){var i;null===(i=this.P)||void 0===i||i.call(this,t)}get parentNode(){return this.A.parentNode}get startNode(){return this.A}get endNode(){return this.B}I(t,i=this){t=M(this,t,i),c(t)?t===S||null==t||""===t?(this.H!==S&&this.R(),this.H=S):t!==this.H&&t!==x&&this.m(t):void 0!==t._$litType$?this._(t):void 0!==t.nodeType?this.$(t):(t=>{var i;return u(t)||"function"==typeof(null===(i=t)||void 0===i?void 0:i[Symbol.iterator])})(t)?this.g(t):this.m(t)}k(t,i=this.B){return this.A.parentNode.insertBefore(t,i)}$(t){this.H!==t&&(this.R(),this.H=this.k(t))}m(t){const i=this.A.nextSibling;null!==i&&3===i.nodeType&&(null===this.B?null===i.nextSibling:i===this.B.previousSibling)?i.data=t:this.$(a.createTextNode(t)),this.H=t}_(t){var i;const{values:s,_$litType$:e}=t,o="number"==typeof e?this.C(t):(void 0===e.el&&(e.el=E.createElement(e.h,this.options)),e);if((null===(i=this.H)||void 0===i?void 0:i.D)===o)this.H.v(s);else{const t=new C(o,this),i=t.u(this.options);t.v(s),this.$(i),this.H=t}}C(t){let i=$.get(t.strings);return void 0===i&&$.set(t.strings,i=new E(t)),i}g(t){u(this.H)||(this.H=[],this.R());const i=this.H;let s,e=0;for(const o of t)e===i.length?i.push(s=new _(this.k(d()),this.k(d()),this,this.options)):s=i[e],s.I(o),e++;e<i.length&&(this.R(s&&s.B.nextSibling,e),i.length=e)}R(t=this.A.nextSibling,i){var s;for(null===(s=this.P)||void 0===s||s.call(this,!1,!0,i);t&&t!==this.B;){const i=t.nextSibling;t.remove(),t=i}}}class A{constructor(t,i,s,e,o){this.type=1,this.H=S,this.N=void 0,this.V=void 0,this.element=t,this.name=i,this.M=e,this.options=o,s.length>2||""!==s[0]||""!==s[1]?(this.H=Array(s.length-1).fill(S),this.strings=s):this.H=S}get tagName(){return this.element.tagName}I(t,i=this,s,e){const o=this.strings;let n=!1;if(void 0===o)t=M(this,t,i,0),n=!c(t)||t!==this.H&&t!==x,n&&(this.H=t);else{const e=t;let r,l;for(t=o[0],r=0;r<o.length-1;r++)l=M(this,e[s+r],i,r),l===x&&(l=this.H[r]),n||(n=!c(l)||l!==this.H[r]),l===S?t=S:t!==S&&(t+=(null!=l?l:"")+o[r+1]),this.H[r]=l}n&&!e&&this.W(t)}W(t){t===S?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class T extends A{constructor(){super(...arguments),this.type=3}W(t){this.element[this.name]=t===S?void 0:t}}class z extends A{constructor(){super(...arguments),this.type=4}W(t){t&&t!==S?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name)}}class L extends A{constructor(){super(...arguments),this.type=5}I(t,i=this){var s;if((t=null!==(s=M(this,t,i,0))&&void 0!==s?s:S)===x)return;const e=this.H,o=t===S&&e!==S||t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive,n=t!==S&&(e===S||o);o&&this.element.removeEventListener(this.name,this,e),n&&this.element.addEventListener(this.name,this,t),this.H=t}handleEvent(t){var i,s;"function"==typeof this.H?this.H.call(null!==(s=null===(i=this.options)||void 0===i?void 0:i.host)&&void 0!==s?s:this.element,t):this.H.handleEvent(t)}}class U{constructor(t,i,s){this.element=t,this.type=6,this.N=void 0,this.V=void 0,this.M=i,this.options=s}I(t){M(this,t)}}null===(i=(t=globalThis).litHtmlPlatformSupport)||void 0===i||i.call(t,E,_),(null!==(s=(e=globalThis).litHtmlVersions)&&void 0!==s?s:e.litHtmlVersions=[]).push("2.0.0-rc.2");
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const I=window.ShadowRoot&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,R=Symbol();class j{constructor(t,i){if(i!==R)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t}get styleSheet(){return I&&void 0===this.t&&(this.t=new CSSStyleSheet,this.t.replaceSync(this.cssText)),this.t}toString(){return this.cssText}}const N=t=>new j(t+"",R),O=new Map,D=(t,...i)=>{const s=i.reduce(((i,s,e)=>i+(t=>{if(t instanceof j)return t.cssText;if("number"==typeof t)return t;throw Error(`Value passed to 'css' function must be a 'css' function result: ${t}. Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security.`)})(s)+t[e+1]),t[0]);let e=O.get(s);return void 0===e&&O.set(s,e=new j(s,R)),e},P=I?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let i="";for(const s of t.cssRules)i+=s.cssText;return N(i)})(t):t
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */;var W,B,F,G;const H={toAttribute(t,i){switch(i){case Boolean:t=t?"":null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,i){let s=t;switch(i){case Boolean:s=null!==t;break;case Number:s=null===t?null:Number(t);break;case Object:case Array:try{s=JSON.parse(t)}catch(t){s=null}}return s}},q=(t,i)=>i!==t&&(i==i||t==t),J={attribute:!0,type:String,converter:H,reflect:!1,hasChanged:q};class V extends HTMLElement{constructor(){super(),this.Πi=new Map,this.Πo=void 0,this.Πl=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this.Πh=null,this.u()}static addInitializer(t){var i;null!==(i=this.v)&&void 0!==i||(this.v=[]),this.v.push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((i,s)=>{const e=this.Πp(s,i);void 0!==e&&(this.Πm.set(e,s),t.push(e))})),t}static createProperty(t,i=J){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){const s="symbol"==typeof t?Symbol():"__"+t,e=this.getPropertyDescriptor(t,s,i);void 0!==e&&Object.defineProperty(this.prototype,t,e)}}static getPropertyDescriptor(t,i,s){return{get(){return this[i]},set(e){const o=this[t];this[i]=e,this.requestUpdate(t,o,s)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||J}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),this.elementProperties=new Map(t.elementProperties),this.Πm=new Map,this.hasOwnProperty("properties")){const t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const i=[];if(Array.isArray(t)){const s=new Set(t.flat(1/0).reverse());for(const t of s)i.unshift(P(t))}else void 0!==t&&i.push(P(t));return i}static Πp(t,i){const s=i.attribute;return!1===s?void 0:"string"==typeof s?s:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this.Πg=new Promise((t=>this.enableUpdating=t)),this.L=new Map,this.Π_(),this.requestUpdate(),null===(t=this.constructor.v)||void 0===t||t.forEach((t=>t(this)))}addController(t){var i,s;(null!==(i=this.ΠU)&&void 0!==i?i:this.ΠU=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(s=t.hostConnected)||void 0===s||s.call(t))}removeController(t){var i;null===(i=this.ΠU)||void 0===i||i.splice(this.ΠU.indexOf(t)>>>0,1)}Π_(){this.constructor.elementProperties.forEach(((t,i)=>{this.hasOwnProperty(i)&&(this.Πi.set(i,this[i]),delete this[i])}))}createRenderRoot(){var t;const i=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return((t,i)=>{I?t.adoptedStyleSheets=i.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):i.forEach((i=>{const s=document.createElement("style");s.textContent=i.cssText,t.appendChild(s)}))})(i,this.constructor.elementStyles),i}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostConnected)||void 0===i?void 0:i.call(t)})),this.Πl&&(this.Πl(),this.Πo=this.Πl=void 0)}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostDisconnected)||void 0===i?void 0:i.call(t)})),this.Πo=new Promise((t=>this.Πl=t))}attributeChangedCallback(t,i,s){this.K(t,s)}Πj(t,i,s=J){var e,o;const n=this.constructor.Πp(t,s);if(void 0!==n&&!0===s.reflect){const r=(null!==(o=null===(e=s.converter)||void 0===e?void 0:e.toAttribute)&&void 0!==o?o:H.toAttribute)(i,s.type);this.Πh=t,null==r?this.removeAttribute(n):this.setAttribute(n,r),this.Πh=null}}K(t,i){var s,e,o;const n=this.constructor,r=n.Πm.get(t);if(void 0!==r&&this.Πh!==r){const t=n.getPropertyOptions(r),l=t.converter,h=null!==(o=null!==(e=null===(s=l)||void 0===s?void 0:s.fromAttribute)&&void 0!==e?e:"function"==typeof l?l:null)&&void 0!==o?o:H.fromAttribute;this.Πh=r,this[r]=h(i,t.type),this.Πh=null}}requestUpdate(t,i,s){let e=!0;void 0!==t&&(((s=s||this.constructor.getPropertyOptions(t)).hasChanged||q)(this[t],i)?(this.L.has(t)||this.L.set(t,i),!0===s.reflect&&this.Πh!==t&&(void 0===this.Πk&&(this.Πk=new Map),this.Πk.set(t,s))):e=!1),!this.isUpdatePending&&e&&(this.Πg=this.Πq())}async Πq(){this.isUpdatePending=!0;try{for(await this.Πg;this.Πo;)await this.Πo}catch(t){Promise.reject(t)}const t=this.performUpdate();return null!=t&&await t,!this.isUpdatePending}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this.Πi&&(this.Πi.forEach(((t,i)=>this[i]=t)),this.Πi=void 0);let i=!1;const s=this.L;try{i=this.shouldUpdate(s),i?(this.willUpdate(s),null===(t=this.ΠU)||void 0===t||t.forEach((t=>{var i;return null===(i=t.hostUpdate)||void 0===i?void 0:i.call(t)})),this.update(s)):this.Π$()}catch(t){throw i=!1,this.Π$(),t}i&&this.E(s)}willUpdate(t){}E(t){var i;null===(i=this.ΠU)||void 0===i||i.forEach((t=>{var i;return null===(i=t.hostUpdated)||void 0===i?void 0:i.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}Π$(){this.L=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this.Πg}shouldUpdate(t){return!0}update(t){void 0!==this.Πk&&(this.Πk.forEach(((t,i)=>this.Πj(i,this[i],t))),this.Πk=void 0),this.Π$()}updated(t){}firstUpdated(t){}}
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
var Z,K,Q,X,Y,tt;V.finalized=!0,V.shadowRootOptions={mode:"open"},null===(B=(W=globalThis).reactiveElementPlatformSupport)||void 0===B||B.call(W,{ReactiveElement:V}),(null!==(F=(G=globalThis).reactiveElementVersions)&&void 0!==F?F:G.reactiveElementVersions=[]).push("1.0.0-rc.1"),(null!==(Z=(tt=globalThis).litElementVersions)&&void 0!==Z?Z:tt.litElementVersions=[]).push("3.0.0-rc.1");class it extends V{constructor(){super(...arguments),this.renderOptions={host:this},this.Φt=void 0}createRenderRoot(){var t,i;const s=super.createRenderRoot();return null!==(t=(i=this.renderOptions).renderBefore)&&void 0!==t||(i.renderBefore=s.firstChild),s}update(t){const i=this.render();super.update(t),this.Φt=((t,i,s)=>{var e,o;const n=null!==(e=null==s?void 0:s.renderBefore)&&void 0!==e?e:i;let r=n._$litPart$;if(void 0===r){const t=null!==(o=null==s?void 0:s.renderBefore)&&void 0!==o?o:null;n._$litPart$=r=new _(i.insertBefore(d(),t),t,void 0,s)}return r.I(t),r})(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this.Φt)||void 0===t||t.setConnected(!1)}render(){return x}}it.finalized=!0,it._$litElement$=!0,null===(Q=(K=globalThis).litElementHydrateSupport)||void 0===Q||Q.call(K,{LitElement:it}),null===(Y=(X=globalThis).litElementPlatformSupport)||void 0===Y||Y.call(X,{LitElement:it}),
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'.");const st="SMALL",et="MEDIUM",ot="LARGE",nt={SMALL:[320,480],MEDIUM:[768,1024],LARGE:[1360,800]},rt=t=>D`${t}px`,lt={[st]:rt(nt.SMALL[0]),[et]:rt(nt.MEDIUM[0]),[ot]:rt(nt.LARGE[0])},ht=(t=!1,i=!1,s=!1)=>({small:t,medium:i,large:s}),at=(t,i="")=>{const s=D`${N(i)}`;return D`.${s} {width: ${lt[t]}}`},dt=1;
/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct=(t=>(...i)=>({_$litDirective$:t,values:i}))(class extends class{constructor(t){}T(t,i,s){this.Σdt=t,this.M=i,this.Σct=s}S(t,i){return this.update(t,i)}update(t,i){return this.render(...i)}}{constructor(t){var i;if(super(t),t.type!==dt||"class"!==t.name||(null===(i=t.strings)||void 0===i?void 0:i.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(t){return Object.keys(t).filter((i=>t[i])).join(" ")}update(t,[i]){if(void 0===this.bt){this.bt=new Set;for(const t in i)i[t]&&this.bt.add(t);return this.render(i)}const s=t.element.classList;this.bt.forEach((t=>{t in i||(s.remove(t),this.bt.delete(t))}));for(const t in i){const e=!!i[t];e!==this.bt.has(t)&&(e?(s.add(t),this.bt.add(t)):(s.remove(t),this.bt.delete(t)))}return x}});
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class ut extends it{static get styles(){return[D`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap');

  * {
    font-family: 'Montserrat', sans-serif;
  }

  :host {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background: radial-gradient(#213E7F 15%, transparent 0%) 0px 0px / 9px 9px, rgb(238, 238, 238);
  }

  .viewports {
    height: 26px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }

  .bar {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(208, 209, 212);
    color: rgb(255, 255, 255);
    box-sizing: content-box;
    font-size: 0.625rem;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    user-select: none;
    margin: auto;
    border: 2px solid white;
    overflow: auto;
  }

  .selected {
    background-color: #1255E1;
  }

  .selected ~ .bar {
    background-color: transparent;
  }

  .selected ~ .bar:hover {
    background-color: #1255E1;
  }


  .bar:hover {
    background-color: #1255E1;
  }

  .bar:hover ~ .bar {
    background-color: transparent;
  }


  .bar:hover .label {
    visibility: visible;
    position: relative;
    background-color: #1255E1;
  }

  .bar:hover ~ .bar .label {
    visibility: hidden;
  }

  .label {
    text-transform: uppercase;
    visibility: hidden;
    background-color: #1255E1;
  }

  .selected .label {
    visibility: visible;
    background-color: #1255E1;
  }


  .viewports > button {
    background: #1255E1;
    color: white;
    height: 48px;
    width: 372px;
    border: none;
    border-radius: 4px;
  }

  .corners {
    will-change: width, height;
    contain: size;
    background-color: #fff;
    box-sizing: content-box;
    position: relative;
    margin: 0 auto;
    transition: width 0.2s ease-out 0s, height 0.2s ease-out 0s;
    border: rgba(52, 59, 74, 0.2) .5rem solid;
    border-radius: 5px;
    background-clip: padding-box;
  }

  .corners ::slotted(iframe) {
    width: 100%;
    height: 100%;
    position: relative;
    background-color: #fff;
    z-index: 1;
    border: none;
  }

  .header {
    display: flex;
    position: relative;
    padding: 1.5em;
    background-color: rgb(29, 71, 134);
    border-bottom: 1px solid rgb(198, 200, 207);
    justify-content: space-between;
    align-items: center;
  }

  .header > div > p {
    font-size: 18pt;
    color: white;
    margin: 0;
  }

  .header > div > p:nth-child(2) {
    font-size: 15pt;
    color: #b6b6b6;
    margin: 0;
  }

  ${at("SMALL","small")}
  ${at("MEDIUM","medium")}
  ${at("LARGE","large")}
`]}static get properties(){return{src:{type:String},title:{type:String},subtitle:{type:String},_iframeWidth:{type:Number},_iframeHeight:{type:Number},defaultBreakPoints:{type:Object}}}constructor(){super(),this.src=void 0,this.count=0,this.title="",this.subtitle="",this._iframeWidth=320,this._iframeHeight=800,this.defaultBreakPoints=[{width:1360,name:"LARGE",isSelected:!1,textName:"Desktop"},{width:768,name:"MEDIUM",isSelected:!1,textName:"Tablet"},{width:320,name:"SMALL",isSelected:!0,textName:"Mobile"}],this.classes={small:!0,medium:!1,large:!1}}get getBreakpointsTpl(){return w`
      ${this.defaultBreakPoints.map(((t,i)=>w`
            <div class="bar ${t.isSelected?"selected":""}"
                 style="width: ${t.width}px; z-index: ${i}; touch-action: none;" 
                 @click="${()=>this.setViewport(t)}">
                <span class="label">${t.textName}</span>
            </div>
          `))}
    `}render(){return w`
        <div class="header">
            <div>
                <p>${this.title}</p>
                <p>${this.subtitle}</p>
            </div>
            <img src="../assets/logo.png" width="146px"/>
        </div>
        <div class="viewports">
            ${this.getBreakpointsTpl}
        </div>
        <div class="corners ${ct(this.classes)}"
             style="width:${this._iframeWidth}px; height:${this._iframeHeight}px">
            <slot name="_iframe">
            </slot>
        </div>
    `}_updateResolution(t,i){this._iframeWidth=t,this._iframeHeight=i}_generateIframe(){const t=document.createElement("iframe");return t.addEventListener("load",(()=>{t.contentDocument.head.childNodes.length&&this.dispatchEvent(new CustomEvent("iframe-loaded",{bubbles:!0}))})),t}_templateIframe(t,i){return`\n      <html>\n        <head>\n          <meta charset="utf-8">\n          <meta name="viewport" content="width=device-width, initial-scale=1">\n          <title>Iframe ${window.document.title}</title>\n          ${t}\n        </head>\n        <body id="iframeBody">\n          ${i}\n        </body>\n      </html>\n    `}firstUpdated(t){super.firstUpdated(t),this._root=this.shadowRoot||this,this._iframeSlot=this._root.querySelector('[name="_iframe"]')}get _iframe(){return this._iframeSlot.assignedElements()[0]}_setCaseIframe(t){this._cleanIframe();const i=this._generateIframe();i.setAttribute("slot","_iframe"),i.setAttribute("title","demo"),this.appendChild(i),i.contentDocument&&(this._tpl=this._templateIframe("",t),i.contentDocument.open(),i.contentDocument.write(this._tpl),i.contentDocument.close(),i.contentDocument.addEventListener("WebComponentsReady",(()=>{console.log("Finalizado")})))}async _getSrcFromFile(t){const i=await fetch(t);i.ok||console.error(`Unable to retrieve demo case source file ${t}: `,i.status);const s=await i.text(),e=(new DOMParser).parseFromString(s,"text/html"),{body:o}=e;return o.querySelectorAll("script").forEach((t=>{t.innerText.indexOf("dev-server")>-1&&o.removeChild(t)})),o.innerHTML}_cleanIframe(){const t=this._iframe;t&&this.removeChild(t)}setViewport(t){let i;this.defaultBreakPoints.map((t=>(t.isSelected=!1,t))),t.name===st&&(i=nt[st],this.classes=ht(!0)),t.name===et&&(i=nt[et],this.classes=ht(!1,!0)),t.name===ot&&(i=nt[ot],this.classes=ht(!1,!1,!0)),t.isSelected=!0;const[s,e]=i;this._updateResolution(s,e),this.requestUpdate()}updated(t){super.updated&&super.updated(t),t.has("src")&&this._run()}async _run(){const t=await this._getSrcFromFile(this.src);this._setCaseIframe(t)}connectedCallback(){super.connectedCallback&&super.connectedCallback(),document.body.style.margin="0",console.log(this.querySelector("p"),this.src)}}window.customElements.define("gft-demo-helper",ut);export{ut as GftDemoHelper};
