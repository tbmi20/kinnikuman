import React from 'react';

const WorkoutPage = () => {
    return (
        <div>
            <h1>Workout</h1>
            <button onClick={() => console.log('Start Workout')}>Start Workout</button>
            <button onClick={() => console.log('Create Template')}>Create Template</button>
        </div>
    );
};

export default WorkoutPage;