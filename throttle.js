function throttle(func, wait) {
  let run = true
  return function (...arg) {
    if (!run) return
    func(...arg)
    run = false
    setTimeout(() =>
      run = true
      , wait)
  }
}
function opThrottle(func, wait, leading = true, trailing) {
  let run = leading ? true : false
  let lastArg
  return function (...arg) {
    if (!run) {
      if (trailing){
        lastArg = arg
      }
      return 
    }
    func(...arg)
    run = false
    setTimeout(() =>
      run = true
      , wait)
      if (trailing&& lastArg){
     setTimeout(()=>{
      func(...arg)
     },wait) 
    }
  }
}
