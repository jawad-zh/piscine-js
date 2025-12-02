function findIP(str){
    const regex = /\d+.\d+.\d+.\d+(:\d+)?/g
    let arr = str.match(regex)
    if (arr === null){
        return []
    }
    let result = []
        for (let i =0 ; i < arr.length ; i++){
            let ip = (arr[i].match(/\d+.\d+.\d+.\d+/)).join("").split(".")
            let port =(arr[i].match(/(?<=:)\d+/))            
            port = null ? 0 : port
            for (let j = 0 ; j < ip.length ;j++){
                if (!ip[j].match(/(?<=0)[0-9]/)){                    
                    if (+ip[j]>=0 && +ip[j]<=255){
                    if (j === +ip.length-1 && (+port <=65535 &&  +port>=0)){
                        result.push(arr[i])
                    }
                }else{
                    break
                }
                }else{
                    break
                }
                
            }
        }
    
    return result
}
console.log(findIP('172.01.123.254:1234'));

'233.123.12.234',
    '192.168.1.123:8080',
    '192.169.1.23',
+   '172.01.123.254:1234',
    '10.1.23.7',
+   '255.255.255.000',
+   '09.09.09.09',
-   '0.0.0.0:22',
    '255.253.123.2:8000',
    '192.168.1.123',
    '0.0.0.0'