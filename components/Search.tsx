"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

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
import {
  DesktopIcon,
  MoonIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";

const exampleQueries = [
  "What causes Acute cholecystitis?",
  "Medicine to prescribe to patients with chest pain.",
  "Similarities and Differences between Flu and COVID-19​",
];

export default function Search() {
  const { setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState<Array<string>>([]);
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

  const onClose = () => {
    setSearch("");
    setPages([]);
    setOpen(false);
  };

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
      <CommandDialog open={open} onOpenChange={onClose}>
        <CommandInput
          autoFocus
          value={search}
          onValueChange={setSearch}
          placeholder="What do you need?"
        />
        <div className="flex space-x-2 p-3">
          <Button
            onClick={() => {
              setPages([]);
              setSearch("");
            }}
            variant="secondary"
            size="xs"
          >
            Home
          </Button>

          {!!page && (
            <Button
              onClick={() => {
                setPages([...pages, page]);
                setSearch("");
              }}
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
                  <PersonIcon className="mr-2" />
                  <span>Search Patients...</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="Settings">
                {!search ? (
                  <CommandItem onSelect={() => setPages([...pages, "theme"])}>
                    <DesktopIcon className="mr-2" />
                    <span>Change Theme...</span>
                  </CommandItem>
                ) : (
                  <>
                    <CommandItem
                      onSelect={() => setTheme("light")}
                      className="group"
                    >
                      <MoonIcon className="mr-2" />
                      <span>Change Theme to Light</span>
                    </CommandItem>
                    <CommandItem
                      onSelect={() => setTheme("dark")}
                      className="group"
                    >
                      <SunIcon className="mr-2" />
                      <span>Change Theme to Dark</span>
                    </CommandItem>
                    <CommandItem
                      onSelect={() => setTheme("system")}
                      className="group"
                    >
                      <DesktopIcon className="mr-2" />
                      <span>Change Theme to System</span>
                    </CommandItem>
                  </>
                )}
              </CommandGroup>
              <CommandGroup heading="Help">
                <CommandItem
                  onSelect={() => setPages([...pages, "help"])}
                  className="group"
                >
                  <Logo className="mr-1 !h-6 !w-6 transition-transform duration-300 group-hover:-rotate-[360deg] group-hover:scale-125" />
                  <span>Ask Ilara AI...</span>
                </CommandItem>
              </CommandGroup>
            </>
          )}

          {page === "patients" && (
            <CommandGroup heading="Suggested Filters">
              {!search ? (
                <CommandItem onSelect={() => setSearch("gender:")}>
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <Button variant="secondary" size="xs" className="mr-2">
                        gender:
                      </Button>
                      <span>patient gender</span>
                    </div>
                    <span className="text-muted-foreground">gender:male</span>
                  </div>
                </CommandItem>
              ) : (
                <>
                  <CommandItem onSelect={() => setSearch("gender:male")}>
                    <Button variant="secondary" size="xs" className="mr-2">
                      gender:male
                    </Button>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearch("gender:female")}>
                    <Button variant="secondary" size="xs" className="mr-2">
                      gender:female
                    </Button>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearch("gender:unknown")}>
                    <Button variant="secondary" size="xs" className="mr-2">
                      gender:unkwown
                    </Button>
                  </CommandItem>
                </>
              )}
              <CommandItem onSelect={() => setSearch("age:")}>
                <div className="flex w-full items-center justify-between">
                  <div>
                    <Button variant="secondary" size="xs" className="mr-2">
                      age:
                    </Button>
                    <span>patient age or range</span>
                  </div>
                  <span className="text-muted-foreground">age:22</span>
                </div>
              </CommandItem>
              {!search ? (
                <CommandItem onSelect={() => setSearch("date:")}>
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <Button variant="secondary" size="xs" className="mr-2">
                        date:
                      </Button>
                      <span>date of registration</span>
                    </div>
                    <span className="text-muted-foreground">
                      date:yesterday
                    </span>
                  </div>
                </CommandItem>
              ) : (
                <>
                  <CommandItem onSelect={() => setSearch("date:yesterday")}>
                    <Button variant="secondary" size="xs" className="mr-2">
                      date:yesterday
                    </Button>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setSearch('date:"> 2 days ago"')}
                  >
                    <Button variant="secondary" size="xs" className="mr-2">
                      date:&quot;&gt; 2 days ago&quot;
                    </Button>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearch('date:"> last week"')}>
                    <Button variant="secondary" size="xs" className="mr-2">
                      date:&quot;&gt; last week&quot;
                    </Button>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setSearch('date:">=25/10/2023"')}
                  >
                    <Button variant="secondary" size="xs" className="mr-2">
                      date:&quot;&gt;=25/10/2023&quot;
                    </Button>
                  </CommandItem>
                </>
              )}
            </CommandGroup>
          )}

          {page === "help" && (
            <CommandGroup heading="Examples">
              {exampleQueries.map((query) => (
                <CommandItem key={query} className="group">
                  <Logo className="mr-1 !h-6 !w-6 transition-transform duration-300 group-hover:-rotate-[360deg] group-hover:scale-125" />
                  <span>{query}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {page === "theme" && (
            <CommandGroup heading="Change Theme">
              <CommandItem onSelect={() => setTheme("light")} className="group">
                <MoonIcon className="mr-2" />
                <span>Change Theme to Light</span>
              </CommandItem>
              <CommandItem onSelect={() => setTheme("dark")} className="group">
                <SunIcon className="mr-2" />
                <span>Change Theme to Dark</span>
              </CommandItem>
              <CommandItem
                onSelect={() => setTheme("system")}
                className="group"
              >
                <DesktopIcon className="mr-2" />
                <span>Change Theme to System</span>
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
