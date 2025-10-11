import { NextResponse } from "next/server";
import { EmailService } from "@/lib/email-service";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const email = (body?.email || "").toString().trim();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ ok: false, error: "invalid_email" }, { status: 400 });
    }

    // Send double opt-in confirmation email
    try {
      await EmailService.sendConfirmEmail(email);
    } catch (e) {
      console.error('[waitlist] confirm email error:', e);
      // still return ok to avoid user friction; resend can be retried
    }

    return NextResponse.json({ ok: true, doi: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}


