import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function POST(req) {
  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json(
        { error: "Product name is required" },
        { status: 400 }
      );
    }

    const info = db.prepare("INSERT INTO products (name) VALUES (?)").run(name);

    return NextResponse.json({
      success: true,
      id: info.lastInsertRowid,
    });
  } catch (error) {
    console.error("Create product error:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}

// ✅ FETCH ALL PRODUCTS (THIS IS WHAT YOU WERE MISSING)
export async function GET() {
  try {
    const products = db
      .prepare("SELECT id, name FROM products ORDER BY id ASC")
      .all();

    return NextResponse.json(products);
  } catch (error) {
    console.error("Fetch products error:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}
// ✅ DELETE PRODUCT
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "Product ID is required" },
        { status: 400 }
      );
    }

    // Optional: Delete related variants first (Cascade delete)
    db.prepare("DELETE FROM variants WHERE product_id = ?").run(id);

    // Delete product
    db.prepare("DELETE FROM products WHERE id = ?").run(id);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Delete product error:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}
