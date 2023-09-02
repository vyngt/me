"use client";

import { IconDefinition, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
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
    id: "password_manager_2",
    name: "Password Manager 2",
    time: "2023",
    description: (
      <>
        <Typography className="text-project-description">
          At this point, new weapon, Rust. Driven by my fascination, I made the
          decision to upgrade the version of my Password Manager tool. With
          Tauri, I rewrote the functionalities in Rust, and for the user
          interface, I utilized Next.js. This combination allowed me to leverage
          the strengths of both technologies and create a robust and
          user-friendly application.
        </Typography>
        <Typography className="text-project-description mt-2">
          What&apos;s more, I added several new features to enhance its
          capabilities. The end result? Password Manager 2 was born, a testament
          to my exploration and growth in the world of technology.
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
          While working with Odoo, I encountered some intriguing authentication
          mechanisms. I began to wonder if it was possible to integrate OAuth2
          into Odoo. After extensive research and exploration, I somehow managed
          to create this solution.
        </Typography>
        <Typography className="text-project-description mt-2">
          This module allows you to to turn Odoo into an OAuth2 provider.
          Although it&apos;s not yet complete, it seems to be functioning fairly
          well.
        </Typography>
      </>
    ),
    sources: [{ icon: faGithub, link: "https://github.com/vyngt/v-odoo" }],
  },
  {
    id: "password_manager",
    name: "Password Manager",
    time: "2022",
    description: (
      <>
        <Typography className="text-project-description">
          During my learning and work experiences, I found myself creating
          numerous accounts and passwords, most of which were complex and hard
          to remember. I ended up storing them in plain .txt files (definitely
          not secure). As time passed, the number of accounts that needed to be
          managed kept growing, making it increasingly difficult to find the
          right information.
        </Typography>
        <Typography className="text-project-description mt-2">
          That&apos;s when this tool was born. Even though there are many
          similar tools available, I decided to create my own. Ultimately, I did
          it just for the fun of it...haha.
        </Typography>
        <Typography className="text-project-description mt-2">
          The main feature is simply to store accounts securely, with the data
          encrypted. For the user interface, I used PyQt.
        </Typography>
      </>
    ),
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/password-manager" },
    ],
  },
  {
    id: "vgame",
    name: "VGame",
    time: "2022",
    description: (
      <Typography className="text-project-description">
        Our professor assigned a task in which each of us had to create an
        e-commerce website that integrated various online payment methods and
        ensured data encryption. With determination and effort, I managed to
        create VGame, an online store selling electronic games, inspired by
        platforms like Steam. The integrated payment methods include Paypal,
        Stripe, and Braintree. The primary technology used for this project was
        Django.
      </Typography>
    ),
    sources: [{ icon: faGithub, link: "https://github.com/vyngt/vgame" }],
  },
  {
    id: "password_generator",
    name: "Password Generator",
    time: "2022",
    description: (
      <Typography className="text-project-description">
        During my journey of learning PyQT and PySide (although they may quite
        similar), I created this little toy, even though it serves a very simple
        purpose of generating random character strings.
      </Typography>
    ),
    sources: [
      { icon: faGithub, link: "https://github.com/vyngt/password-generator" },
    ],
  },
  {
    id: "steganography",
    name: "Steganography",
    time: "2022",
    description:
      "Steganography is a simple CLI tool used for embedding and extracting messages from digital images. It is primarily implemented in Python. Messages are encrypted and decrypted using a password.",
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
    description:
      "VPic is a straightforward platform designed for uploading and viewing images. It leverages Django and Next.js as its core technologies. Its primary features include image uploads and an authentication mechanism using OAuth2.",
    sources: [{ icon: faGithub, link: "https://github.com/vyngt/vpic" }],
  },
  {
    id: "y2mp3",
    name: "y2mp3",
    time: "2022",
    description:
      "y2mp3 is a simple and straightforward project created solely for the purpose of converting videos into MP3 audio format. It is primarily written in Python and relies on ffmpeg for conversion.",
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
