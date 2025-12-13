function throttle(func,wait){
    let run = true 
    return function(...arg){
        if(!run) return
        func(...arg)
        run = false
        setTimeout(()=>
        run = true
        ,wait) 
    }
}
function opThrottle(func,wait,leading){
      let run = true 
      let first = true
      if (leading){
        first = true
      }else{
        first = false
      }
    return function(...arg){
        if (first){
            func(...arg)
            first = false
        }
        if(!run) return
        func(...arg)
        run = false
        setTimeout(()=>
        run = true
        ,wait) 
    }
}