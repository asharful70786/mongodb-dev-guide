# Relational (SQL) vs. Non-Relational Databases (NoSQL)

## 1. Structure
- **Relational Databases:** Store data in structured tables with predefined schemas. Tables consist of rows and columns, ensuring data integrity through relationships and constraints.
- **Non-Relational Databases:** Use flexible schemas and various storage models such as key-value, document, column-family, and graph-based structures.

### **Relational Database (SQL - Using Tables)**
#### **Users Table**
| id  | name  | email            |
|-----|-------|-----------------|
| 1   | Anurag | anurag@email.com |
| 2   | Akash  | akash@email.com  |
| 3   | Ram    | ram@email.com    |

#### **Orders Table**
| id  | user_id | product    |
|-----|---------|-----------|
| 1   | 1       | Laptop    |
| 2   | 1       | Phone     |
| 3   | 2       | Keyboard  |

### **Non-Relational Database (NoSQL - Using MongoDB Example)**

#### **Users Collection (Document-Based Storage)**
```json
[
  {
    "_id": "ObjectId(1)",
    "name": "Anurag",
    "email": "anurag@email.com",
    "orders": [
      { "product": "Laptop" },
      { "product": "Phone" }
    ]
  },
  {
    "_id": "ObjectId(2)",
    "name": "Akash",
    "email": "akash@email.com",
    "orders": [
      { "product": "Keyboard" }
    ]
  }
]
```

## 2. Schema Flexibility
- **Relational Databases:** Require a fixed schema, and changes to the structure (e.g., adding a new column) often require migrations.
- **Non-Relational Databases:** Offer dynamic schemas, allowing for flexible and rapid changes in data structure.

## 3. Scalability
- **Relational Databases:** Scale **vertically** (adding more power to a single server).
- **Non-Relational Databases:** Scale **horizontally** (distributing data across multiple nodes/servers).

## 4. Data Integrity and ACID Compliance
- **Relational Databases:** Support ACID (Atomicity, Consistency, Isolation, Durability) transactions, ensuring strong data integrity.
- **Non-Relational Databases:** Often prioritize high availability and scalability over strict ACID compliance, though some NoSQL databases support ACID transactions.

## 5. Query Language
- **Relational Databases:** Use SQL (Structured Query Language) for querying and managing data.
- **Non-Relational Databases:** Use various query languages specific to their models (e.g., MongoDB uses JSON-like queries, while Cassandra uses CQL).


## 6. Examples
- **Relational Databases:** MySQL, PostgreSQL, Oracle, SQL Server.
- **Non-Relational Databases:** MongoDB, Cassandra, Redis, DynamoDB.

## Conclusion
The choice between relational and non-relational databases depends on the application's needs. Relational databases provide structured data storage with strong consistency, while non-relational databases offer flexibility and scalability for high-performance applications.
