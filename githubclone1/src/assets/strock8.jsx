import React from "react";
import { Step7, revertStep7 } from "../reducer/animationSteps";
import Animate from "../components/animations";
import { useSelector } from "react-redux";

const Strock8 = () => {
    const { strock7 } = useSelector((state) => state.animationSteps);
    Animate("Observervi", Step7,  revertStep7);
  return (
    <svg
      width="4"
      className="transition"
      height={strock7? "161":"0"}
      viewBox="0 0 4 161"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.828125"
        y="0.109375"
        width="3"
        height="160"
        rx="1.5"
        fill="url(#paint0_linear_1_6683)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_6683"
          x1="2.32812"
          y1="0.109375"
          x2="2.32812"
          y2="160.109"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0D1117" />
          <stop offset="0.5" stop-color="#797EF9" />
          <stop offset="1" stop-color="#ABB4FF" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Strock8;
