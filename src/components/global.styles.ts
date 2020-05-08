import {
  createGlobalStyle,
  css,
  ThemedCssFunction,
  DefaultTheme,
  keyframes,
} from "styled-components/macro";
import oak from "../images/oak.jpg";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Hind", cursive;
    line-height: 1.2;
    margin: 0; 
    padding: 0; 
    background-color: #888; 
    color: #333; 
    background-image: url("${oak}");
  }
`;

export const colors = {
  dark: "#333",
  textLight: "#ddd",
  textDark: "#444",
  highlight: "#ffcc00",
};

const unfoldUpKeyframes = keyframes`
  {
    0% {
      transform: scaleY(0);
      transform-origin: 0% 100%;
      opacity: 1;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 0% 100%;
      opacity: 1;
    }
  }
`;

const foldDownAnimationKeyframes = keyframes`
   {
    0% {
      transform: scaleY(1);
      transform-origin: 0% 100%;
      opacity: 1;
    }
    100% {
      transform: scaleY(0);
      transform-origin: 0% 100%;
      opacity: 1;
    }
  }
`;

export const unfoldUpAnimation = css`
  animation: ${unfoldUpKeyframes} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const foldDownAnimation = css`
  animation: ${foldDownAnimationKeyframes} 0.2s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

const foldUpKeyframes = keyframes`
  {
    0% {
      transform: scaleY(0);
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }
`;

const unfoldDownKeyframes = keyframes`
   {
    0% {
      transform: scaleY(1);
      transform-origin: 100% 0%;
      opacity: 1;
    }
    100% {
      transform: scaleY(0);
      transform-origin: 100% 0%;
      opacity: 1;
    }
  }
`;

export const unfoldDownAnimation = css`
  animation: ${foldUpKeyframes} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
`;

export const foldUpAnimation = css`
  animation: ${unfoldDownKeyframes} 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
    both;
`;

export interface Breakpoints {
  xl: number;
  lg: number;
  ml: number;
  md: number;
  sm: number;
  xs: number;
}

export const breakpoints: Breakpoints = {
  xl: 1920,
  lg: 1280,
  ml: 1024,
  md: 992,
  sm: 768,
  xs: 0,
};

export type BreakpointKeys = keyof Breakpoints;

type BreakpointArray = string[] & { [key in BreakpointKeys]: string };

interface Theme {
  breakpoints: BreakpointArray;
}

const theme: Theme = {
  breakpoints: [
    `${breakpoints.sm}px`,
    `${breakpoints.md}px`,
    `${breakpoints.lg}px`,
    `${breakpoints.lg}px`,
  ] as BreakpointArray,
};

theme.breakpoints.sm = theme.breakpoints[0];
theme.breakpoints.md = theme.breakpoints[1];
theme.breakpoints.lg = theme.breakpoints[2];
theme.breakpoints.xl = theme.breakpoints[3];

export { theme };

export type MediaQuery = {
  [key in BreakpointKeys]: ThemedCssFunction<DefaultTheme>;
};

export const mqMax: MediaQuery = Object.keys(breakpoints).reduce<MediaQuery>(
  (accumulator: MediaQuery, label: string) => {
    const pxSizeMin = breakpoints[label as BreakpointKeys];
    accumulator[label as BreakpointKeys] = (...args: any[]) => css`
      @media (max-width: ${pxSizeMin - 1}px) {
        ${css(args[0], ...args.slice(1))};
      }
    `;
    return accumulator;
  },
  {} as MediaQuery
);

export const mqMin: MediaQuery = Object.keys(breakpoints).reduce<MediaQuery>(
  (accumulator: MediaQuery, label: string) => {
    const pxSizeMin = breakpoints[label as BreakpointKeys];
    accumulator[label as BreakpointKeys] = (...args: any[]) => css`
      @media (min-width: ${pxSizeMin}px) {
        ${css(args[0], ...args.slice(1))};
      }
    `;
    return accumulator;
  },
  {} as MediaQuery
);
