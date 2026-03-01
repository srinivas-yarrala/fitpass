import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json().catch(() => ({}));
    // Validate or use body (gymId, userId, etc.) when you add real logic
    return NextResponse.json({
      success: true,
      message: "Check-in recorded",
      data: { ...body, checkedInAt: new Date().toISOString() },
    });
  } catch {
    return NextResponse.json(
      { success: false, message: "Check-in failed" },
      { status: 400 }
    );
  }
}
