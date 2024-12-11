import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const userData = await req.json();

    const response = await fetch("http://localhost:8000/generate_plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      throw new Error("Failed to generate fitness plan");
    }

    const fitnessPlan = await response.json();
    return NextResponse.json(fitnessPlan);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to generate fitness plan" },
      { status: 500 }
    );
  }
}
