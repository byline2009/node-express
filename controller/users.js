const { user } = require("pg/lib/defaults");
const db = require("../models");
const { Op } = require("sequelize");
const { QueryTypes } = require("sequelize");

// get all users
exports.getUsers = async (req, res, next) => {
  // const users = await db.sequelize.query("SELECT * FROM users", {
  //   type: QueryTypes.SELECT,
  // });

  db.User.findAll({})
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err) => console.log(err));
};

//create user
exports.createUser = (req, res, next) => {
  console.log("check");
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const email = req.body.email;
  db.User.create({
    firstName: firstName,
    lastName: lastName,
    email: email,
  })
    .then((result) => {
      console.log("Created User");
      res.status(201).json({
        message: "User created successfully!",
        user: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(400).send({ message: err });
    });
};
