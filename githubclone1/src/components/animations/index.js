import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Define a function called Animate that takes a selector, an action, and a reverse function as parameters.
export default function Animate(selector, action, reverse) {
  // Get access to the Redux store's dispatch function.
  const dispatch = useDispatch();

  // Use the useEffect hook to perform side effects in a functional component.
  useEffect(() => {
    // Create an IntersectionObserver that watches for changes in the intersection of elements with the viewport.
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // If the observed element is in the viewport, dispatch the specified action.
          dispatch(action());
        } else {
          // If the observed element is not in the viewport, you can handle the reverse action if needed.
          // dispatch(reverse()); // You can uncomment and use this line if necessary.
        }
      });
    });

    // Query all elements with the specified selector and observe them.
    const hiddenElements = document.querySelectorAll("." + selector);
    hiddenElements.forEach((el) => observer.observe(el));

    // The empty dependency array [] ensures that this effect runs only once, similar to componentDidMount in class components.
  }, []);
}
