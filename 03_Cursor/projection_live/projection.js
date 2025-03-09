//i have attach 2 file where we can see the major diff of using projection . by using projection we can reduce our memory load ny 3.5X less. check both file size
// if you want to see diff see in WireSharak

import { MongoClient } from 'mongodb'

// Connection URL
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);


async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db("School");
  const StudentCollection = db.collection('students');


  const data = await StudentCollection.find({}, { projection: { _id: 0, name: 1 } }).toArray();//projection apply here 
  // cursor.batchSize(100);
  console.log(data)
  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());