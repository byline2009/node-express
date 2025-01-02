const router = require("express").Router();
const controller = require("../controller/users");

// CRUD Routes /users
router.get("/", controller.getUsers); // /users
router.post("/", controller.createUser); // /users

module.exports = router;
