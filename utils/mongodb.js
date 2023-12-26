// utils/mongodb.js

import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = 'data';

let cachedClient = null;

export async function connectToDatabase() {
  if (cachedClient) {
    return { client: cachedClient, db: cachedClient.db(dbName) };
  }

  const client = await MongoClient.connect(uri, {
    useNewUrlParser: true,        // Tetap simpan opsi ini
    useUnifiedTopology: true,    // Tetap simpan opsi ini
  });

  cachedClient = client;
  return { client, db: client.db(dbName) };
}