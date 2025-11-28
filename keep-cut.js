function cutFirst(string){
   return string.slice(2)
}
function cutLast(string){
    let end = string.length-2
    return string.slice(0,end)
}
function cutFirstLast(string){
    let end = string.length-2
  return string.slice(2,end) 
}
function keepFirst(string){
    return string.slice(0,2)
}
function keepLast(string){
    let end = string.length-2
    return string.slice(end)
}
function keepFirstLast(string){
     let end = string.length-2
  return string.slice(0,2) + string.slice(end)
}