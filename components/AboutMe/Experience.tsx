"use client";
import { Typography } from "@material-tailwind/react";

export default function Experience() {
  return (
    <div className="mx-4">
      <hr className="my-2 separator" />
      <Typography variant="h4">EXPERIENCE</Typography>
      <div className="flex flex-col">
        <div className="flex justify-between mt-2">
          <Typography variant="h5">T4 TEK COMPANY LIMITED</Typography>
          <Typography variant="lead" className="text-time">
            02/2023 - 08/2023
          </Typography>
        </div>
        <Typography variant="lead">Backend Developer</Typography>
        <div className="inner-text-medium text-sub">
          <Typography>
            • Viet tai lieu huong dan lap trinh, phat trien odoo
          </Typography>
          <Typography>
            • Viet module tich hop he thong doanh nghiep ERP
          </Typography>
          <Typography>• Trien khai, van hanh cac he thong odoo</Typography>
        </div>
      </div>
    </div>
  );
}
