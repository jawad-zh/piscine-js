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
        let vawol = str.match(/[aeiuo]/g)
        let unique = new Set(vawol)
        let compar = [...unique]
        // let compar = []  
        // for (let i=0 ; i < str.length ; i++){
        //     let push = true
        //     if (str[i] == 'a'|| str[i] == 'u' || str[i] == 'o' || str[i] == 'e' || str[i] == 'i'){
        //         for(let j =0 ; j < compar.length ; j++){
        //         if (str[i] == compar[j]){
        //             push = false
        //         }
        //     }
        //     if (push){
        //         compar.push(str[i])
        //     }
        //     }
            
        // }      
        if (compar.length === 1){            
            if(str[str.length-1] === 'Utah'){
                return str.slice(0,str.length-1)
            }else{
                return str
            }
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
console.log(filter1DistinctVowel([
    'Alabama',
    'Alaska',
    'Arkansas',
    'Kansas',
    'Maryland',
    'Mississippi',
    'New Jersey',
    'Tennessee',
  ]));
