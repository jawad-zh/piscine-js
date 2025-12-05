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
        const regex = /\d+(?=°F)/g
         return `${(Math.round(((ele.match(regex)-32)*(5/9))))}°C`;
    },)
}
function trimTemp(arr){
    arr.map(function(obj){
        return obj.temperature = obj.temperature.trim()
        
    })    
    return arr
}
function tempForecasts(arr){
   let result = arr.map(function(obj){
        const regex = /\d+\s?(?=°F)/g        
        obj.temperature = Math.round((obj.temperature.match(regex)-32)*(5/9))
        obj.state = obj.state[0].toUpperCase()+obj.state.slice(1)
        return `${obj.temperature}°Celsius in ${obj.city}, ${obj.state}`
})
    return result
}
    

console.log(upperCasingStates([
    'Alabama',
    'New Jersey',
    'Alaska',
    'New York',
    'California',
    'New Hampshire',
    'Ohio',
    'Texas',
    'West Virginia',
  ]), )