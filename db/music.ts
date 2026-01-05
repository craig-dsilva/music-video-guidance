import { ObjectId } from "mongodb";

import db from "./db";

export const getAllMusic = async () => {
  const collection = await db.collection("music");
  const results = await collection.find({}).toArray();
  return results;
};

export const getMusic = async (id: string) => {
  const collection = await db.collection("music");
  const results = await collection.findOne({ _id: new ObjectId(id) });
  return results;
};
