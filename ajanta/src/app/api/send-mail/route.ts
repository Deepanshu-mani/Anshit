"use server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Email sending function
export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "All fields are required!" }, { status: 400 });
        }

        // Transporter configuration
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: `"${name}" <${process.env.EMAIL_USER}>`,
            replyTo: email,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Message from ${name}: ${subject}`,
            text: `You received a message from ${name} (${email}):\n\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: `Failed to send email: ${error.message}` }, { status: 500 });
    }
}