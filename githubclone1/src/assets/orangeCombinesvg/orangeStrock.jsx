import React from "react";
import { SvgResize } from "../../hooks/svgResize";
import Animate from "../../components/animations";
import { useSelector } from "react-redux";
import { Step6, revertStep6 } from "../../reducer/animationSteps";

const OrangeStrock = () => {
  // const height = SvgResize("<", 769, "850", "1000");
  const { strock6 } = useSelector((state) => state.animationSteps);
  Animate("Observerv", Step6,  revertStep6);
  return (
    <svg
      width="4"
      className="transition2  "
      height={strock6 ? "850" : "0"}
      viewBox="0 0 4 837"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0.15625 0H3.15625V836.938H0.15625V0Z"
        fill="url(#paint0_linear_1_6562)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_6562"
          x1="1.65625"
          y1="0"
          x2="1.65625"
          y2="836.938"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#0D1117" />
          <stop offset="0.333333" stop-color="#EA6045" />
          <stop offset="0.666667" stop-color="#EA6045" />
          <stop offset="1" stop-color="#0D1117" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default OrangeStrock;
