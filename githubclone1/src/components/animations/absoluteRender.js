import { useEffect } from "react";
export default function AbsoluteAnimator(prevClass, newClass) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.remove(prevClass);
          entry.target.classList.add(newClass);
        } else {
          // entry.target.classList.remove("show");
          entry.target.classList.remove(newClass);
          entry.target.classList.add(prevClass);
        }
      });
    });
    const absoluteElement1 = document.querySelectorAll("."+prevClass);

    absoluteElement1.forEach((el) => observer.observe(el));
  }, []);
}
