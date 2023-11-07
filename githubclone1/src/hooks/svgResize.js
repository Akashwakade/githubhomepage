import React, { useState } from "react";
import { useEffect } from "react";
import useWindowSize from ".";
export const SvgResize = (operator, bp, defaultHeight, newHeight) => {
  const size = useWindowSize();
  console.log(size)
  const [height, setHeight] = useState("0");
  useEffect(() => {
    const resizeFactor = () => {
      if (operator === ">") {
        greaterThanOperator();
      } else if (operator === "<") {
        lessThanOperator();
      }
    };
    const lessThanOperator = () => {
      if (size.width < bp) {
        setHeight(newHeight);
      } else {
        setHeight(defaultHeight);
      }
    };
    const greaterThanOperator = () => {
      if (size.width > bp) {
        setHeight(newHeight);
      } else {
        setHeight(defaultHeight);
      }
    };
    resizeFactor()
  }, [size]);
  return height;
};
