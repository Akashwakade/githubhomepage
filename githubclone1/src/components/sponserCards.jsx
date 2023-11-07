import { Box, Grid, Stack, Typography } from "@mui/material";
// import React from "react";
import { sponsors } from "./sposors";
import { Margin0Auto, MyText, section7Box } from ".";
import Heart from "../assets/heart";

const SponserCards = () => {
  return (
    <Grid
      sx={{
        marginTop: { lg: "-7rem", sm: "-7rem", xs: "-3rem" },
        marginLeft: { lg: "0rem", sm: "0rem", xs: "5rem" },
      }}
      container
      className="rotate"
    >
      {sponsors.map((spons) => (
        <Grid className="SlideUp group" key={spons._id} item lg={4} sm={3} xs={6}>
          <Box
            sx={section7Box}
            minHeight={200}
            className="boxShadow"
            mr={1}
            ml={1}
            mt={2}
          >
            <Stack spacing={5}>
              <Margin0Auto pt={2} pb={2}>
                <img className="roundImage" src={spons.pic} />
                <Box
                  sx={{
                    display: "flex",
                    textAlign: "center",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography sx={{ color: "#8B949E" }}>
                    {spons.name}
                  </Typography>
                </Box>
                <Box sx={section7Box}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    p={1}
                  >
                    <Margin0Auto>
                      <Heart />
                    </Margin0Auto>

                    <Typography sx={{ color: "#C9D1D9" }}>sponsor</Typography>
                  </Box>
                </Box>
              </Margin0Auto>
            </Stack>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default SponserCards;
