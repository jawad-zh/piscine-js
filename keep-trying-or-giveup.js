function retry(count,callback){
    return  function(...args){
        for (let i =0 ; i < count ; i++){

            try{
                let result =  callback(...args)
                return result
            }catch(err){
                throw err
            }
        }
    }
}
function timeout(delay,callback){
    return  function(...args) {
        const result =  callback(...args)
        const compar = new Promise((_, reject) => {
            setTimeout(()=> reject(new Error('timeout')),delay)
        })
        return Promise.race([result,compar])
    }
}