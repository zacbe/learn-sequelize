const { Student } = require("../models");

const createStudentTable = async (model) => {
  try {
    await model.sync({ force: true });
    console.log("Table created successfully");
  } catch (error) {
    console.error("Error creating table: ", error);
  }
};

const creatMultipleStudents = async (model, array) => {
  const students = await model.bulkCreate(array, { validate: true });
  students.forEach((student) => {
    console.log(student.toJSON());
  });
};

const studentsArray = [
  {
    name: "Betina",
    school_year: 3,
    subscribed_to_wittcode: false,
    favorite_class: "Art",
  },
  {
    name: "Bryan",
    school_year: 4,
    favorite_class: "Art",
  },
  {
    name: "Carmen",
    school_year: 2,
    subscribed_to_wittcode: false,
  },
  {
    name: "Derek",
    school_year: 1,
    favorite_class: "Art",
  },
  {
    name: "Elena",
    school_year: 3,
  },
  {
    name: "Fernando",
    school_year: 4,
    subscribed_to_wittcode: false,
  },
  {
    name: "Gina",
    school_year: 2,
    favorite_class: "Art",
  },
  {
    name: "Hector",
    school_year: 1,
    subscribed_to_wittcode: false,
  },
  {
    name: "Irene",
    school_year: 3,
    favorite_class: "Art",
  },
  {
    name: "Jorge",
    school_year: 4,
  },
  {
    name: "Karla",
    school_year: 2,
    subscribed_to_wittcode: false,
    favorite_class: "Finance",
  },
  {
    name: "Luis",
    school_year: 1,
    subscribed_to_wittcode: false,
  },
  {
    name: "Maria",
    school_year: 3,
    favorite_class: "Finance",
  },
  {
    name: "Nestor",
    school_year: 4,
    favorite_class: "Finance",
  },
  {
    name: "Oscar",
    school_year: 2,
    subscribed_to_wittcode: false,
  },
  {
    name: "Pamela",
    school_year: 1,
    favorite_class: "Math",
  },
  {
    name: "Quinn",
    school_year: 3,
    subscribed_to_wittcode: false,
  },
  {
    name: "Rosa",
    school_year: 4,
  },
  {
    name: "Sergio",
    school_year: 2,
  },
  {
    name: "Tina",
    school_year: 1,
    subscribed_to_wittcode: false,
  },
  {
    name: "Ursula",
    school_year: 3,
    favorite_class: "Math",
  },
  {
    name: "Victor",
    school_year: 4,
  },
  {
    name: "Wendy",
    school_year: 2,
    subscribed_to_wittcode: false,
  },
  {
    name: "Xavier",
    school_year: 1,
    favorite_class: "Math",
  },
  {
    name: "Yolanda",
    school_year: 3,
    subscribed_to_wittcode: false,
  },
  {
    name: "Zoey",
    school_year: 4,
    favorite_class: "Math",
  },
];

async function seedDB(model, collection) {
  await createStudentTable(model);
  await creatMultipleStudents(model, collection);
  console.log("Data seeded successfully");
}

seedDB(Student, studentsArray);
