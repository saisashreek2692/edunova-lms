import { NextResponse } from "next/server";
import { generateAccessToken } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email === "admin@edunova.com") {
    const accessToken = await generateAccessToken({
      role: "admin",
      email
    });

    const response = NextResponse.json({ success: true });

    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "strict"
    });

    return response;
  }

  return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
}