import Link from "next/link";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function HomePage() {
  return (
    <div >
      <Background></Background>
      <h1 className="page-title">Dashboard</h1>
      <Carousel>
        <CarouselContent>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
          <CarouselItem>...</CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <Link href="/workout">Workout</Link>
      <Navbar></Navbar>
    </div>
  );
}
