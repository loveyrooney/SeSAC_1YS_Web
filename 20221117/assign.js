let list = ['apple', 'banana'];
[item1, item2] = list; //구조분해의 작업

[item1, item2='peach', item3='orange'] = list; //item2, item1= 이렇게 하면 바나나, 애플, 오렌지 나옴
console.log(item1);
console.log(item2); //item2가 있으므로 바나나가 나옴
console.log(item3); //item3은 없으므로 대체한 것이 나옴


let obj = {
    a: 'one',
    b: 'two',
    e: '1',
    f: 2
};

let {b:key2, a, c='three'} = obj; //오브젝트 딕셔너리 형태여서 키값으로 가져오므로 순서상관없음. 
console.log(a);
console.log(key2); //키 이름을 콜론으로 바꿀수 있음
console.log(obj); //구조분해한 게 안나오고 처음 선언한 배열이 나옴

let {b, ...rest} = obj; //b를 제외한 나머지를 가져옴. 점점점레스트는 가장 마지막에 써야됨
console.log(b);
console.log(rest);


