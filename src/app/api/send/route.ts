import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function GET() {
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "ankurdas1804@gmail.com",
      to: "bloodyghost1804@gmail.com",
      subject: "Test Email",
      html: "<h1>Hello, this is a test email!</h1>",
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
