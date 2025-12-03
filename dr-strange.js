const days = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
    'secondMonday',
    'secondTuesday',
    'secondWednesday',
    'secondThursday',
    'secondFriday',
    'secondSaturday',
    'secondSunday',
]

function addWeek(date){
    let start = new Date("0001-01-01")
   let diff = (date - start) /1000/60/60/24
    return days[diff%14]
}

function timeTravel(obj){
    const date = obj.date
    date.setHours(obj.hour)
    date.setMinutes(obj.minute)
    date.setSeconds(obj.second)
    return date
}