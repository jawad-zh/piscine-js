function matchCron(cron,date){
    let compartCrone = cron.split("")
    let storeCrone= {
        "Minute":compartCrone[0],
        "Hour":compartCrone[1],
        "DayOfMonth":compartCrone[2],
        "Month":compartCrone[3],
        "DayOfWeek":compartCrone[4]
    }
   if (storeCrone.Minute != date.getMinutes() && storeCrone.Minute!= "*" ){
    return false
   }else if (storeCrone.Hour != date.getHours() && storeCrone.Hour!="*" ){
    return false
   }else if (storeCrone.DayOfMonth!= date.getDate() && storeCrone.DayOfMonth!= "*"){
    return false
   }else if (storeCrone.Month != date.getMonth() && storeCrone.Month != "*"){
    return false
   }else if (storeCrone.DayOfWeek != date.getDay() && storeCrone.DayOfMonth!="*" ){

       return false
   }
   return true
}