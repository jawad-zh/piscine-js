function triangle(char,num){
    let result = ""
    let temp = ""
    for (let i=0 ; i < num ;i++){
         temp += char
        result += temp
        if (i!==num-1){
            result+= "\n"
        }
    }
    return result
}