import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const formData = await request.json();
    const { firstName, lastName, email, phone, company, website, helpType, about, needs, timeline, hearAbout } = formData;
    const budget = formData.budget; // Explicitly get budget

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
      to: 'lzhaolaunchifydigital@gmail.com,hwanglaunchifydigital@gmail.com',
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
Budget: ${budget || 'N/A'}
How they heard about us: ${hearAbout || 'N/A'}
      `,
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to the user
    const userMailOptions = {
      from: process.env.GMAIL_USER,
      to: email, // User's email address
      subject: 'Launchify Digital: We\'ve Received Your Project Request!',
      text: `Hi ${firstName},\n\nThank you for submitting your project request to Launchify Digital! We\'re excited to learn more about your project.\n\nWe have received the following details:\nProject Type: ${helpType}\nAbout: ${about}\nNeeds: ${needs}\nTimeline: ${timeline}\nBudget: ${budget || 'N/A'}\n\nOur team will review your request and get back to you within 24 business hours to discuss the next steps.\n\nBest regards,\nThe Launchify Digital Team`,
    };
    await transporter.sendMail(userMailOptions);

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email' }, { status: 500 });
  }
} 