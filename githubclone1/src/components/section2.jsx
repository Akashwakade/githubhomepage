// import React from "react";
import {
  AlignEnd,
  AlignStart,
  Center,
  FlexBox,
  HideDextop,
  HideDextopAndTabFlex,
  HideDextopFlex,
  HideMobile,
  HideMobileFlex,
  HideTabAndMobileFlex,
  MyText,
} from ".";
import { Box, Grid, InputBase, Stack } from "@mui/material";
import GoArrow from "../assets/goArrow";

const Section2 = () => {
  return (
    <Grid container spacing={0.5} paddingRight={{ xs: "1rem", lg: "4rem" }}>
      <Grid
        item
        lg={8}
        sm={7}
        xs={12}
        sx={{
          // border: "2px solid #6E40C9",
          borderRadius: "5px",
          // display: "flex",
          marginTop: { lg: "0rem", sm: "0rem", xs: "-3rem" },
        }}
      >
        <AlignEnd>
          <Grid container sx={HideMobileFlex}>
            <Grid
              p={0.5}
              item
              lg={8}
              sm={6}
              xs={12}
              sx={{
                backgroundColor: "white",
                borderRadius: "5px  0px 0px 5px",
              }}
            >
              <Box paddingLeft={{ lg: "1rem", sm: "1rem" }} sx={{}}>
                <InputBase placeholder="add you email" />
              </Box>
            </Grid>
            <Grid
              p={0.5}
              item
              lg={3}
              sm={6}
              xs={12}
              sx={{
                backgroundColor: "#6E40C9",
                color: "white",
                borderRadius: "0px  5px 5px 0px",
              }}
            >
              <Box
                paddingTop={{ lg: ".5rem", sm: ".5rem", xs: "1rem" }}
                paddingBottom={{ lg: ".5rem", sm: ".5rem", xs: "1rem" }}
              >
                <Center>
                  <MyText sx={{ fontWeight: "bold" }}>
                    sign up for GitHub
                  </MyText>
                </Center>
              </Box>
            </Grid>
          </Grid>
          <Grid container sx={HideDextopAndTabFlex}>
            <Grid
              p={0.5}
              item
              lg={6}
              sm={6}
              xs={12}
              sx={{ backgroundColor: "white", borderRadius: " 5px" }}
            >
              <Box paddingLeft={{ xs: "2rem" }} sx={{ borderRadius: "5px" }}>
                <InputBase placeholder="add our email" />
              </Box>
            </Grid>
            <Grid
              mt={1}
              p={1}
              item
              lg={6}
              sm={6}
              xs={12}
              sx={{
                backgroundColor: "#6E40C9",
                color: "white",
                borderRadius: "5px",
              }}
            >
              <Box sx={{ borderRadius: "5px" }}>
                <Center>sign up for GitHub</Center>
              </Box>
            </Grid>
          </Grid>
        </AlignEnd>
      </Grid>
      <Grid item lg={3} sm={5} xs={12}>
        <>
          <Box
            p={1.2}
            sx={{
              border: "1px solid #6E40C9",
              borderRadius: "5px",
              display: "flex",
              textAlign: "center",
              marginTop: { lg: "0rem", sm: "0rem", xs: "1rem" },
            }}
          >
            <Center>
              <Stack direction="row" sx={{ gap: "1rem" }}>
                <MyText sx={{ fontWeight: "bold" }}>
                  start Enterprise trial
                </MyText>
                <GoArrow />
              </Stack>
            </Center>
          </Box>
        </>
      </Grid>
    </Grid>
  );
};

export default Section2;
