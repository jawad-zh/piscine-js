function split(string ,seperator){
    if (string===""){
        return [""]
    }
    let count =0;
    let found = false;
    let sLenght = seperator.length
    let fixsLenght = seperator.length ;
    let word =""
    let words =[]
    if (string.length < sLenght){
        return string
    }
      if (seperator==""){
            for (let i =0 ; i<string.length ;i++){
                words.push(string[i])
                continue
            }
            return words
                }
    for (let i =0 ; i < string.length ; i++){
        if(found){
            count ++
            if (count ===fixsLenght){
                found =false
                count =0
            }else{

                continue
            }
        }
        let flag = string.substring(i,i+sLenght)
        
        if (flag !== seperator){
           
            word += string[i]
        }else{
            found = true
            words.push(word)
            word =""
        }
        
    }
            words.push(word)
    return words
}
function join(arr, seperator){
    let result ="";
    for (let i =0 ; i< arr.length ; i++){
        result+=arr[i]
        if (i!==arr.length-1){
            result += seperator
        }
    }
    return result
}