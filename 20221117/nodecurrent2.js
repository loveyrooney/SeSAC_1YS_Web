const result = require('./nodecurrent.js'); //add를 불러오는데 다른이름으로 지정가능

console.log(result); //불러온 모듈이 함수형태라는거를 보여줌
console.log(result()); //불러온 모듈이 함수니까 그 함수를 실행한 결과를 보여줌
// {add}라고 익스폴트 지정한 경우에 여기서 실행할려면 result.add() 로 해야됨. 
// result.add() 에서 add는 키 값이고, add에 대응하는 값이 함수기 때문에 값을 ()실행한다 임. 