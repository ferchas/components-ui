import { css } from "styled-components";

const theme = {
  breakpoints: {
    sm: 0,
    md: 600,
    lg: 1280,
  },
  colors: {
    error: "#e40046",
    gbrand900: "#213e22",
    gbrand800: "#2c6424",
    gbrand700: "#378b27",
    gbrand600: "#3ea029",
    gbrand500: "#43b02a",
    gbrand400: "#72c65f",
    gbrand300: "#a0d894",
    gbrand200: "#d0ecc9",
    gbrand100: "#ecf7e9",
    bbrand900: "#102e4b",
    bbrand800: "#0d4375",
    bbrand700: "#0a5aa2",
    bbrand600: "#0268bc",
    bbrand500: "#0072ce",
    bbrand400: "#4193da",
    bbrand300: "#80b7e6",
    bbrand200: "#c0dbf3",
    bbrand100: "#e5f1fa",
    ybrand900: "#504017",
    ybrand800: "#8a670f",
    ybrand700: "#c49006",
    ybrand600: "#e7a703",
    ybrand500: "#ffb800",
    ybrand400: "#ffca40",
    ybrand300: "#ffdc7f",
    ybrand200: "#ffeebf",
    ybrand100: "#fff8e5",
    rbrand900: "#4a1717",
    rbrand800: "#7d150f",
    rbrand700: "#b21407",
    rbrand600: "#d11203",
    rbrand500: "#e61200",
    rbrand400: "#ec4d40",
    rbrand300: "#f2887f",
    rbrand200: "#f9c3bf",
    rbrand100: "#fde6e5",
    gray900: "#16181f",
    gray800: "#444b62",
    gray700: "#838aa2",
    gray600: "#a2a7ba",
    gray500: "#caced8",
    gray400: "#e4e6eb",
    gray300: "#f5f6f7",
    gray200: "#f8f8f8",
    gray100: "#fafafa",
  },
  fonts: {
    main: css`
      font-family: "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    `,
    code: css`
      font-family: "source-code-pro", "Menlo", "Monaco", "Consolas",
        "Courier New", monospace;
    `,
  },
  init: function () {
    this.defaultColors = {
      //
    };
    this.breakpoint = (size, sizeEnd) => {
      if (!(size in this.breakpoints)) size = "sm";
      return `@media (min-width: ${this.breakpoints[size]}px) ${
        sizeEnd && this.breakpoints[sizeEnd]
          ? `and (max-width: ${this.breakpoints[sizeEnd]}px)`
          : ""
      }`;
    };
    this.textTypes = {
      "H5-w400": css`
        ${this.fonts.main};
        font-size: 24px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        text-align: left;
      `,
      "H6-w400": css`
        ${this.fonts.main};
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.3;
        letter-spacing: normal;
        text-align: left;
      `,
      "Title-w400": css`
        ${this.fonts.main};
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        text-align: left;
      `,
      "Subtitle-1-w500": css`
        ${this.fonts.main};
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: normal;
        text-align: left;
      `,
      "Subtitle-1-w400": css`
        ${this.fonts.main};
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.31;
        letter-spacing: normal;
        text-align: left;
      `,
      "Body-2-w500": css`
        ${this.fonts.main};
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: left;
      `,
      "Body-2-w400": css`
        ${this.fonts.main};
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.36;
        letter-spacing: normal;
        text-align: left;
      `,
      "Caption-w500": css`
        ${this.fonts.main};
        font-size: 12px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        text-align: left;
      `,
      "Caption-w400": css`
        ${this.fonts.main};
        font-size: 12px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.33;
        letter-spacing: normal;
        text-align: left;
      `,
      "Overline-w500": css`
        ${this.fonts.main};
        font-size: 10px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.3;
        letter-spacing: normal;
        text-align: left;
      `,
      "Overline-w400": css`
        ${this.fonts.main};
        font-size: 10px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 1.3;
        letter-spacing: normal;
        text-align: left;
      `,
    };
    return this;
  },
}.init();

export default theme;
