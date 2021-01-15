import React, { useEffect, useState } from "react";

import useBreakpoint from "../../hooks/useBreakpoint";

const DrawerToggle = ({ clicked, expanded, image }) => {
  const { large } = useBreakpoint();
  const [drawerImage, setDrawerImage] = useState("");

  useEffect(() => {
    if (large)
      setDrawerImage(
        expanded ? "/images/ic_back_16.svg" : "/images/ic_forward_16.svg"
      );
    else setDrawerImage(image ? image : "/images/ic_close_24.svg");
  }, [large, expanded]);

  return <img onClick={clicked} src={drawerImage} alt="drawer toggle" />;
};

export default DrawerToggle;
