"use client";
import { Typography } from "@material-tailwind/react";

export default function Skill() {
  return (
    <div className="mx-4">
      <hr className="my-2 separator" />
      <Typography variant="h4">SKILLS</Typography>
      <Typography variant="h6" className="mt-1">
        PROGRAMMING LANGUAGES
      </Typography>
      <div className="inner-text-medium text-sub">
        <Typography>• Python, Javascript, Rust</Typography>
      </div>
      <Typography variant="h6" className="mt-1">
        FRAMEWORKS & LIBRARIES & PACKAGES
      </Typography>
      <div className="inner-text-medium text-sub">
        <Typography>
          • Python: PyQt, PySide, Pytest, Django, FastAPI, Odoo
        </Typography>
        <Typography>• Node.js: Typescript, React.js, Next.js</Typography>
        <Typography>• CSS: TailwindCSS</Typography>
        <Typography>• Rust: Tauri, Rocket</Typography>
        <Typography>• Web Server: nginx</Typography>
        <Typography>• Message Brokers: RabbitMQ</Typography>
        <Typography>• Container: Docker</Typography>
      </div>
      <Typography variant="h6" className="mt-1">
        DATABASES
      </Typography>
      <div className="inner-text-medium text-sub">
        <Typography>• PostgreSQL, SQLite</Typography>
      </div>
    </div>
  );
}
