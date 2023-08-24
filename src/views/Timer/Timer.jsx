import React, { useEffect, useState } from "react";
export default function Timer() {
  const [count, setCount] = useState(10);
  useEffect(() => {
    if (count === 0) {
      return;
    }
    let timer = setInterval(() => {
      setCount(count - 1);
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, [count]);
  return (
    <>
      <div>Hello from {count}</div>
    </>
  );
}
