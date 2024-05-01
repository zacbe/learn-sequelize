const { Student } = require("../models");
const { fn, col } = require("sequelize");

const countStudentYears = async (model, options) => {
  const studentsCount = await model.findAll(options);
  studentsCount.forEach((student) => {
    console.log(student.toJSON());
  });
};

/**
 * Count the total amount of students in each school year and
 * give the returned column the alias num_students.
 */
const options = {
  attributes: ["school_year", [fn("SUM", col("school_year")), "num_students"]],
  group: ["school_year"],
};

countStudentYears(Student, options);
