import db from "./db";

const getData = async () => {
  let collection = await db.collection("music");
  let results = await collection.find({}).toArray();
  return results;
};

export default getData;
