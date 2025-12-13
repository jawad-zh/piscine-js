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
function opThrottle(func,wait,leading=true,trailing){
   let run = leading? true:false
    return function(...arg){
        if(!run) return
        func(...arg)
        run = false
        setTimeout(()=>
        run = true
        ,wait) 
    } 
}
