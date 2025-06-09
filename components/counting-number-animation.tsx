"use client";

import React, { useState, useEffect } from "react";

export const CountingNumberAnimation = ({ targetNumber, duration }: any) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;
    const startNumber = currentNumber;
    const difference = targetNumber - startNumber;

    const updateNumber = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      const newNumber = Math.floor(startNumber + difference * progress);
      setCurrentNumber(newNumber);

      if (now < endTime) {
        requestAnimationFrame(updateNumber);
      }
    };

    updateNumber();

    return () => {
      // Cleanup if component unmounts
      setCurrentNumber(targetNumber);
    };
  }, [targetNumber, duration]);

  return <div>{currentNumber}</div>;
};
