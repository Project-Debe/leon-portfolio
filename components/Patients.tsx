"use client";

import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

import type { Database } from "@/database.types";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { CommandGroup, CommandItem } from "@/components/ui/command";
import { Skeleton } from "@/components/ui/skeleton";

function getInitials(name: string) {
  // Split the name into words
  const words = name.split(" ");

  // Extract the first character of each word and convert to uppercase
  const initials = words.map((word) => word.charAt(0).toUpperCase());

  // Join the initials together
  return initials.join("");
}

type Patient = Database["public"]["Tables"]["patients"]["Row"];

export default function Patients({ pages, setPages, setSearch }: any) {
  const [loading, setLoading] = useState(true);
  const [patients, setPatients] = useState<Array<Patient>>([]);
  const supabase = createClientComponentClient<Database>();

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const { data } = await supabase.from("patients").select("id,name,email");
      if (data) setPatients(data);
      setLoading(false);
    };

    getData();
    // eslint-disable-next-line
  }, []);

  return (
    <CommandGroup>
      {loading &&
        [1, 2, 3, 4, 5, 6].map((num) => (
          <CommandItem key={num}>
            <div className="flex items-center space-x-4">
              <Skeleton className="h-10 w-10 rounded-full" />
              <div>
                <Skeleton className="mb-1 h-3.5 w-24 rounded-sm" />
                <Skeleton className="h-4 w-44  rounded-sm" />
              </div>
            </div>
          </CommandItem>
        ))}

      {!loading &&
        patients.map(({ id, name, email }) => (
          <CommandItem
            key={id}
            onSelect={() => {
              setPages([...pages, { name: "patient", value: name }]);
              setSearch("");
            }}
          >
            <div className="flex items-center space-x-4">
              <Avatar>
                <AvatarFallback>{getInitials(name)}</AvatarFallback>
              </Avatar>
              <div>
                <p className="inline-block text-sm font-medium leading-none">
                  {name}
                </p>
                <p className="text-sm text-muted-foreground">{email}</p>
              </div>
            </div>
          </CommandItem>
        ))}
    </CommandGroup>
  );
}
