import { IconDefinition, faGithub } from "@fortawesome/free-brands-svg-icons";

export interface IProjectItemSource {
  icon: IconDefinition;
  link: string;
}

export interface IProjectItem {
  id: string;
  name: string;
  time: string;
  description: string;
  sources: Array<IProjectItemSource>;
}

export const projects: Array<IProjectItem> = [
  {
    id: "password_manager_2",
    name: "Password Manager 2",
    time: "2023",
    description:
      "This is tool help you manage passwords, more feature, written in rust and typescript",
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/password-manager-2" },
    ],
  },
  {
    id: "password_manager",
    name: "Password Manager",
    time: "2023",
    description: "This is tool help you manage passwords",
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/password-manager" },
    ],
  },
];
