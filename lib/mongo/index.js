//establish connection
import { MongoClient } from 'mongodb';

const URI = process.env.MONGODB_URI;
const options = {}

if (!URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let client = new MongoClient(URI, options);

export default client;