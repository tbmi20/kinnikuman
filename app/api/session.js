// Next.js Server Components and Server Actions (App Router)
import { cookies } from 'next/headers';
import { getIronSession } from 'iron-session';

async function getIronSessionData() {
  const session = await getIronSession(cookies(), { password: process.env.IRON_PASS, cookieName: process.env.COOKIE_LOGIN });
  return session
}

async function Profile() {
  const session = await getIronSessionData();

  return <div>{session.username}</div>;
}

export { getIronSessionData, Profile };