// import React from 'react'

import { Box, Stack, Typography } from "@mui/material";
import { Center, MyText } from ".";
import CombineSvgOr from "../assets/orangeCombinesvg/combineSvgOr";

const Section9 = () => {
  return (
    <Box position={"relative"} mt={30}>
      <Stack className="sideSlide" marginLeft={{ sx: "0rem", sm: "4rem" }}>
        <Box
          maxWidth={{ lg: "7rem", sm: "7rem", xs: "7rem" }}
          sx={{
            border: "1px solid #FFA28B",
            borderRadius: "20px",
          }}
        >
          <Center>
            <Typography
              sx={{
                fontSize: { lg: ".9rem", sm: ".9rem", xs: ".9rem" },
                color: "#FFA28B",
              }}
              className="Observerv"
            >
              Did you know?
            </Typography>
          </Center>
        </Box>
        <Typography
          sx={{
            fontSize: { lg: "3rem", sm: "1.3rem", xs: "2rem" },
            color: "#FFA28B",
          }}
        >
          80% reduction
        </Typography>

        <Box maxWidth={{ lg: "20rem", sm: "20rem", xs: "16rem" }}>
          <MyText sx={{ fontSize: { lg: "1.3rem", sm: "1.3rem", xs: "1rem" } }}>
            in onboarding time with GitHub1
          </MyText>
        </Box>
      </Stack>
      <Box
        sx={{
          position: "absolute",
          top: { lg: -500, sm: -570, xs: -400 },
          left: { lg: -80, sm: -10, xs: -20 },
          zIndex: -40,
        }}
      >
        <div className="">
          <CombineSvgOr />
        </div>
      </Box>
    </Box>
  );
};

export default Section9;
