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

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface WorkoutCardProps {
  name: string;
  description: string;
  workout: Array<string>;
}

export default function WorkoutCard({}) {
  return (
    <div className="min-w-0">
      <Card className="w-[350px] bg-cool_blue">
        <CardHeader>
          <CardTitle className="text-light_grey">Template 1</CardTitle>
          <CardDescription>Template Description</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <ExerciseList />
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

//replace tags with exercises
const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
);

export function ExerciseList() {
  return (
    <ScrollArea className="h-48 px-4 rounded-md border text-light_grey">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Exercises</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  );
}
