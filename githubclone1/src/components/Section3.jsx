import { Box, Grid, Stack, Typography } from "@mui/material";
// import React from "react";
import { Center, HideMobile } from ".";

const Section3 = () => {
  return (
    <>
    <Box paddingRight={{ xs: "1rem",lg:"4rem" }}>
    <Typography gutterBottom sx={{ color: "#6E7681" }}>
        Trusted by the word's leading organizations
      </Typography>
      <Grid container spacing={1}>
        <Grid item lg={2} xs={6} sm={2}  sx={HideMobile}>
          <Center pr={2}>
            <img className="responsive" src="https://github.githubassets.com/images/modules/site/home-campaign/logos/stripe.svg" />
          </Center>
        </Grid>
        <Grid item lg={2} xs={6} sm={2}>
          <Center pl={4}>
            <img className="responsive" src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pinterest.svg"/>
          </Center>
        </Grid>
        <Grid item lg={2} xs={6} sm={2} sx={HideMobile}>
          <Center pr={2}>
            <img className="responsive" src="https://github.githubassets.com/images/modules/site/home-campaign/logos/kpmg.svg"/>
          </Center>
        </Grid>
        <Grid item lg={2} xs={6} sm={2}>
          <Center pl={5}>
            <img className="responsive" src="https://github.githubassets.com/images/modules/site/home-campaign/logos/mercedes.svg" />
          </Center>
        </Grid>
        <Grid item lg={2} xs={6} sm={2}  sx={HideMobile}>
          <Center pr={2}>
            <img className="responsive" src="https://github.githubassets.com/images/modules/site/home-campaign/logos/pg.svg" />
          </Center>
        </Grid>
        <Grid item lg={2} xs={6} sm={2}>
          <Center pl={2}>
            <img className="responsive" src="https://github.githubassets.com/images/modules/site/home-campaign/logos/telus.svg" />
          </Center>
        </Grid>
      </Grid>

    </Box>
    
    </>
  );
};

export default Section3;
