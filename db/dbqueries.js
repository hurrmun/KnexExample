const db = require("./dbConnection");

const postUser = async (newUser) => {
  const { username, email, password } = newUser;
  const [id] = await db("users")
    .insert({
      username,
      email,
      password,
    })
    .returning("id");

  return id;
};

module.exports = { postUser };
