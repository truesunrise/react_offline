// 객체 destruct assignment => 동일한 키값으로 할당

var {q, p, o = 3} = {p: 42, q: 50, o: 60};

console.log(p); // 42
console.log(q); // 50
console.log(o); // undefined