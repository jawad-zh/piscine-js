function matchCron(cron,date){
    let compartCrone = cron.split("")    
    let storeCrone= {
        "Minute":compartCrone[0],
        "Hour":compartCrone[2],
        "DayOfMonth":compartCrone[4],
        "Month":compartCrone[6],
        "DayOfWeek":compartCrone[8]
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
console.log(matchCron('* * * * 1', new Date('2020-06-01 00:00:00')));
