import React from "react";

import Input from ".";

export default {
  title: "form/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Main = Template.bind({});
Main.args = {
  value: "Etiqueta",
  label: "Etiqueta",
  caption: "Aclaración",
  disabled: false,
  error: false,
};
export const Unfilled = Template.bind({});
Unfilled.args = {
  value: "",
  label: "Etiqueta",
  caption: "",
  disabled: false,
  error: false,
};

export const Error = Template.bind({});
Error.args = {
  value: "Texto",
  label: "Etiqueta",
  caption: "Aclaración",
  disabled: false,
  error: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  value: "Texto",
  label: "Etiqueta",
  caption: "Aclaración",
  disabled: true,
  error: false,
};
