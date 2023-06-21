import "./styles.css";
import React, { useEffect, useState } from "react";

export default function App() {
  const { h, m, s } = useCountDown(new Date("2023-06-20 12:00:00"));
  return (
    <div>
            <span>{h}</span>:      <span>{m}</span>:      <span>{s}</span>   {" "}
    </div>
  );
}

// 请实现 useCountDown
function useCountDown(endDate) {
  const [diffTime, setDiffTime] = useState({
    h: 0,
    m: 0,
    s: 0
  });
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const diff = Math.abs(now - endDate.getTime()) / 1000;
      const h = Math.floor(diff / 3600);
      const m = Math.floor((diff % 3600) / 60);
      const s = Math.floor((diff % 3600) % 60);
      setDiffTime({ ...diffTime, h: h, m: m, s: s });
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return diffTime;
}
