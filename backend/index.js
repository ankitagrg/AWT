// index.js
const express = require('express');
const db = require("better-sqlite3")("data.db");
const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  response.send('Hello');
});


  // Get all quotes//
app.get('/api/users', (request, response) => {
});

// Create table //
db.prepare(" CREATE TABLE IF NOT EXIST  quotes(id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT NOT NULL)"
).run();
app.get("quotes",(request, response)=>{
  const all = db.prepare ("SELECT * FROM quotes").all();
  response.json(all);
});


//All new quotes//
app.post("/quotes",(request, response)=> {
  const {text} = request.body;
  if (!text) {
    return response.status(400).json({ error: 'Quote text is required.' });
  }

  const info = db.prepare ("INSERT INTO quotes (text) VALUES(?)").run(text);
  response.status(201).json({id: info.lastInsertRowid, text});
});


app.listen(3000, () => console.log('Server running on port 3000'));