const { User } = require("../models");

const findUserByPk = async (id, model) => {
  const user = await model.findByPk(id, { raw: true });
  console.log(user);
};

const userId = 1;
findUserByPk(userId, User);
