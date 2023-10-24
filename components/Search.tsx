"use client";

import { useEffect, useState } from "react";
import { UserPlusIcon, UsersIcon } from "@heroicons/react/24/outline";

import { cn } from "@/lib/utils";
import Logo from "@/components/icons/Logo";
import { Button } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

const exampleQueries = [
  "What are my appointments for today?",
  "Give me a list of the most recent patients.",
];

export default function Search() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState([]);
  const page = pages[pages.length - 1];

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  return (
    <>
      <Button
        variant="outline"
        className={cn(
          "relative h-9 w-full justify-start rounded-[0.5rem] text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64",
        )}
        onClick={() => setOpen(true)}
      >
        <span className="hidden lg:inline-flex">Search anything...</span>
        <span className="inline-flex lg:hidden">Search...</span>
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          value={search}
          onValueChange={setSearch}
          placeholder="Type a command or search..."
        />
        <div className="flex space-x-2 p-3">
          <Button onClick={() => setPages([])} variant="secondary" size="xs">
            Home
          </Button>

          {!!page && (
            <Button
              onClick={() => setPages([...pages, page])}
              variant="secondary"
              size="xs"
              className="capitalize"
            >
              {page}
            </Button>
          )}
        </div>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {!page && (
            <>
              <CommandGroup heading="Patients">
                <CommandItem onSelect={() => setPages([...pages, "patients"])}>
                  <UsersIcon className="mr-2" />
                  <span>Search Patients...</span>
                </CommandItem>
                <CommandItem>
                  <UserPlusIcon className="mr-2" />
                  <span>Add New Patient</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="Help">
                <CommandItem
                  onSelect={() => setPages([...pages, "help"])}
                  className="group"
                >
                  <Logo className="mr-1 !h-6 !w-6 transition-transform duration-300 group-hover:-rotate-[360deg] group-hover:scale-125" />
                  <span>Ask Ilara AI{!!search ? `:${search}` : "..."}</span>
                </CommandItem>
              </CommandGroup>
            </>
          )}

          {page === "patients" && (
            <CommandGroup heading="Suggested Filters">
              <CommandItem>
                <UsersIcon className="mr-2" />
                <span>Search Patients{!!search ? `:${search}` : "..."}</span>
              </CommandItem>
              <CommandItem>
                <UserPlusIcon className="mr-2" />
                <span>Add New Patient</span>
              </CommandItem>
            </CommandGroup>
          )}

          {page === "help" && (
            <CommandGroup heading="How can I help?">
              {exampleQueries.map((query) => (
                <CommandItem key={query} className="group">
                  <Logo className="mr-1 !h-6 !w-6 transition-transform duration-300 group-hover:-rotate-[360deg] group-hover:scale-125" />
                  <span>{query}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
