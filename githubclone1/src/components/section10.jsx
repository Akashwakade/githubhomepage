import { Box, Typography } from "@mui/material";
import React from "react";
import { Center, MyText } from ".";
import Strock5 from "../assets/strock5";
import StrockIcon3 from "../assets/strockIcon3";
import Strock6 from "../assets/strock6";

import Strock8 from "../assets/strock8";
import Strock8Icon from "../assets/strock8Icon";
import Strock9 from "../assets/strock9";
import { useSelector } from "react-redux";

const Section10 = () => {
  const { strock7 } = useSelector((state) => state.animationSteps);
  return (
    <Box
      position={"relative"}
      marginLeft={{ sx: "0rem", sm: "4rem" }}
      marginTop={{ lg: "9rem", sm: "9rem", xs: "8rem" }}
    >
      <Box marginLeft={{ xs: "1rem", sm: "4rem", lg:"-3rem" }}>
        <Typography
          fontSize={{ lg: "3rem", sm: "2rem", xs: "1.2rem" }}
          sx={{ fontSize: "2rem", color: "white" }}
        >
          Security
        </Typography>

        <div>
          <Box className="sideSlide" maxWidth={900}>
            <Typography
              mt={2}
              className="Observervi"
              variant="h2"
              sx={{
                fontSize: { lg: "3rem", sm: "2rem", xs: "1.5rem" },
                color: "#939AFF",
                fontWeight: "400",
              }}
            >
              Embed security into the developer workflow.
              <span style={{ color: "white" }}>
                {" "}
                With GitHub, developers can secure their code in minutes and
                organizations can automatically comply with regulations.
              </span>
            </Typography>
          </Box>
        </div>
      </Box>

      <Box
        sx={{
          position: "absolute",
          top: -166,
          left: { lg: -140, sm: -70, xs: -20 },
          zIndex: -400,
        }}
      >
        <Strock8 />
        <Box></Box>
        <Box mt={2} className="GlowBox4">
          <Box sx={{ position: "relative" }}>
            <Box sx={{ position: "absolute", top: -9, left: -9 }}>
              <Typography
                className="transition"
                display={strock7 ? "block" : "none"}
              >
                <Strock8Icon />
              </Typography>
            </Box>
          </Box>
          <Box pt={4} className="">
            <Strock9 />{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Section10;
