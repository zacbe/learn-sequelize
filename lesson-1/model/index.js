const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const sequelize = new Sequelize("sequelize", "root", "pace-weekday-calves", {
  dialect: "mysql",
  // port: 3306,
  define: {
    // we define settings for our database such as timestamps, freezeTableName, etc
    freezeTableName: true,
    timestamps: false,
  },
});

// drop tables based on pattern match
//sequelize.drop({ match: /_test$/ }); // drops all tables ending with "_test"

class User extends Sequelize.Model {}
User.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
    },
    age: {
      type: DataTypes.INTEGER,
      defaultValue: 21,
    },
    enabled: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    modelName: "user",
    timestamps: false,
    sequelize,
  }
);

// Default value is assumed to be null
// Create table if not exists
// We can update a table by passing {alter: true} as an argument to sync()
// Using force: true will drop the table if it already exists

// User.drop()

module.exports = { User };
