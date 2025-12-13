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
