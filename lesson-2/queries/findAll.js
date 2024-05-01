const { User } = require("../models");

const findAllUsers = async (model, options) => {
  const users = await model.findAll({ ...options, raw: true });
  console.log(users);
};

findAllUsers(User);
