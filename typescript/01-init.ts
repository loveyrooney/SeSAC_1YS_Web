//변수
const str:string = 'hello';
const num:number = 1;
const isSomething:boolean = true;

//object 
const numArr:number[] = [1,2,3];
const strArr:string[] = ['a','b','c'];
const arr3:Array<number> = [4,5,6,8];
console.log(strArr[0].concat("!"));

//tuple (길이가 고정되고, 타입이 지정되어 있는 배열)
const combination:[boolean,string,number] = [false,'park',20];

//enum(특정값을 열거한 집합)
enum Names {월, 화, 수, 목, 금, 토, 일 }
const monday:Names = Names.월;

//any (모든 타입. js랑 차이가 없어지니 지양할것)
const any1:any = [1,'b',true,[1,0]]

//void (undefined와 null만 허용)
const var1:void = undefined;

//never (끝에 도달하지 않는, 즉 반복문 무한반복 처럼 안 끝나는 함수 등에 부여)
function neverEnd():never {
    while(true) {

    }
}


//함수 (매개변수의 타입 지정, 리턴값의 타입 지정)
function sum1(a:number, b?:number):void {
    console.log(a);
    console.log(b);
}
sum1(1)
sum1(1,2)

function sum2(a:number, b?:number) :number {
    if(b != undefined) return a+b;
    else return a;
}

//interface
interface student {
    name: string, 
    age: number,
    nickname?: string
}
const student1: student = {
    name: '홍길동',
    age: 20
}
const student2: student = {
    name: '성춘향',
    age: 20,
    nickname: '춘'
}

function check(stu: student){
    console.log(stu.name, stu.age, stu.nickname);
}

check(student1);
check(student2);

//class 
class Person {
    id: string;
    constructor(name:string, age:number) {
        this.id = name + age;
    }
}
const person = new Person('lee', 30);
console.log(person);

//인터페이스 상속하기 
interface Shape {
    width: number;
    getLength(): number;
}
class Square implements Shape {
    getLength():number {
        return this.width;
    }
    constructor(readonly width: number){}

}
const square = new Square(10);
console.log(square.getLength());

//변수 범위 지정
class Person2 {
    constructor(public name:string, private age:number) {
        this.name = name;
        this.age = age;
    }
}
const person2 = new Person2('a',2);
//console.log(person2.age); age를 가져올수없음

//generic (로직은 같은데 리턴 타입이 달라지는 것들을 사용할때)
function getText<T>(text:T):T {
    return text;
}
console.log(getText<string>('hello,generic'));