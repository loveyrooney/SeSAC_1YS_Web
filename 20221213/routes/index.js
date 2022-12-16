var express = require('express');
var controller = require('../controller/Cmile');
const router = express.Router();

router.get("/", controller.home);
router.get("/signup", controller.idread);
router.post("/signup", controller.signup);
router.get("/signin", controller.signin);
router.get("/mbti", controller.yap);

module.exports = router;