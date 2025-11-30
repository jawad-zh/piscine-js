function sameAmount(str,regex1,regex2){
    regex1 = new RegEx(regex1,"g")
    regex2 = new RegEx(regex2,"g")
    let amount1= str.match(regex1)
    let amount2=str.match(regex2)
    if (amount1.length === amount2.length){
        return true
    }
    return false
}

