function pronoun(string){
     const pronouns = ['i', 'you', 'he', 'she', 'it', 'they', 'we']
    string = string.toLowerCase()
    const words = string.match(/[\w]+/g) 
    let result ={}
    for (let i =0 ; i < words.length ;i++){
        let current = words[i]
        if (pronouns.includes(current)){
            if (!result[current]){
                
                result[current]={word:[],count:0}
            }
            result[current].count++
        let nextWord = words[i+1]
        if (nextWord!== undefined && !pronouns.includes(nextWord)){
            result[current].word.push(nextWord)
        }
        }
        
    }
    return result
}