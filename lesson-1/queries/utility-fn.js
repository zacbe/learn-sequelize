const { User } = require("../model");

// Find the maximum age in the User table
User.max("age").then((max) => {
  console.log({ max });
});

// Sum the ages of all users
User.sum("age").then((sum) => {
  console.log({ sum });
});
