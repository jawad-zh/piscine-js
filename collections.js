const arrToSet = (arr) => new Set(arr)
const arrToStr = (arr) => arr.join("")
const setToArr = (set) => [...set]
const setToStr = (set) => [...set].join(", ")
const strToArr = (str) => str.split("")
const strToSet = (str) => {let arr = str.split(" "); return new Set(arr)}
const mapToObj = (map) => Object.fromEntries(map)
const objToArr = (obj) => Object.entries(obj);
const objToMap = (obj) => Object.entries(obj);
const arrToObj = (arr) => Object.fromEntries(arr);
const strToObj= (str) => {return {...str}};


function superTyperOf(arg){
   let typeArr= Object.prototype.toString.call(arg).split(" ")
   return typeArr[1].slice(0,typeArr[1].length-1)
}
