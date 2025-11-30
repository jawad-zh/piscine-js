function vowelDots(str){
    const regex = /[aeiou]/g
    let vowels =""
    for (let i =0 ; i < str.length; i++){
        if(str[i].match(regex)){
            vowels +=`${str[i]}.`
        }else{
            vowels += str[i]
        }
    }
    return vowels
}