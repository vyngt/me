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
          <Typography>
            Some projects I created when learning and working...
          </Typography>
        </div>
        <hr className="my-2 border-blue-gray-50" />

        <div className="flex flex-col mt-3 gap-4">
          {projects.map((project) => (
            <ProjectItem key={project.id} item={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
