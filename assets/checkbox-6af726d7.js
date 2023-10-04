import{j as l,a as ne}from"./jsx-runtime-29545a09.js";import{t as te}from"./index-c38aa865.js";import{r as a}from"./index-76fb7be0.js";import{u as se}from"./index-335d7bc6.js";import{a as J,u as ae,f as E}from"./form-control-e5cbff80.js";import{F as oe}from"./flex-e3a903c4.js";import{c as _,o as ce,e as Q,y as M,n as H,L as ie,d as w,f as j,h as re,z as L,w as W,v as C}from"./factory-693455ee.js";import{A as le}from"./index-033cf86e.js";import{m as G}from"./motion-90200a2f.js";import{a as ue}from"./use-component-style-3d3df90d.js";import{o as de,d as P}from"./theme-d25050a9.js";const z=t=>t&&H(t)&&H(t.target),he=({isNative:t,...u})=>{u.onChange=_(u.onChange);const[e,o]=se({value:u.value,defaultValue:u.defaultValue||[],onChange:u.onChange}),k=a.useCallback(c=>{const i=z(c)?c.target.checked:!e.includes(c),d=z(c)?c.target.value:c,r=i?[...e,d]:e.filter(s=>String(s)!==String(d));o(r)},[e,o]),p=a.useCallback((c={},i=null)=>({...c,ref:i,[t?"checked":"isChecked"]:e.some(d=>String(c.value)===String(d)),onChange:k}),[k,t,e]);return{value:e,setValue:o,onChange:k,getCheckboxProps:p}},[fe,ke]=ce({strict:!1,name:"CheckboxGroupContext"}),me=a.forwardRef(({className:t,size:u,variant:e,colorScheme:o,children:k,direction:p="column",gap:c,...i},d)=>{const{value:r,onChange:s}=he(i),{isRequired:y,isReadOnly:I,isDisabled:g,isInvalid:D}=J(i);return l(fe,{value:{size:u,variant:e,colorScheme:o,isRequired:y,isReadOnly:I,isDisabled:g,isInvalid:D,value:r,onChange:s},children:l(oe,{ref:d,className:Q("ui-checkbox-group",t),role:"group",direction:p,gap:c??(p==="row"?"1rem":void 0),...M(i,["value","defaultValue","onChange","isInvalid","isDisabled","isRequired","isReadOnly"]),children:k})})});me.displayName="CheckboxGroup";const Ce=t=>{const{id:u,name:e,value:o,defaultChecked:k,tabIndex:p,required:c,disabled:i,readOnly:d,isIndeterminate:r,...s}=ae(t),[y,I]=a.useState(!1),[g,D]=a.useState(!1),[S,b]=a.useState(!1),[R,v]=a.useState(!1),h=a.useRef(null),[A,B]=a.useState(!0),[q,F]=a.useState(!!k),N=t.isChecked!==void 0,m=N?t.isChecked:q,K=_(n=>{var x;if(d||i){n.preventDefault();return}N||F(!m||r?!0:n.target.checked),(x=s.onChange)==null||x.call(s,n)},[d,i,N,m,r]),U=_(s.onBlur),O=_(s.onFocus),V=a.useCallback(({key:n})=>{n===" "&&v(!0)},[v]),T=a.useCallback(({key:n})=>{n===" "&&v(!1)},[v]);a.useEffect(()=>te(I),[]),j(()=>{h.current&&(h.current.indeterminate=!!r)},[r]),re(()=>{i&&D(!1)},[i,D]),j(()=>{var n;(n=h.current)!=null&&n.form&&(h.current.form.onreset=()=>F(!!k))},[]),j(()=>{h.current&&h.current.checked!==m&&F(h.current.checked)},[h.current]);const Y=a.useCallback((n={},x=null)=>({...L(s,E),...n,ref:W(x,f=>{f&&B(f.tagName==="LABEL")}),"data-checked":P(m),onClick:C(n.onClick,()=>{var f;A||((f=h.current)==null||f.click(),requestAnimationFrame(()=>{var X;return(X=h.current)==null?void 0:X.focus()}))})}),[m,A,s]),Z=a.useCallback((n={},x=null)=>({...L(s,E),...n,ref:x,"data-active":P(R),"data-hover":P(S),"data-checked":P(m),"data-focus":P(g),"data-focus-visible":P(g&&y),"data-indeterminate":P(r),"aria-hidden":!0,onMouseDown:C(n.onMouseDown,f=>{g&&f.preventDefault(),v(!0)}),onMouseUp:C(n.onMouseUp,()=>v(!1)),onMouseEnter:C(n.onMouseEnter,()=>b(!0)),onMouseLeave:C(n.onMouseLeave,()=>b(!1))}),[R,m,g,S,y,r,s]),$=a.useCallback((n={},x=null)=>({...L(s,E),...n,ref:W(h,x),id:u,type:"checkbox",name:e,value:o,tabIndex:p,required:c,disabled:i,readOnly:d,checked:m,style:{border:"0px",clip:"rect(0px, 0px, 0px, 0px)",height:"1px",width:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},onChange:C(n.onChange,K),onBlur:C(n.onBlur,U,()=>D(!1)),onFocus:C(n.onFocus,O,()=>D(!0)),onKeyDown:C(n.onKeyDown,V),onKeyUp:C(n.onKeyUp,T)}),[s,u,e,o,p,c,i,d,m,K,U,O,V,T]),ee=a.useCallback((n={},x=null)=>({...L(s,E),...n,ref:x,"data-checked":P(m),onMouseDown:C(n.onMouseDown,f=>{f.preventDefault(),f.stopPropagation()}),onTouchStart:C(n.onTouchStart,f=>{f.preventDefault(),f.stopPropagation()})}),[m,s]);return{isFocusVisible:y,isFocused:g,isHovered:S,isActive:R,isChecked:m,isIndeterminate:r,getContainerProps:Y,getIconProps:Z,getInputProps:$,getLabelProps:ee}},be=a.forwardRef((t,u)=>{const e=ke(),o=J(t),[k,p]=ue("Checkbox",{...e?M(e,["value"]):{},...t}),{className:c,gap:i="0.5rem",isRequired:d=(e==null?void 0:e.isRequired)??o.isRequired,isReadOnly:r=(e==null?void 0:e.isReadOnly)??o.isReadOnly,isDisabled:s=(e==null?void 0:e.isDisabled)??o.isDisabled,isInvalid:y=(e==null?void 0:e.isInvalid)??o.isInvalid,iconProps:I,inputProps:g,labelProps:D,children:S,...b}=de(p),{isChecked:R,isIndeterminate:v,getContainerProps:h,getInputProps:A,getIconProps:B,getLabelProps:q}=Ce({...b,isRequired:d,isReadOnly:r,isDisabled:s,isInvalid:y,isChecked:e!=null&&e.value&&b.value?e.value.includes(b.value):b.isChecked,onChange:e!=null&&e.onChange&&b.value?ie(e.onChange,b.onChange):b.onChange}),F=a.cloneElement((I==null?void 0:I.children)??l(ve,{}),{__css:{opacity:R||v?1:0,transform:R||v?"scale(1)":"scale(0.95)",transitionProperty:"transform",transitionDuration:"normal"},isIndeterminate:v,isChecked:R,isRequired:d,isReadOnly:r,isDisabled:s,isInvalid:y});return ne(w.label,{className:Q("ui-checkbox",c),...h(),__css:{cursor:"pointer",position:"relative",display:"inline-flex",alignItems:"center",verticalAlign:"top",gap:i,...k.container},...M(b,["id","name","value","defaultValue","defaultChecked","isChecked","isIndeterminate","onChange","onBlur","onFocus","tabIndex"]),children:[l(w.input,{className:"ui-checkbox-input",...A(g,u)}),l(w.span,{className:"ui-checkbox-icon",__css:{pointerEvents:r?"none":void 0,position:"relative",display:"inline-block",userSelect:"none",...k.icon},...B(M(I??{children:void 0},["children"])),children:F}),l(w.span,{className:"ui-checkbox-label",__css:{...k.label},...q(D),children:S})]})});be.displayName="Checkbox";const ve=({isIndeterminate:t,isChecked:u,...e})=>{const o=M(e,["isRequired","isReadOnly","isDisabled","isInvalid"]);return l(le,{initial:!1,children:t||u?l(w.div,{__css:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)"},children:l(w.div,{as:G.div,variants:{unchecked:{scale:.5},checked:{scale:1}},initial:"unchecked",animate:"checked",exit:"unchecked",style:{display:"flex",alignItems:"center",justifyContent:"center"},children:t?l(pe,{...o}):l(xe,{...o})})}):null})},xe=t=>l(w.svg,{as:G.svg,width:"1.2em",viewBox:"0 0 12 10",variants:{unchecked:{opacity:0,strokeDashoffset:16},checked:{opacity:1,strokeDashoffset:0,transition:{duration:.2}}},style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...t,children:l("polyline",{points:"1.5 6 4.5 9 10.5 1"})}),pe=t=>l(w.svg,{as:G.svg,width:"1.2em",viewBox:"0 0 24 24",variants:{unchecked:{scaleX:.65,opacity:0},checked:{scaleX:1,opacity:1,transition:{scaleX:{duration:0},opacity:{duration:.02}}}},style:{stroke:"currentColor",strokeWidth:4},...t,children:l("line",{x1:"21",x2:"3",y1:"12",y2:"12"})});export{be as C,me as a,Ce as b,he as u};
//# sourceMappingURL=checkbox-6af726d7.js.map