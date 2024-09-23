//handling login and registration

import clientPromise from "@/lib/mongodb";

async function handleLogin(formData) {
  let hash = hashPassword(formData.password);

  const client = await clientPromise;
  const db = client.db("fitnessApp");
  const user = await db
    .collection("users")
    .findOne({ username: formData.username, password: hash });

  if (user) {
  }
}

async function handleRegister(formData) {
  let hash = hashPassword(formData.password);

  const client = await clientPromise;
  const db = client.db("fitnessApp");
  await db
    .collection("users")
    .insertOne({ username: formData.username, email: formData.email, password: hash });
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

async function verifyPassword(password, hash) {
  const bcrypt = require("bcrypt");
  bcrypt.compare(password, hash, function (err, result) {
    return result;
  });
}

export { handleLogin, handleRegister };
