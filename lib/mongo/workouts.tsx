// Retrieve workouts from the database by user and id
import clientPromise from ".";
import { MongoClient, MongoDBNamespace } from "mongodb";
import { ObjectId } from "mongodb";

interface Variables {
  client: MongoClient;
  db: MongoDBNamespace;
  workouts: Array<string>;
}

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

interface GetWorkoutsParams {
  userId: string;
  id: string;
}

export default async function getWorkouts({ userId, id }: GetWorkoutsParams): Promise<string[]> {
  try {
    if (!workouts) await init();
    const result = await workouts
      .find({ userId: new ObjectId(userId), _id: new ObjectId(id) })
      .toArray();

    // Assuming each workout document has a 'name' field which is a string
    return result.map((workout: { name: string }) => workout.name);
  } catch (e) {
    console.error('getWorkouts error:', e);
    return [];
  }
}