import { MongoClient } from 'mongodb';

// schema validation is we can validate the data before inserting into the database and we set it on DataBase level . can easily check this this validation store on dataBase code . go t mongodb compass and check in the validation section


//want to know what is command check 04MongoDb_Command/app.js

//command only apply on db . and callMod is used to apply on  existing collection


const url = 'mongodb://localhost:27017/';
const client = new MongoClient(url);

await client.connect();
console.log('Connected successfully to server');

const db = client.db('test');
const collection = db.collection('directory');
const user = db.collection('user');



await db.command({
  collMod: 'directory',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['_id', 'userName'],
      properties: {
        _id: {
          bsonType: 'objectId',
          description: 'must be an objectid and is required'
        },
        userName: {
          bsonType: 'string',
          description: 'must be a string and is required'
        }
      },
      additionalProperties: false
    }
  }
});

db.command({
  collMod: 'user',
  validator: {
    $jsonSchema: {
      bsonType: 'object',
      required: ['_id', 'userName', 'age'],
      properties: {
        _id: {
          bsonType: 'objectId',
          description: 'must be an objectid and is required'
        },
        userName: {
          bsonType: 'string',
          description: 'must be a string and is required'
        },
        age: {
          bsonType: 'int',
          description: 'must be a int and is required'
        }
      },
      additionalProperties: false
    }
  }
});




await collection.insertOne({ userName: ' bitto' });
await user.insertOne({ userName: 'bitto' });
await client.close();
