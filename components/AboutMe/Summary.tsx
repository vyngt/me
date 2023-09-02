"use client";
import { Typography } from "@material-tailwind/react";

export default function Summary() {
  return (
    <div className="mt-5 mx-4">
      <Typography variant="h1">Nguyen The Vy</Typography>
      <div className="inner-text-medium">
        <Typography variant="lead" className="text-sub">
          Hello! My name is Nguyen The Vy, and I was born in 2000. I have a deep
          passion for programming and exploring emerging technologies. I find
          immense joy in crafting tools and products that align with my
          interests. My journey in the world of technology has been an exciting
          one, as I constantly seek to learn and stay updated with the latest
          advancements. Whether it&apos;s diving into coding challenges or
          keeping an eye on cutting-edge innovations, I&apos;m always eager to
          embrace the ever-evolving landscape of technology.
        </Typography>
      </div>
    </div>
  );
}
