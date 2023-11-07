import { useEffect } from "react";

// Define a function called ScaleAnimator that takes a delay as a parameter.
export default function ScaleAnimator(delay) {
  // Use the useEffect hook to perform side effects in a functional component.
  useEffect(() => {
    // Create an IntersectionObserver that watches for changes in the intersection of elements with the viewport.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the observed element is in the viewport, add the "showScale" class to it.
          entry.target.classList.add("showScale");
        } else {
          // If the observed element is not in the viewport, remove the "showScale" class.
          entry.target.classList.remove("showScale");
        }
      });
    });

    // Query all elements with the class "scaleUp" and observe them.
    const hiddenElement = document.querySelectorAll(".scaleUp");
    hiddenElement.forEach((el) => observer.observe(el));

    // The empty dependency array [] ensures that this effect runs only once, similar to componentDidMount in class components.
  }, []);
}
