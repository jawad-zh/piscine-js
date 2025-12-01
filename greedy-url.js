function getURL(str){
    return str.match(/https?:\/\/\S+/g) 
    
}
function greedyQuery(str){
    const regex = /https?:\/\/\S+\?(&?[^=\s&]+=[^=\s&]+){3}\S+/g
    return str.match(regex)
    
}
function notSoGreedy(str){
  const regex = /https?:\/\/\S+\?(&?[^=\s&]+=[^=\s&]+){2,3}(?=\s)/g
  return str.match(regex)
}