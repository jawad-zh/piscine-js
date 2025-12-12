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
            if (!result['questions']) {
            result['questions']={}
        }
        key=key.replaceAll(/\!|\?/g,"")
        if (!result['questions'][key]){
        result['questions'][key] ={
            'question':quetion.trim(),
                'responses': []
        }
        }
        result.questions[key].responses.push(response)
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
console.log( neuron([
      'Questions: what is life? - Response: The condition that distinguishes animals and plants from inorganic matter',
      'Questions: what is life? - Response: Life is a characteristic that distinguishes physical entities that have biological processes',
    ]).questions.what_is_life);
