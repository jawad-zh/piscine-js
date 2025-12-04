function countLeapYears(date){
    let result =0
    for (let i =1 ; i <= date.getFullYear() ; i++){
        if (i % 4 === 0 && i % 100 != 0 || i % 400 === 0){
            result++
        }
    }
    return result
}

