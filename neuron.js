function neuron(arr){
    let result = {}
    let order = false 
    for (let i =0 ; i < arr.length ; i++){
        let splited = arr[i].split('- Response:');
        let response = splited[1].trim()
        let quetion = splited[0].split(':')[1]  
        let key = quetion.trim().split(' ').join('_').trim()
        if (splited[0].split(':')[0] == 'Orders'){
            order = true
        }
        if (!order){
            if (!result['quetions']) {
            result['quetions']={}
        }
        if (!result['quetions'][key]){
        result['quetions'][key] ={
            'question':quetion.trim(),
                'responses': []
        }
        }
        result.quetions[key].responses.push(response)
        }else{
              if (!result['orders']) {                
            result['orders']={}
        }
        key=key.replaceAll(/\!|\?/g,"")
        
        if (!result['orders'][key]){            
        result['orders'][key] ={
            'order':quetion.trim(),
                'responses': []
        }
        }
        result.orders[key].responses.push(response)
        }
        
    }
    return result
}
console.log(neuron(['Orders: shutdown please! - Response: no!']).orders.shutdown_please,
    { order: 'shutdown please!', responses: ['no!'] }
  )
