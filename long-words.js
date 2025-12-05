function longWords(arr) {
    return arr.every(function (str) {
        return (typeof (str) === 'string' && str.length >= 5)
    })
}
function oneLongWord(arr) {
    return arr.some(function (str) {
        return (typeof (str) === 'string' && str.length >= 10)
    })
}
function noLongWords(arr) {
    let flag = arr.some(function (str) {
        return typeof (str) === 'string' && str.length >= 7
    })
    return !flag
}