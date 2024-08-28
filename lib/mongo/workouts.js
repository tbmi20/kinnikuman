// Retrieve workouts from the database by user and id
import client from ".";
import { ObjectId } from "mongodb";

// Get the workouts collection to query
const workouts = client.db("fitnessApp").collection('workouts');

export default async function getWorkouts({ userId, name }) {
  try {
    // Query the workouts collection for the specified workout and name
    const result = await workouts
      .find({ userId: ObjectId(userId), name: name })
      .toArray();

    return result;
  } catch (e) {
    console.error('getWorkouts error:', e);
    return [];
  }
}