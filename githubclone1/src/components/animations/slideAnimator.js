


import { useEffect } from "react";

// Define a function called SlideAnimator that takes a delay as a parameter.
export default function SlideAnimator(delay) {
  // Use the useEffect hook to perform side effects in a functional component.
  useEffect(() => {
    // Create an IntersectionObserver that watches for changes in the intersection of elements with the viewport.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the observed element is in the viewport, add the "show" class and possibly a "transitionDelay" class.
          entry.target.classList.add("show", delay ? "transitionDelay" : "");
        } else {
          // If the observed element is not in the viewport, remove the "show" class.
          entry.target.classList.remove("show");
        }
      });
    });

    // Query all elements with different classes and observe them for each type of slide animation.
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

