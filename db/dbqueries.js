const db = require("./dbConnection");

module.exports = {
  async postUser(newUser) {
    const { username, email, password } = newUser;
    const [id] = await db("users")
      .insert({
        username,
        email,
        password,
      })
      .returning(["id", "username", "created_at"]);

    return id;
  },
  async allUsers() {
    const users = await db("users").select("id", "username");
    return users;
  },
};

// module.exports = { postUser, allUsers }
