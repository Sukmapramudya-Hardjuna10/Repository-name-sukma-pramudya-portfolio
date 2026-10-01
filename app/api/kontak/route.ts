import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
    try {
        const resend = new Resend(process.env.RESEND_API_KEY);
        const { name, email, subject, message } = await req.json();

        const data = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "sukmapramudyahardjuna@gmail.com",
            subject: `Pesan Baru: ${subject}`,
            html: `
        <h3>Pesan Baru dari Portofolio</h3>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Email Pengirim:</strong> ${email}</p>
        <p><strong>Subjek:</strong> ${subject}</p>
        <p><strong>Pesan:</strong></p>
        <p>${message}</p>
      `,
        });

        return NextResponse.json({ success: true, data });
    } catch (error) {
        return NextResponse.json({ error: "Gagal mengirim email" }, { status: 500 });
    }
}