"use client";

import { List } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISidebarItem, SidebarManager } from "./items";
import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`flex gap-2 p-3 ${
        pathname == item.href ? "vyngt-item-disable" : "vyngt-item"
      }`}
      href={item.href}
    >
      <div className="flex flex-col justify-center">
        <FontAwesomeIcon icon={item.icon} />
      </div>
      <div>{item.name}</div>
    </Link>
  );
};

export function Sidebar({ ...rest }: React.HTMLAttributes<HTMLElement>) {
  return (
    <div {...rest}>
      <List>
        {SidebarManager.all().map((e) => (
          <SidebarItem key={e.id} item={e} />
        ))}
      </List>
    </div>
  );
}
