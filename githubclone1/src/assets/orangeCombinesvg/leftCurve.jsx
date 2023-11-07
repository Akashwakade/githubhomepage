import React from "react";
import { SvgResize } from "../../hooks/svgResize";
import { useSelector } from "react-redux";
import { Step6, revertStep6 } from "../../reducer/animationSteps";
import Animate from "../../components/animations";

const LeftStrockCurve = () => {
  
  const height = SvgResize("<", 600, "452", "0");
  const { strock6 } = useSelector((state) => state.animationSteps);
  Animate("Observerv", Step6,  revertStep6);
  return (
    <svg
      width="50"
      className= "transition2 transitionDelay"
      height={strock6 ? height : "0"}
      viewBox="0 0 50 452"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-5.99984 0L-5.99995 31.2068C-6.00004 56.797 3.63993 81.448 20.9997 100.249C38.3593 119.051 47.9993 143.702 47.9993 169.292V280.858C47.9993 306.727 38.3752 331.671 20.9997 350.837C3.6242 370.002 -5.99988 394.947 -5.99993 420.817L-6 451.547"
        stroke="url(#paint0_linear_1_6558)"
        stroke-width="2.79307"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_6558"
          x1="22.3457"
          y1="-1.55394e-08"
          x2="20.9492"
          y2="451.547"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.0515742" stop-color="#AC3220" stop-opacity="0" />
          <stop offset="0.225992" stop-color="#EA6045" />
          <stop offset="0.47249" stop-color="#EA6045" />
          <stop offset="0.522324" stop-color="#FFA28B" />
          <stop offset="0.561417" stop-color="#EA6045" />
          <stop offset="0.791714" stop-color="#EA6045" />
          <stop offset="0.956186" stop-color="#AC3220" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default LeftStrockCurve;
