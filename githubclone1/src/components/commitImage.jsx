import { Box, Stack, Typography } from "@mui/material";
// import React from "react";
import "./styles/terminal.css";
import "./styles/commitImage.css"
import { HideMobile, MainPadding, MarginForDemoContents } from ".";
import AbsoluteAnimator from "./animations/absoluteRender";

const CommitImage = () => {
  AbsoluteAnimator("renderEngine", "renderEngine2")
  return (
    <Box>
      <Box mt={5} sx={{ position: "relative" }}>
        <Box >
          <img className="responsive" src="https://github.githubassets.com/images/modules/site/issues/illo/issues-plan.png"/>
          <Box >
            <Box className="renderEngine transition">
              <img className="responsive" src="https://github.githubassets.com/images/modules/site/home-campaign/illu-projects.png" />
            </Box>
          </Box>
        </Box>
      </Box>
      {/* <Box mt={5} sx={MarginForDemoContents} maxWidth={500}>
        <Box sx={MainPadding}>
          <Stack spacing={3}>
            <Typography
              sx={{ fontSize: "1.2rem", fontWeight: 400, color: "white" }}
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
             <GoArrow/>
            </Box>
          </Stack>
        </Box>
      </Box> */}
    </Box>
  );
};

export default CommitImage;
