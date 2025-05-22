import React, { useEffect, useState } from 'react';

const Counter = ({ from = 35000, to = 0, duration = 20000 }) => {
  const [value, setValue] = useState(from);

  useEffect(() => {
    const totalSteps = 100;
    const stepTime = duration / totalSteps;
    const stepSize = (from - to) / totalSteps;

    let current = from;
    let count = 0;

    const interval = setInterval(() => {
      count++;
      current -= stepSize;
      setValue(Math.max(Math.floor(current), to));
      if (count >= totalSteps) clearInterval(interval);
    }, stepTime);

    return () => clearInterval(interval);
  }, [from, to, duration]);

  return <span>{value.toLocaleString('en-US')}+</span>
};

export default Counter;
