function sameAmount(str,regex1,regex2){
    let amount1= str.match(regex1)
    let amount2=str.match(regex2)
    if (amount1.length === amount2.length){
        return true
    }
    return false
}