import{a as f}from"./index-9082b512.js";import{r as m}from"./index-f1f2c4b1.js";import{h as F,A as d,f as p}from"./factory-81c6291d.js";import{b as E,e as h,f as b,h as A}from"./theme-2b4f2a73.js";const g=r=>{const e=r.current;if(!e)return!1;const s=b(e);return!s||e.contains(s)?!1:!!A(s)},x=(r,{shouldFocus:e,visible:s,focusRef:o})=>{const t=e&&!s;F(()=>{if(!t||g(r))return;const n=(o==null?void 0:o.current)||r.current;n&&requestAnimationFrame(()=>{n.focus()})},[t,r,o])},L=(r,{focusRef:e,preventScroll:s,shouldFocus:o,visible:t}={preventScroll:!0,shouldFocus:!1})=>{const n=d(r)?r.current:r,l=o&&t,c=m.useRef(l),a=m.useRef(t);p(()=>{!a.current&&t&&(c.current=l),a.current=t},[t,l]);const u=m.useCallback(()=>{if(!(!t||!n||!c.current)&&(c.current=!1,!n.contains(document.activeElement)))if(e!=null&&e.current)requestAnimationFrame(()=>{var i;(i=e.current)==null||i.focus({preventScroll:s})});else{const i=E(n);i.length>0&&requestAnimationFrame(()=>{i[0].focus({preventScroll:s})})}},[t,s,n,e]);F(()=>{u()},[u]),f(n,"transitionend",u)},O=({ref:r,elements:e,enabled:s})=>{const o=()=>{var t;return((t=r.current)==null?void 0:t.ownerDocument)??document};f(o,"pointerdown",t=>{if(!h()||!s)return;const n=t.target,c=(e??[r]).some(a=>{const u=d(a)?a.current:a;return(u==null?void 0:u.contains(n))||u===n});o().activeElement!==n&&c&&(t.preventDefault(),n.focus())})};export{x as a,L as b,O as u};
//# sourceMappingURL=index-a4f03fc7.js.map