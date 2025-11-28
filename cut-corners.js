function round(arr){
    let result =[]
    for (let i =0 ; i < arr.length ; i++){
        let normal =getNum(arr[i]);
        let decimal = arr[i] - normal;
        if (decimal < 0){
            decimal = -decimal
        }
        if (decimal >= 0.5){
            if (normal >= 0){
                normal += 1
                result.push(normal)
            }else{
             normal -= 1
            result.push(normal)
        }
        }else{
            result.push(normal)
        }
    }

    return result
}
function ceil(arr){
    let result =[]
    for (let i =0 ; i < arr.length ; i++){
        let normal =getNum(arr[i]);   
        
            if (normal >= 0){
                normal += 1
                result.push(normal)
            }else{
             
            result.push(normal)
        }
        }
        return result
    }

function floor(arr){
    let result =[]
    for (let i =0 ; i < arr.length ; i++){
        let normal =getNum(arr[i]);
        let decimal = arr[i] - normal;
        if (decimal < 0){
            decimal = -decimal
        }
        
            if (normal >= 0){
                
                result.push(normal)
            }else{
             normal -= 1
            result.push(normal)
        }
       
    }

    return result
}
function trunc(arr){
    let result =[]
    for (let i =0 ; i < arr.length ; i++){
        let normal =getNum(arr[i]); 
                result.push(normal)
    }

    return result
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
