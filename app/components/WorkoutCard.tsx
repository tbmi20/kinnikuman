"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface WorkoutCardProps {
  workout: Array<string>;
}

export default function WorkoutCard() {
  return (
    <div className="">
      <Card className="w-[350px] bg-cool_blue">
        <CardHeader>
          <CardTitle className="text-light_grey">Template 1</CardTitle>
          <CardDescription>Template Description</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div id="exerciseList" className="flex flex-col space-y-1.5">
                
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex justify-between">
          <EditMenu />
          <Button onClick={() => console.log("Click")}>Start</Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export function EditMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">...</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Edit</DropdownMenuItem>
        <DropdownMenuItem>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
