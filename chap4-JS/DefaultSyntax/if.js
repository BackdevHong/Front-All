// -------------------------------------------------------
// 조건문(if, else)
// 조건의 결과에 따라 다른 코드를 실행하는 구문입니다.

let ifIsShow = true;
let ifChecked = false;

if (ifIsShow) {
  console.log('Show!');
} // 조건문 혹은 조건블록

if (ifChecked) {
  console.log('Checked!')
} // 조건에 맞지 않는 경우 스킵한다.

if (ifIsShow) {
  console.log("Show!")
} else { // 만약 아닐 경우
  console.log("Hide?")
}