function split(string ,seperator){
    // let first = true
    // let tracker =0
    let count =0;
    let found = false;
    let sLenght = seperator.length
    let fixsLenght = seperator.length ;
    let word =""
    let words =[]
    if (string.length < sLenght){
        return string
    }
    for (let i =0 ; i < string.length ; i++){
        if (seperator==""){
            words.push(string[i])
            continue
        }
        if(found){
            console.log("count",count,"fixlenght:",fixsLenght)
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
            console.log(i,word)
        }else{
            found = true
            words.push(word)
            word =""
        }
        
    }
        words.push(word)
        if (string===""){
            return [""]
        }
    return words
}
