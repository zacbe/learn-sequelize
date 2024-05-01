const { User } = require("../model");

const buildUser = async () => {
  // save updates an existing record in the database

  const user = User.build({
    username: "Jane",
    password: "password",
    age: 25,
    enabled: true,
  });

  const newUser = await user.save();
  console.log(newUser.toJSON());
};

const insertOneUser = async () => {
  // create inserts a new record into the database

  const userObj = {
    username: "John",
    password: "password",
    age: 25,
    enabled: true,
  };

  const newUser = await User.create(userObj);
  console.log(newUser.toJSON());
};

const insertMultipleUsers = async () => {
  // bulkCreate does not respect validations by default
  // To enable validation, pass validate: true as an option

  const users = [
    {
      username: "John",
      password: "password",
      age: 23,
      enabled: true,
    },
    {
      username: "Jane",
      password: "password",
      age: 22,
      enabled: true,
    },
    {
      username: "Doe",
      password: "password",
      age: 21,
      enabled: true,
    },
  ];

  const newUsers = await User.bulkCreate(users /*{ validate: true }*/);
  newUsers.forEach((user) => {
    console.log(user.toJSON());
  });
};
