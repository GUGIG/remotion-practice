import React, { useMemo } from "react";
import { Raindrop } from "./Raindrop";
import { random, AbsoluteFill } from "remotion";

export const Rain: React.FC = () => {
  const drops = useMemo(() => {
    return new Array(300).fill(true).map((_, i) => {
      const x = random("x" + i) * 100 + "%";
      const delay = random("delay" + i) * 60;
      const size = random("size" + i) + 0.3;
      return { x, delay, size };
    })
  }, []);
  return (
    <AbsoluteFill>
      {drops.map(drop => <Raindrop x={drop.x} delay={drop.delay} size={drop.size} />)}
    </AbsoluteFill>
  )
}