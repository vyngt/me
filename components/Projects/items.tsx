"use client";

import { IconDefinition, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload, faBoxOpen } from "@fortawesome/free-solid-svg-icons";
import { Typography } from "@material-tailwind/react";
import { ReactNode } from "react";

export interface IProjectItemSource {
  icon: IconDefinition;
  link: string;
}

export interface IProjectItem {
  id: string;
  name: string;
  time: string;
  description: ReactNode;
  sources: Array<IProjectItemSource>;
}

export const projects: Array<IProjectItem> = [
  {
    id: "vchat",
    name: "VChat",
    time: "2023",
    description: (
      <>
        <Typography className="text-project-description">
          This is a real-time chat platform based on Server Sent Events (SSE).
          The frontend is built using Next.js(React.js Framework), while the
          backend is developed with Rocket.rs, a web framework written in Rust.
        </Typography>
      </>
    ),
    sources: [{ icon: faGithub, link: "https://github.com/vyngt/vchat" }],
  },
  {
    id: "sp_vcard",
    name: "sp_vcard",
    time: "2023",
    description: (
      <>
        <Typography className="text-project-description">
          A library will help you create vCards. It&apos;s implemented in Rust.
        </Typography>
      </>
    ),
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/vcard" },
      {
        icon: faBoxOpen,
        link: "https://crates.io/crates/sp_vcard",
      },
    ],
  },
  {
    id: "password_manager_2",
    name: "Password Manager",
    time: "2023",
    description: (
      <>
        <Typography className="text-project-description">
          A password management tool with these features offers secure storage
          and organization of passwords. It encrypts all data using SQLCipher,
          ensuring that passwords are protected with strong encryption. This
          tool allows users to manage their passwords efficiently, providing a
          central repository that safeguards sensitive information from
          unauthorized access.
        </Typography>
      </>
    ),
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
    description: (
      <>
        <Typography className="text-project-description">
          This module allows you to to turn Odoo into an OAuth2 provider.
          Although it&apos;s not yet complete, it seems to be functioning fairly
          well.
        </Typography>
      </>
    ),
    sources: [{ icon: faGithub, link: "https://github.com/vyngt/v-odoo" }],
  },
  {
    id: "steganography",
    name: "Steganography",
    time: "2022",
    description:
      "Steganography is a simple CLI tool for embedding and extracting messages from digital images with data encrypted and decrypted with the password.",
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/ky-thuat-giau-tin" },
      {
        icon: faDownload,
        link: "https://github.com/vyngt/ky-thuat-giau-tin/releases",
      },
    ],
  },
  {
    id: "y2mp3",
    name: "y2mp3",
    time: "2022",
    description:
      "y2mp3 is a utilities tool created solely to convert videos into MP3 audio format. It is primarily written in Python and relies on ffmpeg for conversion.",
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/y2mp3" },
      { icon: faDownload, link: "https://github.com/vyngt/y2mp3/releases" },
    ],
  },
  {
    id: "da_04",
    name: "E-Learning Platform",
    time: "2022",
    description: (
      <Typography className="text-project-description">
        This project is about an online programming learning platform, inspired
        by w3school and educative.io. It was a collaboration between two
        individuals, myself and a friend (with a primary focus on the
        client-side). The technologies used were Django and Next.js. The main
        features revolved around creating and managing courses and enabling
        direct code execution.
      </Typography>
    ),
    sources: [{ icon: faGithub, link: "https://github.com/vyngt/DA_04" }],
  },
];
