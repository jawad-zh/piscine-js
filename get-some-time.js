// 
    function firstDayWeek(week, year) {
    let yeare = new Date(+year,0,1)
    let datee = yeare.getDay()
    let firstMonday ;
    if (datee == 1){
        firstMonday = datee
    }else{
        let offset =  (8 -datee  ) % 7 
        firstMonday = new Date( +year,0,1+offset)
    }
    console.log("first",firstMonday);
    
    while (datee != 1){
        yeare.getDay -= 1
        datee-=1
    }
    
    
    
    
    
}

    
console.log(firstDayWeek(1, '1000'))
// console.log(firstDayWeek(52, '1000'))
// console.log(firstDayWeek(2, '0001'))
// console.log(firstDayWeek(43, '1983'))
// console.log(firstDayWeek(23, '0091'))
// console.log(firstDayWeek(2, '2017'))
