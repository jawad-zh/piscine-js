function split(string, sepilator){
    let word =""
    let words =[]
    for (let i=0 ; i < string.length ; i++){
        if (string[i] != sepilator){
            word += string[i]
    }else{
        if (word != ""){
            words.push(word)
            word = ""
        }
    }
}
    if (word != ""){
        words.push(word)
    }
    return words
}

function join(arr,joiner){
    let result = "";
    for (let i =0 ; i < arr.length ; i++){
        result += arr[i]
        if (i!==arr.length-1){
            result += joiner
        }
    }
    return result
}