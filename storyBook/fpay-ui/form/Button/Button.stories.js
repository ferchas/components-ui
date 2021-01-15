import React from "react";

import Button from ".";
import theme from "../../theme";

export default {
  title: "form/Button",
  component: Button,
  argTypes: {
    color: {
      description: "Color del botón",
      table: {
        type: {
          summary: "String",
        },
        defaultValue: { summary: "gbrand500" },
      },
      control: {
        type: "select",
        options: Object.keys(theme.colors),
      },
    },
    size: {
      description: "Tamaño del botón",
      table: {
        type: {
          summary: "String",
        },
      },
      control: {
        type: "select",
        options: [undefined, "small", "medium", "large"],
      },
    },
    outlined: {
      description: "Si el botón es sólido o delineado",
      table: {
        type: {
          summary: "Boolean",
        },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    disabled: {
      description: "Deshabilitación del botón",
      table: {
        type: {
          summary: "Boolean",
        },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    children: {
      description: "Contenido del botón",
      table: {
        type: {
          summary: "String",
        },
        defaultValue: { summary: "" },
      },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Main = Template.bind({});
Main.args = {
  children: "Main Button",
  outlined: false,
  color: "gbrand500",
  disabled: false,
  size: undefined,
};

export const Outlined = Template.bind({});
Outlined.args = {
  children: "Outlined Button",
  outlined: true,
  color: "gbrand500",
  disabled: false,
  size: undefined,
};

export const Small = Template.bind({});
Small.args = {
  children: "Small Button",
  outlined: false,
  color: "gbrand500",
  disabled: false,
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  children: "Medium Button",
  outlined: false,
  color: "gbrand500",
  disabled: false,
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  children: "Large Button",
  outlined: false,
  color: "gbrand500",
  disabled: false,
  size: "large",
};
