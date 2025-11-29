const arrToSet = (arr) => new Set(arr)
const arrToStr = (arr) => arr.join("")
const setToArr = (set) => [...set]
const setToStr = (set) => [...set].join("")
const strToArr = (str) => str.split("")
const strToSet = (str) => new Set([...str])
const mapToObj = (map) => Object.fromEntries(map)
const objToArr = (obj) => Object.values(obj);
const objToMap = (obj) => new Map(Object.entries(obj));
const arrToObj = (arr) => {return {...arr}};
const strToObj= (str) => {return {...str}};


function superTyperOf(arg){
   let typeArr= Object.prototype.toString.call(arg).split(" ")
   let type = typeArr[1].slice(0,typeArr[1].length-1)
   if (type ==='Null'){
    return type[0].toLocaleLowerCase()+ type.slice(1)
   }else if(type === 'Undefined'){
    return type[0].toLocaleLowerCase()+ type.slice(1)
   }else{
    return type
   }
}
