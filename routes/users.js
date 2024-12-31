const router = require("express").Router();
// CRUD Routes /users
router.get("/", (req, res) => {
  console.log("get users");
  res.send("url is valid");
}); // /users

module.exports = router;
