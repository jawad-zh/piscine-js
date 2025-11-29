const rna = {
    "G":"C",
    "C":"G",
    "T":"A",
    "A":"U",
}
const dna = {
    "C":"G",
    "G":"C",
    "A":"T",
    "U":"A",
}
function RNA(str){
    let result = "";
    for (let i =0 ; i < str.length ; i++){
        result+= rna[str[i]]
    }
    return result
}

function DNA(str){
    let result = "";
    for (let i =0 ; i < str.length ; i++){
        result+= dna[str[i]]
    }
    return result
}