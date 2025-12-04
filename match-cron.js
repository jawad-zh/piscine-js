function matchCron(cron,date){
    let compartCrone = cron.split("")    
    let storeCrone= {
        "Minute":compartCrone[0],
        "Hour":compartCrone[2],
        "DayOfMonth":compartCrone[4],
        "Month":compartCrone[6],
        "DayOfWeek":compartCrone[8]
    }    
    console.log(storeCrone.DayOfWeek,"and time",date.getDay());
    
   if (storeCrone.Minute != date.getMinutes() && storeCrone.Minute!= "*" ){
    return false
   }else if (storeCrone.Hour != date.getHours() && storeCrone.Hour!="*" ){
    return false
   }else if (Number(storeCrone.DayOfMonth) != date.getDate() && storeCrone.DayOfMonth!= "*"){
    return false
   }else if (storeCrone.Month != date.getMonth()+1 && storeCrone.Month != "*"){
    return false
   }else if (storeCrone.DayOfWeek != date.getDay() && storeCrone.DayOfWeek!="*" ){
       return false
   }
   return true
}
