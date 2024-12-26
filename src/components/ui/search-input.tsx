"use client";

import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Input } from "./input";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

type Props = {
  defaulValue?: string;
  hideOnSearch?: boolean;
};

export const SearchInput = ({ defaulValue, hideOnSearch }: Props) => {
  const router = useRouter();
  const pathname = usePathname();
  const [searchInput, setSearchInput] = useState(defaulValue ?? "");

  const handleSearch = () => {
    if (searchInput) {
      router.push("/search?q=" + encodeURIComponent(searchInput));
    }
  };

  if (pathname === "/search" && hideOnSearch) return null;

  return (
    <Input
      placeholder="Buscar"
      icon={faMagnifyingGlass}
      filled
      value={searchInput}
      onChange={(t) => setSearchInput(t)}
      onEnter={handleSearch}
    />
  );
};
