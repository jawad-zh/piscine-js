const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
function sunnySunday(date){
    let start = new Date("0001-01-01")
   let diff = (date - start) /1000/60/60/24
    return days[diff%6]
}
