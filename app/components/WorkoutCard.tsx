'use client';
import { IoCloseOutline } from "react-icons/io5";

export default function WorkoutCard() {
    return (
        <div className="size-52 mx-5 rounded-md bg-blue_1 p-3">
            <StartWorkout></StartWorkout>
        </div>
    );
}

function StartWorkout() {
    return (
        <div className="relative left-1/3 h-6 w-14 bg-grey_1 text-center rounded-md">
            <button onClick={() => console.log('Click')}>START</button>
        </div>
    );
}
