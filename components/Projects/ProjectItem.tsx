"use client";

import { Typography } from "@material-tailwind/react";
import { IProjectItem, IProjectItemSource } from "./items";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

const ProjectItemSource = ({ source }: { source: IProjectItemSource }) => {
  return (
    <Link
      href={source.link}
      target="_blank"
      className="vyngt-item hover:vyngt-text-hover"
    >
      <FontAwesomeIcon icon={source.icon} size="3x" />
    </Link>
  );
};

export function ProjectItem({ item }: { item: IProjectItem }) {
  return (
    <div className="flex flex-col">
      <div className="flex justify-between">
        <Typography variant="h5">{item.name}</Typography>
        <Typography variant="lead" className="text-time">
          {item.time}
        </Typography>
      </div>
      <div className="text-sub w-3/4 text-project-description">
        {item.description}
      </div>
      <div className="flex gap-3 mt-2">
        {item.sources.map((e, idx) => (
          <ProjectItemSource key={`${item.id}-${idx}`} source={e} />
        ))}
      </div>
    </div>
  );
}
