//handling login and registration
"use server";

import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

async function handleLogin(formData) {
  let hash = hashPassword(formData.password);

  const client = await clientPromise;
  const db = client.db("fitnessApp");
  const user = await db
    .collection("users")
    .findOne({ username: formData.username, password: hash });

  const session = await getSession();

  if (user) {
    session.isLoggedIn = true;
    session.id = user.id;
    session.username = user.username;

    await session.save();
    redirect("/");
  } else {
    return { error: "Invalid username or password" };
  }
}

async function getSession() {
  const session = await getIronSession(cookies(), {password: process.env.SESSION_SECRET, cookieName: COOKIE_LOGIN});

  // If user visits for the first time session returns an empty object.
  // Let's add the isLoggedIn property to this object and its value will be the default value which is false
  if (!session.isLoggedIn) {
    session.isLoggedIn = false;
  }

  return session;
}

async function handleRegister(formData) {
  let hash = hashPassword(formData.password);

  const client = await clientPromise;
  const db = client.db("fitnessApp");
  await db
    .collection("users")
    .insertOne({
      username: formData.username,
      email: formData.email,
      password: hash,
    });
}

async function hashPassword(password) {
  const bcrypt = require("bcrypt");
  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      return hash;
    });
  });
}

export { handleLogin, handleRegister, getSession };
