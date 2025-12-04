const days = [
    "Mondya",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
function sunnySunday(date){
    let day = date.getDay() -1
    return days[day]
    
}
