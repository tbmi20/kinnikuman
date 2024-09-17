import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface HeaderProps {
  page: string;
}

export default function Header({ page }: HeaderProps) {
  return (
    <div className="bg-charcoal_grey p-4 shadow-md">
      <div className="flex items-center justify-between">
        <a href="./" className="flex-shrink-0">
          <Avatar>
            <AvatarImage src="public\sumo.png" />
            <AvatarFallback>筋肉饅</AvatarFallback>
          </Avatar>
        </a>
        <h1 className="page-title text-center flex-grow">{page}</h1>
      </div>
    </div>
  );
}
