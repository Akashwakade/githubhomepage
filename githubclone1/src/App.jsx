// Import necessary dependencies and components
import "./App.css";
import { Box } from "@mui/material";
import { Stack } from "@mui/system";
import Section1 from "./components/Section1";
import Section2 from "./components/section2";
import Section3 from "./components/Section3";
import Section4 from "./components/section4";
import Section5 from "./components/section5";
import CodeSpaceDemo from "./components/codespace";
import Section6 from "./components/section6";
import Section7 from "./components/section7";
import SvgStrocks from "./components/svgStrocks";
import Section8 from "./components/section8";
import CommitImage from "./components/commitImage";
import Section9 from "./components/section9";
import Section9Cards from "./components/section9Cards";
import { Center, MainPadding, Margin0Auto, defaultPadding } from "./components";
import Section10 from "./components/section10";
import Section11 from "./components/section11";
import Header from "./components/header";
import Footer from "./components/footer";
import GlobeBall from "./components/DataVisualization/globe";

//defining the main component which is app

function App() {
  return (
    <>
      <div className="hero">
        {/* displaying spaceship image */}
        <Box>
          <img className="spaceShip" src="/starsShips.svg" />
        </Box>

        {/* redering the header component */}
        <Box sx={defaultPadding}>
          <Header />
        </Box>
        
        <Box sx={MainPadding}>
          <Box sx={{ paddingTop: { lg: "28rem", sm: "20rem", xs: "10rem" } }}>
            <Stack spacing={6}>
              <>
                <Section1 />
              </>
              <Section2 />
              <Section3 />
            </Stack>
            <Box
              sx={{ marginTop: { lg: "-7rem", sm: "-10rem", xs: "-12rem" } }}
            >
              <Box pl={3}>
                <Section4 />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={defaultPadding}>
          <Box sx={{ marginTop: { sm: "6rem", lg: "2rem", xs: "3rem" } }}>
            <CodeSpaceDemo />
          </Box>
        </Box>
        <Box sx={MainPadding}>
          <Section5 />
        </Box>
        <div className="section6Pic"></div>
        <Box sx={MainPadding}>
          <Box sx={{ marginTop: { sm: "2rem", lg: "7rem", xs: "3rem" } }}>
            <Section6 />
          </Box>
        </Box>
        <Box sx={defaultPadding}>
          <Box marginTop={{ lg: "4rem", sm: "6rem", xs: "1rem" }}>
            <Section7 />
          </Box>
        </Box>
        <Box sx={MainPadding}>
          <Section8 />
        </Box>
        <Box paddingLeft={{ lg: "3rem" }} paddingRight={{ lg: "3rem" }}>
          <CommitImage />
        </Box>
        <Box sx={MainPadding}>
          <Section9 />
        </Box>
        <Box sx={defaultPadding}>
          <Section9Cards />
        </Box>
        <Box sx={MainPadding}>
          <Section10 />
        </Box>
        <Box
          mt={3}
          paddingLeft={{ lg: "3rem", sm: "1rem", xs: "1rem" }}
          paddingRight={{ lg: "3rem", sm: "1rem", xs: "1rem" }}
        >
          <Section11 />
        </Box>
        <Box>
          <Box position={"relative"}>
            <Box
              marginLeft={{ lg: "25rem", xs: "2rem", sm: "4rem" }}
              sx={{ backgroundColor: "#0d1118" }}
            >
              <Margin0Auto>
                <GlobeBall />
              </Margin0Auto>
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: { lg: 530, sm: 300, xs: 200 },
                left: { lg: 600, sm: 160, xs: -20 },
                zIndex: 7,
              }}
            >
              <img className="spaceBoy responsive" src="/astrocat.png" />
            </Box>
          </Box>
        </Box>
        <Box mt={10}>
          <Footer />
        </Box>
        <SvgStrocks />
      </div>
    </>
  );
}

export default App;
