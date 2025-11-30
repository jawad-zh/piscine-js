function findexpration(number){
    let current =1
    let path ="1"
    if (number < 0 || number === undefined){
        return  undefined
    }
    return (finding(number,current,path))
}
function finding(number,current,path){
    let add4 = "+4"
    let mu12 = "*2"
    if (current > number){
        return undefined
    }else if (current === number){
        return path
    }else{
        if(finding(number,current+4,path)===undefined){
            path += " " + mu12
            return finding(number,current*2,path)
        }else{
            path += " " + add4
            return finding(number,current+4,path)
        }
    }
}
