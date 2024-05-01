const { User } = require("../model");

const destroyUsers = async (options) => {
  const res = await User.destroy(options);
  console.log(res);
  // MySQL only returns the number of rows affected
};

const whereOptions = { where: { username: "Betina" } };

// Destroy every record in the User table but not the table itself
const truncateTable = { truncate: true };

destroyUsers(whereOptions);
