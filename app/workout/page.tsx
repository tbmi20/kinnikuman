import React from 'react';
import WorkoutCard from '../components/WorkoutCard';
import Navbar from '../components/Navbar';
import Background from '../components/Background';

export default function WorkoutPage() {
    return (
        <div>
            <Background></Background>
            <h1>Workout</h1>
            <WorkoutCard></WorkoutCard>
            <Navbar></Navbar>
        </div>
    );
};
