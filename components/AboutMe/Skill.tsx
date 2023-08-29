"use client";
import { Typography } from "@material-tailwind/react";

export default function Skill() {
  return (
    <div className="mx-4">
      <hr className="my-2 border-blue-gray-50" />
      <Typography variant="h4">SKILLS</Typography>
      <Typography variant="h6" className="mt-1">
        PROGRAMMING LANGUAGES
      </Typography>
      <Typography>- Python, Javascript, Rust</Typography>
      <Typography variant="h6" className="mt-1">
        FRAMEWORKS & LIBRARIES & PACKAGES
      </Typography>
      <Typography>- PyQt, PySide, Pytest, Django, FastAPI, Odoo</Typography>
      <Typography>- Typescript, ReactJs, NextJs</Typography>
      <Typography>- TailwindCSS</Typography>
      <Typography>- Rust: Tauri, Rocket</Typography>
      <Typography>- Web Server: nginx</Typography>
      <Typography>- Container: Docker</Typography>
      <Typography variant="h6" className="mt-1">
        DATABASES
      </Typography>
      <Typography>- PostgreSQL, SQLite</Typography>
    </div>
  );
}
