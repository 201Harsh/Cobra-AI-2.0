import React, { useEffect, useState } from "react";

const Debouncing = <T,>(value: T, delay: number) => {
  const [DebouncingValue, setDebouncingValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncingValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return DebouncingValue;
};

export default Debouncing;
