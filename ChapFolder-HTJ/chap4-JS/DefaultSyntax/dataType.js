
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