import { Box, Stack, Typography } from "@mui/material";
// import React from 'react'
import "./styles/terminal.css";
import { Center, MyText } from ".";
import CombineSvgGreen1 from "../assets/greenStrock/CombineSvgGreen1";
import SlideAnimator from "./animations/slideAnimator";
const Section6 = () => {
  SlideAnimator(true);
  return (
    <>
      <Box position={"relative"}>
        <Box marginLeft={{ sx: "0rem", sm: "4rem" }}>
          <Stack spacing={0.5} className="sideSlide">
            <Box
              maxWidth={{ lg: "7rem", sm: "7rem", xs: "7rem" }}
              sx={{ border: "1px solid  #7ee787 ", borderRadius: "20px" }}
            >
              <Center>
                <Typography
                  sx={{ fontSize: { lg: ".9rem", sm: ".9rem", xs: ".9rem" } }}
                  className="maintext"
                >
                  Did you know?
                </Typography>
              </Center>
            </Box>

            <Typography
              className="maintext Observerii"
              sx={{ fontSize: { lg: "3rem", sm: "1.3rem", xs: "2rem" } }}
            >
              22% increase
            </Typography>
            <Box maxWidth={{ lg: "20rem", sm: "20rem", xs: "16rem" }}>
              <MyText
                sx={{ fontSize: { lg: "1.3rem", sm: "1.3rem", xs: "1rem" } }}
              >
                in developer productivity after three years with GitHub1
              </MyText>
            </Box>
          </Stack>
        </Box>
        <Box
          sx={{
            position: "absolute",
            top: { lg: -550, sm: -570, xs: -400 },
            left: { lg: -80, sm: -10, xs: -20 },
            zIndex: -40,
          }}
        >
          <div className="">
            <CombineSvgGreen1 className="rotate" />
          </div>
        </Box>
      </Box>
    </>
  );
};

export default Section6;
