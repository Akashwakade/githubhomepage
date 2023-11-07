// import React from "react";

import { useSelector } from "react-redux";
import Animate from "../components/animations";
import { Step3, revertStep3 } from "../reducer/animationSteps";

const Strock3 = () => {
  const { strock3 } = useSelector((state) => state.animationSteps);
  Animate("Observeriii", Step3,  revertStep3);
  return (
    <svg
      width="4"
      className="transition2"
      height={strock3 ? "455" : "0"}
      viewBox="0 0 1 328"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.828125"
        width="3"
        height="328"
        rx="1.5"
        fill="url(#paint0_linear_1_6281)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_6281"
          x1="2.32812"
          y1="0"
          x2="2.32812"
          y2="328"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#56D364" />
          <stop offset="0.5" stop-color="#2EA043" />
          <stop offset="1" stop-color="#0D1117" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Strock3;
