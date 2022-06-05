"use strict";
var express = require("express");
var router = express.Router();
router.get("/", function (req, res) {
    res.send("Hello Alex!");
});
module.exports = router;
//# sourceMappingURL=index.js.map