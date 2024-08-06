//idk
import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI;
const options = {}

if (!URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let client = new MongoClient(URI, options);
let clientPromise

if (process.env.NODE_ENV !== 'production') {
  // @ts-ignore
  if (!global._mongoClientPromise) {
    // @ts-ignore
    global._mongoClientPromise = client.connect(); //creates the mongo client as a global variable so it can be used in multiple places
  }
  // @ts-ignore
  clientPromise = global._mongoClientPromise;
} else {
    clientPromise = client.connect();
    }

export default clientPromise