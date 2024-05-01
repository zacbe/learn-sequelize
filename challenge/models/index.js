const Sequelize = require("sequelize");
const { DataTypes } = Sequelize;

const sequelize = new Sequelize("sequelize", "root", "pace-weekday-calves", {
  dialect: "mysql",
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

class Student extends Sequelize.Model {}
const studentSchema = {
  student_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [4, 20],
    },
  },
  favorite_class: {
    type: DataTypes.STRING(25),
    defaultValue: "Computer Science",
  },
  school_year: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  subscribed_to_wittcode: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
};
const tableOptions = {
  modelName: "student",
};

Student.init(studentSchema, { sequelize, ...tableOptions });

module.exports = { Student };
