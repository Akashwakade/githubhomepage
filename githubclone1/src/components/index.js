import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
// import exp from "constants";

// Define a constant for padding values at different screen sizes
export const MyPadding = {
  paddingLeft: { lg: "15rem", sm: "3rem", xs: "1rem" },
  paddingRight: { lg: "15rem", sm: "3rem", xs: "1rem" },
  // marginTop: { lg: "5rem", sm: "5rem", xs: "2rem" },
};

// Define a styled component for text with white color
export const MyText = styled(Typography)({
  color: "#FFFFFF",
});

// Define a styled component for centering content

export const Center = styled(Box)({
  textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
});


// Define a styled component for centering content with margin set to "auto"
export const Margin0Auto = styled(Box)({
  // textAlign: "center",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
});

// Define a styled component for a black box with specific styles
export const BlackBox = styled(Box)({
  border: "1px solid #424B5B",
  backgroundColor: "black",
  display: "flex",
  borderRadius: "50px",
  // width: "24rem",
  gap: "1rem",
});

// Define a styled component for a flex container
export const FlexBox = styled(Box)({
  display: "flex",
});


// Define a style object for a terminal-like box
export const terminalBox = {
  backgroundColor: "#30363D",
  border: "1px solid #6E7681",
  padding: "3rem",
};


// Define a style object for a section 7 box
export const section7Box = {
  backgroundColor: "#161B22",
  border: "1px solid #30363D",
  borderRadius: "10px",
  overflow: "hidden",
};


// Define a style object for gray text
export const grayText = {
  color: "#8B949E",
};

// Define a style object for a code box
export const codeBox = {
  backgroundColor: "#0D1117",
};


// Define style objects for hiding elements at different screen sizes
export const HideMobile = {
  display: { lg: "block", sm: "block", xs: "none" },
};

export const HideDextop = {
  display: { lg: "none", sm: "block", xs: "block" },
};

export const HideDextopFlex = {
  display: { lg: "none", sm: "flex", xs: "flex" },
};
// export const HideDextopAndTabFlex = {
//   display: { lg: "none", sm: "flex", xs: "flex" },
// };
export const HideDextopAndTabFlex = {
  display: { lg: "none", sm: "none", xs: "flex" },
};
export const HideTabAndMobile = {
  display: { lg: "block", sm: "none", xs: "none" },
};

export const HideTab = {
  display: { lg: "block", sm: "none", xs: "block" },
};

export const HideMobileFlex = {
  display: { lg: "flex", sm: "flex", xs: "none" },
};
export const HideTabAndMobileFlex = {
  display: { lg: "flex", sm: "none", xs: "none" },
};

export const HideTabFlex = {
  display: { lg: "flex", sm: "none", xs: "flex" },
};


// Define a style object for default padding values at different screen sizes
export const defaultPadding = {
  paddingLeft: { lg: "6rem", sm: "1.5rem", xs: "1rem" },
  paddingRight: { lg: "6rem", sm: "1.5rem", xs: "1rem" },
};

// Define a style object for main padding values at different screen sizes
export const MainPadding = {
  paddingLeft: { lg: "15rem", sm: "3rem", xs: "2.5rem" },
  paddingRight: { lg: "15rem", sm: "3rem", xs: ".5rem" },
};

// Define a style object for margin values for demo contents at different screen sizes
export const MarginForDemoContents = {
  marginLeft: { lg: "3rem", sm: "3rem", xs: "1.5rem" },
  marginRight: { lg: "3rem", sm: "3rem", xs: ".5rem" },
};

// Define a styled component for aligning content at the start
export const AlignStart = styled(Box)({
  display: "flex",
  justifyContent: "flex-start",
});

// Define a styled component for aligning content at the end

export const AlignEnd = styled(Box)({
  display: "flex",
  justifyContent: "flex-end",
});


