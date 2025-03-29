import { MongoClient } from 'mongodb';


const url = 'mongodb://localhost:27017';

const client = new MongoClient(url);


// Connect to the MongoDB server
await client.connect();
console.log('Connected successfully to server');

const db = client.db('mydb');
let act = await db.command({  collMod : "bitto"  , validator: {
  $jsonSchema: {
    required: [
      'name',
      'age'
    ],
    properties: {
      _id: {
        bsonType: 'objectId'
      },
      name: {
        bsonType: 'string'
      },
      age: {
        bsonType: 'int'
      }
    },
    additionalProperties: false
  }
}});

console.log(act)
// const collection = db.createCollection('documents', {
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["name"],
//       properties: {
//         name: { bsonType: "string", description: "Name must be a string and is required" },
//         age: { bsonType: "int", description: "Age must be an integer" }
//       }
//     }
//   }
// });

// const result = await db.command({
//   collMod: "documents",
//   // validator: {
//   //   $jsonSchema: {
//   //     bsonType: "object",
//   //     required: ["name"],
//   //     properties: {
//   //       name: { bsonType: "string", description: "Name must be a string and is required" },
//   //       age: { bsonType: "int", description: "Age must be an integer" }
//   //     }
//   //   }
//   // },
//   validationLevel: "strict"
// });

// const result = await db.command({
//   create: "bitto",
//   validator: {
//     $jsonSchema: {
//       bsonType: "object",
//       required: ["name"],
//       properties: {
//         name: { bsonType: "string", description: "Name must be a string and is required" },
//         age: { bsonType: "int", description: "Age must be an integer" }
//       }
//     }
//   },
//   validationLevel: "strict" // Ensures all documents must follow this schema
// });

// console.log('Validator Applied:', result);



