const { Op } = require("sequelize");
const { Student } = require("../models");

const findStudents = async (model, options) => {
  const students = await model.findAll(options);
  students.forEach((student) => {
    console.log(student.toJSON());
  });
};

/**
 * Retrieve the name of every student whose their favorite class
 * is Computer Science or they are subscribed to WittCode
 */
const options = {
  attributes: ["name"],
  where: {
    [Op.or]: [
      { favorite_class: "Computer Science" },
      { subscribed_to_wittcode: true },
    ],
  },
};

findStudents(Student, options);
