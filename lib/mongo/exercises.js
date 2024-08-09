//retrieve a specified exercise from the database by user and id

import clientPromise from ".";

let client
let db
let exercises
let exercise

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = client.db(process.env.FITNESS_DB) // replace database name
    exercises = db.collection('exercises') // get the collection of exercises
  } catch (e) {
    console.error('MongoDB connection error:', e)
  }
}

export async function getExercise({ userId, id }) {
    try {
        if (!exercises) await init()
            exercise = await exercises
            .find({ _id: ObjectId(id), userId: ObjectId(userId) })

        return { exercise }
    } catch (e) {
        console.error('getExercise error:', e)
        return { error: e }
    }
}