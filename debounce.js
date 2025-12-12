    function debounce(func,wait){
        let id;
        return function(...arg){
            if( id ){
                clearInterval(id)
            }
             id =setTimeout(() => func(...arg),wait)
        }
        
    }

    function opDebounce(func,wait,leading=false){
        let id;
        return function(...arg){
            if (leading){
            func(...arg)
            leading = false
        }
        if (id){
            clearTimeout(id)
        }
        id = setTimeout(() => func(...arg) ,wait)

        }
    }
