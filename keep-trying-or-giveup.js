function retry(count, callback) {
    return async function (...args) {
        let lastError
        for (let i = 0; i <= count; i++) {

            try {
                let result = await callback(...args)
                return result
            } catch (err) {
                    lastError = err
            }
        }
        throw lastError
    }
}
function timeout(delay, callback) {
    return async function (...args) {
        const result =  callback(...args)
        const compar = new Promise((_, reject) => {
            setTimeout(() => reject(new Error('timeout')), delay)
        })
        return Promise.race([result, compar])
    }
}