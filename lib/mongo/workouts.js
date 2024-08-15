// Retrieve workouts from the database by user and id
import clientPromise from ".";
import { MongoClient, MongoDBNamespace } from "mongodb";
import { ObjectId } from "mongodb";

async function init() {
  if (db) return;
  try {
    client = await clientPromise;
    db = client.db(process.env.DB_NAME); // replace database name
    workouts = db.collection('workouts');
  } catch (e) {
    console.error('MongoDB connection error:', e);
  }
}

;(async () => {
  await init();
})();

export default async function getWorkouts({ userId, id }) {
  try {
    if (!workouts) await init();
    const result = await workouts
      .find({ userId: ObjectId(userId), _id: ObjectId(id) })
      .toArray();

    // Assuming each workout document has a 'name' field which is a string
    return result.map(() => workout.name);
  } catch (e) {
    console.error('getWorkouts error:', e);
    return [];
  }
}