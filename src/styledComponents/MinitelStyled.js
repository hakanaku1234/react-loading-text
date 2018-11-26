import styled, { keyframes, css } from "styled-components";

export const WrapperMinitel = styled.div`
  position: relative;
  display: inline-block;
`;

const LineAnim = keyframes`
    from {
        width: 100%;
    }
    to {
        width: 0%;
    }
`;
const sizes = {
  md: 1200,
  sm: 992,
  xs: 768
};

const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)}
    }
  `;
  return acc;
}, {});

export const Line = styled.div`
    position: absolute;
    display:block;
    right:0;
    width:100%;
    z-index:999;
    transform-origin: 100% 0%;
    animation-name: ${LineAnim};
    animation-fill-mode: forwards;

    /* default */
    top: ${props => props.nb * props.style.default[0]}px;
    animation-delay: ${props =>
      props.style.default[2] + props.nb * props.style.default[3]}s;
    height: ${props => props.style.default[0]}px;
    background-color: ${props => props.style.default[1]};
    animation-duration: ${props => props.style.default[3]}s;
    animation-timing-function: ${props => props.style.default[4]};

    ${media.md` top: ${props => props.nb * props.style.md[0]}px;
                animation-delay: ${props =>
                  props.style.md[2] + props.nb * props.style.md[3]}s;
                height: ${props => props.style.md[0]}px;
                background-color: ${props => props.style.md[1]};
                animation-duration: ${props => props.style.md[3]}s;
                animation-timing-function: ${props => props.style.md[4]};
    `}
    ${media.sm` top: ${props => props.nb * props.style.sm[0]}px;
                animation-delay: ${props =>
                  props.style.sm[2] + props.nb * props.style.sm[3]}s;
                height: ${props => props.style.sm[0]}px;
                background-color: ${props => props.style.sm[1]};
                animation-duration: ${props => props.style.sm[3]}s;
                animation-timing-function: ${props => props.style.sm[4]};
    `}
    ${media.xs` top: ${props => props.nb * props.style.xs[0]}px;
                animation-delay: ${props =>
                  props.style.xs[2] + props.nb * props.style.xs[3]}s;
                height: ${props => props.style.xs[0]}px;
                background-color: ${props => props.style.xs[1]};
                animation-duration: ${props => props.style.xs[3]}s;
                animation-timing-function: ${props => props.style.xs[4]};
    `}  
`;
