const { User } = require("../model");
const Sequilize = require("sequelize");
const { fn, col, where, Op } = Sequilize;

const findAllUsers = async (queryOptions) => {
  const users = await User.findAll(queryOptions);
  users.forEach((user) => {
    console.log(user.toJSON());
  });
};

// returns only the username and age attributes
const baseAttributes = ["username", "age"];

// returns the username as myName and age as myAge
const namedAttributes = [
  ["username", "myName"],
  ["age", "myAge"],
];

// returns the sum of the ages
const aggregateAttributesSUM = [[fn("SUM", col("age")), "totalAge"]];

// returns the average of the ages
const aggregateAttributesAVG = [[fn("AVG", col("age")), "totalAge"]];

// returns all attributes except password and enabled
const excludeAttributes = { exclude: ["password", "enabled"] };

// returns all users with username "John" and age 25
const whereClause = { username: "John", age: 25 };

// returns the first two users
const limitClause = { limit: 2 };

/**
 * Returns username as myName and age as myAge
 * where username is John and age is 25 and limit is 2
 * 
    findAllUsers({
      attributes: namedAttributes,
      where: whereClause,
      ...limitClause,
    });
*/

// orders the users by age in descending order
const orderByDESC = { order: [["age", "DESC"]] };

// orders the users by age in ascending order
const orderByASC = { order: [["age", "ASC"]] };

// group users by username and count sum of ages
const groupUsersByNames = { group: "username" };
const aggregateUsersByAge = {
  attributes: ["username", ...aggregateAttributesSUM],
  ...groupUsersByNames,
};

// find all users where name is Jane OR age is 25
const orOperator = { where: { [Op.or]: { username: "Jane", age: 25 } } };

// find all users where name is John AND age is 25
const andOperator = { where: { [Op.and]: { username: "John", age: 25 } } };

// find all users where age is greater than 21
const greaterThan = { where: { age: { [Op.gt]: 21 } } };

// find all users where age is less than 22 or equal to null
const lessThanOrEqual = {
  where: {
    age: {
      [Op.or]: {
        [Op.lt]: 22,
        [Op.eq]: null,
      },
    },
  },
};

// find all users where username char_length is 4
const charLength = {
  where: where(fn("char_length", col("username")), 4),
};

findAllUsers(charLength);
