//handling login and registration

import clientPromise from "@/lib/mongodb";

async function handleLogin(formData) {
  let hash = hashPassword(formData.password);

  const client = await clientPromise;
  const db = client.db("fitnessApp");
  const user = await db
    .collection("users")
    .findOne({ username: formData.username, password: hash });
}

function handleRegister() {}

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
