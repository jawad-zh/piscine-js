function fusion(obj1, obj2) {
    let keysobj2 = Object.keys(obj2)
    for (let i =0 ; i < keysobj2.length ; i++ ){
        if (obj1[keysobj2[i]] === undefined){
            obj1[keysobj2[i]] = obj2[keysobj2[i]]
        }else{
            if(Array.isArray(obj1[keysobj2[i]]) && Array.isArray(obj2[keysobj2[i]])){                                
                obj1[keysobj2[i]] = [...obj1[keysobj2[i]],...obj2[keysobj2[i]]]
            }else if (typeof obj1[keysobj2[i]] == 'number' && typeof obj2[keysobj2[i]] == 'number'){                
                obj1[keysobj2[i]] = obj1[keysobj2[i]] + obj2[keysobj2[i]]
            }else if(typeof obj1[keysobj2[i]] === 'string' && typeof obj2[keysobj2[i]] === 'string'){                
                obj1[keysobj2[i]] = obj1[keysobj2[i]]+" " +obj2[keysobj2[i]]
            }else if ( typeof obj1[keysobj2[i]] == 'object' && typeof obj2[keysobj2[i]] == 'object' ){
                
                fusion(obj1[keysobj2[i]],obj2[keysobj2[i]])
            }else{
                obj1[keysobj2[i]] = obj2[keysobj2[i]]
            }
        }
    }
    return obj1
}
console.log(fusion({ a: { b: [1, 2], c: { d: 2 } } },
      { a: { b: [0, 2, 1], c: { d: 23 } } }));
    //   `{ a: { b: [1, 2, 0, 2, 1], c: { d: 25 } } }`
