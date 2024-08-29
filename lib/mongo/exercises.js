//retrieve all exercises

// Imports the client from index.js
import client from ".";

const exercises = client.db("fitnessApp").collection('exercises');

export async function getExercise() {
  try {
    result = await exercises
      .find({})

    return result
  } catch (e) {
    console.error('getExercises error:', e)
    return { error: e }
  }
}