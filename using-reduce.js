const adder = (arr,num = 0) => arr.reduce((acc , current) => acc + current,num)
function sumOrMul(arr,num){
    return  arr.reduce(function(acc,current){
        if (current%2==0){
            acc *= current
        }else{
            acc+= current
        }
        return acc
    },num)

}

function funcExec(arr,num = 0){
  return   arr.reduce(function (acc,fun){
        return fun(acc)
    },num)
    
}