import { NextResponse } from "next/server";
import db from "../../../../../lib/db";

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
    return NextResponse.json({ error: "Failed to delete variant" }, { status: 500 });
  }
}
