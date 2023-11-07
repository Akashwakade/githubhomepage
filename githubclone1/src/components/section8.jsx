import { Box, Typography } from "@mui/material";
// import React from "react";
import Strock5 from "../assets/strock5";
import StrockIcon3 from "../assets/strockIcon3";
import Strock6 from "../assets/strock6";
import { useSelector } from "react-redux";

const Section8 = () => {
  const { strock4 } = useSelector((state) => state.animationSteps);
  return (
    <>
      <Box
        position={"relative"}
        marginLeft={{ xs: "0rem", sm: "4rem" }}
        marginTop={{ lg: "9rem", sm: "9rem", xs: "8rem" }}
        className="maindiv"
      >
        <Box marginLeft={{ xs: "1rem", sm: "4rem", lg:"-3rem"}}>
          <Typography
            fontSize={{ lg: "3rem", sm: "2rem", xs: "1.2rem" }}
            sx={{ fontSize: "2rem", color: "white" }}
          >
            Productivity
          </Typography>

          <div>
            <Box mt={3} className="sideSlide" maxWidth={900}>
              <Typography
                className="Observeriv"
                variant="h2"
                sx={{
                  fontSize: { lg: "3rem", sm: "2rem", xs: "1.4rem" },
                  color: "#FFA28B",
                  fontWeight: "400",
                }}
              >
                Supercharge collaboration.
                <span style={{ color: "white" }}>
                  {" "}
                  We provide unlimited repositories, best-in-class version
                  control, and the world’s most powerful open source
                  community—so your team can work more efficiently together.
                </span>
              </Typography>
            </Box>
          </div>
        </Box>

        <Box
          sx={{
            position: "absolute",
            top: -150,
            left: { lg: -140, sm: -70, xs: -20 },
            zIndex: -400,
          }}
        >
          <Strock5 />
          <Box></Box>
          <Box mt={2} className="GlowBox3 ">
            <Box sx={{ position: "relative" }}>
              <Box sx={{ position: "absolute", top: -9, left: -9 }}>
                <Typography
                  className="transition2"
                  display={strock4 ? "block" : "none"}
                >
                  <StrockIcon3 />
                </Typography>
              </Box>
            </Box>
            <Box pt={2} className="">
              <Strock6 />{" "}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Section8;
