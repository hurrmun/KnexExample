const { allUsers, postUser } = require("../db/dbqueries");

const getUser = async (req, res) => {
  const users = await allUsers();
  res.status(200).json(users);
};

const createUser = async (req, res) => {
  if (!req.body) {
    res.status(400).json({ message: "please add a request body" });
  }
  try {
    const userId = await postUser(req.body);
    res.status(200).json(userId);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getUser, createUser };
