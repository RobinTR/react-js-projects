import { useState, useEffect } from "react";
import "./WindowTracker.css";

function WindowTracker() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    function watchWindowWidth() {
      console.log("Resized");
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", watchWindowWidth);
    return function cleanup() {
      console.log("Cleanup");
      window.removeEventListener("resize", watchWindowWidth);
    };
  }, []);

  return <h1>Window width: {windowWidth}</h1>;
}

export default WindowTracker;
