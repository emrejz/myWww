import styled, { StyledComponent } from "styled-components";

interface Props {
  block?: boolean;
  bc?: string;
  clr?: string;
  font?: string;
  size?: string;
  ta?: string;
  wid?: string;
  mar?: string;
  pad?: string;
  pl?: string;
  pr?: string;
  pt?: string;
  pb?: string;
  ml?: string;
  mr?: string;
  mt?: string;
  mb?: string;
}
export const Text: StyledComponent<"span", any, Props, never> = styled.span<
  Props
>(
  props =>
    `
    display:${props.block ? "block" : ""};
   ${
     props.bc && props.theme.bc[props.bc]
       ? `background-color:${props.theme.bc[props.bc]}`
       : ""
   };
   color: ${
     props.clr && props.theme.clr[props.clr]
       ? props.theme.clr[props.clr]
       : "inherit"
   };
   font-family:${
     props.font && props.theme.font[props.font]
       ? props.theme.font[props.font]
       : "inherit"
   };
   font-size:${
     props.size && props.theme.size[props.size]
       ? props.theme.size[props.size]
       : "inherit"
   };
   ${props.ta ? ` text-align:${props.ta}` : ""};  
   ${props.wid ? `width:${props.wid}` : ""};  
   ${props.mar ? `margin:${props.mar}` : ""}; 
   ${props.pad ? `padding:${props.pad}` : ""};   
   ${props.pl ? `padding-left:${props.pl}` : ""};  
   ${props.pr ? `padding-right:${props.pr}` : ""};  
   ${props.pt ? `padding-top:${props.pt}` : ""};  
   ${props.pb ? `padding-bottom:${props.pb}` : ""};  
   ${props.ml ? `margin-left:${props.ml}` : ""};  
   ${props.mr ? `margin-right:${props.mr}` : ""};  
   ${props.mt ? `margin-top:${props.mt}` : ""};  
   ${props.mb ? `margin-bottom:${props.mb}` : ""};  
`
);
