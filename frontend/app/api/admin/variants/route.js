import { NextResponse } from "next/server";
import db from "../../../../lib/db";
import { writeFile } from "fs/promises";
import path from "path";

export async function POST(req) {
  try {
    const formData = await req.formData();
    
    const productId = formData.get("productId");
    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const tag = formData.get("tag");
    const file = formData.get("image");
    const size = formData.get("size");
    const description2 = formData.get("description2");
    const description3 = formData.get("description3");
    const discount = formData.get("discount");
    const servingSize = formData.get("servingSize");
    const servingsPerContainer = formData.get("servingsPerContainer");
    const calories = formData.get("calories");
    const totalFat = formData.get("totalFat");
    const saturatedFat = formData.get("saturatedFat");
    const sodium = formData.get("sodium");
    const totalCarbohydrate = formData.get("totalCarbohydrate");
    const dietaryFiber = formData.get("dietaryFiber");
    const protein = formData.get("protein");
    const ingredients = formData.get("ingredients");

    if (!name || !price) {
      return NextResponse.json({ error: "Name and price are required" }, { status: 400 });
    }

    let imagePath = null;
    if (file && typeof file !== "string") {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
      const uploadPath = path.join(process.cwd(), "public", "uploads", filename);
      
      await writeFile(uploadPath, buffer);
      imagePath = `/uploads/${filename}`;
    }

    // Insert variant
    db.prepare(`
      INSERT INTO variants
      (product_id, name, description, price, image, tag, size, description2, description3, discount, servingSize, servingsPerContainer, calories, totalFat, saturatedFat, sodium, totalCarbohydrate, dietaryFiber, protein, ingredients)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `).run(
      productId || 1,
      name,
      description,
      price,
      imagePath,
      tag,
      size,
      description2,
      description3,
      discount,
      servingSize,
      servingsPerContainer,
      calories,
      totalFat,
      saturatedFat,
      sodium,
      totalCarbohydrate,
      dietaryFiber,
      protein,
      ingredients
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database or Upload error:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}


export async function GET() {
  const variants = db.prepare(`
    SELECT id, product_id, name,description, price, image, tag, size, description2, description3, discount, servingSize, servingsPerContainer, calories, totalFat, saturatedFat, sodium, totalCarbohydrate, dietaryFiber, protein, ingredients
    FROM variants
  `).all();

  return NextResponse.json(variants);
}