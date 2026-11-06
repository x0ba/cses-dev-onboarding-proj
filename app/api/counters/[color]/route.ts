import type { NextRequest } from "next/server";
import { isColor, type Color } from "@/lib/counters";
import { incrementCount } from "@/lib/mockStore";

// POST /api/counters/:color -> increments one counter, returns all counts
export async function POST(_req: NextRequest, { params }: { params: { color: Color } }) {
  
  const { color } = await params;

  if(!isColor(color)) {
    return Response.json({ error: "Invalid color" }, { status: 400 });
  }

  return Response.json(incrementCount(color));
}
