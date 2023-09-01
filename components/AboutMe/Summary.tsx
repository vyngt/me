"use client";
import { Typography } from "@material-tailwind/react";

export default function Summary() {
  return (
    <div className="mt-5 mx-4">
      <Typography variant="h1">Nguyen The Vy</Typography>
      <div className="inner-text-medium">
        <Typography className="text-sub">
          I am passionate about learning new technologies and always keep
          concentrated on improving my self skills. I love creating hobby
          tools...
        </Typography>
      </div>
    </div>
  );
}
