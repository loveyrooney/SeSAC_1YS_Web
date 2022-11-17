const {Car} = require("./class.js");
console.log(Car); // 변수를 car로 가져오면 { Car: [class Car] }로 출력 

var car1 = new Car("red"); //생성자에는 color인자 받고 있기 때문에 처음에 지정해줘야됨
console.log(car1.returnColor());
var car2 = new Car("blue");
console.log(car2.returnColor());
var car3 = new Car("yellow");
console.log(car3.returnColor());