
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
export default function Animate(selector, action, reverse) {
  const dispatch = useDispatch();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
         dispatch(action());
        } else {
          // entry.target.classList.remove("show");
          // dispatch(reverse());
        }
      });
    });
    const hiddenElements = document.querySelectorAll("."+selector);

    hiddenElements.forEach((el) => observer.observe(el));
  }, []);
}
