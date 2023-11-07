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
    
    </Box>
  );
};

export default CommitImage;
