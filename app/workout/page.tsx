import React from 'react';
import WorkoutCard from '../components/WorkoutCard';
import Navbar from '../components/Navbar';

export default function WorkoutPage() {
    return (
        <div>
            <h1>Workout</h1>
            <WorkoutCard></WorkoutCard>
            <Navbar></Navbar>
        </div>
    );
};
