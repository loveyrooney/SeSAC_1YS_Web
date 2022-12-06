var express = require('express');
var controller = require('../controller/Cmember');
const router2 = express.Router();

router2.get("/", controller.home);
router2.get("/login", controller.login);
router2.post("/login", controller.register);
router2.patch("/update", controller.modify);
router2.delete("/update", controller.delete);

module.exports = router2;