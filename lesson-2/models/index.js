const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const sequelize = new Sequelize("sequelize", "root", "pace-weekday-calves", {
  dialect: "mysql",
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

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
      validate: {
        len: [4, 6],
      },
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

module.exports = { User };
