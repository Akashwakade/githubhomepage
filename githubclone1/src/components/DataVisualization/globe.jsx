import React from "react";
import Globe from "react-globe.gl";
import useWindowSize from "../../hooks";
import { Box } from "@mui/material";
import { Center } from "..";
import { GlobeResize } from "../../hooks/globeWidth";

const GlobeBall = () => {
  // Get the size of the globe using the GlobeResize hook.
  const size = GlobeResize();

  // Define the number of arcs to be displayed on the globe.
  const N = 20;

  // Generate random arcsData, which define the arcs on the globe.
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

  // Define a function func3.
  const func3 = () => {
    console.log("ddvdvdv");
  };

  return (
    <Globe
      // Set the globe's background image.
      globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
      arcsData={arcsData}
      arcColor={"color"}
      arcDashLength={() => Math.random()}
      arcDashGap={() => Math.random()}
      arcDashAnimateTime={() => Math.random() * 4000 + 500}
      height={size.Height}
      width={size.width}
      backgroundColor="#0d1118"
      onObjectClick={() => func3()} // Define a click event handler for objects on the globe.
    />
  );
};

export default GlobeBall;
