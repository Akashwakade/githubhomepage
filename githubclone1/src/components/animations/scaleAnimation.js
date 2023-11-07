import { useEffect } from "react";
export default function ScaleAnimator(delay) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("showScale",);
        } else {
          entry.target.classList.remove("showScale");
        }
      });
    });
    const hiddenElement = document.querySelectorAll(".scaleUp");

    hiddenElement.forEach((el) => observer.observe(el));
  }, []);
}
