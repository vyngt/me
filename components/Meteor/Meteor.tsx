"use client";
import "./style.css";

export const Meteors = ({ number }: { number?: number }) => {
  const meteors = new Array(number || 20).fill(true);

  const generate = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1) + min);

  const gen_top = () => generate(0, 250) + 50;
  const gen_left = () => generate(0, 90) + 9;
  const gen_time = () => generate(0, 70) / 10 + 3;

  return (
    <>
      {meteors.map((el, idx) => (
        <div
          key={"meteor" + idx}
          className="vyngt-meteor z-0"
          style={{
            top: gen_top() + "px",
            left: gen_left() + "%",
            animationName: "meteor",
            animationTimingFunction: "linear",
            animationDuration: gen_time() + "s",
            animationIterationCount: "infinite",
          }}
        ></div>
      ))}
    </>
  );
};
