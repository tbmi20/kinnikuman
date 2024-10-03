import Link from "next/link";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Header from "./components/Header";

//

export default function HomePage() {
  return (
    <div>
      <Background></Background>
      <Header page="Dashboard"></Header>
      <CarouselDemo />
      <Link href="/workout">Workout</Link>
      <Navbar></Navbar>
    </div>
  );
}

function CarouselDemo() {
  return (
    <Carousel className="w-full mx-auto max-w-xs">
      <CarouselPrevious />
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                  <span className="text-4xl font-semibold">{index + 1}</span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselNext />
    </Carousel>
  );
}
