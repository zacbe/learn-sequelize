const { User } = require("../models");

const findOneGetter = async (model, options) => {
  const user = await model.findOne({ ...options });
  // use Getters to access the value of the username field
  console.log(user.username);
};

const options = {};
findOneGetter(User, options);
