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
      <div></div>
      <TestExercise/>
      <Navbar></Navbar>
    </div>
  );
}

async function TestExercise() {
  const client = await clientPromise;
  const db = client.db("fitnessApp");
  const exercise = await db
    .collection("exercises")
    .findOne({ name: "Bench Press" });

  return <div>{exercise!.name}</div>;
}
