"use client";

import { Typography } from "@material-tailwind/react";
import ProjectItem from "./ProjectItem";
import { projects } from "./items";

export default function Projects() {
  return (
    <div className="flex flex-col gap-2">
      <div className="m-5">
        <Typography variant="h2">My Projects</Typography>
        <div className="inner-text-medium">
          <Typography className="text-sub">
            Below are some projects or toys that I have created during my
            learning and working journey.
          </Typography>
        </div>
        <hr className="my-2 separator" />

        <div className="flex flex-col mt-3 gap-4">
          {projects.map((project) => (
            <ProjectItem key={project.id} item={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
