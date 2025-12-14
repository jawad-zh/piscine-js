function interpolation({step,start,end,callback,duration}){
    let distanceStep = (end-start)/step
    let timeForStep = duration/step
    let count = 0
    for (let i =1 ; i< step ; i++){
        setTimeout(()=>{
            let x = start + distanceStep * count
            count++
            let y = timeForStep*i
            callback([x,y])
        },timeForStep*i)
    }
}