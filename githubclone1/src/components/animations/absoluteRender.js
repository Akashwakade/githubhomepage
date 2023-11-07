import { useEffect } from "react";

// Define a function called AbsoluteAnimator that takes two class names as parameters.
export default function AbsoluteAnimator(prevClass, newClass) {
  // Use the useEffect hook to perform side effects in a functional component.
  useEffect(() => {
    // Create an IntersectionObserver that watches for changes in the intersection of elements with the viewport.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the observed element is in the viewport, remove the previous class and add the new class.
          entry.target.classList.remove(prevClass);
          entry.target.classList.add(newClass);
        } else {
          // If the observed element is not in the viewport, revert the class changes.
          entry.target.classList.remove(newClass);
          entry.target.classList.add(prevClass);
        }
      });
    });

    // Query all elements with the previous class and observe them.
    const absoluteElement1 = document.querySelectorAll("." + prevClass);
    absoluteElement1.forEach((el) => observer.observe(el));

    // The empty dependency array [] ensures that this effect runs only once, similar to componentDidMount in class components.
  }, []);
}
