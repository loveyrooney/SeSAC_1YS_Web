var express = require('express');
var controller = require('../controller/Cmile');
const router2 = express.Router();

router2.get("/", controller.home);
router2.get("/mbti", controller.yap);

module.exports = router2;