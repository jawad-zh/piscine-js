function dayOfTheYear(date){
    let dateYear = date.getFullYear();
    let format = dateYear + "-01-01"
    let firstDay = new Date(format)
    let keep = true
    let days = 0
    while(keep){
        if (firstDay.getMonth() >= date.getMonth()){
            if (firstDay.getDate() >= date.getDate() ){
                keep = false
            }
        }
        days+=1
        firstDay.setDate(firstDay.getDate()+1)
    }
    return days
}

