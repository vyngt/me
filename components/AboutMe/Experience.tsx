"use client";
import { Typography } from "@material-tailwind/react";

export function Experience() {
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
        <Typography variant="lead">Odoo Developer</Typography>
        <div className="inner-text-medium text-sub">
          <Typography>• Researching and studying ERP systems.</Typography>
          <Typography>• Configure and deploy the Odoo system.</Typography>
          <Typography>
            • Writing programming and development guides for Odoo.
          </Typography>
          <Typography>
            • Developing modules to integrate 3P payroll solutions into
            Odoo&apos;s HR.
          </Typography>
          <Typography>
            • Developing modules to integrate OAuth2 for authentication within
            Odoo.
          </Typography>
        </div>
      </div>
    </div>
  );
}
