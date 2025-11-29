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
        if (string===""){
            let result = []
            return result
        }
    return words
}
console.log(split('',"jawa"))