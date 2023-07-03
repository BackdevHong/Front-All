// Any

let helloA: any = 'HelloWorld!'
helloA = 1
helloA = false
helloA = null
helloA = {}
helloA = []
helloA = function() {}

// Unknown
const ab: any = 123
const uk: unknown = 123

// const any: any = uk
// const boo: boolean = uk
// const numb: number = uk
// const arrr: string[] = uk
// const obje: { x: string, y: number } = uk 
// Unknown 타입은 OO 타입에 할당할 수 없습니다. 오류가 뜸

// Tuple

const tuple: [string, number, boolean] = ['a', 1, false]
const users: [number, string, boolean][] = [
  [1, 'Neo', true],
  [2, 'Evan', false],
  [3, 'Lewis', true]
]

// Void

function helloMSG(msg: string) : void {
  console.log(`Hello ${msg}`)
}

const hi: void = helloMSG('world')

// Never
const nev: [] = []

// Union

let unionTX: string | number
unionTX = 'Hello type!'
unionTX = 123

// Intersection
interface User {
  name: string,
  age: number
}

interface Validation {
  isValid: boolean
}

const hong: User & Validation = {
  name: 'Neo',
  age: 83,
  isValid: true
}