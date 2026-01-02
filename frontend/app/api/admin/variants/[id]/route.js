import { NextResponse } from "next/server";
import db from "../../../../../lib/db";
import { writeFile, unlink } from "fs/promises";
import path from "path";

export async function PUT(req, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    const formData = await req.formData();

    const productId = formData.get("productId");
    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const tag = formData.get("tag");
    const file = formData.get("image");

    // New fields
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

    // 1. Check if variant exists
    const existing = db
      .prepare("SELECT image FROM variants WHERE id = ?")
      .get(id);
    if (!existing) {
      return NextResponse.json({ error: "Variant not found" }, { status: 404 });
    }

    let imagePath = existing.image; // Default to keep old image

    // 2. Handle new image upload
    if (file && typeof file !== "string") {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
      const uploadPath = path.join(
        process.cwd(),
        "public",
        "uploads",
        filename
      );

      await writeFile(uploadPath, buffer);
      imagePath = `/uploads/${filename}`;
    }

    // 3. Update database
    db.prepare(
      `
      UPDATE variants SET
        product_id = ?,
        name = ?,
        description = ?,
        price = ?,
        image = ?,
        tag = ?,
        size = ?,
        description2 = ?,
        description3 = ?,
        discount = ?,
        servingSize = ?,
        servingsPerContainer = ?,
        calories = ?,
        totalFat = ?,
        saturatedFat = ?,
        sodium = ?,
        totalCarbohydrate = ?,
        dietaryFiber = ?,
        protein = ?,
        ingredients = ?
      WHERE id = ?
    `
    ).run(
      productId,
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
      ingredients,
      id
    );

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Update error:", error);
    return NextResponse.json(
      { error: "Failed to update variant" },
      { status: 500 }
    );
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    db.prepare("DELETE FROM variants WHERE id = ?").run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete error:", error);
    return NextResponse.json(
      { error: "Failed to delete variant" },
      { status: 500 }
    );
  }
}

// GET SINGLE VARIANT
export async function GET(req, { params }) {
  try {
    const { id } = await params;
    const variant = db.prepare(`SELECT * FROM variants WHERE id=?`).get(id);
    if (!variant) {
      return NextResponse.json({ error: "Variant not found" }, { status: 404 });
    }
    return NextResponse.json(variant);
  } catch (error) {
    console.error("Get error:", error);
    return NextResponse.json(
      { error: "Failed to get variant" },
      { status: 500 }
    );
  }
}

//get bests
