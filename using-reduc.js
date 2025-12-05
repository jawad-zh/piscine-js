const adder = (arr) => arr.reduce((acc , current,a=0) => acc + current)
function sumOrMul(arr){
    return  arr.reduce(function(acc,current,a=0){
        if (current%2==0){
            acc *= current
        }else{
            acc+= current
        }
        return acc
    })

}

function funcExec(arr){
  return   arr.reduce(function (acc,fun,a=0){
        return fun(acc)
    })
    
}