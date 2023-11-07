import { Box, Grid, Stack, Typography } from "@mui/material";
// import React from 'react'
import "./styles/terminal.css";
import { HideDextop, HideMobile, HideTabAndMobile } from ".";
import AbsoluteAnimator from "./animations/absoluteRender";
import GoArrow from "../assets/goArrow";
const Section5 = () => {
  AbsoluteAnimator("picture", "pictureA");
  return (
    <Box>
      <Grid container>
        <Grid lg={6} sx={HideDextop}>
          <Box className="pictureBox">
            <Box sx={HideMobile}>
              <img
                className="picture2 responsive"
                src="https://github.githubassets.com/images/modules/site/codespaces/illo-ports.png"
              />
            </Box>

            <img
              className="picture transition responsive"
              src="https://github.githubassets.com/images/modules/site/codespaces/illo-context-menu.png"
            />
          </Box>
        </Grid>
        <Grid lg={6}>
          <Box
            sx={{ marginTop: { lg: "4rem", sm: "16rem", xs: "8rem" } }}
            marginLeft={{ sx: "0rem", sm: "4rem" }}
          >
            <Stack marginTop={{lg:"0rem", sm:"0rem", xs:"12rem"}} spacing={3}>
              <Typography
                fontSize={{ lg: "1.5rem", sm: "1.3rem" }}
                sx={{ fontWeight: 400, color: "white" }}
              >
                GitHub Codespaces{" "}
                <span style={{ color: "#8B949E" }}>
                  offers a complete dev environment in seconds, so you can code,
                  build, test, and open pull requests from any repo anywhere.
                </span>
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
          </Box>
        </Grid>
        <Grid lg={6} sx={HideTabAndMobile}>
          <Box maxWidth={400} className="pictureBox" sx={HideMobile}>
            <img
              className="picture2 responsive"
              src="https://github.githubassets.com/images/modules/site/codespaces/illo-ports.png"
            />
            <img
              className="picture transition responsive"
              src="https://github.githubassets.com/images/modules/site/codespaces/illo-context-menu.png"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Section5;
