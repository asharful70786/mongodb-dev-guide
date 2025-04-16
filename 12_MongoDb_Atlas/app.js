import { MongoClient } from "mongodb";

// const connectionUrl = "mongodb://anurag:anurag@127.0.0.1:27018/storageApp";
const connectionUrl =
  "mongodb+srv://procodrr:7r5gP7Zwln4wvlCW@cluster0.wmifv.mongodb.net/storageApp?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(connectionUrl);

await client.connect();

const db = client.db();
const collection = db.collection("users");
const data = await collection.find().toArray();
// await collection.insertOne({ name: "Anurag" });

console.log(data);
client.close();
