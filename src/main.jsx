import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Router.jsx";
// ..
AOS.init();
AOS.init({
  disable: false,
  startEvent: "DOMContentLoaded",
  initClassName: "aos-init",
  animatedClassName: "aos-animate",
  useClassNames: false,
  disableMutationObserver: false,
  debounceDelay: 50,
  throttleDelay: 99,

  offset: 120,
  delay: 0,
  duration: 1400,
  easing: "ease",
  once: false,
  mirror: true, // Allows animations to trigger again when scrolling past the element
  anchorPlacement: "top-bottom",
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
