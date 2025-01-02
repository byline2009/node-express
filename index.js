var express = require("express");
const { Sequelize } = require("sequelize");

var app = express();
const router = express.Router();
var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function (req, res) {
  console.log("req", req.query);
  //   console.log("hello world");
  res.status(200).send({ message: "url is valid" });
});

app.use("/users", require("./routes/users"));

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log(
    "Ung dung Node.js dang hoat dong tai dia chi: http://localhost:3000",
    host,
    port
  );
});


