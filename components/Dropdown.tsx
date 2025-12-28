"use client";

import { Fragment, useState } from "react";
import { Popover, Transition } from "@headlessui/react";
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
    <Popover className="relative normal-case text-white">
      {({ open }) => (
        <>
          <Popover.Button className="flex items-center space-x-1 rounded-full px-4 py-2.5 ring-1 ring-white hover:bg-white hover:bg-opacity-50 focus:outline-none">
            <span>More</span>
            <ChevronDownIcon
              className={cn(
                "h-4 w-4 transition-transform duration-300",
                open && "rotate-180",
              )}
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Popover.Panel className="absolute right-0 top-14 z-50 w-64 divide-y divide-[#707070] divide-opacity-20 overflow-hidden rounded-lg bg-white text-black shadow-lg focus:outline-none landscape:w-80">
              {items.map(({ type, url }, idx) => (
                <div key={idx}>
                  {!url ? (
                    <button type="button" className="block w-full p-3 opacity-50 text-left" disabled>
                      {renderContent(type)}
                    </button>
                  ) : (
                    <a
                      className="block p-3 hover:bg-gray-100 transition-colors"
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {renderContent(type)}
                    </a>
                  )}
                </div>
              ))}
            </Popover.Panel>
          </Transition>
        </>
      )}
    </Popover>
  );
}

