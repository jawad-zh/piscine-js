function words(s){
    return s.split(" ")
}
function sentence(arr){
   return  arr.join(" ")
}
function yell(s){
    return s.toUpperCase()
}
function whisper(s){
    return `*${s.toLowerCase()}*`
}
function capitalize(s){
    return yell(s[0])+s.slice(1).toLowerCase()
}
