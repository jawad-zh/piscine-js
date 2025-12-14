function interpolation({step,start,end,callback,duration}){
    let distanceStep = (end-start)/step
    let timeForStep = duration/step
    for (let i =1 ; i< step ; i++){
        setTimeout(()=>{
            let x = start + distanceStep * i
            let y = timeForStep*i
            callback([x,y])
        },timeForStep*i)
    }
}