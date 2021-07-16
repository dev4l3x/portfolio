import { useState, useEffect } from "react";

export const SIZES = Object.freeze({
  SM: 640,
  MD: 768,
  LG: 1025,
});

function useResponsive() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
    const resizeHandler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", resizeHandler);

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  return width;
}

export default useResponsive;
