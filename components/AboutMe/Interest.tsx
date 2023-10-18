"use client";
import { Typography } from "@material-tailwind/react";

export function Interest() {
  return (
    <div className="mx-4">
      <hr className="my-2 separator" />
      <Typography variant="h4">INTERESTS</Typography>
      <div className="text-sub inner-text-medium">
        <Typography>• Music</Typography>
        <Typography>• Games</Typography>
        <Typography>• Novel, Books</Typography>
        <Typography>• Skipping Rope</Typography>
        <Typography>• Martial Arts</Typography>
      </div>
    </div>
  );
}
