import React from 'react';
import WorkoutCard from '../components/WorkoutCard';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import getWorkouts from '../../lib/mongo/workouts.js';
//////
export default function WorkoutPage() {
    return (
        <div>
            <Background></Background>
            <h1 className='page-title'>Workout</h1>
            <div className=''>
                <WorkoutCard></WorkoutCard>
            </div>
            <Navbar></Navbar>
        </div>
        
    );
};
