"use client";
import { Typography } from "@material-tailwind/react";

export default function Experience() {
  return (
    <div className="mx-4">
      <hr className="my-2 border-blue-gray-50" />
      <Typography variant="h4">EXPERIENCE</Typography>
      <div className="flex flex-col">
        <div className="flex justify-between mt-2">
          <Typography variant="h5">T4 TEK COMPANY LIMITED</Typography>
          <Typography variant="lead" className="text-[#6060fb]">
            02/2023 - 08/2023
          </Typography>
        </div>
        <div>
          <Typography>• 1</Typography>
          <Typography>• 1</Typography>
          <Typography>• 1</Typography>
          <Typography>• 1</Typography>
        </div>
      </div>
    </div>
  );
}
