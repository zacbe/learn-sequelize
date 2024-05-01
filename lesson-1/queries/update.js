const { User } = require("../model");
const Sequilize = require("sequelize");
const { fn, col, where, Op } = Sequilize;

const updateUsers = async (values, options) => {
  const users = await User.update(values, options);
  console.log(users);
  // mySql only returmn the number of rows affected
};

// update all users with age 21 to have username "Zacbe"
const updateOp = { username: "Zacbe" };
const whereClause = { where: { age: 21 } };

// update all users where age is less than 22 to have username "Betina"
const updateValues = { username: "Betina" };
const queryOptions = { where: { age: { [Op.lt]: 22 } } };
updateUsers(updateValues, queryOptions);
