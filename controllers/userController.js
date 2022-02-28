const { postUser } = require("../db/dbqueries");

const getUser = async (req, res) => {
  res.status(200).json({ key: "value 1" });
};

const createUser = async (req, res) => {
  //   const { username, email, password } = req.body;
  try {
    const userId = await postUser(req.body);
    res.status(200).json(userId);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUser, createUser };
