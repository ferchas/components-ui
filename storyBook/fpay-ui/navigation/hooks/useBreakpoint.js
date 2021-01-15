import { useState, useEffect } from "react";
import throttle from "lodash/throttle";

const SMALL = "small";
const MEDIUM = "medium";
const LARGE = "large";

const getDeviceConfig = (width) => {
  if (width < 600) {
    return SMALL;
  } else if (width >= 600 && width < 1280) {
    return MEDIUM;
  } else if (width >= 1280) {
    return LARGE;
  }
};

const useBreakpointName = () => {
  const [breakpoint, setBreakpoint] = useState(() =>
    getDeviceConfig(window.innerWidth)
  );

  useEffect(() => {
    const calcInnerWidth = throttle(function () {
      setBreakpoint(getDeviceConfig(window.innerWidth));
    }, 200);
    window.addEventListener("resize", calcInnerWidth);
    return () => window.removeEventListener("resize", calcInnerWidth);
  }, []);

  return breakpoint;
};

const useBreakpoint = () => {
  const breakpoint = useBreakpointName();
  return {
    small: breakpoint === SMALL,
    medium: breakpoint === MEDIUM,
    large: breakpoint === LARGE,
  };
};

export default useBreakpoint;
