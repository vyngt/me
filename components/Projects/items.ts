import { IconDefinition, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

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
      "The new version of Password Manager, written in Rust and Typescript",
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/password-manager-2" },
      {
        icon: faDownload,
        link: "https://github.com/vyngt/password-manager-2/releases",
      },
    ],
  },
  {
    id: "v_odoo",
    name: "V Odoo",
    time: "2023",
    description: "Odoo modules integrate oauth2 to odoo systems.",
    sources: [{ icon: faGithub, link: "https://github.com/vyngt/v-odoo" }],
  },
  {
    id: "password_manager",
    name: "Password Manager",
    time: "2022",
    description: "This is tool help you manage passwords. Using PyQT",
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/password-manager" },
    ],
  },
  {
    id: "vgame",
    name: "VGame",
    time: "2022",
    description: "Simple store, Paypal, Stripe, Braintree",
    sources: [{ icon: faGithub, link: "https://github.com/vyngt/vgame" }],
  },
  {
    id: "password_generator",
    name: "Password Generator",
    time: "2022",
    description: "Simple tool help you generator strong password",
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/password-generator" },
    ],
  },
  {
    id: "steganography",
    name: "Steganography",
    time: "2022",
    description:
      "This is tool help you hidden messages into digital images and send to your waifu?...",
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/ky-thuat-giau-tin" },
      {
        icon: faDownload,
        link: "https://github.com/vyngt/ky-thuat-giau-tin/releases",
      },
    ],
  },
  {
    id: "vpic",
    name: "VPic",
    time: "2022",
    description: "Simple Platform for upload favorite images",
    sources: [{ icon: faGithub, link: "https://github.com/vyngt/vpic" }],
  },
  {
    id: "y2mp3",
    name: "y2mp3",
    time: "2022",
    description: "A toy for convert youtube videos to mp3. Written in Python",
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/y2mp3" },
      { icon: faDownload, link: "https://github.com/vyngt/y2mp3/releases" },
    ],
  },
  {
    id: "da_04",
    name: "E-Learning Platform",
    time: "2022",
    description:
      "E-Learning platform like w3school, educative.io. Using Django and NextJs",
    sources: [{ icon: faGithub, link: "https://github.com/vyngt/DA_04" }],
  },
];
