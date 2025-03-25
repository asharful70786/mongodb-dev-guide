import { MongoClient } from 'mongodb';


const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

await client.connect();
console.log('Connected successfully to server');

const db = client.db('test');
const collection = db.collection('directory');
const user = db.collection('user');

const session = client.startSession();
session.startTransaction();

try {
  await collection.insertOne({ userName: ' rishan' } , {session});
  await user.insertOne({ userName: 'rishan' } , { session });
  await session.commitTransaction();
} catch (e) {
  console.log(e);
  await session.abortTransaction();
}
await client.close();
