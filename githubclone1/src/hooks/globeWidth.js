import React, { useState } from "react";
import { useEffect } from "react";
import useWindowSize from ".";
export const GlobeResize = () => {
  const size = useWindowSize();
  console.log(size);
  const width = size.width;
  const [globeWidth, setGlobeWidth] = useState("0");
  const [globeHeigth, setGlobeHeigth] = useState(600);
  useEffect(() => {
    if (width > 750) {
      setGlobeWidth(width / 2);
      setGlobeHeigth(900);
    }
    if(width < 821 && width >600){
        setGlobeHeigth(450);
        const tabWidth = (width / 100) * 80;
        setGlobeWidth(tabWidth);
    }
    if (width < 600) {
      const mobileWidth = (width / 100) * 78;
      setGlobeWidth(mobileWidth);
      setGlobeHeigth(350);
    }
  }, [size]);
  return { width: globeWidth, Height: globeHeigth };
};
