import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import {
  AlignEnd,
  AlignStart,
  Center,
  Margin0Auto,
  MyText,
  section7Box,
} from ".";
import GreenCheck from "../assets/greenCheck";

const Section11 = () => {
  const buildBox = {
    backgroundColor: "#484f58",
    borderRadius: "5px",
  };
  const topBox = {
    backgroundColor: "#484f58",
    borderRadius: "5px 5px 0px 0px",
  };
  const mainBox = {
    backgroundColor: "#484f58",
    borderRadius: "0px 5px 5px 5px",
  };
  return (
    <Box sx={section7Box}>
      <AlignStart>
        <Stack p={3} spacing={1}>
          <Typography sx={{ color: "#6E7681" }}>cmake.yml</Typography>
          <Typography sx={{ color: "#6E7681" }}>on:push</Typography>
        </Stack>
      </AlignStart>
      <Margin0Auto>
        <Box padding={{ lg: "6rem", sm: "2rem", xs: "1.5rem" }}>
          <Center></Center>
          <Grid container>
            <Grid item lg={5.5} sm={5.5} xs={12} className="sideSlide group">
              <Box p={3} sx={buildBox}>
                <Grid container>
                  <Grid item lg={6} sm={6} xs={6}>
                    <Stack direction="row" spacing={2}>
                      <GreenCheck />
                      <MyText>build</MyText>
                    </Stack>
                  </Grid>
                  <Grid item lg={6} sm={6} xs={6}>
                    <AlignEnd>
                      <Typography sx={{}}>
                        <pre>
                          {" "}
                          <span style={{ color: "#6E7681" }}>1m 21s </span>
                        </pre>
                      </Typography>
                    </AlignEnd>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item lg={0.5} sm={1} xs={2} className="sideSlide group">
              <Box
                className="Elevate"
                marginTop={{ lg: "1rem", sm: "1rem", xs: "2rem" }}
                marginBottom={{ lg: "0rem", sm: "0rem", xs: "2rem" }}
              >
                <img
                  src="/link.svg"
                  className="responsive rotateLink transition"
                />
              </Box>
            </Grid>
            <Grid item lg={5.5} sm={5.5} xs={12} className="sideSlide group">
              <Stack marginTop={{lg:"-3rem", xs:".1rem", sm:"-3rem"}}>
                <Box maxWidth={100} p={1} sx={topBox}>
                  <Center>
                    <MyText>build</MyText>
                  </Center>
                </Box>
                <Box p={3} sx={mainBox}>
                  <Stack spacing={4}>
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Stack direction="row" spacing={2}>
                          <GreenCheck />
                          <MyText>Initialize CodeQL</MyText>
                        </Stack>
                      </Grid>
                      <Grid item lg={6} sm={6} xs={6}>
                        <AlignEnd>
                          <Typography sx={{}}>
                            <pre>
                              {" "}
                              <span style={{ color: "#6E7681" }}>1m 21s </span>
                            </pre>
                          </Typography>
                        </AlignEnd>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Stack direction="row" spacing={2}>
                          <GreenCheck />
                          <MyText>Autobuild</MyText>
                        </Stack>
                      </Grid>
                      <Grid item lg={6} sm={6} xs={6}>
                        <AlignEnd>
                          <Typography sx={{}}>
                            <pre>
                              {" "}
                              <span style={{ color: "#6E7681" }}>1m 25s </span>
                            </pre>
                          </Typography>
                        </AlignEnd>
                      </Grid>
                    </Grid>
                    <Grid container>
                      <Grid item lg={6} sm={6} xs={6}>
                        <Stack direction="row" spacing={2}>
                          <GreenCheck />
                          <MyText>Perform CodeQL Analyses</MyText>
                        </Stack>
                      </Grid>
                      <Grid item lg={6} sm={6} xs={6}>
                        <AlignEnd>
                          <Typography sx={{}}>
                            <pre>
                              {" "}
                              <span style={{ color: "#6E7681" }}>1m 45s </span>
                            </pre>
                          </Typography>
                        </AlignEnd>
                      </Grid>
                    </Grid>
                  </Stack>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Margin0Auto>
    </Box>
  );
};

export default Section11;
