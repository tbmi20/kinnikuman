// pages/api/login.js
import connectToDatabase from '../../lib/mongo';
import User from '../../models/User';
import bcrypt from 'bcryptjs';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  await connectToDatabase();

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid email or password' });
  }

  res.status(200).json({ message: 'Login successful' });
}