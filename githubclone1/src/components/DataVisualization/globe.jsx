import React from "react";
import Globe from "react-globe.gl";
import useWindowSize from "../../hooks";
import { Box } from "@mui/material";
import { Center } from "..";
import { GlobeResize } from "../../hooks/globeWidth";
const GlobeBall = () => {
  const size = GlobeResize();
  const N = 20;
  const arcsData = [...Array(N).keys()].map(() => ({
    startLat: (Math.random() - 0.5) * 180,
    startLng: (Math.random() - 0.5) * 360,
    endLat: (Math.random() - 0.5) * 180,
    endLng: (Math.random() - 0.5) * 360,
    color: [
      ["#ffffff", "#ffffff", "#ffffff", "#ffffff"][Math.round(Math.random() * 3)],
      ["#ffffff", "#ffffff", "#ffffff", "#ffffff"][Math.round(Math.random() * 3)],
    ],
  }));
  

  const func3 = () => {
    console.log("ddvdvdv");
  };
  return (
  
        <Globe
          globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
          arcsData={arcsData}
          arcColor={"color"}
          arcDashLength={() => Math.random()}
          arcDashGap={() => Math.random()}
          arcDashAnimateTime={() => Math.random() * 4000 + 500}
          //   width={200}
          height={size.Height}
          width={size.width}
          backgroundColor="#0d1118"
        //   backgroundImageUrl="src/assets/footer-galaxy.png"
          //   onZoom
          onObjectClick={() => func3()}
        />
  
  );
};

export default GlobeBall;
