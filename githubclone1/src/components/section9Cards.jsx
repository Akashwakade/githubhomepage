import { Box, Grid, Stack, Typography } from "@mui/material";
// import React from "react";
import { Margin0Auto, defaultPadding, section7Box } from ".";
import { sponsors } from "./sposors";

import SponserCards from "./sponserCards";
import GoArrow from "../assets/goArrow";

const Section9Cards = () => {
  console.log(sponsors);
  return (
    <Box marginTop={{lg:"11rem", sm:"9rem", xs:"3rem"}}>
      <Grid container spacing={4}>
        <Grid item lg={6} sm={12} xs={12}>
          <Box sx={section7Box} maxHeight={700}>
            <Margin0Auto pt={6} pb={6} >
              <Box sx={defaultPadding}>
                <Stack spacing={5}>
                  <Typography sx={{ color: "#8B949E", fontSize: "1.5rem" }}>
                    <span style={{ color: "white" }}> GitHub Discussions </span>
                    create space to ask questions and have open-ended
                    conversations.
                  </Typography>

                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Check out GitHub Codespaces
                    </Typography>
                   <GoArrow/>
                  </Box>
                </Stack>
              </Box>
            </Margin0Auto>
            <Box>
              <img className="responsive SlideUp" src="https://github.githubassets.com/images/modules/site/home-campaign/illu-discussions.png" />
            </Box>
          </Box>
        </Grid>
        <Grid item lg={6} xs={12} sm={12}>
          <Box sx={section7Box} maxHeight={700}>
            <Margin0Auto pt={6} pb={6} >
              <Box></Box>
              <Box maxWidth={400} sx={defaultPadding}>
                <Stack spacing={5}>
                  <Typography sx={{ color: "#8B949E", fontSize: "1.5rem" }}>
                    <span style={{ color: "white" }}> Pull requests </span>
                    allow real-time communication and collaboration about code
                    changes.
                  </Typography>

                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <Typography
                      sx={{
                        fontSize: "1.2rem",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      Check out GitHub Codespaces
                    </Typography>
                   <GoArrow/>
                  </Box>
                </Stack>
              </Box>
            </Margin0Auto>
            <Box>
              <img className="responsive rightSlide" src="https://github.githubassets.com/images/modules/site/home-campaign/illu-pull-requests.png"/>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={12}>
          <Box sx={section7Box} maxHeight={500}>
            <Box>
              <Grid container spacing={5}>
                <Grid item lg={6} xs={12}>
                  <Box maxWidth={400} sx={defaultPadding}>
                    <Box  pt={6} pb={6}>
                      <Margin0Auto >
                        <Stack spacing={10}>
                          <Typography
                            sx={{ color: "#8B949E", fontSize: {lg:"1.5rem", sm:"1rem",xs:".9rem"} }}
                          >
                            <span style={{ color: "white" }}>
                              {" "}
                              Pull requests{" "}
                            </span>
                            allow real-time communication and collaboration
                            about code changes.
                          </Typography>

                          <Box sx={{ display: "flex", gap: "1rem" }}>
                            <Typography
                              sx={{
                                fontSize: {lg:"1.5rem", sm:"1rem",xs:".9rem"} ,
                                fontWeight: "bold",
                                color: "white",
                              }}
                            >
                              Check out GitHub Codespaces
                            </Typography>
                           <GoArrow/>
                          </Box>
                        </Stack>
                      </Margin0Auto>
                    </Box>
                  </Box>
                </Grid>
                <Grid item lg={6} xs={12}>
                  <SponserCards />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section9Cards;
