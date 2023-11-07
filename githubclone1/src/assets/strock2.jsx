import Animate from "../../src/components/animations";
import { SvgResize } from "../../src/hooks/svgResize";
import { useDispatch, useSelector } from "react-redux";
import { Step1, revertStep1 } from "../../src/reducer/animationSteps";
const Strock2Mobile = () => {
  const height = SvgResize("<", 600, "455", "650");
  const { strock1 } = useSelector((state) => state.animationSteps);
  Animate("GlowBox1", Step1, revertStep1);
  //  console.log(size)
  return (
    <svg
      className="transition"
      width="5"
      height={strock1 ? height : "0"}
      viewBox="0 0 1 455"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="circle"
        d="M0.828125 1.75C0.828125 0.921575 1.4997 0.25 2.32812 0.25V0.25C3.15655 0.25 3.82812 0.921573 3.82812 1.75V453.5C3.82812 454.328 3.15655 455 2.32812 455V455C1.4997 455 0.828125 454.328 0.828125 453.5V1.75Z"
        fill="url(#paint0_linear_1_6195)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_1_6195"
          x1="2.32812"
          y1="0.25"
          x2="2.32812"
          y2="455"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#D2A8FF" />
          <stop offset="0.1" stop-color="#A371F7" />
          <stop offset="0.7" stop-color="#196C2E" />
          <stop offset="0.8" stop-color="#2EA043" />
          <stop offset="1" stop-color="#56D364" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Strock2Mobile;
