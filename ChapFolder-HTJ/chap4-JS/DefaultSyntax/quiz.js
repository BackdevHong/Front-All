// The quick brown fox 이 문장을 camelCase로 작성하시오
console.log("theQuickBrownFox")

// let fruits = ['Apple', 'Banana', 'Cherry']
// 위 데이터를 활용해 'Banana'를 콘솔 출력하시오!
let fruits = ['Apple', 'Banana', 'Cherry']
console.log(fruits[1])

// 불린(Boolean)데이터 에서 거짓을 의미하는 데이터는?
console.log(false)

// 값이 의도적으로 비어있음을 의미하는 데이터는?
console.log(null)

// {} <- 이 데이터의 종류는? - Object(객체)

/**
 * let obj = {abc: 123};
 * console.log(obj.xyz);
 */
// 위 코드를 통해 콘솔 출력될 값(데이터)은? - undefined

let obj = {abc: 123};
console.log(obj.xyz);

// 값을 재할당할 수 없는 변수 선언 키워드는? - const

// 함수 값 반환 키워드? - return

// sum(2, 4) 이 함수 호출에서 2, 4를 무엇이라 하는가? - 인수(Arguments)

function sum(a, b) {
  return a+b;
}

// 위 함수 선언의 a, b와 같이 함수 호출에서 전달받은 인수를 함수 내부로 전달하기 위한 변수는 무엇이라 하는가?
// - 매개변수

// 이름이 없는 함수 - 익명함수

// hello 이름의 함수 표현을 작성하고 호출하시오
const hello = function() {
  console.log("hello world!")
}

hello()

const user = {
  getName : function () {}
}

// 위 코드에서 getName과 같이 함수가 할당된 객체 데이터의 속성을 무엇이라 하는가.
// - 메소드

// 조건이 참인 조건문을 작성하시오

if (true) {
  console.log(true)
}

// 가져온 JS 파일을 HTML 문서 분석 이후에 실행하도록 지시하는 HTML 속성은?
// - defer

// .box html 요소의 내용을 콘솔 출력하시오!

const boxEl = document.querySelector(".box");
console.log(boxEl.textContent)

// 값을 재할당할 목적의 변수 선언 키워드는? - let

// boxEl 요소에 클릭 이벤트를 추가해, 클릭 시 'Hello~'를 콘솔 출력하시오!
boxEl.addEventListener('click', () => {
  console.log("Hello~")
})

// 1, 2 2개의 div 요소에 JS로 클래스 hello를 추가하시오!
const divList = document.querySelectorAll('div');

// console.log(divList)
divList.forEach(boxEl => {
  boxEl.classList.add('hello')
})

// 아래와 같이, 메소드를 이어 작성하는 방법을 무엇이라 하는가? - 메소드 체이닝

const test = 'Test'.split('').reverse().join('')
console.log(test)

// boxEl 요소에 HTML 클래스 속성의 값으로 'active'가 포함되어 있으면 '포함됨!'을 콘솔 출력하시오!
const isContains = boxEl.classList.contains('active');
if (isContains) {
  console.log("포함됨!")
}

