function round(number){
    if (number === 0){
        return 0
    }
        let normal =getNum(number);
        let decimal = number - normal;
        if (decimal < 0){
            decimal = -decimal
        }
        if (decimal >= 0.5){
            if (normal >= 0){
                normal += 1
                return normal
            }else{
             normal -= 1
            return normal
        }
        }else{
            return normal
        }
    
}
function ceil(number){
    if (number === 0){
        return 0
    }
        let normal =getNum(number);   
            if (normal >= 0){
                normal += 1
                return normal
            }else{
             
            return normal
        }
        }
    
function floor(number){
    if (number === 0){
        return 0
    }
        let normal =getNum(number);
        let decimal = number - normal;
        if (decimal < 0){
            decimal = -decimal
        }
        
            if (normal >= 0){
                
               return  normal
            }else{
             normal -= 1
            return normal
        }
       
    }

function trunc(number){
    if (number === 0){
        return 0
    }
        let normal =getNum(number); 
         return normal
}
function getmill(n){
    let mill = 1;
    while(n > 10){
        n/=10
        mill *= 10
    }
    return mill
}
function getNum(n){
    let min = false
    if (n < 0){
        n = -n
        min = true
    }
    let result=0;
    let minus =10
    while (minus  >=10){
        let mill = getmill(n)
        minus = n - mill
        n= minus
        result += mill
    }
        while (n >= 1){
            n-=1
            result+=1
        }
        if (min){

            return -result
        }else{
            return result
        }
}
