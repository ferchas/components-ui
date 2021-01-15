import React from "react";
import { ThemeProvider } from "styled-components";

import theme from "./../fpay-ui/theme";

require("typeface-roboto");

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: { expanded: true },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
