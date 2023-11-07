import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { AlignEnd, Center, HideMobile, MyText, defaultPadding } from ".";

const Footer = () => {
  const footerText = {
    color: "#717983",
    // fontSize: "1rem",
  };
  const buttomBox = {
    backgroundColor: "#161b22",
  };
  return (
    <>
      <Box marginTop={{ lg: "1rem", sm: "17rem", xs: "16rem" }} maxWidth={1200}>
        <Stack sx={defaultPadding}>
          <Typography sx={footerText}>
            1 The Total Economic Impact™ Of GitHub Enterprise Cloud and Advanced
            Security, a commissioned study conducted by Forrester Consulting,
            2022. Results are for a composite organization based on interviewed
            customers.
          </Typography>
          <Typography sx={footerText}>
            2 GitHub, Octoverse 2022 The state of open source software.
          </Typography>
        </Stack>
      </Box>
      <Grid mt={3} sx={defaultPadding} container spacing={5}>
        <Grid item lg={3.5} sm={12} xs={12}>
          <MyText sx={{ fontSize: "2rem", fontWeight: "bold" }}>GitHub</MyText>
          <Box mt={3}>
            <MyText>Subscribe to our newsletter</MyText>
            <Typography sx={{ color: "#717983" }}>
              Get product updates, company news, and more
            </Typography>
          </Box>

          <Box
            mt={2}
            maxWidth={100}
            pt={1}
            pb={1}
            pr={4}
            pl={4}
            sx={{ border: "1px solid #C9D1D9", borderRadius: "5px" }}
          >
            <Center>
              <Typography
                sx={{
                  color: "#C9D1D9",
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                }}
              >
                Subsribe
              </Typography>
            </Center>
          </Box>
        </Grid>
        <Grid item lg={2} sm={3} xs={6}>
          <Stack spacing={2}>
            <Typography sx={footerText}>Product</Typography>
            <Typography sx={footerText}>Features</Typography>
            <Typography sx={footerText}>Security</Typography>
            <Typography sx={footerText}>Team</Typography>
            <Typography sx={footerText}>Enterprise</Typography>
            <Typography sx={footerText}>Customer stories</Typography>
            <Typography sx={footerText}>The ReadMe Project</Typography>
            <Typography sx={footerText}>Pricing</Typography>
            <Typography sx={footerText}>Resources</Typography>
            <Typography sx={footerText}>Roadmap</Typography>
          </Stack>
        </Grid>
        <Grid item lg={2} sm={3} xs={6}>
          <Stack spacing={2}>
            <Typography sx={footerText}>Platform</Typography>
            <Typography sx={footerText}>Developer Api</Typography>
            <Typography sx={footerText}>Partners</Typography>
            <Typography sx={footerText}>Electron</Typography>
            <Typography sx={footerText}>GitHub Destop</Typography>
          </Stack>
        </Grid>
        <Grid item lg={2} sm={3} xs={6}>
          <Stack spacing={2}>
            <Typography sx={footerText}>Support</Typography>
            <Typography sx={footerText}>Docs</Typography>
            <Typography sx={footerText}>Community Forum</Typography>
            <Typography sx={footerText}>Professional Services</Typography>
            <Typography sx={footerText}>Premium Support</Typography>
            <Typography sx={footerText}>Skills</Typography>
            <Typography sx={footerText}>Status</Typography>
            <Typography sx={footerText}>Contact GitHub</Typography>
          </Stack>
        </Grid>
        <Grid item lg={2} sm={3}>
          <Stack spacing={2}>
            <Typography sx={footerText}>Company</Typography>
            <Typography sx={footerText}>About</Typography>
            <Typography sx={footerText}>Blog</Typography>
            <Typography sx={footerText}>Careers</Typography>
            <Typography sx={footerText}>Press</Typography>
            <Typography sx={footerText}>Inclusion</Typography>
            <Typography sx={footerText}>Social Impact</Typography>
            <Typography sx={footerText}>Shop</Typography>
          </Stack>
        </Grid>
      </Grid>
      <Box mt={10} p={2} sx={buttomBox}>
        <Box sx={defaultPadding}>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Grid container spacing={2}>
              <Grid item lg={6} xs={12} sm={12}>
                <Box sx={{ display: "flex", gap: "1rem" }}>
                  <Typography
                    fontSize={{ lg: "1rem", sm: "1rem", xs: ".8rem" }}
                    sx={footerText}
                  >
                    © 2023 GitHub, Inc.
                  </Typography>
                  <Typography
                    fontSize={{ lg: "1rem", sm: "1rem", xs: ".8rem" }}
                    sx={footerText}
                  >
                    Terms
                  </Typography>
                  <Box sx={HideMobile}>
                    <Typography
                      fontSize={{ lg: "1rem", sm: "1rem", xs: ".8rem" }}
                      sx={footerText}
                    >
                      Privacy (Updated 08/2022)
                    </Typography>
                  </Box>

                  <Typography
                    fontSize={{ lg: "1rem", sm: "1rem", xs: ".8rem" }}
                    sx={footerText}
                  >
                    Sitemap
                  </Typography>
                  <Box sx={HideMobile}>
                    <Typography
                      fontSize={{ lg: "1rem", sm: "1rem", xs: ".8rem" }}
                      sx={footerText}
                    >
                      What is Git?
                    </Typography>
                  </Box>
                </Box>
              </Grid>
              <Grid item lg={6} xs={12} sm={12}>
                <AlignEnd>
                  <Box sx={{ display: "flex", gap: "1rem" }}>
                    <img src="/footerIcons/Git.svg" />
                    <img src="/footerIcons/faceBook.svg" />
                    <img src="/footerIcons/LinkedIn.svg" />
                    <img src="/footerIcons/ticktok.svg" />
                    <img src="/footerIcons/twiter.svg" />
                    <img src="/footerIcons/youtube.svg" />
                  </Box>
                </AlignEnd>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
