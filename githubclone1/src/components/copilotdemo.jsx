import { Box, Stack, Typography } from "@mui/material";
// p
import { Margin0Auto, MyText, codeBox, section7Box } from ".";
import PythonSvg from "../assets/python";
import JsSvg from "../assets/JsSvg";
import GoSvg from "../assets/GoSvg";
import { useEffect } from "react";
import Animate from "./animations";

const Copilotdemo = () => {
  // useEffect(() => {
  var i = 0;
  var txt = "draw_scaterplot";
  var speed = 50;
  const mainFuction = () => {
    if (i < txt.length) {
      document.getElementById("demo2").innerHTML += txt.charAt(i);
      i++;
      setTimeout(mainFuction, speed);
    }
  };
  Animate("deme2", mainFuction);

  //  }, [])

  return (
    <Box sx={section7Box}>
      <Stack>
        <Box p={2} sx={{ display: "flex", gap: "1rem" }}>
          <Box
            // onClick={() => mainFuction()}
            sx={{ display: "flex", gap: "1rem" }}
          >
            <Margin0Auto>
              <PythonSvg />
            </Margin0Auto>

            <MyText>draw_scatterplot.py</MyText>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Margin0Auto>
              <JsSvg />
            </Margin0Auto>

            <MyText>time.js</MyText>
          </Box>
          <Box sx={{ display: "flex", gap: "1rem" }}>
            <Margin0Auto>
              <GoSvg />
            </Margin0Auto>
            <MyText>memeize.go</MyText>
          </Box>
        </Box>
        <Box p={4} sx={codeBox}>
          <Box>
            <MyText className="deme2">
              <pre>
                <span style={{ color: "#c6645f" }}>import </span>
                matplotLib.pyplot plt
              </pre>
            </MyText>
            <Box mt={2}>
              <Typography sx={{ color: "white" }}>
                <pre>
                  <span style={{ color: "#c6645f" }}>def </span>
                  <span id="demo2" style={{ color: "#b994e2" }}></span>
                </pre>
              </Typography>
            </Box>
            <Box>
              <MyText>
                <pre>
                  plit.<span style={{ color: "#c6645f" }}>scatter</span>(x_values, y_vales)
                </pre>
                <pre>
                plit.<span style={{ color: "#c6645f" }}>title</span>( <span style={{ color: "#b393e0" }}>scatter_plot</span>)  
                </pre>
                <pre>
                plit.<span style={{ color: "#c6645f" }}>xlabel</span>(<span style={{ color: "#b393e0" }}>x_values</span>)
                </pre>
                <pre>
                plit.<span style={{ color: "#c6645f" }}>ylabel</span>(<span style={{ color: "#b393e0" }}>y_vales</span>)
                </pre>
              </MyText>
            </Box>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
};

export default Copilotdemo;
