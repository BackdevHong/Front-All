// -------------------------------------------------------
// 메소드 체이닝 (MethodChaining)
const aText = 'Hello~';

// split : 문자를 인수 기준으로 쪼개서 배열로 변환.
// reverse : 배열을 뒤집기.
// join : 배열을 인수 기준으로 문자로 병합해 반환.
const bText = aText.split('').reverse().join(''); // 메소드 체이닝

console.log(aText)
console.log(bText)
