    function debounce(func,await){
        let id;
        return function(...arg){
            if( id ){
                clearInterval(id)
            }
             id =setTimeout(() => func(...arg),await)
        }
        
    }

    function opDebounce(func,await,leading=false){
        let id;
        return function(...arg){
            if (leading){
            func(...arg)
            leading = false
        }
        if (id){
            clearTimeout(id)
        }
        id = setTimeout(() => func(...arg) ,await)

        }
    }
