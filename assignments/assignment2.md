

##  Databases

### SQL (SQLite)
- **Relational Database:** Data stored in structured tables with predefined schemas.
- **SQLite:** Lightweight, file-based database—good for development, small apps, and testing.
- **Common SQL Commands:**
  ```sql
  CREATE TABLE users (id INTEGER PRIMARY KEY, name TEXT, email TEXT UNIQUE);
  SELECT * FROM users;
  INSERT INTO users (name, email) VALUES ('Ankita', 'ankitagurung43@gmail.com');
  UPDATE users SET name = 'Anki' WHERE id = 1;
  DELETE FROM users WHERE id = 1;
  ```

###  NoSQL (MongoDB)
- **Document-based:** Stores data as JSON-like documents (BSON).
- **Schema-less:** Flexible and scalable, ideal for real-time or rapidly evolving apps.
- **Collections instead of Tables:**
  ```json
  {
    "name": "Ankita",
    "email": "ankitagurung43@gmail.com"
  }
  ```
- **MongoDB Commands:**
  ```js
  db.users.find();
  db.users.insertOne({ name: "Ram", email: "ram123@gmail.com" });
  db.users.updateOne({ name: "Sita" }, { $set: { name: "Gita" } });
  db.users.deleteOne({ name: "Shyam" });
  ```

---

## ORM (Object Relational Mapping)
- **Purpose:** Bridges the gap between database and application by mapping DB tables to objects.
- **Advantages:**
  - Write less raw SQL.
  - Better type safety.
  - Easier data manipulation.
- **Popular ORMs:** Prisma, Sequelize, TypeORM, Mongoose (for MongoDB).

---

## Prisma

### Installation
```bash
npm install @prisma/client
npm install prisma --save-dev
```

### Schema Definition (`prisma/schema.prisma`)
```prisma
model User {
  id    Int     @id @default(autoincrement())
  name  String
  email String  @unique
}
```

### Usage Workflow
1. **Initialize Prisma**

   npx prisma init
   ```
2. **Generate & Apply Migrations**

   npx prisma migrate dev 
   ```
3. **Generate Prisma Client**
   
   npx prisma generate
   ```
4. **Open Prisma Studio (GUI)**
  
   npx prisma studio
   ```

---

## Routing

###  What is Routing?
Defines how your app responds to client requests at specific paths (endpoints).

### Example in Express.js:
```js
app.get('/', (req, res) => {
  res.send('Welcome to Home Page');
});

app.post('/user', (req, res) => {
  const { name } = req.body;
  res.send(`User ${name} added.`);
});
```

---

## Middleware

###  What is Middleware?
Middleware functions run during the request-response cycle before the final handler.

### Example:

const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
};

app.use(logger); // Apply middleware to all routes
```

###  Use Cases:
- Authentication
- Logging
- Error handling
- Input validation

---

##  JSON APIs

### JSON Basics
- JSON = JavaScript Object Notation.
- Lightweight data-interchange format.
- Often used for client-server communication in RESTful APIs.

### Example JSON API Response:
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Ankita",
    "email": "ankitagurung43@gmail.com"
  }
}
```

### Best Practices
- Use proper HTTP status codes (200, 400, 404, 500).
- Return meaningful messages and data.

---

## Git Basics

### Core Commands

git init               # Initialize new repo
git status             # Check status of files
git add .              # Stage all changes
git commit -m "msg"    # Commit with message
git log                # View commit history
git branch             # List branches
git checkout -b new-branch  # Create & switch to new branch
git push origin main   # Push to remote
git pull origin main   # Pull latest changes
