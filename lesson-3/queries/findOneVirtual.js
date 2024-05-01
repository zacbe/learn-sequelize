const { User } = require("../models");

const findOneVirtual = async (model, options) => {
  const user = await model.findOne(options);
  // use Virtuals to access the value of the summary field
  console.log(user.summary);
};

// const wrapper = async () => {
//   await User.sync({ alter: true });
//   console.log("User table synced");

// };

// wrapper();

const options = {
  where: { username: "Zacby" },
};
findOneVirtual(User, options);
