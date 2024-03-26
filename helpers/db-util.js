import { MongoClient } from "mongodb";

export async function connectDatabase(database) {
  const client = await MongoClient.connect(
    `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.xgqz7id.mongodb.net/${database}?retryWrites=true&w=majority`
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();
  const result = await db.collection(collection).insertOne(document);
  return result;
}

// export async function getAllDocuments(client, collection, sort, filter = {}) {
//   const db = client.db();
//   const fetchedDocuments = await db
//     .collection(collection)
//     .find(filter)
//     .sort(sort)
//     .toArray();

//   return fetchedDocuments;
// }
