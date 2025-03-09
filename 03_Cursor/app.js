import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

await client.connect();
const db = client.db("School");
const studentsCollection = db.collection("students");

for (let i = 51; i <= 300; i++) {
  let data = [{ name: `student${i}` }];
  await studentsCollection.insertMany(data)
}



