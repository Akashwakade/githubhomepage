import React from "react";
import { SvgResize } from "../../hooks/svgResize";
import Animate from "../../components/animations";
import { useDispatch, useSelector } from "react-redux";
import { Step2, revertStep2 } from "../../reducer/animationSteps";
const LeftStrockCurve = () => {
  const height = SvgResize("<", 600, "452", "0");
  const { strock2 } = useSelector((state) => state.animationSteps);
  Animate("Observerii", Step2,  revertStep2);
  return (
    <svg
      width="58"
      className="transition"
      height={strock2 ? height : "0"}
      viewBox="0 0 58 452"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.00016 0L2.00005 31.2068C1.99996 56.797 11.6399 81.448 28.9997 100.249C46.3593 119.051 55.9993 143.702 55.9993 169.292V280.858C55.9993 306.727 46.3752 331.671 28.9997 350.837C11.6242 370.002 2.00012 394.947 2.00007 420.817L2 451.547"
        stroke="url(#paint0_linear_1_6420)"
        stroke-width="2.79307"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_6420"
          x1="22.4825"
          y1="4.11818e-09"
          x2="21.0859"
          y2="451.547"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0515742" stop-color="#196C2E" stop-opacity="0" />
          <stop offset="0.225992" stop-color="#2EA043" />
          <stop offset="0.47249" stop-color="#2EA043" />
          <stop offset="0.522324" stop-color="#56D364" />
          <stop offset="0.561417" stop-color="#2EA043" />
          <stop offset="0.791714" stop-color="#2EA043" />
          <stop offset="0.956186" stop-color="#196C2E" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LeftStrockCurve;
