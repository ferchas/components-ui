import React from "react";
import Icons from "./Icons";
import theme from "../theme";

const Icon = ({ icon, color }) => {
  const SelectedIcon = Icons[icon];
  const themeColor = theme.colors[color];

  return <SelectedIcon fill={themeColor} />;
};

export default Icon;
