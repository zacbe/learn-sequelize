const { User } = require("../models");
const { Op } = require("sequelize");

const findOneUser = async (model, options) => {
  const user = await model.findOne({ ...options, raw: true });
  console.log(user);
};

const whereOptions = {
  where: { age: { [Op.or]: [{ [Op.lt]: 25 }, { [Op.eq]: null }] } },
};
findOneUser(User, whereOptions);
