import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

// Database Name
const dbName = 'train';

// Use connect method to connect to the server
await client.connect();
console.log('Connected successfully to server');
const db = client.db(dbName);
const UserCollection = db.collection('user');
const ticketCollection = db.collection('ticket');

const session = client.startSession();
session.startTransaction();

await UserCollection.insertOne({
  name: 'ashraful',
 
}, { session });

await ticketCollection.insertOne({
 from: 'kolkata',
  to: 'malda',
  date: '2022-12-01',
  price: 100,
}, { session });

await session.commitTransaction();

// await client.close();




