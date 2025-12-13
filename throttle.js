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
function opThrottle(func, wait, leading = true, trailing = true) {
  let run = leading
  let lastArg = null
  let timer = null

  return function (...arg) {
    if (!run) {
      if (trailing) lastArg = arg
      if (trailing && !timer) {
        timer = setTimeout(() => {
          func(...lastArg)
          lastArg = null
          timer = null
          run = leading   
        }, wait)
      }
      return
    }
    func(...arg)
    run = false

    timer = setTimeout(() => {
      if (trailing && lastArg) {
        func(...lastArg)
        lastArg = null
      }
      run = leading   
      timer = null
    }, wait)
  }
}