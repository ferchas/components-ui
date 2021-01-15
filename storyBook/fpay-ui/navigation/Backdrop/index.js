import React from "react";

import classes from "./Backdrop.module.scss";

const Backdrop = ({ show, clicked, className }) =>
  show && (
    <div
      className={[classes.Backdrop, className].join(" ")}
      onClick={clicked}
    ></div>
  );

export default Backdrop;
