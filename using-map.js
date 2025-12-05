const citiesOnly = (arr)=> arr.map(obj => obj.city)

function upperCasingStates (arr){
   let result= arr.map(function(str){
        let arr =str.split(" ")
        for (let i =0 ; i < arr.length ; i++){
            arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1)
        }
        return arr.join(" ")
    })
    return result
}

function fahrenheitToCelsius(arr) {
    return arr.map(function(ele){
        if (/(-)?\d+(?=°F)/g.test(ele)){

            ele = `${(Math.floor(((ele.match(/(-)?\d+(?=°F)/g)-32)*(5/9))))}°C`
        }
         return ele ;
    },)
}
function trimTemp(arr){
    arr.map(function(obj){        
        return obj.temperature = obj.temperature.trim().split(" ").join("")
        
    })        
    return arr
}
function tempForecasts(arr){
   let result = arr.map(function(obj){
        const regex = /(-)?\d+\s?(?=°F)/g  
        obj.temperature = Math.round((obj.temperature.match(regex)-32)*(5/9))
        let objTemp = obj.state.split(" ")
        for (let i =0 ; i < objTemp.length ; i++){
           objTemp[i] = objTemp[i][0].toUpperCase() + objTemp[i].slice(1)
        }
        obj.state = objTemp.join(" ")
        return `${obj.temperature}°Celsius in ${obj.city}, ${obj.state}`
})
    return result
}