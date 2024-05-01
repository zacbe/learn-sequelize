const { User } = require("../models");

const findOrCreate = async (model, options) => {
  const [user, isUpsert] = await model.findOrCreate({ ...options, raw: true });
  console.log(user, { isUpsert });
};

const options = {
  where: {
    username: "Mr Tom",
  },
  defaults: {
    age: 37,
  },
};
findOrCreate(User, options);

/**
 * Find a row that matches the query, or build and save
 * the row if none is found The successful result of the
 * promise will be (instance, created) - Make sure to use
 * .then(([...]))
 *
 * If no transaction is passed in the options object, a
 * new transaction will be created internally, to prevent
 * the race condition where a matching row is created by
 * another connection after the find but before the insert
 * call. However, it is not always possible to handle this
 * case in SQLite, specifically if one transaction inserts
 * and another tries to select before the first one has
 * comitted. In this case, an instance of sequelize.TimeoutError
 * will be thrown instead. If a transaction is created, a
 * savepoint will be created instead, and any unique constraint
 * violation will be handled internally.
 */
