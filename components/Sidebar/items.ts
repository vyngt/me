import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faFaceSmile, faCode } from "@fortawesome/free-solid-svg-icons";

export interface ISidebarItem {
  id: string;
  name: string;
  icon: IconDefinition;
  href: string;
  sequence: number;
}

export const SidebarManager = {
  all: () => {
    return registry.sort((a, b) => a.sequence - b.sequence);
  },
};

export const registry: ISidebarItem[] = [
  {
    id: "about",
    name: "About Me",
    icon: faFaceSmile,
    href: "/",
    sequence: 1,
  },
  {
    id: "projects",
    name: "Projects",
    icon: faCode,
    href: "/projects",
    sequence: 2,
  },
];
