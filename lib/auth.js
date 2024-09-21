//handling login and registration

import clientPromise from "@/lib/mongodb";

async function handleLogin(formData) {
  'use server';
  const client = await clientPromise;
  const db = client.db("fitnessApp");
  const user = await db
    .collection("users")
    .findOne({ username: formData.username, password: formData.password });
}

function handleRegister() {}

async function storePassword(password) {
  const bcrypt = require("bcrypt");
  const saltRounds = 10;

  bcrypt.genSalt(saltRounds, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
      // Store hash in database here
    });
  });
}

export { handleLogin, handleRegister };
