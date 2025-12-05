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
        console.log(obj.temperature);
        
        return obj.temperature = obj.temperature.replace(" ","")
        
    })    
    return arr
}
function tempForecasts(arr){
   let result = arr.map(function(obj){
        const regex = /(-)?\d+\s?(?=°F)/g        
        obj.temperature = Math.round((obj.temperature.match(regex)-32)*(5/9))
        obj.state = obj.state[0].toUpperCase()+obj.state.slice(1)
        return `${obj.temperature}°Celsius in ${obj.city}, ${obj.state}`
})
    return result
}
console.log(trimTemp([
    {
      city: 'Los Angeles',
      state: 'california',
      region: 'West',
      temperature: '101°F',
    }]));





// console.log(trimTemp( [
//     {
//       city: 'Los Angeles',
//       state: 'california',
//       region: 'West',
//       temperature: '101°F',
//     },
//     {
//       city: 'San Francisco',
//       state: 'california',
//       region: 'West',
//       temperature: '84°F',
//     },
//     { city: 'Miami', state: 'Florida', region: 'South', temperature: '112°F' },
//     {
//       city: 'New York City',
//       state: 'new york',
//       region: 'North East',
//       temperature: '0°F',
//     },
//     { city: 'Juneau', state: 'Alaska', region: 'West', temperature: '21°F' },
//     {
//       city: 'Boston',
//       state: 'massachussetts',
//       region: 'North East',
//       temperature: '45°F',
//     },
//     {
//       city: 'Jackson',
//       state: 'mississippi',
//       region: 'South',
//       temperature: '70°F',
//     },
//     { city: 'Utqiagvik', state: 'Alaska', region: 'West', temperature: '-1°F' },
//     {
//       city: 'Albuquerque',
//       state: 'new mexico',
//       region: 'West',
//       temperature: '95°F',
//     },
//   ]));
