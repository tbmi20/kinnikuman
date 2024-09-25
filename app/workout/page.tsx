import React from "react";
import WorkoutCard from "../components/WorkoutCard";
import Navbar from "../components/Navbar";
import Background from "../components/Background";
import Header from "../components/Header";
import clientPromise from "@/lib/mongodb";

////
export default function WorkoutPage() {
  return (
    <div>
      <Background></Background>
      <Header page="Workout"></Header>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        <WorkoutCard />
        <WorkoutCard />
        <WorkoutCard />
      </div>
      <Navbar></Navbar>
    </div>
  );
}
