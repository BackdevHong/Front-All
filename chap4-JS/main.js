console.log("HELLO WORLD!");

// -------------------------------------------------------
// 여러가지 표기법

// dash-case(kebab-case)
/**
 * HTML, CSS에서 많이 쓰이는 케이스이다.
 */
console.log("the-quick-brown-fox-jumps-over-the-lazy-dog");

// snake_case
/**
 * HTML, CSS에서 많이 쓰이는 케이스이다.
 */
console.log("the_quick_brown_fox_jumps_over_the_lazy_dog");

// camelCase
/**
 * JS에서 많이 쓰이는 케이스이다.
 */
console.log("theQuickBrownFoxJumpsOverTheLazyDog");

// PascalCase
/**
 * JS에서 많이 쓰이는 케이스이다.
 */
console.log("TheQuickBrownFoxJumpsOverTheLazyDog");

// 거의 대부분 JS에서는 카멜 케이스를 사용한다.
// -------------------------------------------------------

// -------------------------------------------------------
// Zero-based Numbering
// 숫자를 0부터 읽어야 한다.
let fruits = ["apple", "banana", "cherry"];

console.log(fruits[0]); // 0부터 시작한다.
console.log(fruits[1]);
console.log(fruits[2]);

console.log(new Date("2021-01-30").getDay()); // 6, 토
console.log(new Date("2021-01-31").getDay()); // 0, 일
console.log(new Date("2021-02-01").getDay()); // 1, 월
// -------------------------------------------------------

// -------------------------------------------------------
// 데이터 종류(자료형)
/**
 * String
 * Number
 * Boolean
 * Undefined
 * Null
 * Object
 * Array
 */

// String(문자 데이터)
// 따옴표를 사용합니다.
let myName = "DevHong";
let email = "ghddls0704@kakao.com";
let hello = `Hello ${myName}?!`; // 보간법 : 백틱 기호를 사용하여 문자열 안에 변수를 사용할 수 있음!

console.log(myName);
console.log(email);
console.log(hello);

// Number(숫자 데이터)
// 정수 및 부동소수점 숫자를 나타냅니다.
let number = 123;
let opacity = 1.57;

console.log(number);
console.log(opacity);

// Boolean(불린 데이터)
// true, false 두 가지 값밖에 없는 논리 데이터입니다.
let checked = true;
let isShow = false;

console.log(checked);
console.log(isShow);
// Undefined
// 값이 할당되지 않은 상태를 나타냅니다.
let undef;
let obj = {
  abc: 123
};
console.log(undef);
console.log(obj.abc);
console.log(obj.xyz);

// Null
// 어떤 값이 의도적으로 비어있음을 의미합니다.
let empty = null;

console.log(empty);

// Object(객체 데이터)
// 여러 데이터를 Key:Value 형태로 저장합니다. { } <- 중요한 기호
let user = {
  name : "Hong",
  age: 20,
  isValid: true
};

console.log(user.name);
console.log(user.age);
console.log(user.isValid);

// Array(배열 데이터)
// 여러 데이터를 순차적으로 저장합니다. [ ] <- 중요한 기호
let fruitsArr = ['Apple', 'Banana', 'Cherry'];

for(let i = 0; i < fruitsArr.length; i++) {
  console.log(fruitsArr[i])
};

// fruitsArr.forEach((fruits) => {
//   console.log(fruits);
// })
// -------------------------------------------------------

// -------------------------------------------------------
// 변수(variable)
// 재사용이 가능하다!

// 변수 선언
let a = 2;
let b = 5;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

// 변수 값 재할당
let c = 12;
console.log(c);

c = 999;
console.log(c);

// 변수 값 재할당2 ( 불가능한 케이스 )
const d = 12; // 상수이기 때문이다. (고정되는 값)
console.log(d);

d = 999;
console.log(d)
// -------------------------------------------------------

// -------------------------------------------------------
// 예약어(Reserved Word)
// 특별한 의미를 가지고 있어서 변수나 함수 이름 등으로 사용할 수 없는 단어

// let this = "Hello!";
// let if = 123;
// let break = true;
// 전부 SyntaxError가 띄어진다.

