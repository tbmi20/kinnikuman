// pages/api/forgot-password.js
import connectToDatabase from '../../lib/mongo';
import User from '../../models/User';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  await connectToDatabase();

  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Generate a reset token (for simplicity, using email as token)
  const resetToken = user.email;

  // Send email (configure your SMTP settings)
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: user.email,
    subject: 'Password Reset',
    text: `Please use the following link to reset your password: ${process.env.BASE_URL}/reset-password?token=${resetToken}`,
  };

  await transporter.sendMail(mailOptions);

  res.status(200).json({ message: 'Password reset email sent' });
}