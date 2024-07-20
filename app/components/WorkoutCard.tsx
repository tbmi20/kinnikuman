import StartWorkout from "./StartWorkout";
import CloseButton from "./CloseButton";

export default function WorkoutCard() {
    return (
        <div>
            <div><CloseButton></CloseButton></div>
            <div><StartWorkout></StartWorkout></div>
        </div>
    );
}