import styled, { StyledComponent } from "styled-components";
interface Props {
  flex?: string;
  col?: boolean;
  pos?: string;
  wrp?: boolean;
  jc?: string;
  ai?: string;
  over?: string;
  z?: string | number;
  clr?: string;
  font?: string;
  size?: string;
  bc?: string;
  hei?: string;
  wid?: string;
  minH?: string;
  maxH?: string;
  mnxH?: string;
  minW?: string;
  maxW?: string;
  mnxW?: string;
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
export const Block: StyledComponent<"div", any, Props, never> = styled.div<
  Props
>(
  props =>
    `
    display: flex;
    flex-basis: auto;
    ${props.flex ? `flex:${props.flex}` : ""}; 
    ${props.col ? `flex-direction: column` : ""}; 
    ${props.wrp ? `flex-wrap: wrap` : ""}; 
    ${props.jc ? `justify-content:${props.jc}` : ""}; 
    ${props.ai ? `align-items:${props.ai}` : ""}; 
    ${props.pos ? `position:${props.pos}` : ""}; 
    ${props.over ? `overflow:${props.over}` : ""}; 
    ${props.z ? `z-index:${props.z}` : ""}; 
    ${
      props.clr && props.theme.clr[props.clr]
        ? `color:${props.theme.clr[props.clr]}`
        : ""
    };
    ${
      props.font && props.theme.font[props.font]
        ? `font-family: ${props.theme.font[props.font]}`
        : ""
    };
    ${
      props.size && props.theme.size[props.size]
        ? `font-size:${props.theme.size[props.size]}`
        : ""
    };
    ${
      props.bc && props.theme.bc[props.bc]
        ? `background-color:${props.theme.bc[props.bc]}`
        : ""
    };
    ${props.hei ? `height:${props.hei}` : ""}; 
    ${props.wid ? `width:${props.wid}` : ""};   
    ${
      props.minH || props.mnxH ? `  min-height:${props.minH || props.mnxH}` : ""
    };
    ${
      props.maxH || props.mnxH ? `  max-height:${props.maxH || props.mnxH}` : ""
    };  
    ${
      props.minW || props.mnxW ? `  min-width:${props.minW || props.mnxW}` : ""
    };  
    ${
      props.maxW || props.mnxW ? `  max-width:${props.maxW || props.mnxW}` : ""
    };  
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
