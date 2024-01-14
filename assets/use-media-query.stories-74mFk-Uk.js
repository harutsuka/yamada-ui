import{j as u,a as D,F}from"./jsx-runtime-5BUNAZ9W.js";import{r as f}from"./index-4g5l5LRQ.js";import{u as S}from"./environment-provider-7Jfup-Jr.js";import{T as g,n as L}from"./factory-_mTQY6PK.js";import{T as h}from"./text-iDDnHZIy.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./forward-ref-A-8Arhkk.js";import"./use-component-style-lJBCD4Hi.js";import"./theme-provider-XorC6D0y.js";const Q=(s,{ssr:i=!0,fallback:c}={})=>{const{getWindow:m}=S(),d=L(s)?s:[s];let l=L(c)?c:[c];l=l.filter(r=>r!=null);const[j,x]=f.useState(()=>d.map((r,t)=>({media:r,matches:i?!!l[t]:m().matchMedia(r).matches})));return f.useEffect(()=>{const r=m();x(d.map(e=>({media:e,matches:r.matchMedia(e).matches})));const t=d.map(e=>r.matchMedia(e)),a=e=>{x(y=>y.slice().map(p=>p.media===e.media?{...p,matches:e.matches}:p))};return t.forEach(e=>{g(e.addListener)?e.addListener(a):e.addEventListener("change",a)}),()=>{t.forEach(e=>{g(e.removeListener)?e.removeListener(a):e.removeEventListener("change",a)})}},[m]),j.map(r=>r.matches)},C={title:"Hooks / useMediaQuery"},n=()=>{const[s]=Q("(min-width: 1280px)");return u(h,{children:s?"larger than 1280px":"smaller than 1280px"})},o=()=>{const[s,i]=Q(["(min-width: 1280px)","(prefers-color-scheme: dark)"]);return D(F,{children:[u(h,{children:s?"larger than 1280px":"smaller than 1280px"}),u(h,{children:i?"color mode is dark":"color mode is light"})]})};var M,T,E;n.parameters={...n.parameters,docs:{...(M=n.parameters)==null?void 0:M.docs,source:{originalSource:`() => {
  const [flg] = useMediaQuery("(min-width: 1280px)");
  return <Text>{flg ? "larger than 1280px" : "smaller than 1280px"}</Text>;
}`,...(E=(T=n.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var k,v,w;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`() => {
  const [isLarge, isDark] = useMediaQuery(["(min-width: 1280px)", "(prefers-color-scheme: dark)"]);
  return <>
      <Text>{isLarge ? "larger than 1280px" : "smaller than 1280px"}</Text>
      <Text>{isDark ? "color mode is dark" : "color mode is light"}</Text>
    </>;
}`,...(w=(v=o.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};const G=["basic","useMulti"];export{G as __namedExportsOrder,n as basic,C as default,o as useMulti};