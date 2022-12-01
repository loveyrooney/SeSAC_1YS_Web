var express = require('express');
var controller = require('../controller/Cmain');
const router = express.Router();

/* 여기에다가 원하는 라우터를 get/post방식으로 형성하면 된다. 컨트롤러 뒤의 함수가 중요. 
컨트롤러 뒤의 함수는 딕셔너리 형태로 익스폴트 받아서 여기에서 해당 키로 적용 
컨트롤러 뒤의 함수는 컨트롤러 폴더에서 모두!!! 정의가 되어 있어야 함. */
router.get("/", controller.main);
router.get("/test", controller.test);
router.post("/post", controller.test);

//실습
router.get("/prac", controller.prac);
router.get("/activeprac", controller.activeget);
router.post("/activeprac2", controller.activepost2);

module.exports = router;