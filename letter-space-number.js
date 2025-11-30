function letterSpaceNumber(str){
    const regex = /\w\s\d(?!\w)/g
    let arr = str.match(regex)
    return arr || []
}