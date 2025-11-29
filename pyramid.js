function pyramid(char,num){
    let result =""
    for (let i=1 ; i <=num ; i++){
     result += (" ".repeat((num-i)*char.length)+char.repeat((i*2)-1))
     if (i!=num){
        result+="\n"
     }
}
return result
}
