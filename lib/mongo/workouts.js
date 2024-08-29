// Retrieve a users saved workouts
import client from ".";
import { ObjectId } from "mongodb";

// Get the users collection to query
const users = client.db("fitnessApp").collection('users');

export default async function getWorkouts({ userId }) {
  try {
    // Query the workouts collection for the users saved workouts
    const result = await users
      .aggregate([
        {
          $match: {
            userId: ObjectId(userId),
          }
        },
        {
          $lookup: {
            from: 'workouts',
            localField: 'workoutTemplates',
            foreignField: '_id',
            as: 'savedWorkouts'
          }
        }
      ])

    return result;
  } catch (e) {
    console.error('getWorkouts error:', e);
    return [];
  }
}