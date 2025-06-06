import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Configure transporter using environment variables
    console.log('Attempting to use credentials:', 'User:', process.env.GMAIL_USER, 'Pass Loaded:', !!process.env.GMAIL_PASS);
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: 'lzhaolaunchifydigital@gmail.com,hwanglaunchifydigital@gmail.com',
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email, // User's email address
      subject: 'Thank you for contacting Launchify Digital!',
      text: `Hi ${name},\n\nThank you for reaching out to Launchify Digital. We have received your message and will get back to you shortly.\n\nBest regards,\nThe Launchify Digital Team`,
    };
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
} 