# Enabling Authentication in MongoDB Server

> Always remember: where `db.createUser()` happens, we can only log in there and then switch databases later.

---

## 1. Starting MongoDB with Authentication

### Method 1: Using `--auth` Flag (Terminal-Based)
Run MongoDB with authentication enabled using the `--auth` flag:

```sh
mongod --auth
```

### Method 2: Using Configuration File (`mongod.conf`)
Add the following lines under the `security` section:

```yaml
security:
  authorization: enabled
```

Then, restart the MongoDB server.

---

## 2. Creating the Admin User in `admin` Database (Root Privileges)

After enabling authentication, you must create an **admin user** to manage the database.

1. Open the MongoDB shell:

```sh
mongosh
```

2. Switch to the `admin` database:

```js
use admin
```

3. Create the admin user with `root` access:

```js
db.createUser({
  user: "admin",
  pwd: "admin",
  roles: [{ role: "root", db: "admin" }]
});
```

Now, you **must** authenticate to perform administrative actions.

---

## 3. Connecting to MongoDB with Authentication

### Method 1: Login Using MongoShell Command

```js
db.auth({
  user: "username",
  pwd: "password",
});
```

or

```js
db.auth("username", "password");
```

### Method 2: Login using Terminal Command

Exit mongosh and run the following:

```sh
mongosh -u "username" -p "password" --authenticationDatabase "admin"
```

### Method 3: Login using Connection Strings

Use these connection strings in Node.js, Compass, or VSCode extension:

```js
"mongodb://username:password@host:port/authenticationDatabase"
```

```js
"mongodb://username:password@host:port/database?authSource=authenticationDatabase"
```

---

## 3.2 See Logged-In User Info

```js
db.runCommand({ connectionStatus: 1 }).authInfo;
```

---

## 4. Creating Other Users with Different Roles

### Example: User with `readWrite` Access on `storageApp`

```js
use storageApp

db.createUser({
  user: "anurag",
  pwd: "anurag",
  roles: [{ role: "readWrite", db: "storageApp" }]
});
```

### Example: Database Administrator for `storageApp`

```js
use storageApp

db.createUser({
  user: "dbAdminUser",
  pwd: "secureDBPass",
  roles: [{ role: "dbAdmin", db: "storageApp" }]
});
```

---

## 5. Updating User Roles

### Granting Additional Permissions to a User

```js
db.updateUser("anurag", {
  roles: [
    { role: "readWrite", db: "storageApp" },
    { role: "dbAdmin", db: "storageApp" },
    { role: "readWrite", db: "test" },
  ],
});
```

---

## 6. Listing Users

### List All Users in the Current Database

```js
db.getUsers();
```

### List All Users Across the Server (All Databases)

```js
use admin

db.system.users.find();
```

---

## 7. Testing Authentication for Other Users

```sh
mongosh -u "Anurag" -p "password123" --authenticationDatabase "storageApp"
```

Then try:

```js
db.products.insertOne({ name: "Laptop", price: 1000 });
db.products.find();
```

---

## 8. Removing a User

```js
db.dropUser("Anurag");
```

---

## 9. Logout User

```js
db.logout();
```

---

This guide ensures that MongoDB authentication is correctly set up and users are managed securely. ✨

