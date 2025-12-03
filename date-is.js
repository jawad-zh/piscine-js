function isValid(date){
    if (typeof(date) === 'string'){
        return false
    }
    let flag = new Date(date).toString()
    if (flag === "Invalid Date"){
        return false
    }
    return true
}
function isAfter(date1,date2){
    return date1 > date2
}
function isBefore(date1,date2){
    return date2 > date1
}0
function isFuture(date){
    let now = Date.now()
  if (isValid(date) && now < date){
    return true
  }  
  return false
}
function isPast(date){
      let now = Date.now()
  if (isValid(date) && now > date){
    return true
  }  
  return false
}

