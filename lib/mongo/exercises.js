//retrieve a specified exercise from the database 

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
    exercise = db.collection('exercises')
  } catch (e) {
    console.error('MongoDB connection error:', e)
  }
}

;(async () => {
    await init()
    })()

async function getExercise() {
    try {
        if (!workouts) await init()
            const result = await workouts
            .find({})
            .limit(20)
            .map(user => ({ ...user, _id: user._id.toString() }))
            .toArray()

        return { workouts: result }
    } catch (e) {
        console.error('getWorkouts error:', e)
        return { error: e }
    }
}