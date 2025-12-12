    function debounce(func,await){
        return function(...arg){
            let id;
            if( id ){
                clearInterval(id)
            }
             id =setTimeout(func(arg),await)
        }
        
    }