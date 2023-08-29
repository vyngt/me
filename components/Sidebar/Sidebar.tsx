"use client";

import { List, ListItem, ListItemPrefix } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ISidebarItem, SidebarManager } from "./items";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const SidebarItem = ({ item }: { item: ISidebarItem }) => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Link
      className={`flex gap-2 p-3 ${
        pathname == item.href ? "sidebar-item-disable" : "sidebar-item"
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

export default function Sidebar() {
  return (
    <div className="h-full w-60 shadow-xl bg-black fixed">
      <List>
        {SidebarManager.all().map((e) => (
          <SidebarItem key={e.id} item={e} />
        ))}
      </List>
    </div>
  );
}
