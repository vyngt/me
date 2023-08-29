import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faFaceSmile,
  faScrewdriverWrench,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

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
    id: "experience",
    name: "Experience",
    icon: faCode,
    href: "/experience",
    sequence: 2,
  },
  {
    id: "projects",
    name: "Projects",
    icon: faScrewdriverWrench,
    href: "/projects",
    sequence: 3,
  },
];
