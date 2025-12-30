import { NextResponse } from "next/server";
import db from "../../../../lib/db";

export async function POST(req) {
  try {
    const { name } = await req.json();

    if (!name) {
      return NextResponse.json({ error: "Product name is required" }, { status: 400 });
    }

    const info = db.prepare("INSERT INTO products (name) VALUES (?)").run(name);

    return NextResponse.json({ 
      success: true, 
      id: info.lastInsertRowid 
    });

  } catch (error) {
    console.error("Create product error:", error);
    return NextResponse.json({ error: "Failed to create product" }, { status: 500 });
  }
}
