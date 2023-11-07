// Import necessary dependencies and components

import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { Center, HideDextop, HideTabAndMobileFlex, MyText } from ".";
import ArrowDropDownSharpIcon from "@mui/icons-material/ArrowDropDownSharp";
import GitLogo from "../assets/gitLogo";
import { Menu } from "@mui/icons-material";

// Define the Header component
const Header = () => {
   // Styling for the search bar

  const searchBar = {
    backgroundColor: "#293248",
    border: "2px solid #333b4f",
    borderRadius: "5px",
    display: "flex",
  };
  return (
    <Box pt={3} sx={{ display: "flex", justifyContent: "space-between" }}>


      {/* This section is visible on desktop */}
      
      <Box sx={HideTabAndMobileFlex}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <GitLogo size={"30"} />
          <Box mt={0.5}>
            <Stack direction="row" spacing={2}>
              <Box sx={{ display: "flex", gap: ".1rem" }}>
                <MyText>Product</MyText>
                <MyText>
                  <ArrowDropDownSharpIcon />
                </MyText>
              </Box>
              <Box sx={{ display: "flex", gap: ".1rem" }}>
                <MyText>Solution</MyText>
                <MyText>
                  <ArrowDropDownSharpIcon />
                </MyText>
              </Box>
              <Box sx={{ display: "flex", gap: ".1rem" }}>
                <MyText>open source</MyText>
                <MyText>
                  <ArrowDropDownSharpIcon />
                </MyText>
              </Box>
              <Box sx={{ display: "flex", gap: ".1rem" }}>
                <MyText>Pricing</MyText>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>

{/* Header section for mobile and tablet (hidden on desktop) */}
      <Box sx={HideDextop}>
        <Box
          pt={0.5}
          pb={0.5}
          pr={0.6}
          pl={0.6}
          paddingRight={0.5}
          sx={{ border: ".5px solid #d0d7de", borderRadius: "5px" }}
        >
          <Center>
            <MyText sx={{}}>sign up</MyText>
          </Center>
        </Box>
      </Box>

 {/* Header section for mobile and tablet (hidden on desktop) */}
      <Box sx={HideDextop}>
        <GitLogo size={"30"} />
      </Box>
      <Box sx={HideDextop}>
        <MyText>
          <Menu />
        </MyText>
      </Box>

{/* Header section for mobile and tablet (hidden on desktop) */}

      <Box sx={HideTabAndMobileFlex}>
        <Box sx={{ display: "flex", gap: "1rem" }}>
          <Box p={0.6} sx={searchBar} minWidth={200}>
            <Typography sx={{ color: "#606979", fontSize: ".9rem" }}>
              search git hub
            </Typography>
          </Box>
          <Box>
            <Center mt={0.5}>
              <MyText sx={{}}>sign in</MyText>
            </Center>
          </Box>
          <Box
            pt={0.5}
            pb={0.5}
            pr={0.6}
            pl={0.6}
            paddingRight={0.5}
            sx={{ border: ".5px solid #d0d7de", borderRadius: "5px" }}
          >
            <Center>
              <MyText sx={{}}>sign up</MyText>
            </Center>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
