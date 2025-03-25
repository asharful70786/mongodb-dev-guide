## Transaction numbers are only allowed on a replica set member or mongos

```
Replica set in Mongodb is a group of mongod instances that maintain the same data set. Replica sets provide redundancy and high availability, and are the basis for all production deployments. This tutorial will help you to understand the concept of replica set in Mongodb 
```

example 
```
there are two laptop and first is near by you and other is on Mumbai almost 1000 km away from you. so in that case mongodb take mongo store inital data at near by laptop and then it will replicate the data to other laptop which is far away from you. so that you can access the data from near by laptop and if that laptop is not available then you can access the data from other laptop which is far away from you.
```
```
that mean the Mumbai wala laptop take SnapShot of uour near by laptop and uploud the data to Mumbai wala laptop. 

  ```
  
  ## how to stat a Session
  ```
 [ FIRST ---------------------]
  go to service 8.0>bin>mongodbConfig>
          write
replication:
           replSetName: "myrReplicaSet"

  [2nd-----------------------]
  in the mongosh(terminalBase) write     rs.iniState();
  then check rs.status();

  [3rd ----------------------------]
  conmection string should look like  
  mongodb://localhost:27017/?replicaset=myrReplicaSet

 ```
## How to Apply on Code
```
 const session = client.startSession();
 session.startTransaction();
 //here will dataBase logic 
  //here will dataBase logic 

 await session.commitTransaction();

```

in that way we can  aplly Transction in DataBase and tyhat is very import topic  