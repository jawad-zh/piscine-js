const citiesOnly = (arr)=> arr.map(obj => obj.city)

const upperCasingStates = (arr) => arr.map(ele => ele[0].toUpperCase()+ele.slice(1))

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
    

console.log(tempForecasts([
  {
    city: 'Pasadena',
    temperature: ' 101 °F',
    state: 'california',
    region: 'West',
  }]))