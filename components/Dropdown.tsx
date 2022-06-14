import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import clsx from "clsx";

function Dropdown() {
  return (
    <Menu as="div" className="relative normal-case">
      <Menu.Button
        className="flex items-center space-x-1 rounded-full px-4 py-2.5 ring-1 ring-white"
        disabled
      >
        <span>More</span>
        <ChevronDownIcon className="h-4 w-4" />
      </Menu.Button>
      <Menu.Items className="absolute bottom-11 right-0 w-64 divide-y divide-[#707070] divide-opacity-20 rounded-lg bg-white text-black focus:outline-none lg:w-80">
        <Menu.Item disabled>
          {({ disabled }) => (
            <a
              className={clsx("block p-3", disabled && "opacity-50")}
              href="/account-settings"
              target="_blank"
              rel="noreferrer"
            >
              <p>View Prototype</p>
              <p className="opacity-50">
                Interactive wireframes for design visualisation
              </p>
            </a>
          )}
        </Menu.Item>
        <Menu.Item disabled>
          {({ disabled }) => (
            <a
              className={clsx("block p-3", disabled && "opacity-50")}
              href="/account-settings"
              target="_blank"
              rel="noreferrer"
            >
              <p>View website</p>
              <p className="opacity-50">Explore the implemented designs</p>
            </a>
          )}
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default Dropdown;
