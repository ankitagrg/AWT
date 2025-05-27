// server.js
import express from 'express';
import { PrismaClient } from '@prisma/client';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();
const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 3000;

const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// GET all quotes
app.get('/api/quotes', async (req, res) => {
  const quotes = await prisma.quote.findMany();
  res.json(quotes);
});

// POST a new quote
app.post('/api/quotes', async (req, res) => {
  const { text, author } = req.body;
  try {
    const newQuote = await prisma.quote.create({ data: { text, author } });
    res.status(201).json(newQuote);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create quote' });
  }
});

// Start server
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
