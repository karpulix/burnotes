"use server";

import { NextResponse, NextRequest } from "next/server";
import { client, redisSetParams } from "@/lib/db";
import { generateKey } from "@/lib/cryptolib";
export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id") || "";

    if (id.length < 3) {
      return NextResponse.json({
        err: 1,
        message: "Request data is incorrect.",
      });
    }
    const encrypted = await client.get(id);
    const deleteResult = await client.del(id);
    console.log(deleteResult);

    return NextResponse.json({
      err: 0,
      encrypted: encrypted,
    });
  } catch (err) {
    console.error("Error setting key in Redis:", err);
    return NextResponse.json({
      err: 1,
      message: "Server error",
    });
  }
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { encrypted } = body;

    const byteLength = Buffer.byteLength(encrypted, "utf8");

    if (byteLength < 32) {
      return NextResponse.json({
        err: 1,
        message: "Data is too short.",
      });
    }

    const id = generateKey();
    const redisResult = await client.set(id, encrypted, redisSetParams());

    if (redisResult !== "OK") throw new Error("Database save error");

    return NextResponse.json({
      err: 0,
      id: id,
    });
  } catch (err) {
    console.error("Error setting key in Redis:", err);
    return NextResponse.json({
      err: 1,
      message: "Server error",
    });
  }
}
