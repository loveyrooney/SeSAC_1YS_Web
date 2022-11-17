const url = require("url");
/* console.log(url);
console.log(url.parse);
var obj = url.parse('https://www.google.com/webhp?hl=ko&sa=X&ved=0ahUKEwjy6fXqxrT7AhWaNN4KHVNnB7kQPAgI')
console.log(obj);
console.log(url.format(obj)); */

var string = new url.URL("https://localhost?name=sesac&name=codingOn&age=10");
console.log(string.searchParams.getAll('name'));
console.log(string.searchParams.keys());
string.searchParams.append('age','20');
console.log(string.searchParams.getAll('age')); 
console.log(string.href); //url의 링크 주소
console.log(string.searchParams.has('abc')); //url에 abc란 키를 갖고있는지?