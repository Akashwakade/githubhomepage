import React from "react";
import { useSelector } from "react-redux";
import Animate from "../components/animations";
import { Step4, revertStep4 } from "../reducer/animationSteps";

const Strock5 = () => {
  const { strock4 } = useSelector((state) => state.animationSteps);
  Animate("Observeriv", Step4,  revertStep4);
  return (
    <svg
      width="4"
      className="transition"
      height={strock4 ? 147 : "0"}
      viewBox="0 0 4 147"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.828125"
        y="0.25"
        width="3"
        height="160"
        rx="1.5"
        fill="url(#paint0_linear_1_6290)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_6290"
          x1="2.32812"
          y1="0.25"
          x2="2.32812"
          y2="160.25"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0D1117" />
          <stop offset="0.5" stop-color="#EA6045" />
          <stop offset="1" stop-color="#FFA28B" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Strock5;
