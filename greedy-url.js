`qqq http:// qqqq q qqqqq https://something.com/hello qqqqqqq qhttp://example.com/hello?you=something&something=you`

function getURL(str){
    const regex = /((https)|(http)):\/\/[a-zA-Z]+.[a-zA-z]+\/?[^\s]+/g
    return str.match(regex)
}
function greedyQuery(str){
    const regex = /&/g
    let arr = getURL(str)
    let result = []
    for (let i=0 ; i < arr.length ;i++){
        let temp = arr[i].match(regex)
        if (temp === null){
            continue
        }else{
            if (temp.length>=2){
                result.push(arr[i])
            }
        }
    }
    return result
}
function notSoGreedy(str){
        const regex = /&/g
    let arr = getURL(str)
    let result = []
    for (let i=0 ; i < arr.length ;i++){
        let temp = arr[i].match(regex)
        console.log(temp);
        
        console.log(temp)
       
            if (temp!= null && temp.length===1){
                result.push(arr[i])
            }
        
    }
    return result
}