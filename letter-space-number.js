function letterSpaceNumber(str){
    const regex = /\w\s\d{1}(?!\w)/g
    let arr = str.match(regex)
    return arr
}