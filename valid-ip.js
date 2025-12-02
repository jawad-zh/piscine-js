function findIP(str){
    const regex = /\d+.\d+.\d+.\d+(:\d+)?/g
    let arr = str.match(regex)
    if (arr === null){
        return []
    }
    let result = []
        for (let i =0 ; i < arr.length ; i++){
            let ip = (arr[i].match(/\d+.\d+.\d+.\d+/)).join("").split(".")
            let port =(arr[i].match(/(?<=:)\d+/))            
            port = null ? 0 : port
            for (let j = 0 ; j < ip.length ;j++){
                if (+ip[j]>=0 && +ip[j]<=255){
                    if (j === +ip.length-1 && (+port <=65535 &&  +port>=0)){
                        result.push(arr[i])
                    }
                }else{
                    break
                }
            }
        }
    
    return result
}
