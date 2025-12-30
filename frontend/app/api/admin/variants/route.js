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
      (product_id, name, description, price, image, tag)
      VALUES (?, ?, ?, ?, ?, ?)
    `).run(
      productId || 1,
      name,
      description,
      price,
      imagePath,
      tag
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Database or Upload error:", error);
    return NextResponse.json({ error: "Failed to process request" }, { status: 500 });
  }
}


export async function GET() {
  const variants = db.prepare(`
    SELECT id, product_id, name, price, image, tag
    FROM variants
  `).all();

  return NextResponse.json(variants);
}