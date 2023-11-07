import React from "react";
import Animate from "../components/animations";
import { useSelector } from "react-redux";
import { Step7, revertStep7 } from "../reducer/animationSteps";

const Strock9 = () => {
    const { strock7 } = useSelector((state) => state.animationSteps);
    Animate("Observervi", Step7,  revertStep7);
  return (
    <svg
      width="4"
      className="transition"
      height={strock7?"329":"0"}
      viewBox="0 0 4 329"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="0.828125"
        y="0.359375"
        width="3"
        height="328"
        rx="1.5"
        fill="url(#paint0_linear_1_6688)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_6688"
          x1="2.32812"
          y1="0.359375"
          x2="2.32812"
          y2="328.359"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#ABB4FF" />
          <stop offset="0.5" stop-color="#797EF9" />
          <stop offset="1" stop-color="#0D1117" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Strock9;
