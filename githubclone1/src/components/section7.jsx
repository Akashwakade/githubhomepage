import { Box, Grid, Stack, Typography } from "@mui/material";
// import React from 'react'
import { Margin0Auto, defaultPadding, section7Box } from ".";
import Copilotdemo from "./copilotdemo";
import { useRef } from "react";
import ScaleAnimator from "./animations/scaleAnimation";
import GoArrow from "../assets/goArrow";
// import { Animate } from "./animations";

const Section7 = () => {
  const cardRef = useRef(null);
  ScaleAnimator()
  // Animate(cardRef);
  return (
    <Box mt={8}>
      <Stack spacing={4}>
        <Box sx={section7Box}>
          <Grid container>
            <Grid item lg={6} sm={12} xs={12}>
              <Margin0Auto pt={6} pb={6} maxWidth={500} sx={defaultPadding}>
                <Stack spacing={5}>
                  <Typography sx={{ color: "#8B949E", fontSize: "1.2rem" }}>
                    <span style={{ color: "white" }}>GitHub Copilot </span>
                    is your AI pair programmer that empowers you to complete
                    tasks 55% faster by turning natural language prompts into
                    coding suggestions.
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
                    <GoArrow />
                  </Box>
                </Stack>
              </Margin0Auto>
            </Grid>
            <Grid item lg={6} sm={12} xs={12}>
              <Margin0Auto pt={6} pb={6} maxWidth={600} sx={defaultPadding}>
                <Copilotdemo />
              </Margin0Auto>
            </Grid>
          </Grid>
        </Box>

        <Grid container spacing={0}>
          <Grid item lg={6} sm={12} xs={12}>
            {/* <Box sx={{ marginRight: { lg: "2rem", sm: "0rem", xs: "0rem" } }}>
              <Box sx={section7Box} maxHeight={700}>
                <Margin0Auto pt={6} pb={6} maxWidth={500} sx={defaultPadding}>
                  <Stack spacing={5}>
                    <Typography sx={{ color: "#8B949E", fontSize: "1.2rem" }}>
                      <span style={{ color: "white" }}>GitHub Copilot </span>
                      is your AI pair programmer that empowers you to complete
                      tasks 55% faster by turning natural language prompts into
                      coding suggestions.
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
                </Margin0Auto>
                <Box>
                  <img className="responsive" src="src/assets/demoImage1.svg" />
                </Box>
              </Box>
            </Box> */}
            <Box
              marginRight={{ lg: "1rem", sm: "0rem", xs: "0rem" }}
              sx={{
                marginTop: { lg: "0rem", sm: "2rem", xs: "2rem" },
                marginleft: { lg: "2rem", sm: "0rem", xs: "0rem" },
              }}
            >
              <Box sx={section7Box} maxHeight={700}>
                <Margin0Auto pt={6} pb={6} maxWidth={500} sx={defaultPadding}>
                  <Stack spacing={5}>
                    <Typography sx={{ color: "#8B949E", fontSize: "1.2rem" }}>
                      <span style={{ color: "white" }}>GitHub Copilot </span>
                      is your AI pair programmer that empowers you to complete
                      tasks 55% faster by turning natural language prompts into
                      coding suggestions.
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
                      <GoArrow />
                    </Box>
                  </Stack>
                </Margin0Auto>
                <Box>
                  <img className="responsive scaleUp" src="https://github.githubassets.com/images/modules/site/home-campaign/illu-actions.png" />
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item lg={6} sm={12} xs={12}>
            <Box
              marginLeft={{ lg: "1rem", sm: "0rem", xs: "0rem" }}
              sx={{
                marginTop: { lg: "0rem", sm: "2rem", xs: "2rem" },
              }}
            >
              <Box sx={section7Box} maxHeight={700}>
                <Margin0Auto pt={6} pb={6} maxWidth={500} sx={defaultPadding}>
                  <Stack spacing={5}>
                    <Typography sx={{ color: "#8B949E", fontSize: "1.2rem" }}>
                      <span style={{ color: "white" }}>GitHub Copilot </span>
                      is your AI pair programmer that empowers you to complete
                      tasks 55% faster by turning natural language prompts into
                      coding suggestions.
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
                      <GoArrow />
                    </Box>
                  </Stack>
                </Margin0Auto>
                <Box>
                  <img className="responsive scaleUp" src="https://github.githubassets.com/images/modules/site/home-campaign/illu-mobile.png" />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Stack>
    </Box>
  );
};

export default Section7;
