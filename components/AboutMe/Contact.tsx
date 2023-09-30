"use client";
import { IconButton, Tooltip } from "@material-tailwind/react";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faBoxOpen,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function Contact() {
  return (
    <div className="mx-5 my-2 flex flex-col gap-2">
      <div className="flex gap-4 justify-center md:justify-normal flex-wrap">
        <Tooltip content="Github">
          <a href="https://github.com/vyngt" target="_blank">
            <IconButton size="lg">
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </IconButton>
          </a>
        </Tooltip>
        <Tooltip content="crates.io (Rust)">
          <a href="https://crates.io/users/vyngt" target="_blank">
            <IconButton size="lg">
              <FontAwesomeIcon icon={faBoxOpen} size="2x" />
            </IconButton>
          </a>
        </Tooltip>
        <Tooltip content="Email">
          <a href="mailto:vyngt@outlook.com">
            <IconButton size="lg">
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </IconButton>
          </a>
        </Tooltip>
        <Tooltip content="Phone">
          <a href="tel:+84822078535">
            <IconButton size="lg">
              <FontAwesomeIcon icon={faPhone} size="2x" />
            </IconButton>
          </a>
        </Tooltip>
      </div>
      <div className="flex justify-center md:justify-normal">
        <a href="/assets/vynt.vcf">
          <Image
            className="mt-2"
            src="/assets/vcard.png"
            alt="qr-vcard"
            height={300}
            width={300}
          />
        </a>
      </div>
    </div>
  );
}
