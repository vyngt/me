import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="mx-5 my-2 flex flex-col gap-2">
      <div className="flex gap-4">
        <Link
          href="https://github.com/vyngt"
          target="_blank"
          className="hover:text-blue-gray-500"
        >
          <FontAwesomeIcon icon={faGithub} size="3x" />
        </Link>
        <Link
          href="mailto:vyngt@outlook.com"
          className="hover:text-blue-gray-500"
        >
          <FontAwesomeIcon icon={faEnvelope} size="3x" />
        </Link>
      </div>
      <div>
        <Image
          src="/assets/vcard.png"
          alt="qr-vcard"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
}
