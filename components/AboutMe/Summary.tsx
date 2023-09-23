"use client";
import { Typography } from "@material-tailwind/react";

export default function Summary() {
  return (
    <div className="mt-5 mx-4">
      <Typography variant="h1">Nguyen The Vy</Typography>
      <div className="inner-text-medium">
        <Typography variant="lead" className="text-sub">
          Hello, I&apos;m Vy, born in 2000. I embarked on my programming journey
          in 2020, and I&apos;ve found it incredibly fascinating. With a passion
          for learning and an insatiable curiosity, I&apos;ve honed my skills
          over the years and continuously stay updated with knowledge day by
          day. I particularly enjoy crafting tools according to my own interests
          and preferences.
        </Typography>
      </div>
    </div>
  );
}
