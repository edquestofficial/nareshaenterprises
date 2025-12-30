const Database = require("better-sqlite3");
const path = require("path");

const db = new Database(path.join(process.cwd(), "data.db"));

// Create products table
db.prepare(`
  CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT
  )
`).run();

// Create variants table
db.prepare(`
  CREATE TABLE IF NOT EXISTS variants (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    product_id INTEGER,
    name TEXT,
    price INTEGER,
    description TEXT,
    image TEXT,
    tag TEXT
  )
`).run();

module.exports = db;
