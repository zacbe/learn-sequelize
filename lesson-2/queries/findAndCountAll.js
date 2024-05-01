const { User } = require("../models");

const findAndCountAllUsers = async (model, options) => {
  const { count, rows: users } = await model.findAndCountAll({
    ...options,
    raw: true,
  });
  console.log(count);
  console.log(users);
};

const options = { where: { username: "Mr Tom" } };
findAndCountAllUsers(User, options);
