var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.render("admin/index", {
    layout: "main",
  });
  // res.send('respond with a resource');
});

module.exports = router;