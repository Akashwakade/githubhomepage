// import React from "react";
import "../components/styles/section4.css";
import { Box, Typography } from "@mui/material";

const Section4 = () => {
  return (
    <>
      <div className="maindiv sideSlide">
        <Typography className="Observeriii" sx={{ fontSize: "2rem", color: "white" }}>
          Productivity
        </Typography>
        <div>
          <Box maxWidth={900}>
            <Typography
              // className="maintext"
              variant="h2"
              sx={{
                fontSize: { lg: "3rem", sm: "2rem", xs: "1.5rem"},
                color: "#7EE787",
                fontWeight: "400",
              }}
            >
              Accelerate high-quality software development.{" "}
              <span style={{ color: "white" }}>
                Our platform drives innovation with tools that boost developer
                velocity.
              </span>
            </Typography>
          </Box>
        </div>
      </div>
    </>
  );
};

export default Section4;
