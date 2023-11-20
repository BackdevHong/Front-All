// 타입 단언

// 단언 키워드 - as
// Non-null 단언 연산자 - !

// 1)
const el = document.querySelector('body') as HTMLElement
el!.textContent = 'Hello world?!'

// 2)
// function getNumber(x: number | null | undefined) {
//   return Number(x!.toFixed(2))
// }

// getNumber(3.1415926535)
// getNumber(null)

// 3)

function getValue(x: string|number, isNumber: boolean) {
  if (isNumber) {
    return Number((x as number).toFixed(2))
  }
  return (x as string).toUpperCase()
}

console.log(getValue('hello world', false));
console.log(getValue(3.1415926535, true))


// 할당 단언 (Assertion)

let numX!: number
console.log(numX)
