
export function build(num){
    let count =1 
    let brickId = 1
    let middl = 2
    let id = setInterval(function(){
        let brik = document.createElement('div')
        brik.id = `brick-${brickId}`
        brickId++
        if (middl%3 === 0){
            brik.setAttribute('foundation','true')
        }
        middl++
        document.body.append(brik)
        if (count >=num){
            clearInterval(id)
        }
        count++
    },100)
}

export function repair(...ids){
    for (let i =0 ; i < ids.length ; i++){
        let brick = document.getElementById(ids[i])
        if (brick.getAttribute('foundation') === 'true'){
            brick.setAttribute('repaired','inprogress')
        }else{
            brick.setAttribute('repaired','true')
        }
    }

}
export function destroy(){
    document.body.lastElementChild.remove()
}