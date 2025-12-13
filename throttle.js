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
const opThrottle = (func, wait, options = {}) => {
    let id
    return function(...args)  {
        if (!id) {
            if (options.leading) func(...args)
            id = setTimeout(() => {
                id = null
                if (!options.leading) {
                    func(...args)
                }
            }, wait)
        }
    }
}