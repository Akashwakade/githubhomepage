// import React from "react";
import Strock2 from "../assets/strock2";

import { Box, Typography } from "@mui/material";
import StrockIcon1 from "../assets/strockIcon1";

import StrockIcon2 from "../assets/strockIcon2";

import CombineSvgGreen1 from "../assets/greenStrock/CombineSvgGreen1";
import Strock5 from "../assets/strock5";
import Strock3 from "../assets/strock3";
import StrockIcon3 from "../assets/strockIcon3";
import Strock6 from "../assets/strock6";
import CombineSvgOr from "../assets/orangeCombinesvg/combineSvgOr";

const SvgStrocks = () => {
  return (
    <>
      <Box className="strock">
        <img src="/firstStrock1.svg" alt="" />
      </Box>
      <Box className="GlowBox1 strockIcon2 ">
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: -9, left: -9 }}>
            <Typography>
              <StrockIcon1 />
            </Typography>
          </Box>
        </Box>
      </Box>
      <div className="strock2 ">
        <Strock2 />
      </div>
      <Box className="GlowBox2 strockIcon3 ">
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: -9, left: -9 }}>
            <Typography>
              <StrockIcon2 />
            </Typography>
            z
          </Box>
        </Box>
      </Box>
      <div className="strock3 ">
        <Strock3 />
      </div>

      {/* <div className="strock4">
        <CombineSvgGreen1 />
      </div> */}

      {/* <div className="strock5">
        <Strock5 />
      </div> */}
      {/* <Box className="GlowBox3 strockIcon4 ">
        <Box sx={{ position: "relative" }}>
          <Box sx={{ position: "absolute", top: -9, left: -9 }}>
            <Typography>
              <StrockIcon3 />
            </Typography>
          </Box>
        </Box>
      </Box> */}
      {/* <Box className="strock6"><Strock6 /> </Box> */}
      {/* <CombineSvgOr/> */}
      <Box className="strock7">{/* <Strock7 /> */}</Box>
    </>
  );
};

export default SvgStrocks;
