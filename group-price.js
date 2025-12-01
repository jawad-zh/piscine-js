function groupPrice(str){
    let all = str.match(/(?<=(USD))\d+.\d+/g)
    let normal = str.match(/(?<=(USD))\d+(?=.)/g)
    let decimal = str.match(/(?<=\.)\d+/g)
    let temp = []
    let result =[]
    for (let i=0 ; i < all.length ; i++){
        temp.push(`USD${all[i]}`)
        temp.push(normal[i])
        temp.push(decimal[i])
        result.push(temp)
    }    
    return result
}
