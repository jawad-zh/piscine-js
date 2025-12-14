function retry(count,callback){
    return async function(...args){
        for (let i =0 ; i < count ; i++){

            try{
                let result = await callback(...args)
                return result
            }catch(err){
                throw err
            }
        }
    }
}
function timeout(delay,callback){
    return async function(...args) {
        const result = await callback(...args)
        const compar = new Promise((_, reject) => {
            setTimeout(()=> reject(new Error('timeout')),delay)
        })
        return Promise.race([result,compar])
    }
}