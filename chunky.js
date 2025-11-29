function chunk(arr,num){
    let start =0 ; 
    let end = num
    let result = []
    while(start < arr.length){
        let temp = []
        for (let j=start ; j<end ; j++){
            temp.push(arr[j])
        }
        start+=num
        end =start+num
        if (end> arr.length){
            end = arr.length
        }
        result.push(temp)
    }
    return result
}