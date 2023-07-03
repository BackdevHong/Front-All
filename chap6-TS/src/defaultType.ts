// 문자 타입

let str: string
let red: string = 'red'
let green: string = 'Green'
let myColor: string = `My color is ${red}.`
let yourColor: string = 'Your color is' + green

// 숫자 타입

let num: number
let integer: number = 6
let float: number = 3.14
let infinity: number = Infinity
let nan: number = NaN

// 불린 타입

let isBoolean: boolean
let isDone: boolean = false

// Null / Undefined

let nul: null
let und: undefined

// 배열 타입

const fruits: string[] = ["apple", "banana", "Cherry"]
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7]
const union : (string|number)[] = ["apple", 1, 2, "banana", 3]

// 객체 타입

const obj: object = {}
const arr: object = []
const func: object = function() {}

interface User {
  name: string,
  age: number,
  isValid: boolean,
}

const userA: User = {
  name: "Hong",
  age: 85,
  isValid: true
}

const userB: User = {
  name: "Hwang",
  age: 20,
  isValid: true
}

// 함수

const add: (x: number, y: number) => number = function(x, y) {
  return x + y;
}

const addC = function(x: number, y:number): number {
  return x + y
}

const a: number = add(1, 2)

const hello: () => void = () => {
  console.log("hello world!")
}

const h: void = hello();