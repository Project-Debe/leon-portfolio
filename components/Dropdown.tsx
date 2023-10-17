"use client";

import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { cn } from "@/lib/utils";

type Items = {
  type: "Prototype" | "Website";
  url?: string;
};

type DropdownProps = {
  items: Items[];
};

const renderContent = (type: Items["type"]) => (
  <>
    <p className="mb-1 text-left">View {type}</p>
    <p className="text-left opacity-50">
      {type === "Prototype"
        ? "Interactive wireframes for design visualisation"
        : "Explore the implemented designs"}
    </p>
  </>
);

export default function Dropdown({ items }: DropdownProps) {
  return (
    <Menu as="div" className="relative normal-case text-white">
      <Menu.Button className="flex items-center space-x-1 rounded-full px-4 py-2.5 ring-1 ring-white hover:bg-white hover:bg-opacity-50">
        {({ open }) => (
          <>
            <span>More</span>
            <ChevronDownIcon
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                open && "rotate-180",
              )}
            />
          </>
        )}
      </Menu.Button>
      <Menu.Items className="absolute right-0 top-14 w-64 divide-y divide-[#707070] divide-opacity-20 overflow-hidden rounded-lg bg-white text-black focus:outline-none landscape:w-80">
        {items.map(({ type, url }, idx) => (
          <Menu.Item key={idx} disabled={!url}>
            {({ disabled, active }) =>
              disabled ? (
                <button type="button" className="block p-3 opacity-50" disabled>
                  {renderContent(type)}
                </button>
              ) : (
                <a
                  className={cn("block p-3", active && "bg-gray-100")}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {renderContent(type)}
                </a>
              )
            }
          </Menu.Item>
        ))}
      </Menu.Items>
    </Menu>
  );
}
