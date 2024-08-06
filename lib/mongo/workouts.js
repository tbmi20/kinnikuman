//retreive all workouts from the database
import clientPromise from ".";

let client
let db
let workouts

async function init() {
  if (db) return
  try {
    client = await clientPromise
    db = client.db(process.env.DB_NAME) // replace database name
    workouts = db.collection('workouts')
  } catch (e) {
    console.error('MongoDB connection error:', e)
  }
}

;(async () => {
    await init()
    })()

export async function getWorkouts() {
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