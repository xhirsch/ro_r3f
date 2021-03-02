import { useCallback } from "react";
import { useSpring, config } from "@react-spring/core";
import { useGesture } from "react-use-gesture";
import clamp from "lodash/clamp";

export default function Scroll(bounds, props) {
  const [{ y }, set] = useSpring(() => ({ y: 0, config: config.slow }));
  const fn = useCallback(
    ({ xy: [, cy], previous: [, py], memo = y.get() }) => {
      const newY = clamp(memo + cy - py, ...bounds);
      set({ y: newY });
      return newY;
    },
    [bounds, y, set]
  );
  const bind = useGesture({ onWheel: fn, onDrag: fn }, props);
  return [y, bind];
}
