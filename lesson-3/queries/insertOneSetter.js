const { User } = require("../models");

const insertOneSetter = async (model, data) => {
  const user = await model.create(data);
  console.log({ username: user.username });
  console.log({ password: user.password });
};

const data = { username: "Zacbe", password: "123456" };
insertOneSetter(User, data);
