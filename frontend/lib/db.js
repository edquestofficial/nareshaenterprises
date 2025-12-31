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
    tag TEXT,
    size TEXT,
    description2 TEXT,
    description3 TEXT,
    discount TEXT,
    servingSize TEXT,
    servingsPerContainer TEXT,
    calories TEXT,
    totalFat TEXT,
    saturatedFat TEXT,
    sodium TEXT,
    totalCarbohydrate TEXT,
    dietaryFiber TEXT,
    protein TEXT,
    ingredients TEXT
  )
`).run();

module.exports = db;
