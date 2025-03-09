//READ THE "./TEXT.TXT" FILE FOR UNDERsTAND more

import { MongoClient } from "mongodb";
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

async function fetchData() {
  await client.connect();
  const db = client.db("School");
  const students = db.collection("students");

  const cursor = students.find().skip(1).map((doc) => doc);
  cursor.batchSize(100);//mongodb behind seen send data to client in batch of 100. we can see it in wireshark ()
  //and all the filter goes to server(except map method) and server send the data to client 
  let data = await cursor.toArray();
  // console.log(data)
  await client.close();
}
fetchData();

