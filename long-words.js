function longWords(arr){
    let compar =arr.filter(function(str){
        return (typeof(str)=== 'string' && str.length>=5)
    })
    return compar.length === arr.length
}
function oneLongWord(arr){
    let compar = arr.filter(function(str){
        return (typeof(str)==='string' && str.length >=10)
    })
    return compar.length >= 1
}
function noLongWords(arr){
    let compar =arr.filter(function(str){
        return (typeof(str) === 'string' && str.length>=7 )
    })
    return compar.length === 0
}