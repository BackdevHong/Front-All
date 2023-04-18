// -------------------------------------------------------
// 함수(Function)

// 함수 선언
function helloFunc() {
  console.log(1234);
}

// 함수 호출
helloFunc();

// 반환하는 함수
function returnFunc() {
  return 123;
}

let ret = returnFunc();
console.log(ret)

// 매개변수 함수 선언
function sum(a , b) { // a, b는 매개변수(Parameters)
  return a + b;
}

// 재사용
let sum1 = sum(1, 2); // 1, 2는 인수(Arguments)
let sum2 = sum(7, 12);
let sum3 = sum(2, 4);

console.log(sum1, sum2, sum3);

// 기명(이름이 있는) 함수
function hola() {
  console.log("Hello~");
}

// 익명(이름이 없는) 함수 (선언X 표현O)
let world = function() {
  console.log("World~");
}

hola();
world();

// 객체 데이터에서의 함수 사용
const hongInSung = {
  name : "Hong",
  age: 20,
  getName: function() {
    return this.name;
  } // 속성X, 메소드O
}

const hisName = hongInSung.getName();
console.log(hisName);
// or
console.log(hongInSung.getName());
// -------------------------------------------------------
