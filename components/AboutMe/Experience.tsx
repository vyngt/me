"use client";
import { Typography } from "@material-tailwind/react";

export function Experience() {
  return (
    <div className="mx-4">
      <hr className="my-2 separator" />
      <Typography variant="h4">EXPERIENCE</Typography>
      <div className="flex flex-col">
        <div className="flex justify-between mt-2">
          <Typography variant="h5">
            TAM KHOA TECHNOLOGY JOINT STOCK COMPANY
          </Typography>
          <Typography variant="lead" className="text-time">
            11/2023 - Present
          </Typography>
        </div>
        <Typography variant="lead">Odoo Developer</Typography>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between mt-2">
          <Typography variant="h5">T4 TEK COMPANY LIMITED</Typography>
          <Typography variant="lead" className="text-time">
            02/2023 - 08/2023
          </Typography>
        </div>
        <Typography variant="lead">Intern Odoo Developer</Typography>
      </div>
    </div>
  );
}
