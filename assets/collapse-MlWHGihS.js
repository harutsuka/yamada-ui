import{j as f}from"./jsx-runtime-5BUNAZ9W.js";import{r as x}from"./index-4g5l5LRQ.js";import{A as v}from"./index-eMn_GZVX.js";import{m as M}from"./motion-heeYkzTb.js";import{M as m,a as T,t as b}from"./utils-PqxgXkDx.js";import{f as j}from"./forward-ref-A-8Arhkk.js";import{u as k,a as B,r as C}from"./factory-_mTQY6PK.js";const F=e=>e!=null&&parseFloat(e.toString())>0,H={enter:({animationOpacity:e,endingHeight:t,transition:o,transitionEnd:a,delay:c,duration:r,enter:s}={})=>({...e?{opacity:1}:{},height:t,transition:T(o==null?void 0:o.enter)(c,r),transitionEnd:a==null?void 0:a.enter,...s}),exit:({animationOpacity:e,startingHeight:t,transition:o,transitionEnd:a,delay:c,duration:r,exit:s}={})=>({...e?{opacity:F(t)?1:0}:{},height:t,transition:b(o==null?void 0:o.exit)(c,r),transitionEnd:a==null?void 0:a.exit,...s})},P={initial:"exit",animate:"enter",exit:"exit",variants:H},Q=j(({unmountOnExit:e,isOpen:t,animationOpacity:o=!0,startingHeight:a=0,endingHeight:c="auto",transition:r,transitionEnd:s,delay:i,duration:l,className:u,style:g,__css:h,...y},S)=>{const[N,w]=x.useState(!1);x.useEffect(()=>{C()&&w(!0)},[]);const A=parseFloat(a.toString())>0,I=t||e?"enter":"exit";t=e?t:!0,r=N?r??{enter:{height:{duration:l??.3,ease:m.ease},opacity:{duration:l??.4,ease:m.ease}},exit:{height:{duration:l??.3,ease:m.ease},opacity:{duration:l??.4,ease:m.ease}}}:{enter:{duration:0}},s=e?s:{...s,exit:{...s==null?void 0:s.exit,display:A?"block":"none"}};const p={animationOpacity:o,startingHeight:a,endingHeight:c,transition:r,transitionEnd:s,delay:i,duration:l},_={w:"100%",...h};return f(v,{initial:!1,custom:p,children:t?f(k.div,{as:M.div,ref:S,className:B("ui-collapse",u),...y,...P,custom:p,animate:I,initial:e?"exit":!1,__css:_,style:{overflow:"hidden",display:"block",...g}}):null})});export{Q as C};