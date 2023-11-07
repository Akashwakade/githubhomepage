import React from "react";
import { SvgResize } from "../../hooks/svgResize";
import Animate from "../../components/animations";
import { useDispatch, useSelector } from "react-redux";
import { Step2, revertStep2 } from "../../reducer/animationSteps";

const GreenStrock5 = () => {
  // const height = SvgResize("<", 600, "850", "850");
  const { strock2 } = useSelector((state) => state.animationSteps);
  Animate("Observerii", Step2,  revertStep2);
  // const height = SvgResize("<", 769, "850", "1000");
  return (
    <svg
      className="transition"
      width="3"
      height={strock2?  "850":"0"}
      viewBox="0 0 1 749"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="3" height="749" fill="url(#paint0_linear_1_6424)" />
      <defs>
        <linearGradient
          id="paint0_linear_1_6424"
          x1="1.5"
          y1="0"
          x2="1.5"
          y2="749"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0D1117" />
          <stop offset="0.333333" stop-color="#2EA043" />
          <stop offset="0.666667" stop-color="#2EA043" />
          <stop offset="1" stop-color="#0D1117" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default GreenStrock5;
