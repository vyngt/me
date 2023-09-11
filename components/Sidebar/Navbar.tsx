"use client";

import React from "react";
import { Typography, Collapse, IconButton } from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { ISidebarItem, SidebarManager } from "./items";
import { usePathname } from "next/navigation";
import Link from "next/link";

const NavbarItem = ({ item }: { item: ISidebarItem }) => {
  const pathname = usePathname();

  return (
    <Typography as="li" variant="small" className="p-1 font-medium">
      <Link
        className={`flex gap-2 p-3 ${
          pathname == item.href ? "vyngt-item-disable" : "vyngt-item"
        }`}
        href={item.href}
      >
        {item.name}
      </Link>
    </Typography>
  );
};

const NavbarList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 navbar">
      {SidebarManager.all().map((e) => (
        <NavbarItem key={`nav-${e.id}`} item={e} />
      ))}
    </ul>
  );
};

const VNavbar: React.FunctionComponent<React.HTMLAttributes<HTMLElement>> = ({
  ...rest
}) => {
  const [open, setOpen] = React.useState(false);
  const handle = () => setOpen((cur) => !cur);

  return (
    <nav {...rest}>
      <div className="mx-4 pt-4 flex justify-between">
        <Typography variant="h5" className="self-center">
          Nguyen The Vy
        </Typography>
        <div className="flex flex-col justify-center">
          <IconButton onClick={handle}>
            <FontAwesomeIcon icon={open ? faClose : faBars} />
          </IconButton>
        </div>
      </div>
      <Collapse open={open}>
        <NavbarList />
      </Collapse>
    </nav>
  );
};

export default VNavbar;
