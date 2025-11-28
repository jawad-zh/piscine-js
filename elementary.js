function multiply(a,b){
    let result =0
    let anum = 1
    let bnumb =1
    if(a < 0){
        anum =0
        a = -a
    }
    if (b < 0){
        bnumb = 0
        b = -b
    }
    for (let i = 0 ; i < b ; i++){
        result += a
    }
    if ((anum === 0 && bnumb===0)||(anum===1 && bnumb===1)){
        return result
    }else {
        return -result
    }
   
}
function divide(a,b){
    let count =0;
    let anum = 1
    let bnumb =1
    if(a < 0){
        anum =0
        a = -a
    }else if (a===0){
        return 0
    }
    if (b < 0){
        bnumb = 0
        b = -b
    }else if (b === 0){
        return Infinity
    }
    if (b > a && anum!==0){
        return 0
    }
    
  while(a>b){
    a -= b
    count++
  }
  if ((anum === 0 && bnumb===0)||(anum===1 && bnumb===1)){
        return count
    }else {
        return -count
    }
}
function modulo(a,b){
    let numa = 1
    if (a < 0){
        a = -a
        numa =0
    }
    if (b ===  0){
        return NaN
    }else if (b < 0){
        b = - b
    }
    while(a > b){
        a -= b
    }
    if (numa ===0){
        return -a
    }else{
        return a
    }
}