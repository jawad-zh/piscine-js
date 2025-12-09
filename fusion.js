function fusion(obj1, obj2) {
    let keysobj2 = Object.keys(obj2)
    for (let i =0 ; i < keysobj2.length ; i++ ){
        if (obj1[keysobj2] === undefined){
            boj1[keysobj2] = obj2[keysobj2]
        }else{
            if(Array.isArray(obj1[keysobj2]) && Array.isArray(obj2[keysobj2])){
                obj1[keysobj2] = [...obj1[keysobj2],...obj2[keysobj2]]
            }else if (typeof(obj1[keysobj2] == 'number') && typeof(obj2[keysobj2] == 'number')){
                obj1[keysobj2] = obj1[keysobj2] + obj2[keysobj2]
            }else if(typeof(obj1[keysobj2] == 'string') && typeof(obj2[keysobj2] == 'string')){
                obj1[keysobj2] = `${obj1[keysobj2]} ${obj2[keysobj2]}`
            }else if ( typeof(obj1[keysobj2]) == 'object' && typeof(obj2[keysobj2]) == 'object' ){
                fusion(obj1[keysobj2],obj2[keysobj2])
            }else{
                obj1[keysobj2] = obj2[keysobj2]
            }
        }
    }
    return obj1
}
console.log(fusion({ nbr: 12 }, { nbr: 23 }));
