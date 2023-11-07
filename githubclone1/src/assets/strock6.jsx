import React from "react";
import { useSelector } from "react-redux";
import Animate from "../components/animations";
import { Step5, revertStep5 } from "../reducer/animationSteps";

const Strock6 = () => {
  const { strock5 } = useSelector((state) => state.animationSteps);
  Animate("Observeriv", Step5,  revertStep5);
  return (
    <svg
      width="6"
      className="transition"
      height={strock5 ? 600 : "0"}
      viewBox="0 0 1 381"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.828125"
        y="0.75"
        width="3"
        height="380"
        rx="1.5"
        fill="url(#paint0_linear_1_6544)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_6544"
          x1="2.32812"
          y1="0.75"
          x2="2.32812"
          y2="380.75"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFD6CC" />
          <stop offset="0.333333" stop-color="#EC6547" />
          <stop offset="0.666667" stop-color="#EC6547" />
          <stop offset="1" stop-color="#0D1117" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Strock6;
