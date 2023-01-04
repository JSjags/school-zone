import { useEffect, useState } from "react";

export const useDynamicMarginLeft = () => {
  const [dynamicMarginLeft, setDynamicMarginLeft] = useState(
    "clamp(200px, 20%, 300px)"
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth > 768
        ? setDynamicMarginLeft(0)
        : setDynamicMarginLeft("clamp(200px, 20%, 300px)");
    });

    return () => {
      window.removeEventListener("resize", () => {
        window.innerWidth > 768
          ? setDynamicMarginLeft(0)
          : setDynamicMarginLeft("clamp(200px, 20%, 300px)");
      });
    };
  }, []);

  return { dynamicMarginLeft };
};
