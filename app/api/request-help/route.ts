import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { firstName, lastName, email, phone, company, website, helpType, about, needs, timeline, hearAbout } = formData;

    // Basic validation (you might want more robust validation)
    if (!firstName || !lastName || !email || !helpType || !about || !needs || !timeline) {
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
      to: 'wangharrison2009@gmail.com, lucaszhao09@gmail.com',
      subject: `New Request Help Submission from ${firstName} ${lastName}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone || 'N/A'}
Company: ${company || 'N/A'}
Website: ${website || 'N/A'}
Help Type: ${helpType}
About Company: ${about}
Specific Needs: ${needs}
Timeline: ${timeline}
How they heard about us: ${hearAbout || 'N/A'}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
} 