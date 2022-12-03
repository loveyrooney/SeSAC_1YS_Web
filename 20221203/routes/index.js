var express = require('express');
var controller = require('../controller/Cmember');
const router = express.Router();

router.get("/", controller.home);
router.get("/login", controller.login);
router.post("/login", controller.register);
router.patch("/update", controller.modify);

module.exports = router;