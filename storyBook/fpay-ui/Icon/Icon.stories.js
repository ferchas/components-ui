import React from "react";

import Icon from ".";
import theme from "./../theme";

export default {
  title: "Icon",
  component: Icon,
  argTypes: {
    color: {
      description: "Color del icono",
      table: {
        type: {
          summary: "String",
        },
        defaultValue: { summary: "gray700" },
      },
      control: {
        type: "select",
        options: Object.keys(theme.colors),
      },
    },
  },
};

const Template = (args) => <Icon {...args} />;

export const Main = Template.bind({});
Main.args = {
  icon: "ic-arrow-down",
  color: "gray700",
};
