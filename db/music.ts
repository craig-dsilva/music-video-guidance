import db from "./db";

export const getAllMusic = async () => {
  const collection = await db.collection("music");
  const results = await collection.find({}).toArray();
  return results;
};