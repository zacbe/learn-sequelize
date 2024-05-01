const Sequelize = require("sequelize");
const bcrypt = require("bcrypt");
const zlib = require("zlib");
const { get } = require("http");

const { DataTypes } = Sequelize;

const sequelize = new Sequelize("sequelize", "root", "pace-weekday-calves", {
  dialect: "mysql",
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

const UserSchema = {
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
    get() {
      const rawValue = this.getDataValue("username");
      return rawValue ? rawValue.toUpperCase() : null;
    },
  },
  password: {
    type: DataTypes.STRING,
    set(value) {
      const salt = bcrypt.genSaltSync(12);
      const hash = bcrypt.hashSync(value, salt);
      this.setDataValue("password", hash);
    },
  },
  age: {
    type: DataTypes.INTEGER,
    defaultValue: 21,
  },
  enabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
  description: {
    type: DataTypes.STRING,
    set(value) {
      const compressed = zlib.deflateSync(value).toString("base64");
      this.setDataValue("description", compressed);
    },
    get() {
      const value = this.getDataValue("description");
      const uncompressed = zlib.inflateSync(Buffer.from(value, "base64"));
      return uncompressed.toString();
    },
  },
  summary: {
    type: DataTypes.VIRTUAL,
    get() {
      return `${this.username} is ${this.age} years old`;
    },
  },
};

const tableOptions = {
  modelName: "user",
};

class User extends Sequelize.Model {}
User.init(UserSchema, { sequelize, ...tableOptions });

module.exports = { User };
