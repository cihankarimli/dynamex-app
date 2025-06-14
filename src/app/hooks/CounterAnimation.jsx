"use client";

import { useEffect, useState } from "react";

const useCounterAnimation = (target, duration = 1500) => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (target === 0) {
      setCurrent(0);
      return;
    }

    const startTime = Date.now();
    const startValue = current;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      console.log(elapsed);

      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      const value = startValue + (target - startValue) * easeOutCubic;

      setCurrent(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrent(target);
      }
    };

    requestAnimationFrame(animate);
  }, [target, duration]);

  return current;
};

export default useCounterAnimation;
