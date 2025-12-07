export function compose(event){
    const lower = /\b[a-z]+\b/
    if (lower.test(event.key)){
        let div = document.createElement('div');
        div.classList.add('note')
        let key = event.key.charCodeAt(0)
        let r = (key *10) % 255
        let g = (key *60) % 255
        let b = (key *97) % 255
        div.style.backgroundColor = `rgb(${r},${g},${b})`
        div.textContent = event.key
        document.body.append(div)
    }else if (event.key === "Backspace"){
            let all = document.querySelectorAll('.note')
            if (all.length> 0){
                all[all.length-1].remove()
            }
    }else if (event.key === 'Escape'){
       let all = document.querySelectorAll('.note')
       for (let i =0 ; i < all.length ; i++){
        all[i].remove()
       }
    }
}
addEventListener('keydown',compose)