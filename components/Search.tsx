"use client";

import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";
import {
  ArrowRightIcon,
  DesktopIcon,
  MoonIcon,
  PersonIcon,
  SunIcon,
} from "@radix-ui/react-icons";

import Logo from "@/components/icons/Logo";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { cn } from "@/lib/utils";
import Patients from "./Patients";

const exampleQueries = [
  "What causes Acute cholecystitis?",
  "Medicine to prescribe to patients with chest pain.",
  "Similarities and Differences between Flu and COVID-19​",
];

type Page = {
  name: string;
  value: string;
};

export default function Search() {
  const { setTheme } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState<Array<Page>>([
    { name: "home", value: "Home" },
  ]);
  const currentPage = pages[pages.length - 1];

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

  useEffect(() => {
    inputRef.current?.focus();
  }, [currentPage]);

  const onClose = () => {
    setSearch("");
    setOpen(false);
  };

  const selected = (idx: number) => {
    setPages(pages.slice(0, idx + 1));
    setSearch("");
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
      <CommandDialog page={currentPage.name} open={open} onOpenChange={onClose}>
        <CommandInput
          ref={inputRef}
          value={search}
          onValueChange={setSearch}
          placeholder="What do you need?"
        />
        <div className="flex space-x-2 p-3">
          {pages.map(({ name, value }, idx) => (
            <Button
              key={name}
              onClick={() => selected(idx)}
              variant="secondary"
              size="xs"
              className="capitalize"
            >
              {value}
            </Button>
          ))}
        </div>
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {currentPage.name === "home" && (
            <>
              <CommandGroup heading="Patients">
                <CommandItem
                  onSelect={() =>
                    setPages([
                      ...pages,
                      { name: "patients", value: "Patients" },
                    ])
                  }
                >
                  <PersonIcon className="mr-2" />
                  <span>Search Patients...</span>
                </CommandItem>
              </CommandGroup>
              <CommandGroup heading="Settings">
                {!search ? (
                  <CommandItem
                    onSelect={() =>
                      setPages([...pages, { name: "theme", value: "theme" }])
                    }
                  >
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
                  onSelect={() =>
                    setPages([...pages, { name: "help", value: "Help" }])
                  }
                  className="group"
                >
                  <Logo className="mr-1 !h-6 !w-6 transition-transform duration-300 group-hover:-rotate-[360deg] group-hover:scale-125" />
                  <span>Ask Ilara AI...</span>
                </CommandItem>
              </CommandGroup>
            </>
          )}

          {/* {currentPage.name === "patients" && (
            <CommandGroup heading="Suggested Filters">
              {!search ? (
                <CommandItem onSelect={() => setSearch("gender:")}>
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <span
                        className={cn(
                          "mr-2",
                          buttonVariants({ variant: "secondary", size: "xs" }),
                        )}
                      >
                        gender:
                      </span>
                      <span>patient gender</span>
                    </div>
                    <span className="text-muted-foreground">gender:male</span>
                  </div>
                </CommandItem>
              ) : (
                <>
                  <CommandItem onSelect={() => setSearch("gender:male")}>
                    <span
                      className={cn(
                        "mr-2",
                        buttonVariants({ variant: "secondary", size: "xs" }),
                      )}
                    >
                      gender:male
                    </span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearch("gender:female")}>
                    <span
                      className={cn(
                        "mr-2",
                        buttonVariants({ variant: "secondary", size: "xs" }),
                      )}
                    >
                      gender:female
                    </span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearch("gender:unknown")}>
                    <span
                      className={cn(
                        "mr-2",
                        buttonVariants({ variant: "secondary", size: "xs" }),
                      )}
                    >
                      gender:unknown
                    </span>
                  </CommandItem>
                </>
              )}
              <CommandItem onSelect={() => setSearch("age:")}>
                <div className="flex w-full items-center justify-between">
                  <div>
                    <span
                      className={cn(
                        "mr-2",
                        buttonVariants({ variant: "secondary", size: "xs" }),
                      )}
                    >
                      age:
                    </span>
                    <span>patient age or range</span>
                  </div>
                  <span className="text-muted-foreground">age:22</span>
                </div>
              </CommandItem>
              <CommandItem onSelect={() => setSearch("email:")}>
                <div className="flex w-full items-center justify-between">
                  <div>
                    <span
                      className={cn(
                        "mr-2",
                        buttonVariants({ variant: "secondary", size: "xs" }),
                      )}
                    >
                      email:
                    </span>
                    <span>an email address</span>
                  </div>
                  <span className="text-muted-foreground">
                    email:name@example.com
                  </span>
                </div>
              </CommandItem>
              {!search ? (
                <CommandItem onSelect={() => setSearch("date:")}>
                  <div className="flex w-full items-center justify-between">
                    <div>
                      <span
                        className={cn(
                          "mr-2",
                          buttonVariants({ variant: "secondary", size: "xs" }),
                        )}
                      >
                        date:
                      </span>
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
                    <span
                      className={cn(
                        "mr-2",
                        buttonVariants({ variant: "secondary", size: "xs" }),
                      )}
                    >
                      date:yesterday
                    </span>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setSearch('date:"> 2 days ago"')}
                  >
                    <span
                      className={cn(
                        "mr-2",
                        buttonVariants({ variant: "secondary", size: "xs" }),
                      )}
                    >
                      date:&quot;&gt; 2 days ago&quot;
                    </span>
                  </CommandItem>
                  <CommandItem onSelect={() => setSearch('date:"> last week"')}>
                    <span
                      className={cn(
                        "mr-2",
                        buttonVariants({ variant: "secondary", size: "xs" }),
                      )}
                    >
                      date:&quot;&gt; last week&quot;
                    </span>
                  </CommandItem>
                  <CommandItem
                    onSelect={() => setSearch('date:">=25/10/2023"')}
                  >
                    <span
                      className={cn(
                        "mr-2",
                        buttonVariants({ variant: "secondary", size: "xs" }),
                      )}
                    >
                      date:&quot;&gt;=25/10/2023&quot;
                    </span>
                  </CommandItem>
                </>
              )}
            </CommandGroup>
          )} */}

          {currentPage.name === "patients" && (
            <Patients pages={pages} setPages={setPages} setSearch={setSearch} />
          )}

          {currentPage.name === "help" && (
            <CommandGroup heading="Examples">
              {exampleQueries.map((query) => (
                <CommandItem key={query} className="group">
                  <Logo className="mr-1 !h-6 !w-6 transition-transform duration-300 group-hover:-rotate-[360deg] group-hover:scale-125" />
                  <span>{query}</span>
                </CommandItem>
              ))}
            </CommandGroup>
          )}

          {currentPage.name === "theme" && (
            <CommandGroup heading="Change Theme">
              <CommandItem
                onSelect={() => {
                  setTheme("light");
                  onClose();
                }}
                className="group"
              >
                <MoonIcon className="mr-2" />
                <span>Change Theme to Light</span>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setTheme("dark");
                  onClose();
                }}
                className="group"
              >
                <SunIcon className="mr-2" />
                <span>Change Theme to Dark</span>
              </CommandItem>
              <CommandItem
                onSelect={() => {
                  setTheme("system");
                  onClose();
                }}
                className="group"
              >
                <DesktopIcon className="mr-2" />
                <span>Change Theme to System</span>
              </CommandItem>
            </CommandGroup>
          )}

          {currentPage.name === "patient" && (
            <CommandGroup heading={`Navigation (${currentPage.value})`}>
              <CommandItem>
                <ArrowRightIcon className="mr-2" />
                <span>New encounter</span>
              </CommandItem>
              <CommandItem>
                <ArrowRightIcon className="mr-2" />
                <span>View encounter history</span>
              </CommandItem>
              <CommandItem>
                <ArrowRightIcon className="mr-2" />
                <span>Edit information</span>
              </CommandItem>
              <CommandItem>
                <ArrowRightIcon className="mr-2" />
                <span>Book appointment</span>
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </CommandDialog>
    </>
  );
}
