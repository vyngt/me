"use client";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="mx-5 my-2 flex flex-col gap-2">
      <div className="flex gap-4">
        <a href="https://github.com/vyngt" target="_blank">
          <IconButton size="lg">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </IconButton>
        </a>
        <a href="mailto:vyngt@outlook.com">
          <IconButton size="lg">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </IconButton>
        </a>
        <a href="tel:+84822078535">
          <IconButton size="lg">
            <FontAwesomeIcon icon={faPhone} size="2x" />
          </IconButton>
        </a>
      </div>
      <div>
        <Tooltip content="My vCard" placement="right">
          <Image
            className="mt-2"
            src="/assets/vcard.png"
            alt="qr-vcard"
            height={300}
            width={300}
          />
        </Tooltip>
      </div>
    </div>
  );
}
