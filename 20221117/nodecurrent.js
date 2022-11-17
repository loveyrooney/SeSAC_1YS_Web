const num = require('./nodemodule.js');
//const {a,b} =require('./nodemogule.js); 이렇게 가져오면 구조분해해서 가져온거.

/* console.log(result);
console.log(result.a);
result.test(); */

const c = num.c;
const d = num.d;

function add(){
    return c + d;

}

module.exports = add; //{add}; 이렇게 적으면 익스폴트 받은 곳에서 실행시에 add가 키값으로 반영
//익스폴트 여러개 내보내면 배열 형태로(nodemodule파일에서 한 방법), 하나면 이렇게 쓰면됨