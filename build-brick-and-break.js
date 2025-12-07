
export function build(num){
    let count =1 
    let brickId = 1
    let id = setInterval(function(){
        let brik = document.createElement('div')
        brik.id = `brick-${brickId}`
        brickId++
        if (count%3 === 2){
            brik.setAttribute('data-foundation','true')
        }
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
        if (brick.hasAttribute('data-foundation') ){
            brick.setAttribute('data-repaired','in progress')
        }else{
            brick.setAttribute('data-repaired','true')
        }
    }

}
export function destroy(){
    document.body.lastElementChild.remove()
}