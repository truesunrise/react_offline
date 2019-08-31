// 배열 destruct assignment => 순서대로 할당
var a, b, rest;
// default parameter 문법
[a, b = 20] = [10, 30];

console.log(a);
// expected output: 10

console.log(b);
// expected output: 20

[a, b, ...rest] = [10, 20, 30, 40, 50];

console.log(rest);
// expected output: [30,40,50]
