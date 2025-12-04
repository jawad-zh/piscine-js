const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
]
function sunnySunday(date){
    let day = date.getDay() 
    if (day === 6){
        day = 0
    }
    
    return days[day]
    
}

