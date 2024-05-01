const { User } = require("../models");

const insertOneSetter = async (model, data) => {
  const user = await model.create(data);
  console.log({ username: user.username });
  console.log({ password: user.password });
  console.log({ description: user.description });
};

const data = {
  username: "Zacby",
  password: "the-best-pass",
  description: `This is a really long description`,
};

const wrapper = async () => {
  await User.sync({ alter: true });
  console.log("User table synced");

  await insertOneSetter(User, data);
};

wrapper();
