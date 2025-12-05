function filterShortStateName(arr){
    return arr.filter(function(str){
        return str.length < 7
    })
}
function filterStartVowel(arr){
    return arr.filter(function(str){
        return (str.match(/^(a|e|i|o|u)/i))
    })
}
function filter5Vowels(arr){
    return arr.filter(function(str){
         return (5 <=str.match(/[aueio]/g).length)
    })
}
function filter1DistinctVowel(arr){
    console.log("----------",);
    
    return arr.filter(function(str){
        let vawol = str.toLowerCase().match(/[aeiuo]/g)
        let unique = new Set(vawol)
        let compar = [...unique]
        if (compar.length === 1){            
                return str
        }
    })
}
function multiFilter(arr){
 return  arr.filter(function(obj){
        if (obj.capital.length>=8 && 
            /^[^aeiuo]/.test(obj.name)&&
            /[aeiuo]/.test(obj.tag)&&
            obj.region !== 'South'
        ){
            return obj
        }
    })
}