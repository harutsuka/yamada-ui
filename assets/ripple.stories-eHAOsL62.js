import{a as m,j as r}from"./jsx-runtime-5BUNAZ9W.js";import{u as a,R as d}from"./use-ripple-iEFkrfzn.js";import{B as p}from"./box-vGn7lDxy.js";import{T as l}from"./text-XO0n_4gP.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-EargzzxG.js";import"./motion-ukEXpwwk.js";import"./motion-rimQiqxs.js";import"./forward-ref-A-8Arhkk.js";import"./factory-1uJrB2de.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-KmmwFJNj.js";import"./use-component-style-a9Y1koMB.js";import"./theme-provider-4KOeReOn.js";const g={title:"Components / Other / Ripple",component:p},o=()=>{const{onPointerDown:i,...s}=a();return m(p,{as:"button",type:"button",p:"md",rounded:"md",bg:"primary",color:"white",position:"relative",overflow:"hidden",onPointerDown:i,children:[r(l,{children:"Button"}),r(d,{...s})]})};var t,e,n;o.parameters={...o.parameters,docs:{...(t=o.parameters)==null?void 0:t.docs,source:{originalSource:`() => {
  const {
    onPointerDown,
    ...rippleProps
  } = useRipple();
  return <Box as="button" type="button" p="md" rounded="md" bg="primary" color="white" position="relative" overflow="hidden" onPointerDown={onPointerDown}>
      <Text>Button</Text>

      <Ripple {...rippleProps} />
    </Box>;
}`,...(n=(e=o.parameters)==null?void 0:e.docs)==null?void 0:n.source}}};const j=["basic"];export{j as __namedExportsOrder,o as basic,g as default};