// -------------------------------------------------------
/**
// HTML 요소(Element) 1개 검색/찾기
let boxEl = document.querySelector('.box');

// HTML 요소에 적용할 수 있는 메소드!
boxEl.addEventListener();

// 인수(Arguments)를 추가 가능!
boxEl.addEventListener(1, 2);

// 1 - 이벤트(Event, 상황)
boxEl.addEventListener('click', 2)

// 2- 핸들러(Handler, 실행할 함수)
boxEl.addEventListener('click', function() {
  console.log('Click!')
})

// HTML 요소 검색/찾기
const boxEl = document.querySelector('.box')

// 요소의 클래스 정보 객체 활용!
boxEl.classList.add('active');
let isContains = boxEl.classList.contains('active');
console.log(isContains);

boxEl.classList.remove('active');
isContains = boxEl.classList.contains('active');
console.log(isContains)

// HTML 요소 모두 검색/찾기
const boxEls = document.querySelectorAll('.box');
console.log(boxEls)

// 찾은 요소들 반복해서 함수를 실행!
// 익명 함수를 인수로 추가!
// 첫 번째 매개변수 : 반복 중인 요소
// 두 번째 매개변수 : 반복 중인 번호

boxEls.forEach(function (boxEl, index) {
  boxEl.classList.add(`order-${index + 1}`);
  console.log(index, boxEl)
})

const boxEl = document.querySelector('.box');

// Getter, 값을 얻는 용도
console.log(boxEl.textContent);

// Setter, 값을 지정하는 용도
boxEl.textContent = "HongInSung!";
console.log(boxEl.textContent)
 */
// -------------------------------------------------------

