import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";

function Dropdown() {
  return (
    <Menu>
      <Menu.Button
        className="flex items-center space-x-1 rounded-full px-4 py-2.5 ring-1 ring-white"
        disabled
      >
        <span>More</span>
        <ChevronDownIcon className="h-4 w-4" />
      </Menu.Button>
      <Menu.Items>
        <Menu.Item>
          <a href="/account-settings">View Prototype</a>
        </Menu.Item>
        <Menu.Item>
          <a href="/account-settings">View Website</a>
        </Menu.Item>
      </Menu.Items>
    </Menu>
  );
}

export default Dropdown;
