function firstDayWeek(week, year) {
    let format = '01-01-' + year 
    let date = new Date(format)
    let day = date.getDay()    
    if (day === 0){
        day += 7
    }
    date.setDate(((date.getDate()-(day -1) + ((week-1)*7)) ))
    if (date.getFullYear() < year){        
        return '01-01-' + year
    }
    return  `${String(date.getDay()).padStart(2,'0')}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getFullYear()).padStart(4,'0')}`
}
