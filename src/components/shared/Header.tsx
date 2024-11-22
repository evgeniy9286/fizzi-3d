import React from "react";
import { FizziLogo } from "./FizziLogo";

type HeaderProps = object;

export function Header({}: HeaderProps) {
  return (
    <header className="-mb-24 flex justify-center py-4">
      <FizziLogo className="z-10 h-20 cursor-pointer text-sky-800" />
    </header>
  );
}
