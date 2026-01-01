import { MongoClient } from "mongodb";

const connectionString = process.env.DB_URL || "";

const client = new MongoClient(connectionString);

let conn;

try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
  throw new Error("Failed to connect to database " + e);
}

let db = conn.db("music-video-guidance");

export default db;
