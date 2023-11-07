import { useEffect } from "react";
export default function SlideAnimator(delay) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show", delay ? "transitionDelay" : "");
        } else {
          entry.target.classList.remove("show");
        }
      });
    });
    const hiddenElements = document.querySelectorAll(".hidden");
    const slideSide = document.querySelectorAll(".sideSlide");
    const slideUp = document.querySelectorAll(".SlideUp");
    const slideFromRight = document.querySelectorAll(".rightSlide");

    hiddenElements.forEach((el) => observer.observe(el));
    slideSide.forEach((el) => observer.observe(el));
    slideUp.forEach((el) => observer.observe(el));
    slideFromRight.forEach((el) => observer.observe(el));
  }, []);
}
