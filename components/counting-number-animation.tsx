"use client";

import React, { useState, useEffect, useCallback } from "react";

export const CountingNumberAnimation = ({ targetNumber, duration }: any) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  const updateNumber = useCallback(() => {
    const startTime = Date.now();
    const endTime = startTime + duration;
    const startNumber = 0;
    const difference = targetNumber - startNumber;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min(1, (now - startTime) / duration);
      const newNumber = Math.floor(startNumber + difference * progress);
      setCurrentNumber(newNumber);

      if (now < endTime) {
        requestAnimationFrame(animate);
      }
    };

    animate();
  }, [targetNumber, duration]);

  useEffect(() => {
    updateNumber();
  }, [updateNumber]);

  return <div>{currentNumber}</div>;
};